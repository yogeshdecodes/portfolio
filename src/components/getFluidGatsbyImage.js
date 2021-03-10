import _ from 'lodash'
import qs from 'qs'
// @see https://www.contentful.com/developers/docs/references/images-api/#/reference/resizing-&-cropping/specify-width-&-height
const CONTENTFUL_IMAGE_MAX_SIZE = 4000

const isImage = image =>
  _.includes(
    [`image/jpeg`, `image/jpg`, `image/png`, `image/webp`, `image/gif`],
    _.get(image, `file.contentType`)
  )

const getBasicImageProps = (image, args) => {
  let aspectRatio
  if (args.width && args.height) {
    aspectRatio = args.width / args.height
  } else {
    aspectRatio =
      image.file.details.image.width / image.file.details.image.height
  }

  return {
    baseUrl: image.file.url,
    contentType: image.file.contentType,
    aspectRatio,
    width: image.file.details.image.width,
    height: image.file.details.image.height,
  }
}

const createUrl = (imgUrl, options = {}) => {
  // Convert to Contentful names and filter out undefined/null values.
  const args = _.pickBy(
    {
      w: options.width,
      h: options.height,
      fl: options.jpegProgressive ? `progressive` : null,
      q: options.quality,
      fm: options.toFormat || ``,
      fit: options.resizingBehavior || ``,
      f: options.cropFocus || ``,
      bg: options.background || ``,
    },
    _.identity
  )
  return `${imgUrl}?${qs.stringify(args)}`
}

export const getFluidGatsbyImage = (image, options) => {
  if (!isImage(image)) return null

  console.log(image)

  const { baseUrl, width, aspectRatio } = getBasicImageProps(image, options)

  let desiredAspectRatio = aspectRatio

  // If no dimension is given, set a default maxWidth
  if (options.maxWidth === undefined && options.maxHeight === undefined) {
    options.maxWidth = 800
  }

  // If only a maxHeight is given, calculate the maxWidth based on the height and the aspect ratio
  if (options.maxHeight !== undefined && options.maxWidth === undefined) {
    options.maxWidth = Math.round(options.maxHeight * desiredAspectRatio)
  }

  // If we're cropping, calculate the specified aspect ratio.
  if (options.maxHeight !== undefined && options.maxWidth !== undefined) {
    desiredAspectRatio = options.maxWidth / options.maxHeight
  }

  // If the users didn't set a default sizes, we'll make one.
  if (!options.sizes) {
    options.sizes = `(max-width: ${options.maxWidth}px) 100vw, ${options.maxWidth}px`
  }

  // Create sizes (in width) for the image. If the max width of the container
  // for the rendered markdown file is 800px, the sizes would then be: 200,
  // 400, 800, 1200, 1600, 2400.
  //
  // This is enough sizes to provide close to the optimal image size for every
  // device size / screen resolution
  let fluidSizes = []
  fluidSizes.push(options.maxWidth / 4)
  fluidSizes.push(options.maxWidth / 2)
  fluidSizes.push(options.maxWidth)
  fluidSizes.push(options.maxWidth * 1.5)
  fluidSizes.push(options.maxWidth * 2)
  fluidSizes.push(options.maxWidth * 3)
  fluidSizes = fluidSizes.map(Math.round)

  // Filter out sizes larger than the image's maxWidth and the contentful image's max size.
  const filteredSizes = fluidSizes.filter(size => {
    const calculatedHeight = Math.round(size / desiredAspectRatio)
    return (
      size <= CONTENTFUL_IMAGE_MAX_SIZE &&
      calculatedHeight <= CONTENTFUL_IMAGE_MAX_SIZE &&
      size <= width
    )
  })

  // Add the original image (if it isn't already in there) to ensure the largest image possible
  // is available for small images.
  if (
    !filteredSizes.includes(parseInt(width)) &&
    parseInt(width) < CONTENTFUL_IMAGE_MAX_SIZE &&
    Math.round(width / desiredAspectRatio) < CONTENTFUL_IMAGE_MAX_SIZE
  ) {
    filteredSizes.push(width)
  }

  // Sort sizes for prettiness.
  const sortedSizes = _.sortBy(filteredSizes)

  // Create the srcSet.
  const srcSet = sortedSizes
    .map(width => {
      const h = Math.round(width / desiredAspectRatio)
      return `${createUrl(image.file.url, {
        ...options,
        width,
        height: h,
      })} ${Math.round(width)}w`
    })
    .join(`,\n`)

  return {
    aspectRatio: desiredAspectRatio,
    baseUrl,
    src: createUrl(baseUrl, {
      ...options,
      width: options.maxWidth,
      height: options.maxHeight,
    }),
    srcSet,
    sizes: options.sizes,
  }
}
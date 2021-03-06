import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";
import PortfolioItem from "./portfolio-item";

const Carousel = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
  margin-bottom: 2rem;
  align-items: center;
`;

const SlideNew = styled.div`
  display: block;
  padding-bottom: 6rem; 
  

  ${(props) => props.theme.breakpoints.md} {
    padding-bottom: 4rem; 
     margin: 0 3rem;
  }

 
`;

// const Slide = styled.div`
//   display: ${(props) => (props.active ? "block" : "none")};
//   animation-name: fade;
//   animation-duration: 1s;
//   margin: 0rem;

//   ${(props) => props.theme.breakpoints.md} {
//     margin: 0 3rem;
//   }

//   @keyframes fade {
//     from {
//       opacity: 0.2;
//     }
//     to {
//       opacity: 1;
//     }
//   }
// `;

// const Arrow = styled(FontAwesomeIcon)`
//   color: ${(props) => props.theme.typography.colors.text};
//   cursor: pointer;
//   transition: color 0.3s ease;
//   display: none;

//   :hover {
//     color: ${(props) => props.theme.brand.primary};
//   }

//   ${(props) => props.theme.breakpoints.md} {
//     display: block;
//   }
// `;

// const Dots = styled.div`
//   text-align: center;
// `;

// const Dot = styled.span`
//   cursor: pointer;
//   height: 0.5rem;
//   width: 2rem;
//   margin: 0 0.125rem;
//   border-radius: 0.25rem;
//   display: inline-block;
//   transition: background-color 0.3s ease;
//   background-color: ${(props) =>
//     props.active ? props.theme.brand.primary : props.theme.carousel.dotColor};

//   :hover {
//     background-color: ${(props) => props.theme.brand.primary};
//   }
// `;

const PortfolioCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      items: allContentfulPortfolioItem(sort: { fields: [order], order: ASC }, filter: { featured: { eq: true } }) {
        edges {
          node {
            title
            slug
            url
            github
            text {
              text
            }
            technologies
            order
            image {
              title
              gatsbyImageData(
              layout: FULL_WIDTH
              quality: 95
              formats: [AUTO, WEBP]
              placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `);

  // const [activeSlideId, setActiveSlideId] = useState(1);
  const { edges: portfolioItems } = data.items;

  // const handleArrowClick = (increment) => {
  //   const newIndex = activeSlideId + increment;
  //   if (newIndex === 0) {
  //     setActiveSlideId(portfolioItems.length);
  //   } else if (newIndex > portfolioItems.length) {
  //     setActiveSlideId(1);
  //   } else {
  //     setActiveSlideId(newIndex);
  //   }
  // };

  return (
    <>
      <Carousel>
        {/* <Arrow
          icon="chevron-left"
          size="2x"
          role="button"
          alt="previous slide"
          aria-label="previous slide"
          onClick={() => handleArrowClick(-1)}
        /> */}

        {portfolioItems.map(({ node }) => {
          return (
            // <Slide key={node.title} active={activeSlideId === node.order}>
            <SlideNew>
              <PortfolioItem
                title={node.title}
                slug={node.slug}
                text={node.text.text}
                image={node.image}
                url={node.url}
                github={node.github}
                technologies={node.technologies}
              />
              </SlideNew>
            // </Slide>
          );
        })}
        {/* <Arrow
          icon="chevron-right"
          size="2x"
          alt="next slide"
          aria-label="next slide"
          onClick={() => handleArrowClick(1)}
        /> */}
      </Carousel>
      {/* <Dots>
        {portfolioItems.map(({ node }) => {
          return (
            <Dot
              key={node.title}
              onClick={() => setActiveSlideId(node.order)}
              role="button"
              aria-label="select a slide"
              active={activeSlideId === node.order}
            />
          );
        })}
      </Dots> */}
    </>
  );
};

export default PortfolioCarousel;

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components";

const Image = styled(GatsbyImage)`
  border-radius: 50%;
`;

const AvatarSmall = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "red-chair.jpg" }) {
        childImageSharp {
           gatsbyImageData(
            layout: FIXED
            width: 50
            height: 50
            quality: 100
            formats: [AUTO, WEBP]
            placeholder: BLURRED
            )
        }
      }
    }
  `);

  return (
    <Image
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      alt="red chair"
    />
  );
};

export default AvatarSmall;

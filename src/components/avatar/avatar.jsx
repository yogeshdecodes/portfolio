import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components";

const Image = styled(GatsbyImage)`
  border-radius: 50%;
  border: 8px solid white;
  background-color: white;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
`;

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "red-chair.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 200
            height: 200
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

export default Avatar;

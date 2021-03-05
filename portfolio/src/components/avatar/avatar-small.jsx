import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Image = styled(Img)`
  border-radius: 50%;
`;

const AvatarSmall = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "red-chair.jpg" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <Image
      fixed={data.placeholderImage.childImageSharp.fixed}
      alt="red chair"
    />
  );
};

export default AvatarSmall;

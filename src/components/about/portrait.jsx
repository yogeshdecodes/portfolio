import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Image = styled(Img)`
  border: 8px solid white;
  background-color: white;
  margin-top: 8px;
  text-align: center;
  box-shadow: ${(props) => props.theme.card.shadow};
  border-radius: 0.25rem;
`;

const Portrait = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "portrait.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Image fluid={data.placeholderImage.childImageSharp.fluid} alt="portrait" />
  );
};

export default Portrait;

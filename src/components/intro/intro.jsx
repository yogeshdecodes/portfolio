import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";
import Avatar from "../avatar/avatar";
import ScrollIcon from "../scroll-icon/scroll-icon";

const Header = styled(BackgroundImage)`
  background-repeat: no-repeat;
  background-position: 100% 50%;
  background-size: cover;
  height: 100vh;
  position: relative;
  text-align: center;

  :after,
  :before {
    ${(props) => props.theme.breakpoints.xl} {
      background-attachment: fixed;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 90%;
`;

const Heading = styled.h1`
  font-size: 2rem;
  text-transform: none;
  letter-spacing: 0.125rem;
  font-weight: 700;
  margin-bottom: 1rem;

  ${(props) => props.theme.breakpoints.md} {
    font-size: 3.5rem;
  }
`;

const Subheading = styled.h2`
  font-size: 1.125rem;
   text-transform: none;
  font-weight: 700;
  letter-spacing: 0.125rem;
  margin-bottom: 0;

  ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;
  }
`;

const StyledScrollIcon = styled(ScrollIcon)`
  margin-top: 5rem;
`;

const Paragraph = styled.p`
font-size: 1rem;
  :last-of-type {
    margin-top: 1.5rem;

    ${(props) => props.theme.breakpoints.md} {
      margin-top: 3rem;
      font-size: 1.3rem;
    }
  }
`;

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "waterfall.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      desktopImage: file(relativePath: { eq: "lake.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(orientation: landscape)`,
    },
  ];

  return (
    <Header Tag="header" fluid={sources} backgroundColor="#040e18">
      <Overlay />
      <Content>
        {/* <Avatar /> */}
        {/* <Heading>Hello! 👋 </Heading> */}
        <Heading>Hey, I'm Yogesh  </Heading>
        <Subheading>Full-Stack Developer 🚀</Subheading>
        <Subheading>&</Subheading>
        <Subheading>UI/UX Designer ⚡</Subheading>
        <Paragraph>I help startups to build best-in-class software products.</Paragraph>
         
        <StyledScrollIcon />
      </Content>
    </Header>
  );
};

export default Intro;

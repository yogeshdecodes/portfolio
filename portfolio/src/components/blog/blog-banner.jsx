import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { shape } from "prop-types";

const Header = styled(BackgroundImage)`
  background-color: ${(props) => props.theme.brand.primary};
  color: white;
  font-size: 3rem;
  padding: 7rem 0 6rem 0;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  background-position: center center;
  background-repeat: none;
  background-size: cover;
  position: relative;

  ${(props) => props.theme.breakpoints.md} {
    padding: 11rem 0 10rem 0;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Heading = styled.div`
  position: relative;

  a {
    color: white;

    :visited {
      color: white;
    }

    :hover {
      color: ${(props) => props.theme.brand.primary};
    }
  }
`;

const BlogBanner = ({ image }) => {
  return (
    <Header Tag="header" fluid={image.fluid}>
      <Overlay />
      <Heading>
        <Link to="/blog">Blog</Link>
      </Heading>
    </Header>
  );
};

BlogBanner.propTypes = {
  image: shape({}).isRequired,
};

export default BlogBanner;

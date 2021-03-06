import React from "react";
import styled from "styled-components";
import { string, arrayOf, shape } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

const StyledPorfolioItem = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.breakpoints.lg} {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-right: 10%;
  margin-bottom: 2rem;

  img {
    max-width: 100%;
    height: auto;
  }

  ${(props) => props.theme.breakpoints.lg} {
    width: 40%;
    margin-bottom: 0;
  }
`;

const TextContainer = styled.div`
  width: 100%;

  h3 {
    margin-bottom: 1rem;
  }

  > a {
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 0.875rem;
    display: block;

    ${(props) => props.theme.breakpoints.md} {
      margin-bottom: 2rem;
    }
  }

  > p {
    margin-bottom: 1rem;

    ${(props) => props.theme.breakpoints.md} {
      margin-bottom: 1rem;
    }
  }

  ${(props) => props.theme.breakpoints.lg} {
    width: 50%;
  }
`;

const Tag = styled.div`
  background-color: ${(props) => props.theme.brand.primary};
  color: white;
  padding: 0.5rem 0.5rem;
  font-weight: bold;
  border-radius: 0.25rem;
  display: inline-block;
  margin-right: 1rem;
  
`;
const TechList = styled.ul`
  list-style-type: none;
  margin-bottom: 1rem;
  padding: 0;
   display: block; 

  ${(props) => props.theme.breakpoints.md} {
    display: block;
  }

  li {
    display: inline-block;

    :not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

const ProjectLink = styled.ul`
  list-style-type: none;
  margin-bottom: 1rem;
  padding: 0;

  li {
    display: inline-block;

    :not(:last-child) {
      margin-right: 1.5rem;
    }

    a {
      color: ${(props) => props.theme.typography.colors.text};

      :hover {
        color: ${(props) => props.theme.brand.primary};
      }
    }
  }
`;

const ReadMoreLink = styled(Link)`
  font-weight: bold;
  text-transform: uppercase;
`;

const PortfolioItem = ({ title, url, image, text, technologies, slug, github }) => {
  const size = "lg";
  const projecturl = `/project/${slug}/`;
  return (
    <StyledPorfolioItem>
      <ImageContainer>
        <GatsbyImage fluid={image.fluid} alt={title} />
      </ImageContainer>
      <TextContainer>
        <h3>{title}</h3>
        <ProjectLink>
          <li>
            <a href={github}
            target="_blank"
              rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={["fab", "github"]} size={size} />
            </a>
          </li>
          <li>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="external-link-alt" size={size} />
            </a>
          </li>
        </ProjectLink>
        {/* <a href={url} target="_blank" rel="noopener noreferrer">
          {urlText}
        </a> */}
        <p>{text}</p>
        <TechList>
          {technologies.map((tech, i) => (
            // index is stable
            // eslint-disable-next-line react/no-array-index-key
            <Tag key={i}>
              {tech}
            </Tag>
          ))}
        </TechList>
        <ReadMoreLink to={projecturl}>Read more </ReadMoreLink>
        
      </TextContainer>
    </StyledPorfolioItem>
  );
};

PortfolioItem.propTypes = {
  image: shape({}).isRequired,
  title: string.isRequired,
  url: string.isRequired,
  text: string.isRequired,
  urlText: string.isRequired,
  technologies: arrayOf(string).isRequired,
};

export default PortfolioItem;

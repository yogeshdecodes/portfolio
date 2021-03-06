import React from "react";
import styled, { css } from "styled-components";
import { string, shape, bool, arrayOf } from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import dayjs from "dayjs";
import Tag from "./project-tech";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ProjectLink = styled.ul`
  list-style-type: none;
  margin: 0;
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

const StyledProjectCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.card.backgroundColor};
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  box-shadow: ${(props) => props.theme.card.shadow};
`;

const Content = styled.div`
  padding: 1.25rem;
  flex: 1 1 auto;
`;

const Header = styled.div`
  overflow: hidden;
`;

const HeaderImage = styled(GatsbyImage)`
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;

  ${(props) =>
    props.magnifyEffect &&
    css`
      transition: all 0.3s ease;

      :hover {
        transform: scale(1.25);
      }
    `}
`;

const Date = styled.p`
  color: ${(props) => props.theme.typography.colors.textEmphasis};
`;

const ReadMoreLink = styled(Link)`
  font-weight: bold;
  text-transform: uppercase;
`;

const ProjectCard = ({
  title,
  slug,
  text,
  date,
  headerImage,
  className,
  magnifyEffect,
  tags,
  url,
  github
}) => {
  const projecturl = `/project/${slug}/`;
  const size = "lg";
  return (
    <StyledProjectCard className={className}>
      <Header>
        <Link to={projecturl}>
          <HeaderImage
            fluid={headerImage.fluid}
            alt={headerImage.title}
            magnifyEffect={magnifyEffect}
          />
        </Link>
      </Header>
      <Content>
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
        {/* <Date>{dayjs(date).format("DD MMM YYYY")}</Date> */}
         
        <p>{text}</p>
        {tags.length > 0 ? tags.map((t) => <Tag key={t} text={t} />) : null}
        <br/> 
        <ReadMoreLink to={projecturl}>Read more</ReadMoreLink>
      </Content>
    </StyledProjectCard>
  );
};

ProjectCard.propTypes = {
  title: string.isRequired,
  slug: string.isRequired,
  text: string.isRequired,
  date: string.isRequired,
  headerImage: shape({ fluid: shape({}).isRequired }).isRequired,
  tags: arrayOf(string),
  className: string,
  magnifyEffect: bool,
};

ProjectCard.defaultProps = {
  className: "",
  magnifyEffect: false,
  tags: [],
};

export default ProjectCard;

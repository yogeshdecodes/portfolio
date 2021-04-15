import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaList = styled.ul`
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

const SocialMedia = () => {
  const size = "2x";

  return (
    <SocialMediaList>
      <li>
        <a href="mailto:yogeshdecodes@gmail.com">
          <FontAwesomeIcon icon="envelope" size={size} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/yogeshdecodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size={size} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/yogeshdecodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} size={size} />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/yogeshdecodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} size={size} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/yogeshdecodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} size={size} />
        </a>
      </li>
    </SocialMediaList>
  );
};

export default SocialMedia;

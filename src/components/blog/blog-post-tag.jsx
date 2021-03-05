import React from "react";
import { string } from "prop-types";
import styled from "styled-components";

const Tag = styled.div`
  background-color: ${(props) => props.theme.brand.primary};
  color: white;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-radius: 0.25rem;
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1.5rem;
`;

const BlogPostTag = ({ text }) => {
  return <Tag>{text}</Tag>;
};

BlogPostTag.propTypes = {
  text: string.isRequired,
};

export default BlogPostTag;

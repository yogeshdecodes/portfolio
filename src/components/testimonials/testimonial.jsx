import React from "react";
import styled from "styled-components";
import { string, shape } from "prop-types";
import Img from "gatsby-image";

const StyledTestimonial = styled.div`
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
  border: ${(props) => props.theme.card.border};
  box-shadow: ${(props) => props.theme.card.shadow};

  ${(props) => props.theme.breakpoints.lg} {
    flex: 1 0 0%;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Content = styled.div`
  padding: 1.25rem;
  flex: 1 1 auto;
`;

const Person = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 100%;
  }
`;

const PersonInfo = styled.div`
  margin-left: 1.5rem;
`;

const Name = styled.div`
  font-size: 1rem;
  letter-spacing: 0.1rem;
  margin-bottom: 0.25rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const JobTitle = styled.div`
  color: ${(props) => props.theme.typography.colors.textEmphasis};
`;

const Testimonial = ({ image, title, text, name }) => {
  return (
    <StyledTestimonial>
      <Content>
        <p>{text}</p>
        <Person>
          <Img fixed={image.fixed} alt={title} />
          <PersonInfo>
            <Name>{name}</Name>
            <JobTitle>{title}</JobTitle>
          </PersonInfo>
        </Person>
      </Content>
    </StyledTestimonial>
  );
};

Testimonial.propTypes = {
  image: shape({}).isRequired,
  title: string.isRequired,
  text: string.isRequired,
  name: string.isRequired,
};

export default Testimonial;

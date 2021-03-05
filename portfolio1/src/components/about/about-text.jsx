import React from "react";
import styled from "styled-components";
import SocialMedia from "../social-media/social-media";

const Paragraph = styled.p`
  :last-of-type {
    margin-bottom: 1.5rem;

    ${(props) => props.theme.breakpoints.xl} {
      margin-bottom: 3rem;
    }
  }
`;

const Subheading = styled.strong`
  color: ${(props) => props.theme.brand.primary};
  text-transform: uppercase;
  font-size: 1.875rem;
  margin-bottom: 1rem;
  display: block;
`;

const AboutText = () => {
  return (
    <>
      <Subheading>Yogesh Yadav</Subheading>
      <Paragraph>
        Hi, I&apos;m Yogesh a.k.a. <a
          href="https://www.google.com/search?q=yogeshdecodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          @yogeshdecodes
        </a>{" "} (if you'd like to look me up online). I&apos;m a full stack software developer and
        UI/UX enthusiast based in Delhi, India. When I&apos;m not coding, I&apos;m exploring new places.
      </Paragraph>
      <Paragraph>
      I'm passionate about building things that make a difference. Also, I'm a believer in doing difficult things because they are the most rewarding. Anything that can be classified as technology fascinates me. I enjoy software development because it allows me to blend design with engineering.
      </Paragraph>
      <Paragraph>
        I'm always open to new ideas and opportunities. Here is my Resume if you're interested. If you think I could be a fit on your team, I'd love to chat.
      </Paragraph>
       <Paragraph>
         Cheers!
      </Paragraph>
      <SocialMedia />
    </>
  );
};

export default AboutText;

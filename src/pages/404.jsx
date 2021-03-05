import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container/container";

const Section = styled.section`
  background-color: ${(props) => props.theme.section.backgroundDark};
  color: ${(props) => props.theme.typography.colors.text};
  padding: 10rem 0 10rem 0;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section>
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>
          Go back <Link to="/">home</Link>.
        </p>
      </Container>
    </Section>
  </Layout>
);

export default NotFoundPage;

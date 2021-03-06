import React from "react";
import Layout from "components/layout";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Hero from "sections/hero/Hero.js";
import PortfolioOne from "sections/portfolio/PortfolioOne.js";
import ClientsOne from "sections/clients/ClientsOne.js";

class Index extends React.Component {
  render() {
    const { site } = this.props.data;

    return (
      <div id="main-slick">
        <Helmet>
          <title>{site.meta.title}</title>
          <meta name="description" content={site.meta.description} />
        </Helmet>
        <Layout
          isHome={true}
          sections={[]}
          pages={["Team", "Music", "Talent", "Literary", "Contact"]}
        >
          <Hero />
        </Layout>
      </div>
    );
  }
}

export default Index;

export const creativeOneQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`;

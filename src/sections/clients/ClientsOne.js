import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import AnimationContainer from "components/animation-container";

class ClientsOne extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #050505;
            background-size: cover;
            padding: 100px 0;
            .heading {
              width: 100%;
            }
          }
        `;

    const Heading = styled.h1`
      font-size: 80px;
      line-height: 100px;
      font-family: "Kanit", sans-serif;
      color: #fff;
      text-transform: uppercase;
      text-align: center;
      width: 100%;
      @media (min-width: 768px) and (max-width: 1399px) {
        font-size: 70px;
        line-height: 70px;
      }
      @media (max-width: 767px) {
        font-size: 40px;
        line-height: 40px;
        text-align: center;
      }
    `;
    const Color = styled.span`
      color: #a67c00;
      font-size: 90px;
      line-height: 80px;
      font-family: "Kanit", sans-serif;
      text-transform: uppercase;
      letter-spacing: 2px;
      @media (min-width: 768px) and (max-width: 1399px) {
        font-size: 70px;
        line-height: 70px;
      }
      @media (max-width: 767px) {
        font-size: 40px;
        line-height: 40px;
      }
    `;

    const LeftCol = styled(Col)`
      display: flex;
      align-items: center;
    `;

    const ClientsRow = styled.div`
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;

      @media (max-width: 767px) {
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-auto-flow: row dense;
        grid-gap: 0.5rem;
        padding: 0 20px;
      }
    `;

    return (
      <Section id="partners">
        <Container>
          <Row>
            <LeftCol md={6}>
              <Heading>
                our <Color>partners</Color>
              </Heading>
            </LeftCol>
            <Col md={6}>
              <ClientsRow>{this.clients()}</ClientsRow>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }

  clients() {
    return this.props.clients.map((value, index) => {
      const Client = styled.img`
        height: 100px;
      `;

      const ClientCol = styled(Col)`
        text-align: center;
        padding: 20px 0;
        border-color: #efefef;
        border-left: none;
        border-top: none;
        transition: 0.1s;
        &:hover {
          transform: scale(1.1);
          background-color: #a67c00;
          z-index: 5;
          border-radius: 10px;
        }
        @media (max-width: 500px) {
          border: none !important;
        }
      `;
      return (
        <ClientCol
          md={3}
          key={index}
          style={{
            borderRight: (index + 1) % 4 === 0 ? "none" : "1px solid",
            borderBottom: index < 8 ? "1px solid" : "none",
          }}
        >
          <AnimationContainer animation="fadeIn slower" delay={index * 200}>
            <Client src={value.node.childImageSharp.fluid.src} alt="Client" />
          </AnimationContainer>
        </ClientCol>
      );
    });
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        clients: allFile(
          filter: {
            extension: { regex: "/(png)/" }
            relativeDirectory: { eq: "clients" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 500) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={({ clients }) => <ClientsOne clients={clients.edges} {...props} />}
  />
);

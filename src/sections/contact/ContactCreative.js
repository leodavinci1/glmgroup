import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import AnimationContainer from "components/animation-container";
import ContactCreativeForm from "./parts/ContactCreativeForm.js";
import emailIcon from "../../../static/img/emailIcon.svg";
import phoneIcon from "../../../static/img/phoneIcon.svg";

class ContactCreative extends React.Component {
  render() {
    const Section = styled.section`
      position: relative;
      overflow: hidden;
      background-color: #000;
      padding: 100px 0;
    `;

    const FormRow = styled(Row)`
      background-color: #111;
    `;

    const ContactCol = styled(Col)`
      min-height: 600px;
      max-height: 600px;
      padding: 0;
      display: flex;
      align-items: center;
    `;

    const Map = styled.iframe`
      border: none;
      height: 100%;
      width: 100%;
    `;

    const IconRow = styled(Row)`
      margin-top: 150px;
    `;

    const IconCol = styled(Col)`
      @media (max-width: 500px) {
        margin-bottom: 140px;
      }
    `;

    const IconContainer = styled.div`
      width: 150px;
      height: 150px;
      margin: auto;
      padding: 35px;
      text-align: center;
      position: relative;
      bottom: 75px;
      background-color: #a67c00;
      border-radius: 150px;
      transition: 0.5s;
    `;

    const InfoPart = styled.div`
      padding-top: 10px;
      min-height: 100px;
      background-color: #111;
      border: 2px solid #444;
    `;
    const Icon = styled.img`
      height: 80px;
      width: 40px;
      object-fit: contain;
    `;

    const InfoTitle = styled.h4`
      font-size: 35px;
      color: #fff;
      font-family: "Kanit", sans-serif;
      text-align: center;
    `;

    const Info = styled.div`
      position: relative;
    `;

    const InfoLinkContainer = styled.div`
      text-align: center;
    `;

    const InfoLink = styled.a`
      color: #a67c00;
      transition: 0.5s;
      &:hover {
        color: #fff;
        text-decoration: none;
      }
    `;

    return (
      <Section id="contact">
        <Container>
          <AnimationContainer animation="fadeIn">
            <FormRow>
              <ContactCol md={12}>
                <ContactCreativeForm />
              </ContactCol>
            </FormRow>
          </AnimationContainer>
        </Container>
      </Section>
    );
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        emailIcon: file(relativePath: { eq: "icons/email2.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mapIcon: file(relativePath: { eq: "icons/map.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        phoneIcon: file(relativePath: { eq: "icons/phone.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
    `}
    render={({ emailIcon, mapIcon, phoneIcon }) => (
      <ContactCreative
        emailIcon={emailIcon}
        mapIcon={mapIcon}
        phoneIcon={phoneIcon}
        {...props}
      />
    )}
  />
);

import React from "react";
import Helmet from "react-helmet";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import img1 from "../../static/img/meeshie1.jpg";
import img2 from "../../static/img/meeshie2.png";
import img3 from "../../static/img/meeshie3.png";
import logo from "../../static/img/logo.png";
import Layout from "components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "scss/abstract.scss";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: img1,
  },
  {
    original: img2,
  },
  {
    original: img3,
  },
];
class SelfishSons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
    };
  }

  render() {
    const Heading1 = styled.h1`
      font-size: 80px;
      font-family: "Kanit", sans-serif;
      line-height: 40px;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 100px;
      @media (min-width: 768px) {
        margin-left: 4px;
      }
      @media (max-width: 767px) {
        margin-top: 100px;
        margin-left: 2px;
      }
      @media (min-width: 768px) and (max-width: 1500px) {
        font-size: 40px;
      }
      @media (max-width: 767px) {
        font-size: 40px;
        line-height: 20px;
      }
    `;

    const Main = styled.div`
      padding-top: 100px;
      width: 100%;
      display: flex;
      align-items: center;
      background-color: #000;
    `;

    const Content = styled.div`
      position: relative;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 100px;
      @media (max-width: 767px) {
        padding-top: 0;
      }
    `;

    const TextContent = styled.div`
      font-size: 23px;
      color: white;
      line-height: 31px;
      @media (max-width: 767px) {
        font-size: 20px;
        padding: 0 20px;
      }
    `;

    const Img = styled.img`
      width: 70%;
      margin-top: 80px;
      @media (max-width: 1023px) {
        width: 90%;
      }
    `;

    const Logo = styled.img`
      height: 80px;
      @media (max-width: 1023px) {
        height: 60px;
      }
    `;

    const LogoWrapper = styled.a`
      position: fixed;
      left: 50px;
      top: 70px;
      z-index: 10;

      @media (max-width: 767px) {
        position: fixed;
        z-index: 10000;
        left: 50%;
        transform: translateX(-50%);
      }
    `;

    return (
      <div>
        <Helmet>
          <title>Meeshie</title>
          <meta name="description" content="Page not found" />
        </Helmet>
        <Layout
          isHome={false}
          sections={[]}
          pages={["Team", "Music", "Talent", "Literary", "Contact"]}
        >
          <Main>
            <Container>
              <Content>
                <Heading1>Meeshie</Heading1>
                <ImageGallery showPlayButton={false} items={images} />

                <TextContent style={{ marginTop: "50px" }}>
                  Michelle “Meeshie” Fahmy is the Los Angeles-based interior
                  designer behind{" "}
                  <a target="_blank" href="https://www.hausofmeeshie.com/">
                    Haus of Meeshie
                  </a>
                  . She was named one of Apartment Therapy’s 2021 Design
                  Changemakers, a list of “the most talented and dynamic people
                  in the design world,” and has been featured in The Wall Street
                  Journal, Architectural Digest, Tastemade Home and Food52.
                </TextContent>

                <TextContent style={{ marginTop: "50px" }}>
                  Michelle’s work is driven by her love of connecting with
                  clients and the creative alchemy that comes from collaborating
                  with a diverse circle of artisans and tradespeople to bring
                  each client’s unique design dreams to life. She credits her
                  passion for color, pattern play and art to her Egyptian
                  background and to her father Walter Fahmy, an
                  Impressionist/Fauvist painter and mixed media artist. This,
                  along with her inside track into vintage sourcing and a
                  fearlessness in mixing different eras and styles, defines the
                  viewpoint of Haus of Meeshie: bold, eclectic and with a keen
                  eye for artwork, but always making spaces a true reflection of
                  the people they are designed for. Michelle’s philosophy for
                  Haus of Meeshie is to be daring, whether that means working
                  with an unexpected pattern combination, celebrating
                  off-the-beaten-path colors or letting an eye-catching
                  statement piece take center stage. Her ever-growing list of
                  design influences include Mexican architect Luis Barragan,
                  interior designer Ken Fulk and filmmaker Wes Anderson.
                </TextContent>

                <TextContent style={{ marginTop: "50px" }}>
                  Before founding Haus of Meeshie, Michelle served as an
                  Interior Designer at WFord Interiors, managing high-end
                  residential projects in Southern California, and also appeared
                  as a regular on E! Entertainment’s luxury home renovation
                  series “Flip It Like Disick.” She began her career in event
                  production and VIP services, contributing to event design for
                  over 200 of The Getty Museum’s symposia, exhibition openings
                  and private donor events annually. She also executed events
                  for The Playboy Mansion, as well as major movie studio
                  premiere parties and The Abbey’s annual Pride and Halloween
                  festivities for global hospitality company sbe.
                </TextContent>
                <TextContent
                  style={{ marginTop: "50px", marginBottom: "150px" }}
                >
                  She currently lives in Los Angeles with her husband Aaron and
                  their three spoiled rescue kitties, Liam, Luna and Pico, where
                  she spends her free time renovating their midcentury A-frame
                  cabin near Yosemite, Sugar Pine Haus, and tending to their
                  constantly evolving backyard garden.
                </TextContent>
              </Content>
            </Container>
          </Main>
        </Layout>
      </div>
    );
  }
}

export default SelfishSons;

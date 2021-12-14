import React from "react";
import Helmet from "react-helmet";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import img1 from "../../static/img/selfishsons1.png";
import img2 from "../../static/img/selfishsons2.png";
import img3 from "../../static/img/selfishsons3.png";
import logo from "../../static/img/logo.png";
import Layout from "components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "scss/abstract.scss";
import spotify from "../../static/img/spotify.png";

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

    const Spotify = styled.img`
      width: 200px;
      margin-top: 50px;
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
          <title>Selfish Sons</title>
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
                <Heading1>Selfish Sons</Heading1>
                <ImageGallery showPlayButton={false} items={images} />
                <a
                  target="_blank"
                  href="https://open.spotify.com/artist/5Fqu2dYwt7GFleLcxCEYKE?si=n2Z1NsFlRMGODXsH3E6QIA"
                >
                  <Spotify src={spotify} />
                </a>
                <TextContent style={{ marginTop: "50px" }}>
                  Selfish Sons are a three-piece alternative rock band from
                  Brisbane, Australia. Making rock music with pop sensibility,
                  these brothers have established themselves as eccentric
                  entertainers with a powerful sound.
                </TextContent>

                <TextContent style={{ marginTop: "50px" }}>
                  The rock outfit consists of brothers Jordy and Finn who met
                  Jonty in a commercial audition waiting room at the age of 8.
                  This spontaneous friendship grew tenfold through High School
                  after realising that their love for infectious melodies and
                  having a laugh was better suited to writing songs 'tongue in
                  cheek' for an aptly named band, not getting kicked out of a
                  classroom. This led to their eclectic amalgam of rock/pop
                  nostalgia circa early 2000's.
                </TextContent>

                <TextContent
                  style={{ marginTop: "50px", marginBottom: "150px" }}
                >
                  After many devious nights and failed cover attempts , the
                  addictive energy of live shows became an obsession, leading to
                  numerous tours and sold out shows across the East Coast. The
                  band has developed a name as one of the most energetic and
                  passionate upcoming acts.
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

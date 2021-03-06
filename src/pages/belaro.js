import React from "react";
import Helmet from "react-helmet";
import { Container } from "react-bootstrap";
import Layout from "components/layout";
import styled from "styled-components";
import img1 from "../../static/img/belaro1.png";
import img2 from "../../static/img/belaro2.png";
import img3 from "../../static/img/belaro3.png";
import spotify from "../../static/img/spotify.png";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "scss/abstract.scss";

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

class Belaro extends React.Component {
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
      width: 100%;
      padding-top: 100px;
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
        z-index: 10000;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
      }
    `;

    return (
      <div>
        <Helmet>
          <title>BELARO</title>
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
                <a href="/music">
                  <svg
                    style={{ position: "absolute", left: "30px", top: "20px" }}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="long-arrow-alt-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="svg-inline--fa fa-long-arrow-alt-left fa-w-14 fa-3x"
                  >
                    <path
                      fill="white"
                      d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
                      class=""
                    ></path>
                  </svg>
                </a>
                <Heading1>Belaro</Heading1>
                <ImageGallery showPlayButton={false} items={images} />

                <a
                  target="_blank"
                  href="https://open.spotify.com/artist/3XUsaUWtL1t1L2aAq2rwOd?si=7hnijnhnQE-1igq2tFyGow"
                >
                  <Spotify src={spotify} />
                </a>

                <TextContent style={{ marginTop: "50px" }}>
                  "BELARO has so much talent. Artistically, she???s absolutely
                  brilliant" (LeFutureWave). "This is just pop at its finest"
                  (A1234)! Blogs worldwide have discovered all the assets in
                  BELARO which they look for in the biggest stars. But perhaps
                  the LA powerhouse singer and songwriter's equally great
                  achievements of late have been her placements on much coveted
                  Spotify editorial playlists "just hits," "Fresh Finds" and
                  "Fresh Finds: Pop."
                </TextContent>

                <TextContent style={{ marginTop: "50px" }}>
                  On October 15, BELARO is set to release her 5th single
                  ???Sober.??? A collaboration with legendary, multi-platinum and 2
                  time Grammy nominated producer/songwriter Colby O???Donis who is
                  also featured on Lady Gaga???s breakout hit ???Just Dance???, the
                  pop banger promises to appeal to all ages and demographics
                  alike.
                </TextContent>

                <TextContent
                  style={{ marginTop: "50px", marginBottom: "150px" }}
                >
                  BELARO has a tradition of crossing genres with her previous
                  singles ???Grateful???, a pop-trap ballad with a gospel touch,
                  ???Scarlet???, a modernized version of Dolly Parton's Jolene, and
                  ???Forever???, a disco-pop anthem with a relatable message about
                  breaking up from toxic relationships.
                </TextContent>
              </Content>
            </Container>
          </Main>
        </Layout>
      </div>
    );
  }
}

export default Belaro;

import React from "react";
import Helmet from "react-helmet";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Image from "../../static/img/sexton1.png";
import Layout from "components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "scss/abstract.scss";
import spotify from "../../static/img/spotify.png";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
          <title>SEXTON</title>
          <meta name="description" content="Colby  O'Donis" />
        </Helmet>
        <Layout
          isHome={false}
          sections={[]}
          pages={["Team", "Music", "Talent", "Literary", "Contact"]}
        >
          <Main>
            <Container>
              <Content>
                <Heading1>SEXTON</Heading1>
                <Img src={Image} />
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
                <a
                  target="_blank"
                  href="https://open.spotify.com/artist/0k4gmF1Uhpyb8uCHz2fGU2?si=L-tzVMUfTOK1IN19PtObUg"
                >
                  <Spotify src={spotify} />
                </a>
                <TextContent style={{ marginTop: "50px" }}>
                  Born in Perth, Australia, Sexton started writing music at ten
                  years old while playing guitar in a band. She grew up heavily
                  influenced by Rock and Hip Hop and after surviving a brush
                  with death in a motor-vehicle accident, Sexton committed
                  herself to living life without fear and began pursuing her
                  dream in LA. Having already peaked at #8 on Billboard’s
                  charts, #4 on MTV’s TRL, with over 50 million streams on a
                  single, Sexton has worked with top industry producers such as
                  Timbaland, Scott Storch, J White, OG Parker, XL and many more.
                </TextContent>

                <TextContent
                  style={{ marginTop: "50px", marginBottom: "50px" }}
                >
                  Her songwriting ability has caught the ears of different
                  artists including Chris Brown, who recorded a song she wrote
                  for him as a potential single for him to release and also
                  posted Sexton singing her single “Childhood Demons” on his
                  Instagram page to his 96 million Instagram followers. She has
                  song collaborations with artists such as Trippie Redd, who’s
                  album just peaked at #1 on the Billboard charts, as well as
                  rappers Smoke Purpp (3 million monthly listeners and 3.7
                  million Instagram followers) and Lil Got It part of Young
                  Thug’s YSL collective. Sexton has performed for up to 10,000
                  people opening for acts such as Lil Wayne. 2Chainz, The Migos
                  and many more. Sexton is the next powerhouse female rockstar
                  to change the face of music.
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

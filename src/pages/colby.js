import React from "react";
import Helmet from "react-helmet";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Image from "../../static/img/colby.jpg";
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
          <title>Colby O'Donis</title>
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
                <Heading1>Colby O'Donis</Heading1>
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
                  href="https://open.spotify.com/artist/7fObcBw9VM3x7ntWKCYl0z"
                >
                  <Spotify src={spotify} />
                </a>
                <TextContent style={{ marginTop: "50px" }}>
                  Colby O'Donis Colón is an American singer. He is perhaps best
                  known as the featured artist in the Lady Gaga single "Just
                  Dance", which spent more than eleven months on the Billboard
                  Hot 100. He is also well known for his lead single on his
                  debut album Colby O titled "What You Got" featuring Akon,
                  which peaked at number 14 on the Hot 100, and being featured
                  on Akon's song "Beautiful", which peaked at number 19 on the
                  Hot 100.
                </TextContent>

                <TextContent
                  style={{ marginTop: "50px", marginBottom: "50px" }}
                >
                  Puerto Rican and Italian descent, was born in Queens, New
                  York, and grew up there and in Florida. His mother, Olga, is a
                  singer once crowned Miss Puerto Rico in NY, and his father,
                  Freddy "Fast Freddy" Colón is a New York disc jockey who
                  worked on New York station WQHT. He was named after Colby
                  O'Donis, a firefighter who was killed while saving his
                  father's life. O'Donis has one sister who is five years older.
                  He has stated that, for seven years, she helped pay for his
                  dance, piano, and guitar lessons out of her own paychecks. His
                  parents first realized his singing talent when he took first
                  place at a talent show by singing a Michael Jackson song when
                  he was only three and a half.
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

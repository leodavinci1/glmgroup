import React from "react";
import Helmet from "react-helmet";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import img1 from "../../static/img/galvinmagnus.jpg";
import img2 from "../../static/img/galvinmagnus2.jpg";
import "react-image-gallery/styles/css/image-gallery.css";

import Layout from "components/layout";
import logo from "../../static/img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "scss/abstract.scss";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: img1,
  },
  {
    original: img2,
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
      @media (max-width: 768px) {
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
          <title>Gavin Magnus</title>
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
                <Heading1>Gavin Magnus</Heading1>
                <ImageGallery showPlayButton={false} items={images} />

                <TextContent style={{ marginTop: "50px" }}>
                  Gavin Magnus is known for being a rap artist and huge social
                  media star on YouTube, Instagram, and Tik Tok. His social
                  media channels generated over 50 million views and have
                  reached over ten million incredible fans across YouTube,
                  Instagram and Tik Tok. He is also known for featured films
                  such as his role of Byron in "Timecrafters" a film alongside
                  Denise Richards. Gavin toured in the Boys Of Summer Tour in
                  2018, and signed a record deal with Columbia Records, making
                  him one of their youngest signed artists to date. Released a
                  cover “Senorita” featuring Coco Quinn.
                </TextContent>

                <TextContent
                  style={{ marginTop: "50px", marginBottom: "150px" }}
                >
                  Senorita has now reached more than 60 million views in two
                  years. He was recently ranked #1 for 'most popular 14 year
                  old' on Famous Birthdays. Gavin has 14 music videos, most of
                  which have gone viral, making him a music teen icon. Recently,
                  his viral song “Hearts On A Pendant” was featured on MTV’s
                  Siesta Key. Most importantly, Gavin is an animal activist,
                  often involved in hospitals charity events with a huge heart
                  for helping others and has used his influence several times to
                  raise awareness for school harassment.
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

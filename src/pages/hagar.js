import React from "react";
import Helmet from "react-helmet";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import img1 from "../../static/img/hagar1.jpg";
import img2 from "../../static/img/hagar2.jpg";
import img3 from "../../static/img/hagar3.png";
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
                <Heading1>HAGAR CHEMALI</Heading1>
                <ImageGallery showPlayButton={false} items={images} />

                <TextContent style={{ marginTop: "50px" }}>
                  Hagar Hajjar Chemali is a political satirist, foreign policy
                  expert, and host, writer, and producer of a world news show on
                  YouTube called Oh My World! She worked in the U.S. government
                  for 12 years in a range of senior national security and public
                  affairs positions. She is a political commentator and writer
                  on national security issues, and is featured regularly on
                  MSNBC, CNN, BBC, Bloomberg, and Cheddar. She is also CEO and
                  Founder of Greenwich Media Strategies, and a nonresident
                  senior fellow with the Atlantic Council’s Economic Sanctions
                  Initiative.
                </TextContent>

                <TextContent style={{ marginTop: "50px" }}>
                  From 2015-2016, Chemali was Director of Communications and
                  Spokesperson for the U.S. Mission to the United Nations under
                  President Obama. Prior to this position, she was Spokesperson
                  for Terrorism and Financial Intelligence at the U.S.
                  Department of the Treasury where she handled all public
                  affairs related to sanctions policy, illicit finance, and
                  enforcement actions.
                </TextContent>

                <TextContent style={{ marginTop: "50px" }}>
                  From 2010-2012, Chemali was Director for Syria and Lebanon at
                  the National Security Council at the White House, where she
                  advised on and coordinated the implementation of U.S. policy
                  toward Syria and Lebanon. Chemali also worked at the Treasury
                  Department as a Senior Policy Advisor on Asia and Middle East
                  Policy Advisor in the Office of Terrorist Financing and
                  Financial Crimes.
                </TextContent>
                <TextContent style={{ marginTop: "50px" }}>
                  Chemali is a term member of the Council on Foreign Relations.
                  She has a Master of International Affairs from Columbia
                  University's School of International and Public Affairs where
                  she concentrated in International Security Policy and the
                  Middle East. She is also a graduate of Barnard College where
                  she majored in Political Science. She speaks English, French,
                  Arabic and Italian.
                </TextContent>
                <TextContent
                  style={{ marginTop: "50px", marginBottom: "150px" }}
                >
                  On the more personal side, Chemali, who is based in
                  Connecticut, is a wife, mom of three, and is very active in
                  her community. She sits on the board of Greenwich Academy,
                  from which she graduated, and on the board of the United Way
                  of Greenwich. She is born and raised in Greenwich, Connecticut
                  to Lebanese parents from Beirut. She loves to write, dance
                  (find her on TikTok!), and of course, talking is her favorite
                  activity. Her signature, “HHH,” comes from her maiden name –
                  Hagar Hadi Hajjar. (Yes, “Hagar” and “Hajjar” rhyme, and yes,
                  her parents actually named her that.)
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

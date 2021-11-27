import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import PortfolioOne from "sections/portfolio/PortfolioOne.js";
import logo from "../../static/img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "scss/abstract.scss";

class Literary extends React.Component {
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
      width: 100vw;

      min-height: 100vh;
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
      z-index: 100;
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
          <title>Literary</title>
          <meta name="description" content="Page not found" />
        </Helmet>
        <Main>
          <LogoWrapper href="/" className="logo">
            <Logo src={logo} alt="logo" />
          </LogoWrapper>
          <Content>
            <PortfolioOne title="Literary" />
          </Content>
        </Main>
      </div>
    );
  }
}

export default Literary;

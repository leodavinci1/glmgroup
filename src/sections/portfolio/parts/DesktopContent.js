import React from "react";
import styled, { css } from "styled-components";

class DesktopContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      enable: this.props.type === "slider" ? true : false,
    };
  }

  enable = () => {
    this.setState({ enable: true });
  };

  render() {
    console.log(this.props.category);
    const Text = styled.div`
      @media (max-width: 1024px) {
        display: none !important;
      }
      ${this.props.info === "LITERARY"
        ? css`
            background: black;
            height: 80px !important;
            bottom: 0;
          `
        : css`
            background-image: linear-gradient(
              to top,
              rgb(166, 124, 0),
              rgba(255, 255, 255, 0)
            );
            top: 0;
          `}
      position: absolute;

      opacity: 1;
      height: 100%;
      width: 100%;
      align-items: center;
      flex-direction: column;
      justify-content: flex-end;
      transition: 0.5s;
      text-align: center;
      display: flex;
    `;

    return (
      <Text
        onMouseEnter={() => this.setState({ show: true })}
        onMouseLeave={() => this.setState({ show: false })}
        className={this.state.show ? "active" : ""}
        style={{ display: this.state.enable ? "flex" : "none" }}
      >
        {this.show()}
      </Text>
    );
  }

  show() {
    const Heading = styled.h4`
      color: #fff;
      font-weight: 600;
      font-size: 25px;
      text-align: center;
      @media (max-width: 767px) {
        font-size: 20px;
      }
    `;

    const SubHeading = styled.h5`
      color: #fff;
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      @media (max-width: 767px) {
        font-size: 15px;
      }
    `;
    return (
      <>
        <Heading>{this.props.text}</Heading>
        <SubHeading>{this.props.category}</SubHeading>
      </>
    );
  }
}

export default DesktopContent;

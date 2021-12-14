import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  render() {
    const FooterMain = styled.div`
      background-color: #111;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const SocialIcons = styled.div`
      .social_icon {
        font-size: 15px;
        color: #555;
        margin: 0 5px;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
          color: #a67c00;
        }
      }
    `;
    return (
      <FooterMain>
        <SocialIcons>
          <span style={{ color: "#555" }}> © 2021 Good Life Management </span>
          <FontAwesomeIcon
            icon={faInstagram}
            className="social_icon"
            onClick={() => window.open("https://www.instagram.com")}
          />
        </SocialIcons>
      </FooterMain>
    );
  }
}
export default Footer;

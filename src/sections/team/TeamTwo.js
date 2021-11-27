import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import TeamItem from "sections/team/parts/TeamItem.js";
import AnimatedHeading from "components/animated-heading";
import firstPortraitImg from "../../../static/img/firstPortrait.png";
import secondPortraitImg from "../../../static/img/secondPortrait.png";

class TeamTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
    };
  }

  updateDimensions = () => {
    if (this.state.height !== window.innerHeight) {
      this.setState({ height: window.innerHeight });
    }
    if (this.state.width !== window.innerWidth) {
      this.setState({ width: window.innerWidth });
    }
  };

  componentDidMount() {
    this.setState({ height: window.innerHeight, width: window.innerWidth });
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const Section = styled.section`
      background-size: cover;
      padding: 100px 0;
      position: relative;
    `;

    const Overlay = styled.div`
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      background-color: rgba(0, 0, 0, 0.8);
    `;
    const TeamContainer = styled.div`
      padding: 50px 0 0 0;
      @media (max-width: 767px) {
        padding: 0 25px;
      }
    `;

    const ImageContainer = styled.div`
      display: flex;
      justify-content: center;
    `;

    const ContentContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: #fff;
    `;

    const FirstPortrait = styled.img`
      width: 340px;
    `;

    const Title = styled.div`
      font-family: "Kanit", sans-serif;
      text-transform: uppercase;
      font-weight: 200;
      font-size: 40px;
      letter-spacing: 1px;
      margin-bottom: 30px;
      color: #a67c00;

      @media (max-width: 767px) {
        margin-top: 25px;
        font-size: 30px;
      }
    `;

    const Bio = styled.div`
      font-size: 17px;
      line-height: 28px;
    `;

    const DesktopBlock = styled.div`
      display: flex;
      flex-direction: row;
      @media (max-width: 600px) {
        display: none;
      }
    `;

    const MobileBlock = styled.div`
      display: none;
      @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
      }
    `;

    console.log(this.state.width);

    return (
      <Section id="team">
        <Overlay />
        <Col md={12}>
          <Container style={{ marginBottom: "100px" }}>
            <AnimatedHeading text="Our Team" />
          </Container>
          <TeamContainer>
            <Container>
              <Row style={{ marginBottom: "80px", alignItems: "center" }}>
                <Col md={6}>
                  <ImageContainer>
                    <FirstPortrait src={firstPortraitImg} />
                  </ImageContainer>
                </Col>
                <Col md={6}>
                  <ContentContainer>
                    <Title>Suzie Abdou</Title>
                    <Bio>
                      Suzie Abdou has over a decade of experience in
                      entertainment, public relations, and large-scale events.
                      She has managed clients on the red carpet at the Grammy’s,
                      headed publicity for film festivals in Los Angeles and
                      overseas, and developed projects for television and film.
                      Suzie’s work spans the political spectrum to include
                      working on multiple presidential campaigns, training women
                      in the U.S. and the Middle East to run for office, and the
                      global refugee crisis. 
                    </Bio>
                  </ContentContainer>
                </Col>
              </Row>
              <MobileBlock>
                <Row style={{ marginBottom: "80px", alignItems: "center" }}>
                  <Col md={6}>
                    <ImageContainer>
                      <FirstPortrait src={secondPortraitImg} />
                    </ImageContainer>
                  </Col>
                  <Col md={6}>
                    <ContentContainer>
                      <Title>Arlene Silguero</Title>
                      <Bio>
                        Arlene's music management portfolio includes songwriters
                        and performers, alike. From pop to rock to rap, she
                        represents artists from around the globe. Her expertise
                        is in A&R, collaborations, artist development, and
                        negotiations. An entrepreneur at heart, Arlene has
                        launched and managed successful businesses in real
                        estate and merchandising.
                      </Bio>
                    </ContentContainer>
                  </Col>
                </Row>
              </MobileBlock>

              <DesktopBlock>
                <Row style={{ marginBottom: "80px", alignItems: "center" }}>
                  <Col md={6}>
                    <ContentContainer>
                      <Title>Arlene Silguero</Title>
                      <Bio>
                        Arlene's music management portfolio includes songwriters
                        and performers, alike. From pop to rock to rap, she
                        represents artists from around the globe. Her expertise
                        is in A&R, collaborations, artist development, and
                        negotiations. An entrepreneur at heart, Arlene has
                        launched and managed successful businesses in real
                        estate and merchandising.
                      </Bio>
                    </ContentContainer>
                  </Col>
                  <Col md={6}>
                    <ImageContainer>
                      <FirstPortrait src={secondPortraitImg} />
                    </ImageContainer>
                  </Col>
                </Row>
              </DesktopBlock>
            </Container>
          </TeamContainer>
        </Col>
      </Section>
    );
  }

  team() {
    const { items } = this.props;

    return items.map((value, index) => {
      return (
        <Col md={6} key={index}>
          <TeamItem
            index={index}
            image={value.content.frontmatter.image.childImageSharp.fluid.src}
            name={value.content.frontmatter.name}
            profession={value.content.frontmatter.profession}
            type="col"
          />
        </Col>
      );
    });
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        background: file(relativePath: { eq: "bg3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              src
            }
          }
        }
        items: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(team)/" } }
          sort: { fields: [frontmatter___id], order: ASC }
          limit: 8
        ) {
          edges {
            content: node {
              frontmatter {
                id
                name
                profession
                facebook
                twitter
                linkedin
                github
                image {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ items, background }) => (
      <TeamTwo items={items.edges} background={background} {...props} />
    )}
  />
);

import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import BackgroundHeader from "../../components/backgroundHeader/BackgroundHeader";
import { competitiveSites } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import Competitions from "../../containers/competitions/Competitions";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <div className="basic-education">
          <BackgroundHeader
            image={require("../../assets/images/bg1.jpg")}
            theme={this.props.theme}
          >
            <Header white={true} theme={this.props.theme} />
            <Fade bottom duration={2000} distance="40px">
              <div className="heading-div">
                <Fade right cascade>
                  <div className="heading-text-div">
                    <h1 className="heading-text" style={{ color: theme.text }}>
                      Education
                    </h1>
                    <h3
                      className="heading-sub-text"
                      style={{ color: theme.text }}
                    >
                      Qualification and Certifications
                    </h3>
                    <CompetitiveSites
                      logos={competitiveSites.competitiveSites}
                    />
                  </div>
                </Fade>
              </div>
            </Fade>
          </BackgroundHeader>
          <Educations theme={this.props.theme} />
          <Certifications theme={this.props.theme} />
          <Competitions theme={this.props.theme} />
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;

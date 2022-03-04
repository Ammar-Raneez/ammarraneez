import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceTimeline from "../../containers/experienceTimeline/ExperienceTimeline";
import VolunteerTimeline from "../../containers/volunteerTimeline/VolunteerTimeline";
import BackgroundHeader from "../../components/backgroundHeader/BackgroundHeader";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <div className="basic-experience">
          <BackgroundHeader
            image={require("../../assets/images/bg2.jpg")}
            theme={this.props.theme}
          >
            <Header white={true} theme={theme} />
            <Fade bottom duration={2000} distance="40px">
              <div className="experience-heading-div">
                <Fade right cascade>
                  <div className="experience-heading-text-div">
                    <h1
                      className="experience-heading-text"
                      style={{ color: theme.text }}
                    >
                      {experience.title}
                    </h1>
                    <h3
                      className="experience-heading-sub-text"
                      style={{ color: theme.text }}
                    >
                      {experience["subtitle"]}
                    </h3>
                    <p
                      className="experience-header-detail-text subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["description"]}
                    </p>
                  </div>
                </Fade>
              </div>
            </Fade>
          </BackgroundHeader>
        </div>
        <Fade bottom>
          <h3
            className="experience-heading-sub-header"
            style={{ color: theme.text }}
          >
            Work Experience
          </h3>
        </Fade>
        <br />
        <ExperienceTimeline work={experience["sections"][0]["experiences"]} />
        <br />
        <br />
        <Fade bottom>
          <h3
            className="experience-heading-sub-header"
            style={{ color: theme.text }}
          >
            Volunteer Experience
          </h3>
        </Fade>
        <br />
        <VolunteerTimeline work={experience["sections"][1]["experiences"]} />=
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;

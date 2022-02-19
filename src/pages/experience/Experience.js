import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import ExperienceTimeline from "../../containers/experienceTimeline/ExperienceTimeline";
import VolunteerTimeline from "../../containers/volunteerTimeline/VolunteerTimeline";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
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
            </div>
          </Fade>
        </div>
        <h3 className="experience-heading-sub-text" style={{ color: theme.text }}>
          Work Experience
        </h3>
        <br />
        <ExperienceTimeline work={experience['sections'][0]['experiences']} />
        <br />
        <br />
        <h3 className="experience-heading-sub-text" style={{ color: theme.text }}>
          Volunteership
        </h3>
        <br />
        <VolunteerTimeline work={experience['sections'][1]['experiences']} />=
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;

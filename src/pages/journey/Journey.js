import React, { Component } from "react";
import { Fade } from "react-reveal";
import { journey } from "../../portfolio.js";
import JourneyImg from "./JourneyImg";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Journey.css";
import JourneyTimeline from "../../containers/journeyTimeline/JourneyTimeline.js";

class Journey extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="journey-main">
        <Header theme={theme} />
        <div className="basic-journey">
          <Fade bottom duration={2000} distance="40px">
            <div className="journey-heading-div">
              <div className="journey-heading-img-div">
                <JourneyImg theme={theme} />
              </div>
              <div className="journey-heading-text-div">
                <h1
                  className="journey-heading-text"
                  style={{ color: theme.text }}
                >
                  {journey.title}
                </h1>
                <p
                  className="journey-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {journey["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <h3 className="journey-heading-sub-text">{journey.subtitle}</h3>
          <small className="journey-heading-ps"><i>This is just me sharing my story, please don't take it as any form of bragging</i></small>
          <div className="journey-timeline-div-main">
            <JourneyTimeline />
          </div>
        </Fade>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Journey;

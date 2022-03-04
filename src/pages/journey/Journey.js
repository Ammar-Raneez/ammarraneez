import React, { Component } from "react";
import { Fade } from "react-reveal";
import { journey } from "../../portfolio.js";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Journey.css";
import JourneyTimeline from "../../containers/journeyTimeline/JourneyTimeline.js";
import BackgroundHeader from "../../components/backgroundHeader/BackgroundHeader";

class Journey extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="journey-main">
        <div className="basic-journey">
	    <BackgroundHeader
            image={require("../../assets/images/bg6.jpg")}
            theme={this.props.theme}
	    >
		    <Header white={true} theme={theme} />
      	    <Fade bottom duration={2000} distance="40px">
            	<div className="journey-heading-div">
			  <Fade right cascade>
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
			  </Fade>
      	      </div>
	     	  </Fade>
	    </BackgroundHeader>
        </div>
        <Fade bottom>
          <h3 className="journey-heading-sub-text">{journey.subtitle}</h3>
        </Fade>
        <div className="journey-timeline-div-main">
          <JourneyTimeline />
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Journey;

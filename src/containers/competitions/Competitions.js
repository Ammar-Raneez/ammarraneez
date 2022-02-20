import React, { Component } from "react";
import "./Competitions.css";
import { Fade } from "react-reveal";
import { competitions } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Competitions extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Competitions & Extras
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {competitions.competitions.map((cert, index) => {
            return <CertificationCard key={index} certificate={cert} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Competitions;

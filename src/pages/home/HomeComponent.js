import React, { Component } from "react";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import BackgroundHeader from "../../components/backgroundHeader/BackgroundHeader";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";

class Home extends Component {
  render() {
    return (
      <div>
        <BackgroundHeader
          image={require("../../assets/images/bg2.jpg")}
          theme={this.props.theme}
        >
          <Header white={true} theme={this.props.theme} />
          <Greeting theme={this.props.theme} />
        </BackgroundHeader>
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;

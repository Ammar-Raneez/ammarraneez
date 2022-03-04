import React, { Component } from "react";
import "./BackgroundHeader.css";

class BackgroundHeader extends Component {
  render() {
    const bgImage = this.props.image;
    return (
      <header
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        className="background-header"
      >
        {this.props.children}
      </header>
    );
  }
}

export default BackgroundHeader;

import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projects } from "../../portfolio.js";
import "./Projects.css";
import BackgroundHeader from "../../components/backgroundHeader/BackgroundHeader";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <div className="basic-projects">
          <BackgroundHeader
            image={require("../../assets/images/bg2.jpg")}
            theme={this.props.theme}
          >
            <Header white={true} theme={theme} />
            <Fade bottom duration={2000} distance="40px">
              <div className="projects-heading-div">
                <Fade right cascade>
                  <div className="projects-heading-text-div">
                    <h1
                      className="projects-heading-text"
                      style={{ color: theme.text }}
                    >
                      {projects.title}
                    </h1>
                    <p
                      className="projects-header-detail-text subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {projects["description"]}
                    </p>
                  </div>
                </Fade>
              </div>
            </Fade>
          </BackgroundHeader>
        </div>
        <Fade bottom>
          <h3 className="projects-heading-sub-text">Few Notable Projects</h3>
        </Fade>
        <div className="repo-cards-div-main">
          {projects.projects.map((repo) => {
            return <GithubRepoCard key={repo.id} repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"View All Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;

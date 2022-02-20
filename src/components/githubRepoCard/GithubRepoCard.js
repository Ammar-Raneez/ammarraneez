import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          className="repo-card-div"
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.highlight }}
        >
          <div
            className="repo-card-overlay"
            style={{ backgroundColor: repo.overlayBgColor }}
          >
          </div>
          <div className="repo-card-overlay-details fadeIn-top">
            <h3
              className="repo-card-overlay-title"
              style={{ color: repo.overlayTextColor }}
            >
              {repo.name}
            </h3>
          </div>

          <div className="repo-name-div">
            <p className="repo-name" style={{ color: repo.overlayBgColor }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}

import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

// function GetSkillSvg(props) {
//   if (props.fileName === "DataScienceImg")
//     return <DataScienceImg theme={props.theme} />;
//   else if (props.fileName === "FullStackImg")
//     return <FullStackImg theme={props.theme} />;
//   else if (props.fileName === "CloudInfraImg")
//     return <CloudInfraImg theme={props.theme} />;
//   return <DesignImg theme={props.theme} />;
// }

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, index) => {
          return (
            <div
              className="skills-main-div"
              key={skill.title}
            >
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <img
                    width="500"
                    style={{ objectFit: 'contain' }}
                    src={require(`../../assets/images/${skill.gifName}.gif`)}
                    alt="skill gif"
                  />
                  {/* <GetSkillSvg fileName={skill.fileName} theme={theme} /> */}
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={1000} cascade>
                  <div>
                    {skill.skills.map((skillSentence, index) => {
                      return (
                        <p
                          key={index}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;

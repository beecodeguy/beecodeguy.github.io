import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import skillAnim from "../../../public/assets/lottie/skill_anim.json";
import skillTwoAnim from "../../../public/assets/lottie/skill_2_anim.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <div className="flex-column">
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie
                  animationData={skillAnim}
                  style={{height: "600px"}}
                />
              ) : (
                <img
                  alt="Man Working"
                  src={require("../../assets/images/developerActivity.svg")}
                ></img>
              )}
            </div>
          </Fade>
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie
                  animationData={skillTwoAnim}
                  style={{height: "600px"}}
                />
              ) : (
                <img
                  alt="Man Working"
                  src={require("../../assets/images/developerActivity.svg")}
                ></img>
              )}
            </div>
          </Fade>
        </div>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

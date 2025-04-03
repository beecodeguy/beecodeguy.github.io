import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { illustration, skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import skillAnim from "../../../public/assets/lottie/skill_anim.json";
import skillTwoAnim from "../../../public/assets/lottie/skill_2_anim.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
export default function Skills() {
    const { isDark } = useContext(StyleContext);
    if (!skillsSection.display) {
        return null;
    }
    return (React.createElement("div", { className: isDark ? "dark-mode main" : "main", id: "skills" },
        React.createElement("div", { className: "skills-main-div" },
            React.createElement("div", { className: "flex-column" },
                React.createElement(Fade, { left: true, duration: 1000 },
                    React.createElement("div", { className: "skills-image-div" }, illustration.animated ? (React.createElement(DisplayLottie, { animationData: skillAnim, style: { height: "600px" } })) : (React.createElement("img", { alt: "Man Working", src: require("../../assets/images/developerActivity.svg") })))),
                React.createElement(Fade, { left: true, duration: 1000 },
                    React.createElement("div", { className: "skills-image-div" }, illustration.animated ? (React.createElement(DisplayLottie, { animationData: skillTwoAnim, style: { height: "600px" } })) : (React.createElement("img", { alt: "Man Working", src: require("../../assets/images/developerActivity.svg") }))))),
            React.createElement(Fade, { right: true, duration: 1000 },
                React.createElement("div", { className: "skills-text-div" },
                    React.createElement("h1", { className: isDark ? "dark-mode skills-heading" : "skills-heading" },
                        skillsSection.title,
                        " "),
                    React.createElement("p", { className: isDark
                            ? "dark-mode subTitle skills-text-subtitle"
                            : "subTitle skills-text-subtitle" }, skillsSection.subTitle),
                    React.createElement(SoftwareSkill, null),
                    React.createElement("div", null, skillsSection.skills.map((skills, i) => {
                        return (React.createElement("p", { key: i, className: isDark
                                ? "dark-mode subTitle skills-text"
                                : "subTitle skills-text" }, skills));
                    })))))));
}
//# sourceMappingURL=Skills.js.map
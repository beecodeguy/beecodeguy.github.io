import React from "react";
import "./Progress.scss";
import { illustration, techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import Build from "../../../public/assets/lottie/skillsLottie.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
export default function StackProgress() {
    if (techStack.viewSkillBars) {
        return (React.createElement(Fade, { bottom: true, duration: 1000, distance: "20px" },
            React.createElement("div", { className: "skills-container" },
                React.createElement("div", { className: "skills-bar" },
                    React.createElement("h1", { className: "skills-heading" }, "Proficiency"),
                    techStack.experience.map((exp, i) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (React.createElement("div", { key: i, className: "skill" },
                            React.createElement("p", null, exp.Stack),
                            React.createElement("div", { className: "meter" },
                                React.createElement("span", { style: progressStyle }))));
                    })),
                React.createElement("div", { className: "skills-image" }, illustration.animated ? (React.createElement(DisplayLottie, { animationData: Build })) : (React.createElement("img", { alt: "Skills", src: require("../../assets/images/skill.svg") }))))));
    }
    return null;
}
//# sourceMappingURL=skillProgress.js.map
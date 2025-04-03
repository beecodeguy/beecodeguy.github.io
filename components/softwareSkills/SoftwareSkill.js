import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
export default function SoftwareSkill() {
    return (React.createElement("div", null,
        React.createElement("div", { className: "software-skills-main-div" },
            React.createElement("ul", { className: "dev-icons" }, skillsSection.softwareSkills.map((skills, i) => {
                return (React.createElement("li", { key: i, className: "software-skill-inline", name: skills.skillName },
                    React.createElement("i", { className: skills.fontAwesomeClassname }),
                    React.createElement("p", null, skills.skillName)));
            })))));
}
//# sourceMappingURL=SoftwareSkill.js.map
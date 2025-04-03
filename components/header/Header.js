import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting, workExperiences, skillsSection, openSource, blogSection, talkSection, achievementSection, resumeSection } from "../../portfolio";
function Header() {
    const { isDark } = useContext(StyleContext);
    const viewExperience = workExperiences.display;
    const viewOpenSource = openSource.display;
    const viewSkills = skillsSection.display;
    const viewAchievement = achievementSection.display;
    const viewBlog = blogSection.display;
    const viewTalks = talkSection.display;
    const viewResume = resumeSection.display;
    return (React.createElement(Headroom, null,
        React.createElement("header", { className: isDark ? "dark-menu header" : "header" },
            React.createElement("a", { href: "/", className: "logo" },
                React.createElement("span", { className: "grey-color" }, " <"),
                React.createElement("span", { className: "logo-name" }, greeting.username),
                React.createElement("span", { className: "grey-color" }, "/>")),
            React.createElement("input", { className: "menu-btn", type: "checkbox", id: "menu-btn" }),
            React.createElement("label", { className: "menu-icon", htmlFor: "menu-btn", style: { color: "white" } },
                React.createElement("span", { className: isDark ? "navicon navicon-dark" : "navicon" })),
            React.createElement("ul", { className: isDark ? "dark-menu menu" : "menu" },
                viewSkills && (React.createElement("li", null,
                    React.createElement("a", { href: "#skills" }, "Skills"))),
                viewExperience && (React.createElement("li", null,
                    React.createElement("a", { href: "#experience" }, "Work Experiences"))),
                viewBlog && (React.createElement("li", null,
                    React.createElement("a", { href: "#blogs" }, "Blogs"))),
                viewResume && (React.createElement("li", null,
                    React.createElement("a", { href: "#resume" }, "Resume"))),
                React.createElement("li", null,
                    React.createElement("a", { href: "#contact" }, "Contact Me")),
                React.createElement("li", null,
                    React.createElement("a", null,
                        React.createElement(ToggleSwitch, null)))))));
}
export default Header;
//# sourceMappingURL=Header.js.map
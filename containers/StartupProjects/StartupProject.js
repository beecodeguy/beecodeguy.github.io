import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function StartupProject() {
    function openUrlInNewTab(url) {
        if (!url) {
            return;
        }
        var win = window.open(url, "_blank");
        win.focus();
    }
    const { isDark } = useContext(StyleContext);
    if (!bigProjects.display) {
        return null;
    }
    return (React.createElement(Fade, { bottom: true, duration: 1000, distance: "20px" },
        React.createElement("div", { className: "main", id: "projects" },
            React.createElement("div", null,
                React.createElement("h1", { className: "skills-heading" }, bigProjects.title),
                React.createElement("p", { className: isDark
                        ? "dark-mode project-subtitle"
                        : "subTitle project-subtitle" }, bigProjects.subtitle),
                React.createElement("div", { className: "projects-container" }, bigProjects.projects.map((project, i) => {
                    return (React.createElement("div", { key: i, className: isDark
                            ? "dark-mode project-card project-card-dark"
                            : "project-card project-card-light" },
                        project.image ? (React.createElement("div", { className: "project-image" },
                            React.createElement("img", { src: project.image, alt: project.projectName, className: "card-image" }))) : null,
                        React.createElement("div", { className: "project-detail" },
                            React.createElement("h5", { className: isDark ? "dark-mode card-title" : "card-title" }, project.projectName),
                            React.createElement("p", { className: isDark ? "dark-mode card-subtitle" : "card-subtitle" }, project.projectDesc),
                            project.footerLink ? (React.createElement("div", { className: "project-card-footer" }, project.footerLink.map((link, i) => {
                                return (React.createElement("span", { key: i, className: isDark ? "dark-mode project-tag" : "project-tag", onClick: () => openUrlInNewTab(link.url) }, link.name));
                            }))) : null)));
                }))))));
}
//# sourceMappingURL=StartupProject.js.map
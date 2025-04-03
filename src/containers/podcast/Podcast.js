import React, { useContext } from "react";
import "./Podcast.scss";
import { podcastSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Podcast() {
    const { isDark } = useContext(StyleContext);
    if (!podcastSection)
        console.error("podcastSection object for Podcast section is missing");
    if (!podcastSection.display) {
        return null;
    }
    return (React.createElement(Fade, { bottom: true, duration: 1000, distance: "20px" },
        React.createElement("div", { className: "main" },
            React.createElement("div", { className: "podcast-header" },
                React.createElement("h1", { className: "podcast-header-title" }, podcastSection.title),
                React.createElement("p", { className: isDark
                        ? "dark-mode podcast-header-subtitle"
                        : "subTitle podcast-header-subtitle" }, podcastSection.subtitle)),
            React.createElement("div", { className: "podcast-main-div" }, podcastSection.podcast.map((podcastLink, i) => {
                if (!podcastLink) {
                    console.log(`Podcast link for ${podcastSection.title} is missing`);
                }
                return (React.createElement("div", { key: i },
                    React.createElement("iframe", { className: "podcast", src: podcastLink, frameBorder: "0", scrolling: "no", title: "Podcast" })));
            })))));
}
//# sourceMappingURL=Podcast.js.map
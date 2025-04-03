import React, { useContext } from "react";
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import { talkSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Talks() {
    const { isDark } = useContext(StyleContext);
    if (!talkSection.display) {
        return null;
    }
    return (React.createElement(Fade, { bottom: true, duration: 1000, distance: "20px" },
        React.createElement("div", { className: "main", id: "talks" },
            React.createElement("div", { className: "talk-header" },
                React.createElement("h1", { className: "talk-header-title" }, talkSection.title),
                React.createElement("p", { className: isDark
                        ? "dark-mode talk-header-subtitle"
                        : "subTitle talk-header-subtitle" }, talkSection.subtitle),
                talkSection.talks.map((talk, i) => {
                    return (React.createElement(TalkCard, { key: i, talkDetails: {
                            title: talk.title,
                            subtitle: talk.subtitle,
                            slides_url: talk.slides_url,
                            event_url: talk.event_url,
                            image: talk.image,
                            isDark
                        } }));
                })))));
}
//# sourceMappingURL=Talks.js.map
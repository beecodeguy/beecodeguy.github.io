import React from "react";
import "./TalkCard.scss";
export default function TalkCard({ talkDetails }) {
    return (React.createElement("div", null,
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle" },
                React.createElement("div", { className: "diagonal-fill" }),
                React.createElement("div", { className: "talk-card-title" }, talkDetails.title),
                React.createElement("p", { className: "talk-card-subtitle" }, talkDetails.subtitle),
                React.createElement("div", { className: "card-footer-button-div" },
                    React.createElement("a", { href: talkDetails.slides_url, target: "_", className: "talk-button" }, "Slides"),
                    React.createElement("a", { href: talkDetails.event_url, target: "_", className: "talk-button" }, "Event"))))));
}
//# sourceMappingURL=TalkCard.js.map
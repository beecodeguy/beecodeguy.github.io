import React from "react";
import "./AchievementCard.scss";
export default function AchievementCard({ cardInfo, isDark }) {
    function openUrlInNewTab(url, name) {
        if (!url) {
            console.log(`URL for ${name} not found`);
            return;
        }
        var win = window.open(url, "_blank");
        win.focus();
    }
    return (React.createElement("div", { className: isDark ? "dark-mode certificate-card" : "certificate-card" },
        React.createElement("div", { className: "certificate-image-div" },
            React.createElement("img", { src: cardInfo.image, alt: cardInfo.imageAlt || "Card Thumbnail", className: "card-image" })),
        React.createElement("div", { className: "certificate-detail-div" },
            React.createElement("h5", { className: isDark ? "dark-mode card-title" : "card-title" }, cardInfo.title),
            React.createElement("p", { className: isDark ? "dark-mode card-subtitle" : "card-subtitle" }, cardInfo.description)),
        React.createElement("div", { className: "certificate-card-footer" }, cardInfo.footer.map((v, i) => {
            return (React.createElement("span", { key: i, className: isDark ? "dark-mode certificate-tag" : "certificate-tag", onClick: () => openUrlInNewTab(v.url, v.name) }, v.name));
        }))));
}
//# sourceMappingURL=AchievementCard.js.map
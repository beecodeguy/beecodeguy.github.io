import React, { useContext } from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
    const { isDark } = useContext(StyleContext);
    if (!achievementSection.display) {
        return null;
    }
    return (React.createElement(Fade, { bottom: true, duration: 1000, distance: "20px" },
        React.createElement("div", { className: "main", id: "achievements" },
            React.createElement("div", { className: "achievement-main-div" },
                React.createElement("div", { className: "achievement-header" },
                    React.createElement("h1", { className: isDark
                            ? "dark-mode heading achievement-heading"
                            : "heading achievement-heading" }, achievementSection.title),
                    React.createElement("p", { className: isDark
                            ? "dark-mode subTitle achievement-subtitle"
                            : "subTitle achievement-subtitle" }, achievementSection.subtitle)),
                React.createElement("div", { className: "achievement-cards-div" }, achievementSection.achievementsCards.map((card, i) => {
                    return (React.createElement(AchievementCard, { key: i, isDark: isDark, cardInfo: {
                            title: card.title,
                            description: card.subtitle,
                            image: card.image,
                            imageAlt: card.imageAlt,
                            footer: card.footerLink
                        } }));
                }))))));
}
//# sourceMappingURL=Achievement.js.map
import React, { useContext } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function WorkExperience() {
    const { isDark } = useContext(StyleContext);
    if (workExperiences.display) {
        return (React.createElement("div", { id: "experience" },
            React.createElement(Fade, { bottom: true, duration: 1000, distance: "20px" },
                React.createElement("div", { className: "experience-container", id: "workExperience" },
                    React.createElement("div", null,
                        React.createElement("h1", { className: "experience-heading" }, "Experiences"),
                        React.createElement("div", { className: "experience-cards-div" }, workExperiences.experience.map((card, i) => {
                            return (React.createElement(ExperienceCard, { key: i, isDark: isDark, cardInfo: {
                                    company: card.company,
                                    desc: card.desc,
                                    date: card.date,
                                    companylogo: card.companylogo,
                                    role: card.role,
                                    descBullets: card.descBullets
                                } }));
                        })))))));
    }
    return null;
}
//# sourceMappingURL=WorkExperience.js.map
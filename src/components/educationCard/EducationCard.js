import React, { createRef, useContext } from "react";
import { Fade, Slide } from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";
export default function EducationCard({ school }) {
    const imgRef = createRef();
    const GetDescBullets = ({ descBullets }) => {
        return descBullets
            ? descBullets.map((item, i) => (React.createElement("li", { key: i, className: "subTitle" }, item)))
            : null;
    };
    const { isDark } = useContext(StyleContext);
    if (!school.logo)
        console.error(`Image of ${school.name} is missing in education section`);
    return (React.createElement("div", null,
        React.createElement(Fade, { left: true, duration: 1000 },
            React.createElement("div", { className: "education-card" },
                school.logo && (React.createElement("div", { className: "education-card-left" },
                    React.createElement("img", { crossOrigin: "anonymous", ref: imgRef, className: "education-roundedimg", src: school.logo, alt: school.schoolName }))),
                React.createElement("div", { className: "education-card-right" },
                    React.createElement("h5", { className: "education-text-school" }, school.schoolName),
                    React.createElement("div", { className: "education-text-details" },
                        React.createElement("h5", { className: isDark
                                ? "dark-mode education-text-subHeader"
                                : "education-text-subHeader" }, school.subHeader),
                        React.createElement("p", { className: `${isDark ? "dark-mode" : ""} education-text-duration` }, school.duration),
                        React.createElement("p", { className: "education-text-desc" }, school.desc),
                        React.createElement("div", { className: "education-text-bullets" },
                            React.createElement("ul", null,
                                React.createElement(GetDescBullets, { descBullets: school.descBullets }))))))),
        React.createElement(Slide, { left: true, duration: 2000 },
            React.createElement("div", { className: "education-card-border" }))));
}
//# sourceMappingURL=EducationCard.js.map
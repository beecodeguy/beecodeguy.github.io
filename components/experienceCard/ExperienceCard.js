import React, { useState, createRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";
export default function ExperienceCard({ cardInfo, isDark }) {
    const [colorArrays, setColorArrays] = useState([]);
    const imgRef = createRef();
    function getColorArrays() {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
    }
    function rgb(values) {
        return typeof values === "undefined"
            ? null
            : "rgb(" + values.join(", ") + ")";
    }
    const GetDescBullets = ({ descBullets, isDark }) => {
        return descBullets
            ? descBullets.map((item, i) => (React.createElement("li", { key: i, className: isDark ? "subTitle dark-mode-text" : "subTitle" }, item)))
            : null;
    };
    return (React.createElement("div", { className: isDark ? "experience-card-dark" : "experience-card" },
        React.createElement("div", { style: { background: rgb(colorArrays) }, className: "experience-banner" },
            React.createElement("div", { className: "experience-blurred_div" }),
            React.createElement("div", { className: "experience-div-company" },
                React.createElement("h5", { className: "experience-text-company" }, cardInfo.company)),
            React.createElement("img", { crossOrigin: "anonymous", ref: imgRef, className: "experience-roundedimg", src: cardInfo.companylogo, alt: cardInfo.company, onLoad: () => getColorArrays() })),
        React.createElement("div", { className: "experience-text-details" },
            React.createElement("h5", { className: isDark
                    ? "experience-text-role dark-mode-text"
                    : "experience-text-role" }, cardInfo.role),
            React.createElement("h5", { className: isDark
                    ? "experience-text-date dark-mode-text"
                    : "experience-text-date" }, cardInfo.date),
            React.createElement("p", { className: isDark
                    ? "subTitle experience-text-desc dark-mode-text"
                    : "subTitle experience-text-desc" }, cardInfo.desc),
            React.createElement("ul", null,
                React.createElement(GetDescBullets, { descBullets: cardInfo.descBullets, isDark: isDark })))));
}
//# sourceMappingURL=ExperienceCard.js.map
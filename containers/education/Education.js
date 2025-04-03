import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo } from "../../portfolio";
export default function Education() {
    if (educationInfo.display) {
        return (React.createElement("div", { className: "education-section", id: "education" },
            React.createElement("h1", { className: "education-heading" }, "Education"),
            React.createElement("div", { className: "education-card-container" }, educationInfo.schools.map((school, index) => (React.createElement(EducationCard, { key: index, school: school }))))));
    }
    return null;
}
//# sourceMappingURL=Education.js.map
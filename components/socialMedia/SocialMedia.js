import React from "react";
import "./SocialMedia.scss";
import { socialMediaLinks } from "../../portfolio";
export default function socialMedia() {
    const IconVariants = {
        github: '',
        linkedin: '',
        mail: '',
        facebook: '',
        medium: '',
        discord: '',
        instagram: '',
        twitter: '',
        stackoverflow: '',
    };
    if (!socialMediaLinks.display) {
        return null;
    }
    return (React.createElement("div", { className: "social-media-div" },
        socialMediaLinks.github ? (React.createElement("a", { href: socialMediaLinks.github, className: "icon-button github", target: "_blank", rel: "noopener noreferrer" },
            React.createElement("i", { className: "fab fa-github" }),
            React.createElement("span", null))) : null,
        socialMediaLinks.linkedin ? (React.createElement("a", { href: socialMediaLinks.linkedin, className: "icon-button linkedin", target: "_blank", rel: "noopener noreferrer" },
            React.createElement("i", { className: "fab fa-linkedin-in" }),
            React.createElement("span", null))) : null,
        socialMediaLinks.gmail ? (React.createElement("a", { href: `mailto:${socialMediaLinks.gmail}`, className: "icon-button google", target: "_blank", rel: "noopener noreferrer" },
            React.createElement("i", { className: "fas fa-envelope" }),
            React.createElement("span", null))) : null,
        socialMediaLinks.gitlab ? (React.createElement("a", { href: socialMediaLinks.gitlab, className: "icon-button gitlab", target: "_blank", rel: "noopener noreferrer" },
            React.createElement("i", { className: "fab fa-gitlab" }),
            React.createElement("span", null))) : null,
        socialMediaLinks.facebook ? (React.createElement("a", { href: socialMediaLinks.facebook, className: "icon-button facebook", target: "_blank", rel: "noopener noreferrer" },
            React.createElement("i", { className: "fab fa-facebook-f" }),
            React.createElement("span", null))) : null,
        socialMediaLinks.instagram ? (React.createElement("a", { href: socialMediaLinks.instagram, className: "icon-button instagram", target: "_blank", rel: "noopener noreferrer" },
            React.createElement("i", { className: "fab fa-instagram" }),
            React.createElement("span", null))) : null,
        socialMediaLinks.twitter ? (React.createElement("a", { href: socialMediaLinks.twitter, className: "icon-button twitter", target: "_blank", rel: "noopener noreferrer" },
            React.createElement("i", { className: "fab fa-twitter" }),
            React.createElement("span", null))) : null,
        socialMediaLinks.medium ? (React.createElement("a", { href: socialMediaLinks.medium, className: "icon-button medium", target: "_blank", rel: "noopener noreferrer" },
            React.createElement("i", { className: "fab fa-medium" }),
            React.createElement("span", null))) : null,
        socialMediaLinks.stackoverflow ? (React.createElement("a", { href: socialMediaLinks.stackoverflow, className: "icon-button stack-overflow", target: "_blank", rel: "noopener noreferrer" },
            React.createElement("i", { className: "fab fa-stack-overflow" }),
            React.createElement("span", null))) : null,
        socialMediaLinks.kaggle ? (React.createElement("a", { href: socialMediaLinks.kaggle, className: "icon-button kaggle", target: "_blank", rel: "noopener noreferrer" },
            React.createElement("i", { className: "fab fa-kaggle" }),
            React.createElement("span", null))) : null));
}
//# sourceMappingURL=SocialMedia.js.map
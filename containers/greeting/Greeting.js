import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import siteHeaderAnim from "../../../public/assets/lottie/site_header_anim.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
export default function Greeting() {
    const { isDark } = useContext(StyleContext);
    if (!greeting.displayGreeting) {
        return null;
    }
    return (React.createElement(Fade, { bottom: true, duration: 1000, distance: "40px" },
        React.createElement("div", { className: "greet-main", id: "greeting" },
            React.createElement("div", { className: "greeting-main" },
                React.createElement("div", { className: "greeting-text-div" },
                    React.createElement("div", null,
                        React.createElement("h1", { className: isDark ? "dark-mode greeting-text" : "greeting-text" },
                            " ",
                            greeting.title,
                            " ",
                            React.createElement("span", { className: "wave-emoji" }, emoji("👋"))),
                        React.createElement("p", { className: isDark
                                ? "dark-mode greeting-text-p"
                                : "greeting-text-p subTitle" }, greeting.subTitle),
                        React.createElement(SocialMedia, null),
                        React.createElement("div", { className: "button-greeting-div" },
                            React.createElement(Button, { text: "Contact me", href: "#contact" }),
                            greeting.resumeLink && (React.createElement("a", { href: greeting.resumeLink, download: "Resume.pdf", className: "download-link-button", target: "_blank", rel: "beecode-site noreferrer" },
                                React.createElement(Button, { text: "Download my resume" })))))),
                React.createElement("div", { className: "greeting-image-div" }, illustration.animated ? (React.createElement(DisplayLottie, { animationData: siteHeaderAnim, style: { height: "600px" } })) : (React.createElement("img", { alt: "man sitting on table", src: require("../../assets/images/manOnTable.svg") })))))));
}
//# sourceMappingURL=Greeting.js.map
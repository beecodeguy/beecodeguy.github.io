import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import contactMeAnim from "../../../public/assets/lottie/contact_me_anim.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Contact() {
    const { isDark } = useContext(StyleContext);
    return (React.createElement(Fade, { bottom: true, duration: 1000, distance: "20px" },
        React.createElement("div", { className: "main contact-margin-top", id: "contact" },
            React.createElement("div", { className: "contact-div-main" },
                React.createElement("div", { className: "contact-header" },
                    React.createElement("h1", { className: "heading contact-title flex items-center" }, contactInfo.title),
                    React.createElement("p", { className: isDark
                            ? "dark-mode contact-subtitle"
                            : "subTitle contact-subtitle" }, contactInfo.subtitle),
                    React.createElement("div", { className: isDark ? "dark-mode contact-text-div" : "contact-text-div" },
                        contactInfo.number && (React.createElement(React.Fragment, null,
                            React.createElement("a", { className: "contact-detail flex items-center gap-2 text-green-500 hover:text-green-500", href: "tel:" + contactInfo.number },
                                contactInfo.number,
                                " ",
                                React.createElement(FaWhatsapp, { size: 36 })),
                            React.createElement("br", null),
                            React.createElement("br", null))),
                        React.createElement("a", { className: "contact-detail-email flex items-center gap-2 text-orange-500", href: "mailto:" + contactInfo.email_address },
                            contactInfo.email_address,
                            " ",
                            React.createElement(MdEmail, { size: 36 })),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(SocialMedia, null))),
                React.createElement("div", { className: "contact-image-div" }, illustration.animated ? (React.createElement(DisplayLottie, { animationData: contactMeAnim, style: { height: "400px" } })) : (React.createElement("img", { alt: "Man working", src: require("../../assets/images/contactMailDark.svg") })))))));
}
//# sourceMappingURL=Contact.js.map
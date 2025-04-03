import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
export default function Footer() {
    const { isDark } = useContext(StyleContext);
    return (React.createElement(Fade, { bottom: true, duration: 1000, distance: "5px" },
        React.createElement("div", { className: "footer-div" },
            React.createElement("p", { className: "dark-mode footer-text flex justify-center items-center gap-1" }, emoji("Made with ❤️ by Beecodeguy")))));
}
//# sourceMappingURL=Footer.js.map
import React, { useContext } from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { greeting, splashScreen } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
export default function SplashScreen() {
    const { isDark } = useContext(StyleContext);
    return (React.createElement("div", { className: isDark ? "dark-mode splash-container" : "splash-container" },
        React.createElement("div", { className: "splash-animation-container" },
            React.createElement(DisplayLottie, { animationData: splashScreen.animation })),
        React.createElement("div", { className: "splash-title-container" },
            React.createElement("span", { className: "grey-color" }, " <"),
            React.createElement("span", { className: "splash-title" }, greeting.username),
            React.createElement("span", { className: "grey-color" }, "/>"))));
}
//# sourceMappingURL=SplashScreen.js.map
import React, { useState, useContext } from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";
const ToggleSwitch = () => {
    const { isDark } = useContext(StyleContext);
    const [isChecked, setChecked] = useState(isDark);
    const styleContext = useContext(StyleContext);
    return (React.createElement("label", { className: "switch" },
        React.createElement("input", { type: "checkbox", checked: isDark, onChange: () => {
                styleContext.changeTheme();
                setChecked(!isChecked);
            } }),
        React.createElement("span", { className: "slider round" },
            React.createElement("span", { className: "emoji" }, isChecked ? emoji("🌜") : emoji("☀️")))));
};
export default ToggleSwitch;
//# sourceMappingURL=ToggleSwitch.js.map
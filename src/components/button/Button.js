import React from "react";
import "./Button.scss";
export default function Button({ text, className, href, newTab }) {
    return (React.createElement("div", { className: className },
        React.createElement("a", { className: "main-button", href: href, target: newTab && "_blank" }, text)));
}
//# sourceMappingURL=Button.js.map
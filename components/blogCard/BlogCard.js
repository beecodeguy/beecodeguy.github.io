import React from "react";
import "./BlogCard.scss";
export default function BlogCard({ blog, isDark }) {
    function openUrlInNewTab(url, name) {
        if (!url) {
            console.log(`URL for ${name} not found`);
            return;
        }
        var win = window.open(url, "_blank");
        win.focus();
    }
    return (React.createElement("div", { onClick: () => openUrlInNewTab(blog.url, blog.title) },
        React.createElement("div", { className: isDark ? "blog-container dark-mode" : "blog-container" },
            React.createElement("a", { className: isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card", href: "#blog" },
                React.createElement("h3", { className: isDark ? "small-dark blog-title" : "blog-title" }, blog.title),
                React.createElement("p", { className: isDark ? "small-dark small" : "small" }, blog.description),
                React.createElement("div", { className: "go-corner" },
                    React.createElement("div", { className: "go-arrow" }, "\u2192"))))));
}
//# sourceMappingURL=BlogCard.js.map
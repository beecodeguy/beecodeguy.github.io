import React, { useState, useEffect, useContext } from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Blogs() {
    const { isDark } = useContext(StyleContext);
    const [mediumBlogs, setMediumBlogs] = useState([]);
    function setMediumBlogsFunction(array) {
        setMediumBlogs(array);
    }
    //Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
    function extractTextContent(html) {
        return typeof html === "string"
            ? html
                .split("p>")
                .filter(el => !el.includes(">"))
                .map(el => el.replace("</", ".").replace("<", ""))
                .join(" ")
            : NaN;
    }
    // useEffect(() => {
    //   const fetchMediumBlogs = async () => {
    //     const mediumRss = await fetch("https://medium.com/feed/@beecodeguy");
    //     console.log(mediumRss);
    //   };
    //   fetchMediumBlogs();
    // }, []);
    useEffect(() => {
        if (blogSection.displayMediumBlogs === "true") {
            const getProfileData = () => {
                fetch("/blogs.json")
                    .then(result => {
                    if (result.ok) {
                        return result.json();
                    }
                })
                    .then(response => {
                    setMediumBlogsFunction(response.items);
                })
                    .catch(function (error) {
                    console.error(`${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`);
                    setMediumBlogsFunction("Error");
                    blogSection.displayMediumBlogs = "false";
                });
            };
            getProfileData();
        }
    }, []);
    if (!blogSection.display) {
        return null;
    }
    return (React.createElement(Fade, { bottom: true, duration: 1000, distance: "20px" },
        React.createElement("div", { className: "main h-fit", id: "blogs" },
            React.createElement("div", { className: "grid gap-2" },
                React.createElement("h1", { className: "blog-header-text" }, blogSection.title),
                React.createElement("p", { className: isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle" }, blogSection.subtitle)),
            React.createElement("div", { className: "blog-main-div" },
                React.createElement("div", { className: "blog-text-div" }, blogSection.displayMediumBlogs !== "true" ||
                    mediumBlogs === "Error"
                    ? blogSection.blogs.map((blog, i) => {
                        return (React.createElement(BlogCard, { key: i, isDark: isDark, blog: {
                                url: blog.url,
                                image: blog.image,
                                title: blog.title,
                                description: blog.description
                            } }));
                    })
                    : mediumBlogs.map((blog, i) => {
                        return (React.createElement(BlogCard, { key: i, isDark: isDark, blog: {
                                url: blog.link,
                                title: blog.title,
                                description: extractTextContent(blog.content)
                            } }));
                    }))))));
}
//# sourceMappingURL=Blogs.js.map
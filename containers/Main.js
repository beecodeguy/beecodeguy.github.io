import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import AvailableProjects from "./sellProjects/available-projects";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";
const Main = () => {
    const [isDark, setIsDark] = useLocalStorage("isDark", true);
    const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);
    useEffect(() => {
        if (splashScreen.enabled) {
            const splashTimer = setTimeout(() => setIsShowingSplashAnimation(false), splashScreen.duration);
            return () => {
                clearTimeout(splashTimer);
            };
        }
    }, []);
    const changeTheme = () => {
        setIsDark(!isDark);
    };
    return (React.createElement("div", { className: isDark ? "dark-mode" : "" },
        React.createElement(StyleProvider, { value: { isDark: isDark, changeTheme: changeTheme } }, isShowingSplashAnimation && splashScreen.enabled ? (React.createElement(SplashScreen, null)) : (React.createElement(React.Fragment, null,
            React.createElement(Header, null),
            React.createElement(Profile, null),
            React.createElement(Greeting, null),
            React.createElement(AvailableProjects, null),
            React.createElement(Skills, null),
            React.createElement(StackProgress, null),
            React.createElement(Education, null),
            React.createElement(WorkExperience, null),
            React.createElement(Projects, null),
            React.createElement(StartupProject, null),
            React.createElement(Blogs, null),
            React.createElement(Twitter, null),
            React.createElement(ScrollToTopButton, null),
            React.createElement(Footer, null))))));
};
export default Main;
//# sourceMappingURL=Main.js.map
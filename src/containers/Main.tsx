import React from "react";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Blogs from "./blogs/Blogs";
import Education from "./education/Education";
import Profile from "./profile/Profile";
import AvailableProjects from "./sellProjects/available-projects";

import "./Main.scss";

const Main = () => {
  return (
    <>
      <Profile />
      <Greeting />
      <AvailableProjects />
      <Skills />
      <StackProgress />
      <Education />
      <WorkExperience />
      <Projects />
      <StartupProject />
      {/* <Achievement /> */}
      <Blogs />
      {/* <Talks /> */}
      {/* <Twitter /> */}
      {/* <Podcast /> */}
    </>
  );
};

export default Main;

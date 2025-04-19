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
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="np-beezay"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://np.linkedin.com/in/np-beezay?trk=profile-badge"
        ></a>
      </div>
    </>
  );
};

export default Main;

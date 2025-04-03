/* Change this file to get your personal Portfolio */
// To change portfolio colors globally go to the  _globalColor.scss file
import emoji from "react-easy-emoji";
import splashAnimation from "../public/assets/lottie/splashAnimation"; // Rename to your file name for custom animation
// Splash Screen
const splashScreen = {
    enabled: true, // set false to disable splash screen
    animation: splashAnimation,
    duration: 2000 // Set animation duration as per your animation
};
// Summary And Greeting Section
const illustration = {
    animated: true // Set to false to use static SVG
};
const greeting = {
    username: "beecodeguy",
    title: "Hi all, I'm beecodeguy(beezay)",
    subTitle: emoji("A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Typescript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
    resumeLink: 
    // "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
    "https://drive.google.com/file/d/1FPBiip-LYIssDUs7OlljpU-11BmlsWed/view?usp=drive_link", // Set to empty to hide the button
    displayGreeting: true // Set false to hide this section, defaults to true
};
// Social Media Links
const socialMediaLinks = {
    github: "https://github.com/beecodeguy",
    linkedin: "https://www.linkedin.com/in/np-beezay/",
    gmail: "beecodeguy@gmail.com",
    // gitlab: "https://gitlab.com/saadpasta",
    facebook: "https://www.facebook.com/np.beezay",
    medium: "https://medium.com/@beecodeguy",
    // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
    // Instagram, Twitter and Kaggle are also supported in the links!
    // To customize icons and social links, tweak src/components/SocialMedia
    display: true // Set true to display this section, defaults to false
};
// Skills Section
const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji("⚡ Craft exceptional user experiences (UX) and visually stunning user interfaces (UI) for web and mobile applications."),
        emoji("⚡ Optimize frontend performance through code-splitting, lazy loading, and efficient caching strategies for faster load times and smoother user interactions"),
        emoji("⚡ Utilize state management libraries like Redux or MobX to manage complex application states and improve scalability and maintainability of frontend codebases."),
        emoji("⚡ Develop responsive layouts and UI components using modern CSS frameworks like Bootstrap, Tailwind CSS, or Material-UI to ensure seamless user experiences across devices and screen sizes. "),
        emoji("⚡ Implement real-time updates and notifications using WebSockets or server-sent events to keep users informed of important changes without constant page refreshes "),
        emoji("⚡  Implement authentication and authorization mechanisms using JWT tokens or OAuth protocols to secure frontend applications and protect sensitive user data "),
        emoji("⚡ Stay updated with the latest frontend technologies and best practices, continuously learning and experimenting with new tools and frameworks to improve development workflows and deliver cutting-edge solutions. "),
        emoji("⚡ Integrate third-party services like Firebase, AWS, or DigitalOcean for functionalities beyond core application logic (e.g., authentication, storage, analytics). "),
        emoji("⚡ Version control systems "),
        emoji("⚡ Integration of Payment System like Stripe, (or Nepal Payment system as Esewa, Khalti, connectIPS, more) "),
        emoji("⚡ Building SaaS, Server Side Website, SEO, Digital Marketing Stratigies and much more ")
    ],
    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
    softwareSkills: [
        {
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "sass",
            fontAwesomeClassname: "fab fa-sass"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        // {
        //   skillName: "swift",
        //   fontAwesomeClassname: "fab fa-swift"
        // },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "Markdown",
            fontAwesomeClassname: "fab fa-brands fa-markdown"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        // {
        //   skillName: "aws",
        //   fontAwesomeClassname: "fab fa-aws"
        // },
        {
            skillName: "firebase",
            fontAwesomeClassname: "fas fa-fire"
        },
        {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "docker",
            fontAwesomeClassname: "fab fa-docker"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};
// Education Section
const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
        {
            schoolName: "Sharda University",
            logo: "./assets/images/sharda_university.png",
            subHeader: "Bachelor of Mechanical Engineering",
            duration: "August 2013 - June 2017",
            desc: "Graduated as Mechanical Engineer with roficient in object-oriented programming, C#, and Python, with a solid foundation in CAD modeling and finite element analysis. Combined mechanical engineering principles with computational methods, enhancing problem-solving and project management skills in team environments.",
            descBullets: []
        }
        // {
        //   schoolName: "Stanford University",
        //   logo: require("./assets/images/stanfordLogo.png"),
        //   subHeader: "Bachelor of Science in Computer Science",
        //   duration: "September 2013 - April 2017",
        //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
        //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        // }
    ]
};
// Your top 3 proficient stacks/tech experience
const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "NextJS/ReactJs", //Insert stack or technology you have experience in
            progressPercentage: "95%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Typescript", //Insert stack or technology you have experience in
            progressPercentage: "80%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Design/Responsivenes", //Insert stack or technology you have experience in
            progressPercentage: "80%" //Insert relative proficiency in percentage
        },
        {
            Stack: "NodeJs", //Insert stack or technology you have experience in
            progressPercentage: "70%" //Insert relative proficiency in percentage
        },
        {
            Stack: "External Packages(Firebase/MongoDb..)",
            progressPercentage: "70%"
        }
    ],
    displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};
// Work experience section
const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Lead Developer(Javascript)",
            company: "Sharebigya",
            companylogo: "./assets/images/sharebigya.png",
            date: "April 2023 – Present",
            desc: "Driving innovation in the world of stock market-related analytics through our cutting-edge SaaS solutions. In my role as a Lead Developer, I have played a pivotal part in shaping the frontend architecture and user experience of our revolutionary platform.",
            descBullets: [
                "Frontend Architecture with NextJs-14/Tailwindcss/Storybook/Eslint",
                "Closely worked with Designer to ensure seamless UI/UX",
                "Reviewing the Junior Devs tasks, assigining tasks and overseeing overall project status to meet the deadline",
                "Enterprise Level Portfolio Management System as per roles to different Users within the Organization",
                "Complex and Dynamic Charts using (PLOTLYJS/React APEX CHARTS)",
                "Integration of Trading View Library and it's charts with Save Feature and Custom Buttons",
                "Ensuring proper data structure and closely working with backend devs for backend structure"
            ]
        },
        {
            role: "Senior Frontend Dev",
            company: "Vinhood",
            companylogo: "./assets/images/VINHOOD_LOGO.png",
            date: "Feb 2023 – Present",
            desc: "Creating a new way of communication between consumers and producers/distributors of products with the Taste Ecosystem. In my role as Senior Dev, I create optimized codebase with shareable components and getting aligned with Designs by meeting the deadline for each release",
            descBullets: [
                "Worked on Retailer Based Authentication and Theming according to Retailer Colors",
                "Converted React Components to Styled React Components",
                "Created Client side PDF generation",
                "Created Inhouse Design System with close collaboration with Designer and building optimized React Components (shareable across different env)",
                "Authentication module, Retailer module, and Dynamic Test cases modules as per different env",
                "Worked on ReduxJs (using redux toolkit and slices), ReactPDF, QRCode Generator (& Scanner) within App"
            ]
        },
        {
            role: "Freelance (Mentorship)",
            company: "Freelance",
            companylogo: "./assets/images/kotuko.png",
            date: "Feb 2022 - Present",
            desc: "Experienced in working on a contract basis, specializing in minor fixes, mentorship, and advanced front-end development using Next.js 14 and TypeScript. Skilled in delivering high-quality, efficient solutions and guiding clients through best practices in modern web development.",
            descBullets: [
                "Working on Different NPM Packages to help other devs",
                "Completely converted bootstrap to styled components",
                "Refactored Data fetching logic using proper state management and React Query",
                "Deploying NextJS-14 with Cpanel",
                "Created E-commerce and Travel Platform with CMS with complete control over Client Side",
                "Worked with html CANVA to create canva like Desigining approach to help client create their own template to show on Digital Board"
            ]
        }
    ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
};
// Some big projects you have worked on
const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
        {
            image: "/assets/images/sharebigya.png",
            projectName: "Sharebigya",
            projectDesc: `ShareBigya.com is Nepal's top source for stock market knowledge, offering in-depth analysis and user-friendly visualization tools for reliable market research. Whether you're an experienced investor or a beginner, our platform provides diverse features to enhance decision-making. Making informed choices is vital for financial success, and ShareBigya is committed to assisting you.`,
            footerLink: [
                {
                    name: "Visit Website",
                    url: "http://sharebigya.com/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: "/assets/images/property_png.jpg",
            projectName: "Property Wizard",
            projectDesc: "Property Wizard Limited is one of the newest yet most trustworthy Brokerage Firms for stock trading in Nepal. The company received the license from the market regulator, the Securities Board of Nepal (SEBON), and is a member of Nepal Stock Exchange Ltd. (NEPSE).",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://propertywizardlimited.com/"
                }
            ]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc
const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
    achievementsCards: [
        {
            title: "Google Code-In Finalist",
            subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: "./assets/images/codeInLogo.webp",
            imageAlt: "Google Code-In Logo",
            footerLink: [
                {
                    name: "Certification",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                },
                {
                    name: "Award Letter",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                },
                {
                    name: "Google Code-in Blog",
                    url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: "/assets/images/googleAssistantLogo.webp",
            imageAlt: "Google Assistant Action Logo",
            footerLink: [
                {
                    name: "View Google Assistant Action",
                    url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
                }
            ]
        },
        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: "/assets/images/pwaLogo.webp",
            imageAlt: "PWA Logo",
            footerLink: [
                { name: "Certification", url: "" },
                {
                    name: "Final Project",
                    url: "https://pakistan-olx-1.firebaseapp.com/"
                }
            ]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};
// Blogs Section
const blogSection = {
    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [
        {
            url: "https://medium.com/@beecodeguy/debugging-the-next-js-errors-auth-js-bd24c58d35f7",
            title: "Debugging the NEXT.JS Errors: AUTH JS:",
            description: "Looking for simpler and small handy package to secure your app with OTP entry. Here is how optimized OTP for your React Application."
        },
        {
            url: "https://medium.com/@beecodeguy/simplifying-otp-entry-with-simple-react-package-beecode-otp-ui-5c65fba46008",
            title: "Simplify OTP Entry with Simple React Package",
            description: "Looking for simpler and small handy package to secure your app with OTP entry. Here is how optimized OTP for your React Application."
        },
        {
            url: "https://medium.com/@beecodeguy/documenting-function-component-4c6088dba7d9",
            title: "Easy way to Document your Own Component",
            description: "JSDoc is a lifesaver for developers, offering an efficient solution for generating detailed documentation tailored specifically for JavaScript. By embedding comments directly into your code, JSDoc simplifies the documentation process, fostering a codebase that’s not only well-documented but also easy to navigate."
        }
    ],
    display: true // Set false to hide this section, defaults to true
};
// Talks Sections
const talkSection = {
    title: "TALKS",
    subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};
// Podcast Section
const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: true // Set false to hide this section, defaults to true
};
// Resume Section
const resumeSection = {
    title: "Resume",
    subtitle: "Feel free to download my resume",
    // Please Provide with Your Podcast embeded Link
    display: true // Set false to hide this section, defaults to true
};
const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+977-9802714323",
    email_address: "beecodeguy@gmail.com"
};
// Twitter Section
const twitterDetails = {
    userName: "nepalibeezay", //Replace "twitter" with your twitter username without @
    display: true // Set true to display this section, defaults to false
};
const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer
export { illustration, greeting, socialMediaLinks, splashScreen, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails, isHireable, resumeSection };
//# sourceMappingURL=portfolio.js.map
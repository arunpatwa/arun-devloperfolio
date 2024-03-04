/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Arun Patwa",
  title: "Hi, I'm Arun",
  subTitle: emoji(
    "A Passionate Full Stack Software Developer &  AI-ML Enthusiastic 🚀. Currently looking for an opportunity to utilize my technical skills in a challenging working environment and become a valuable asset to the organization."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_ZeA-bDIVX5QjfGO7eqnmcv7h4YrrUin/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arunpatwa",
  linkedin: "https://www.linkedin.com/in/arunpatwa-iit/",
  gmail: "arunpatwa.iit@gmail.com",
  leetcode : "https://leetcode.com/Sparker_AS/",
  // medium: "https://medium.com/@arunspatwa.14",
  // gitlab: "https://gitlab.com/https://gitlab.com/arunpatwa1",
  // facebook: "https://www.facebook.com/arun.patwa.583",
  // stackoverflow: "https://stackoverflow.com/users/19699835/arun-patwa",
  // qwiklabs : "https://www.cloudskillsboost.google/public_profiles/48810fe0-70af-47a2-acec-1c76c9bbdde0",
  twitter: "https://twitter.com/ArunSha54513629",
  // instagram:"https://www.instagram.com/as_sparker/",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: " FULL STACK | AI-ML | DEEP LEARNING 🚀 WANTS TO EXPLORE TECH STACK",
  skills: [
    emoji(
      "⚡ Developed Web Applications and Machine Learning Projects"
      ),
      emoji("⚡ Data Strucutre Algorithm: 750+ Problems Solved, Knight on Leetcode 1890 Rating with 20 Badge & 380 days streak"),
    emoji(
      "⚡ Exploring DevOps Knows Docker and learning Jenkins"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [

    {
      skillName: "C++",
      fizz_icon: "icon-cplusplus",
      color:"cyan"

    },

    {
      skillName: "Python",
      fizz_icon: "icon-python",
      color:"green"

    },
    {
      skillName: "JavaScript",
      fizz_icon: "icon-javascript-alt",
      color:"red"
    },
    {
      skillName: "Reactjs",
      fizz_icon: "icon-reactjs",
      color:"cyan"
    },
    {
      skillName: "Nodejs",
      fizz_icon: "icon-nodejs",
      color:"green"
    },
    {
      skillName: "HTML",
      fizz_icon: "icon-html5-alt",
      color:"orange"

    },
    {
      skillName: "CSS",
      fizz_icon: "icon-css3-alt",
      color: "maroon"
    
    },
    {
      skillName: "Mongodb",
      fizz_icon: "icon-mongodb",
      color:"green",
    
    },
    {
      skillName: "SQL:-Database",
      fizz_icon: "icon-mysql-alt",
      color:"cyan"
    },
    // {
    //   skillName: "Redis:-Database",
    //   fizz_icon: "icon-redis",
    //   color:"red"
    // },
    {
      skillName: "Firebase",
      fizz_icon: "icon-fire-alt",
      color:"orange"
    },
 
    {
      skillName: "Docker",
      fizz_icon: "icon-docker",
      color:"cyan"
    },
    // {
    //   skillName: "Jenkins",
    //   fontAwesomeClassname: "fab fa-jenkins",
    //   color:"maroon"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute Of Technology, Mandi (IIT Mandi)",
      logo: require("./assets/images/iitmandi.jpg"),
      subHeader: "Major in Electrical and Minor in Computer Science Engineering",
      duration: "Oct 2020 - May 2024",
      desc: "Volunteered in Publicity Team for Xpecto - IIT Mandi Technical Fest ",
      descBullets: [
        "Worked for Startup in IIT Mandi Catalyst on decreasing the cost of travelling and Cleared Stage-1 of Entrepreneurship Practicum ",
        "Team Leader of Design Practicum and Fabricated a Working Prototype of Hand Rehabilizer"
      ]
    },
    {
      schoolName: "Jawahar Navodaya Vidyalaya, Datia, Madhya Pradesh",
      logo: require("./assets/images/jnv.png"),
      subHeader: "Maths, Physics, Chemistry",
      duration: "July 2012 - April 2019",
      desc: " Class XII : 91.6 % and X : 9.4 / 10 CGPA",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "SDE Intern ( AI-ML + WebDev )",
      company: "Plugseal Innovations  ",
      companylogo: require("./assets/images/plugsealLogo.jpeg"),
      date: "Dec 2023 – Feb 2024",
      desc: "Tech Used: Python,Langchain,FastAPI,Streamlit, Web Scrapping, OCR, OpenCV, Keras, NLP",
      descBullets: [
        `AI-Generated Personalized Cold-Email: Implemented with web
        scraping to gather targeted user data, utilized the Langchain
        framework.
        `,`Utilized OCR technology to extract information from images and
        PDFs, converting it into text and verifying for KYC authentication. specialized in
        handling documents such as Aadhar, PAN, voter cards, and passports`
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Willings.Inc",
      companylogo: require("./assets/images/willingsLogo.jpeg"),
      date: "April 2023 – June 2023",
      desc: "Tech Used: JavaScript, ReactJS, Firebase",
      descBullets:[
        `Contributed to galk portal, recruitment site and introduced an
        automated interview scheduling feature.
        `,
        `Implemented a dynamic notification panel for notifying candidate and
        the company resulting in smoother interview scheduling process and 
        reducing waiting time.`
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile:"true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on`

const bigProjects = {
  title: "🛠️ Projects 👨‍💻 ",
  subtitle: "Own Personal Project and Company/Startup Where I have worked",
  projects: [
   
    {
      image: require("./assets/images/connect-it.gif"),
      projectName: "ConnectIt:Chat and Video Calls",
      projectDesc: "Developed a online meeting platform for chatting, creating chat rooms and joining calls.Implemented with feature of collaborative work virtual whiteboard and allowing note-taking during meeting.The whiteboard and notes can be downloaded",
      footerLink: [
        {
          name: "Demo",
          url: "https://connect-it-chat-video-calls.netlify.app/"
        },
        {
          name: "Github Link",
          url: "https://github.com/arunpatwa/connect-it"
        }
      ]
    },
   
   
    {
      image: require("./assets/images/pathfinding.gif"),
      projectName: "Path Finding Visualizer",
      projectDesc: "Designed Web Application showcasing working Visualization of Djikstra’s Algorithm, Breadth First Search (BFS), and Depth First Search (DFS). Implemented algorithms used in finding the shortest path between metro stations, Network Routing Protocols(BGP)",
      footerLink: [
        {
          name: "Demo",
          url: "https://arunpatwa.github.io/path-finding-visualizer/"
        },
        {
          name: "Github Link",
          url: "https://github.com/arunpatwa/path-finding-visualizer"
        }
        //  you can add extra buttons here.
      ]
    },
    
    {
      image: require("./assets/images/salesDash.png"),
      projectName: "SalesDash",
      projectDesc: `Developed a responsive sales management system utilizing Express.js
      and MongoDB. Utilized bar, pie, and line graphs to illustrate detailed
      revenue and client statistics.
      • Integrated efficient CRUD operations on customer data through the
      API for streamlined data management and updates.`,   
      footerLink: [
        {
          name: "Demo",
          url: "https://arunpatwa-salesdash.netlify.app/"
        },
        {
          name: "Github Link",
          url: "https://github.com/arunpatwa/salesDash"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/crowdfunding.png"),
    //   projectName: "",
    //   projectDesc: "Created a Fundraiser Platform where user can create campaign, donate by transaction of  Etherium through the Metamask Wallet.• Smart Contract are written using Solidity• Interaction done with the smart Solidity Contract and deployed to the blockchain using ThirdWeb",
    //     footerLink: [
    //     {
    //       name: "Demo",
    //       url: "https://fundraiser-web3app.netlify.app/"
    //     },
    //     {
    //       name: "Github Link",
    //       url: "https://github.com/arunpatwa/crowdfunding"
    //     }
    //   ]
    // },
    {
      image: require("./assets/images/disneyplus.gif"),
      projectName: "Disney-Plus-2.0",
      projectDesc: `Deployed a web application which showcase cartoon movies collection
      with recommendation. Implemented responsive design and integrated
      Firebase to seamlessly store data, handle Google authentication, and
      provide real-time updates to the application.
      `,     footerLink: [
        {
          name: "Demo",
          url: "https://disneyplus-arun.netlify.app//"
        },
        {
          name: "Github Link",
          url: "https://github.com/arunpatwa/disneyplus-clone-arun"
        }
      ]
    },
    {
      image: require("./assets/images/cinematic_engineer.jpg"),
      projectName: "Cinematic-Engineer",
      projectDesc: "Created Content Based Recommender System recommends movies similar to the movie user likes and analyses the sentiments on the reviews given by the user for that movie also provides details such as overview, genre, rating, runtime, top cast and recommended movies",
      footerLink: [
        {
          name: "Demo",
          url: ""
        },
        {
          name: "Github Link",
          url: "https://github.com/arunpatwa/cinematic-engineer"
        }
      ]
    },
    {
      image: require("./assets/images/textsummarizer.png"),
      projectName: "Text Summarizer",
      projectDesc: "Developed Text-Summarizer which helps to convert the long text into a summarized, short, meaning-full text.It can show the summary as per the desired word count given to it.Implemented by using Hugging-face NLP Summarisation API" ,
      footerLink: [
        {
          name: "Demo",
          url: "https://arunspatwa.pythonanywhere.com/"
        },
        {
          name: "Github Link",
          url: "https://github.com/arunpatwa/Text_Summarizer"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji(" 🏅 Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Leetcode Rating 1890 🎯 (Knight)  ",
      subtitle:
        `🚀 Streak of 390 Days and Ranks Under 4.3% Of Global Users  
        🧿 Rank 323 /21263 Weekly Contest 364
        🏅 Recieved Total 20 Badges 

in Leetcode`,
      image: require("./assets/images/leetcodeLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Leetcode Profile",
          url: "https://leetcode.com/Sparker_AS"
        },
      ]
    },
    {
      title: "Google Cloud Program : Qwiklabs",
      subtitle:
        "Completed 30 Days Google Cloud Challenge on the Qwiklabs, Earned Google Cloud Essential Badge and completed 15 Activities",
      image: require("./assets/images/Google-Cloud-Logo.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "View My Pofile",
          url: "https://www.cloudskillsboost.google/public_profiles/48810fe0-70af-47a2-acec-1c76c9bbdde0"
        }
      ]
    },

    {
      title: "Bits and Bites Of Computer Networking Web",
      subtitle: "Completed Certifcation from Coursera on the Understanding of Networking",
      image: require("./assets/images/courseraLogo.webp"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/f04c3c425538e07f33eb95d6837bfd59"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    },
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    " "
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6266752643",
  email_address: "arunpatwa.iit@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};

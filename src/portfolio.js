/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ammar's Portfolio",
  description:
    "I'm a Colombo based full stack developer, passionate about cloud computing and full stack development, and a CS graduate.",
  og: {
    title: "Ammar Raneez's Development Portfolio",
    type: "website",
    url: "https://ammarraneez.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Ammar",
  logo_name: "Ammar Raneez",
  nickname: "Call me Amu, cuz almost everyone does",
  subTitle:
    "I'm a Colombo-based full stack developer, passionate about blockchain, cloud computing & iOS development, and a CS graduate. Quick problem solver, analytical thinker & an avid puzzle lover with the ability to solve complex problems under pressure.",
  resumeLink:
    "https://drive.google.com/file/d/1JB25xL05kWWJAHAjbFnus59FfxDJRmDP/view",
  githubProfile: "https://github.com/Ammar-Raneez",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Ammar-Raneez",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ammar-raneez",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "StackOverFlow",
    link: "https://stackoverflow.com/users/13134768/ammar",
    fontAwesomeIcon: "fa-stack-overflow", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#F58025", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Medium",
    link: "https://ammarraneez.medium.com/",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Dev.to",
    link: "https://dev.to/ammarraneez",
    fontAwesomeIcon: "fa-dev", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ammarraneez@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/ammar.raneez.3/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/__ammarrrrr__/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      gifName: "data_science",
      skills: [
        "Develop deep learning & machine learning models to be used for both web & mobile platforms.",
        "Experienced in working with computer vision, NLP, transfer learning & time series forecasting.",
        "Experienced in data cleaning, analysis & visualization.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack | Cross Platform | Native Development",
      fileName: "FullStackImg",
      gifName: "full_stack_dev",
      skills: [
        "Design infrastructure, databases and architect cloud deployments.",
        "Develop full stack web applications.",
        "Develop cross-platform mobile applications using Flutter and React Native.",
        "Develop iOS applications using Swift and SwiftUI.",
        "Develop CI/CD pipelines and automate infrastructure.",
        "Comfortable in using third-party libraries and frameworks.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#1572B6",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "Svelte",
          fontAwesomeClassname: "simple-icons:svelte",
          style: {
            color: "#FF3E00",
          },
        },
        {
          skillName: "Vue",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#4FC08D",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:next-dot-js",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "#E0234E",
          },
        },
        {
          skillName: "Deno",
          fontAwesomeClassname: "simple-icons:deno",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "simple-icons:swift",
          style: {
            color: "#F05137",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#E10098",
          },
        },
        {
          skillName: "Prisma",
          fontAwesomeClassname: "simple-icons:prisma",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "DynamoDB",
          fontAwesomeClassname: "simple-icons:amazondynamodb",
          style: {
            color: "#4053D6",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      gifName: "cloud_computing",
      skills: [
        "Experienced in working on multiple cloud platforms.",
        "Experienced in building & designing serverless architectures.",
        "Develop multiple serverless applications & architectures using AWS CDK & serverless framework.",
        "Deploy deep learning and machine learning models on the cloud.",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0076CE",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Serverless Framework",
          fontAwesomeClassname: "simple-icons:serverless",
          style: {
            color: "#FF0000",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#00C7B7",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000"
          },
        },
      ],
    },
    {
      title: "Tools | Design",
      fileName: "DesignImg",
      gifName: "tools",
      skills: [
        "Design user interfaces for mobile and web applications.",
        "Experienced in a variety of tools.",
      ],
      softwareSkills: [
        {
          skillName: "Kaggle",
          fontAwesomeClassname: "simple-icons:kaggle",
          style: {
            color: "#20BEFF",
          },
        },
        {
          skillName: "Hasura",
          fontAwesomeClassname: "simple-icons:hasura",
          style: {
            color: "#0B192A",
          },
        },
        {
          skillName: "Auth0",
          fontAwesomeClassname: "simple-icons:auth0",
          style: {
            color: "#EB5424",
          },
        },
        {
          skillName: "Expo",
          fontAwesomeClassname: "simple-icons:expo",
          style: {
            color: "#000020",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#F37626",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Grunt",
          fontAwesomeClassname: "simple-icons:grunt",
          style: {
            color: "#FAA918",
          },
        },
        {
          skillName: "Gulp",
          fontAwesomeClassname: "simple-icons:gulp",
          style: {
            color: "#CF4647",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "VSCode",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#007ACC",
          },
        },
        {
          skillName: "Xcode",
          fontAwesomeClassname: "simple-icons:xcode",
          style: {
            color: "#156EE2",
          },
        },
        {
          skillName: "JetBrains",
          fontAwesomeClassname: "simple-icons:jetbrains",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/_ammar_",
    },
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#0056D2",
      },
      profileLink:
        "https://www.coursera.org/user/b075574015a3451caa9d89af60606360",
    },
    {
      siteName: "Udemy",
      iconifyClassname: "simple-icons:udemy",
      style: {
        color: "#A435F0",
      },
      profileLink: "https://www.udemy.com/user/ammar-raneez/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Westminster",
      subtitle: "Bsc. Computer Science",
      logo_path:
        "https://www.westminster.ac.uk/themes/uow_theme/images/navbar-westminster-logo.svg",
      alt_name: "UOW",
      duration: "2019 - 2023",
      descriptions: [
        "I am proficient in various computer science theoretical concepts, including data structures, algorithms, DBMS, design & development.",
        "I have also experienced more intermediate concepts such as AI, database modelling and software design & architecture.",
        "Apart from this, I have done courses on deep learning, data science, cloud computing - mainly focused on AWS, and full stack web & mobile development.",
        "I have also received merits for a couple of hackathons and coding challenges, even winning some.",
        "I obtained a 1st class honours with a cumulative average of 89.3%.",
      ],
      website_link: "https://www.westminster.ac.uk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- DeepLearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/VDMPDJDZ5U3K",
      alt_name: "deeplearning.ai",
      color_code: "#ff000088",
      overlay_bg_color: "#ff0000",
    },
    {
      title: "Deep Learning",
      subtitle: "- DeepLearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/KY6SJ66ZAWQM",
      alt_name: "deeplearning.ai",
      color_code: "#ff000088",
      overlay_bg_color: "#ff0000",
    },
    {
      title: "AI For Medicine",
      subtitle: "- DeepLearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/E3ZCCDMB65CQ",
      alt_name: "deeplearning.ai",
      color_code: "#ff000088",
      overlay_bg_color: "#ff0000",
    },
    {
      title: "TensorFlow Developer",
      subtitle: "- DeepLearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/E3ZCCDMB65CQ",
      alt_name: "deeplearning.ai",
      color_code: "#ff000088",
      overlay_bg_color: "#ff0000",
    },
    {
      title: "TensorFlow: Data and Deployment",
      subtitle: "- DeepLearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/5XMHEGTKMK4U",
      alt_name: "deeplearning.ai",
      color_code: "#ff000088",
      overlay_bg_color: "#ff0000",
    },
    {
      title: "Mathematics For Machine Learning",
      subtitle: "- Coursera | Imperial College London",
      logo_path: "imperial_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#01538E44",
      overlay_bg_color: "#01538E",
    },
    {
      title: "Swift 5 iOS Application Developer",
      subtitle: "- Coursera | LearnQuest",
      logo_path: "learnquest_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/LWU39PXEKB56",
      alt_name: "learnquest",
      color_code: "#01118F44",
      overlay_bg_color: "#01118F",
    },
    {
      title: "Fullstack Web Development With React",
      subtitle: "- Coursera | Hong Kong University",
      logo_path: "hongkong_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/SGTU9KWH8EVP",
      alt_name: "HK",
      color_code: "#A7833844",
      overlay_bg_color: "#A78338",
    },
    {
      title: "Fullstack Web Development With Angular",
      subtitle: "- Coursera | Hong Kong University",
      logo_path: "hongkong_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/34AENMW2G7SN",
      alt_name: "HK",
      color_code: "#A7833844",
      overlay_bg_color: "#A78338",
    },
    {
      title: "Object Oriented Programming in Java",
      subtitle: "- Coursera | UC San Diego",
      logo_path: "ucsd_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/44KNMTEPECLB",
      alt_name: "CaliforniaSanDiego",
      color_code: "#00135444",
      overlay_bg_color: "#001354",
    },
    {
      title: "Python (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/54b6107b078b",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    {
      title: "Java (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/85b6ce7fa255",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    {
      title: "JavaScript (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/9f22bcea6f23",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    // {
    //   title: "CSS (Basic)",
    //   subtitle: "- Hackerrank",
    //   logo_path: "hackerrank_logo.png",
    //   certificate_link: "https://www.hackerrank.com/certificates/65d65608f05f",
    //   alt_name: "hackerrank",
    //   color_code: "#2EC86644",
    //   overlay_bg_color: "#2EC866",
    // },
    {
      title: "React (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/cc9aa24d347b",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    {
      title: "Angular (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/93e7b04d9493",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    {
      title: "Problem Solving (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/25f97cf5bbc3",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    {
      title: "SQL (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/1261abe583de",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    {
      title: "Responsive Web Design",
      subtitle: "- FreeCodeCamp",
      logo_path: "fcc_logo.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/ammuuu/responsive-web-design",
      alt_name: "hackerrank",
      color_code: "#11111144",
      overlay_bg_color: "#111111",
    },
  ],
};

const competitions = {
  competitions: [
    {
      title: "IEEE CCWC 2023",
      logo_path: "ccwc_logo.png",
      subtitle: "- Liquid Time-stochasticity (LTS) algorithm proposal & publication",
      certificate_link:
        "https://ieeexplore.ieee.org/document/10099071",
      alt_name: "ccwc-publication",
      color_code: "#4786F144",
      overlay_bg_color: "#4786F1",
    },
    {
      title: "Coderally 2 (2021)",
      subtitle: "- 1st Place",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/contests/coderally2/leaderboard",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    {
      title: "Cutting Edge (2021)",
      subtitle: "- 2nd Place | Poster Design",
      logo_path: "iit_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1yfyk_Cri2wbK_3dwt8-cUSZK6ZhkxGQV/view?usp=sharing",
      alt_name: "iit",
      color_code: "#ff000088",
      overlay_bg_color: "#ff0000",
    },
    {
      title: "PyHack (2021)",
      subtitle: "- 4th Place",
      logo_path: "iit_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/15jHsDZ0HEDqLBpwbg9zYd2syiFex0rDn/view?usp=sharing",
      alt_name: "iit",
      color_code: "#ff000088",
      overlay_bg_color: "#ff0000",
    },
    {
      title: "Coderally (2020)",
      subtitle: "- 2nd Place",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/contests/coderally/leaderboard",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    {
      title: "Datathon (2020)",
      subtitle: "- Merit Pass | Within Top 10",
      logo_path: "sliit_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/17t0sF8hkZlrLDGpUi7gpfvUyZIFaPO8K/view?usp=sharing",
      alt_name: "sliit",
      color_code: "#00007B88",
      overlay_bg_color: "#00007B",
    },
    {
      title: "Toastmasters International",
      subtitle: "- Innovative Planning Lv 1",
      logo_path: "toastmasters_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1jxPaIyNUVm5S65brLWB5O9C4YfPKn3WB/view?usp=sharing",
      alt_name: "toastmasters",
      color_code: "#004B6E88",
      overlay_bg_color: "#004B6E",
    },
    {
      title: "Toastmasters International",
      subtitle: "- Innovative Planning Lv 2",
      logo_path: "toastmasters_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1jlky25SwQXzcU6a3XC1AsftAFZRgvLAI/view?usp=sharing",
      alt_name: "toastmasters",
      color_code: "#004B6E88",
      overlay_bg_color: "#004B6E",
    },
    {
      title: "Toastmasters International",
      subtitle: "- Innovative Planning Lv 3",
      logo_path: "toastmasters_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/11DVkjyxzKWG8VG8QrX2uYJUITGgSfLce/view?usp=sharing",
      alt_name: "toastmasters",
      color_code: "#004B6E88",
      overlay_bg_color: "#004B6E",
    },
    {
      title: "Toastmasters International",
      subtitle: "- Innovative Planning Lv 4",
      logo_path: "toastmasters_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1tt7Z8erzjNO-fNd9_pRvbjB40CfkZ5aX/view?usp=sharing",
      alt_name: "toastmasters",
      color_code: "#004B6E88",
      overlay_bg_color: "#004B6E",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteers",
  description:
    "I have worked on many aspects of development, including Machine Learning & Deep Learning, Full Stack Mobile & Web Development, User Interfaces & database design, and Cloud Infrastructure.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "99X",
          logo_path: "99x_logo.png",
          duration: "May 2023 - PRESENT",
          description: [
            "Playing the role of a Data Scientist and and Machine Learning Engineer, developing several intelligent models to suite business requirements.",
            "Playing the role of a full-stack developer working on several aspects across the application.",
            "Leading the company's AWS Focus Group."
          ],
          bgColor: "#FF6962",
          bgColorFaded: "#FF696233",
          headColor: "#331C7A",
        },
        {
          title: "Technical Writer",
          company: "Medium | DEV | Tealfeed",
          logo_path: ["dev_logo.png", "tealfeed_logo.png", "medium_logo.png"],
          duration: "Feb 2022 - May 2023",
          description: [
            "Technical writer on Medium on various publications (Engineering at 99X, Enlear Academy).",
            "Technical blogger on DEV - a place where coders share, stay up-to-date and grow their careers.",
            "Creator on Tealfeed - a global community of knowledge seekers who want to share their knowledge and learn from the experiences of others.",
          ],
          bgColor: "#000000",
          bgColorFaded: "#00000033",
          headColor: "#008080",
        },
        {
          title: "Trainee Software Engineer",
          company: "99X",
          logo_path: "99x_logo.png",
          duration: "Jul 2021 - Jul 2022",
          description: [
            "Implemented static and dynamic UI screens using Angular.",
            "Implemented services in the backend using serverless framework with AWS & MongoDB.",
            "Resolved bugs on the frontend, backend & cloud services.",
            "Implemented a POC for AWS CDK using multiple services, including a CI/CD pipeline.",
            "Implemented multiple screens using React Native, infrastructure using CDK & GraphQL, and services using the serverless framework, AppSync & Amplify.",
            "Implemented the authentication flow v1, using Cognito & CDK.",
            "Implemented the mobile application deployment pipeline using App Center.",
            "Organized webinars as the 'Tea n Tech Innovative' webinar lead.",
            "Marketed the company at the university career fair.",
            "Conducted Facebook live sessions & internal peer-to-peer sessions.",
            "Acted as the Buddy of a fellow intern."
          ],
          bgColor: "#FF6962",
          bgColorFaded: "#FF696233",
          headColor: "#331C7A",
        },
        {
          title: "Freelance Web | Mobile Application Developer",
          company: "IIT",
          logo_path: "iit_logo.png",
          duration: "Nov 2020 - Aug 2022",
          description: [
            "Developed E-Ophthalmologist - a diabetic retinopathy diagnosing & maintenance application built for a Business Information Systems students thesis. Flutter, Firebase, Azure and Python with TensorFlow, OpenCV, Keras & Scikit-Learn were used.",
            "Developed Ijazah-Tours - a tourism-based platform that facilitates the procedure of booking accommodations, creating quotations etc., for tour guides, for a thesis of a Business Management student. React, TypeScript & Firebase were used.",
            "Developed CanCure, an extension of our project ONCO that covers bone and kidney-related cancers. Flutter, Firebase, Azure, and Python with TensorFlow, OpenCV, Keras & Scikit-Learn were used.",
          ],
          bgColor: "#E90000",
          bgColorFaded: "#E9000033",
          headColor: "#000000",
        },
        {
          title: "Full-stack Developer",
          company: "Freelance",
          logo_path: "freelance_logo.png",
          duration: "Jan 2021 - May 2023",
          description: [
            "Developed Vontech - a construction-based startup using React.js, TypeScript, Firebase, and Node.js with Express & MongoDB.",
            "Developed the Official Website of Amirah Gems & Fine Jewellery - a complete E-Commerce jewellery application using React.js, TypeScript & Firebase.",
            "Developed Masjib-al-Maqbool's Jummuah registration site - an application to reserver Jummuah tokens to visitors during times of restriction.",
          ],
          bgColor: "#00ff00",
          bgColorFaded: "#00ff0033",
          headColor: "#476930",
        },
        {
          title: "Full-stack Developer",
          company: "Niftron",
          logo_path: "niftron_logo.png",
          duration: "Jan 2021 - Jul 2021 | Jul 2022 - May 2023",
          description: [
            "Worked on an decentralized asset investment management platform using Next, Express & Prisma",
            "Working on a decentralized user profiles application using React.js, TypeScript, Google Cloud & AWS with the serverless framework.",
            "Developed an NFT Marketplace using React.js, TypeScript, Redux & Material-UI for the client-side, and AWS with the serverless framework & MongoDB for the server-side.",
            "Developed a blockchain-based gift card tokenization solution using React.js, TypeScript, Redux & Material-UI for the client-side, AWS with the serverless framework & MongoDB for the server-side, and Auth0 for a complete user authentication flow.",
            "Developed the UI for a blockchain marketing platform using React.js, TypeScript & MongoDB.",
            "Developed the UI for a blockchain ticketing solution, using React.js, TypeScript & Ant design.",
          ],
          bgColor: "#2160B2",
          bgColorFaded: "#2160B233",
          headColor: "#F0070D",
        },
        {
          title: "Freelance Backend Developer",
          company: "Inforwaves",
          logo_path: "inforwaves_logo.png",
          duration: "May 2021 - Jul 2021",
          description: [
            "Worked on the backend of Execution Excellence, creating several APIs in a microservice architecture to maximize the separation of concerns, using AWS RDS and Nest.js with TypeORM.",
          ],
          bgColor: "#9BC5D9",
          bgColorFaded: "#9BC5D933",
          headColor: "#4A8396",
        },
        {
          title: "Full-stack Developer",
          company: "The Radiant",
          logo_path: "radiant_logo.png",
          duration: "Jan 2021 - May 2021",
          description: [
            "Worked on the Official Website of Amirah Gems & Fine Jewellery, a complete E-Commerce jewellery application using React.js with TypeScript & Firebase for authentication & data persistence.",
          ],
          bgColor: "#00634A",
          bgColorFaded: "#00634A33",
          headColor: "#23395d",
        },
      ],
    },
    {
      title: "Volunteers",
      experiences: [
        {
          title: "Author community guided projects",
          company: "Coursera",
          company_url: "https://www.coursera.org/",
          logo_path: "coursera_logo.png",
          duration: "Feb 2021 - May 2021",
          description: [
            "Was invited as one of the ten members in the world to create community guided projects, where I created and published community guided projects for the Coursera learner community.",
          ],
          bgColor: "#0052C7",
          bgColorFaded: "#0052C733",
          headColor: "#1A5892",
        },
        {
          title: "Postman Student Expert",
          company: "Postman",
          company_url: "https://www.postman.com/",
          logo_path: "postman_logo.png",
          duration: "Nov 2021 - PRESENT",
          description: [
            "Helping out students in Postman, contributing as a Student Expert.",
          ],
          bgColor: "#FD6C35",
          bgColorFaded: "#FD6C3533",
          headColor: "#676767",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          description: [
            "Contributed to the new alpha project of GitHub: Community Exchange, with a student repository for the community to learn from.",
            "Actively creating multiple projects. My repo is filled with repositories of topics ranging from frontend development to data science and blockchain.",
          ],
          bgColor: "#1B1F23",
          bgColorFaded: "#1B1F2333",
          headColor: "#430083",
        },
        {
          title: "Google Developer Group Member",
          company: "Google",
          company_url: "http://google.com/",
          logo_path: "google_logo.png",
          duration: "July 2019 - PRESENT",
          description: [
            "Took part in various events organised by the Google developer club, including DevFest, HashCode and Kickstart.",
          ],
          bgColor: "#33A852",
          bgColorFaded: "#33A85233",
          headColor: "#4284F3",
        },
        {
          title: "Sergeant At Arms",
          company: "Toastmasters International",
          company_url: "https://www.toastmasters.org/",
          logo_path: "toastmasters_logo.png",
          duration: "Jun 2020 - Jun 2021",
          description: [
            "Served as the Sergeant-At-Arms of the IIT Toastmasters club.",
          ],
          bgColor: "#770E29",
          bgColorFaded: "#770E2933",
          headColor: "#003F62",
        },
        {
          title: "Codesprint '21 Lead Developer",
          company: "Informatics Institute of Technology (IIT Campus)",
          company_url: "https://www.iit.ac.lk/",
          logo_path: "iit_logo.png",
          duration: "Nov 2020 - Jan 2021",
          description: [
            "Was the lead developer in creating the Codesprint revamped website.",
          ],
          bgColor: "#E90000",
          bgColorFaded: "#E9000033",
          headColor: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projects = {
  title: "Projects",
  description:
    "I contribute to and create many projects, from simple to complex subjects, old or new. With a mindset of always having to learn, my GitHub profile is always busy with repositories consisting of the latest new technology that I have learnt.",
  avatar_image_path: "projects_image.svg",
  projects: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNjkwNzUwMQQ=",
      name: "Liquid Time-stochasticity networks",
      url: "https://github.com/Ammar-Raneez/Liquid-Time-stochasticity-networks",
      description:
        "The LTS network proposed in my publication that demonstrates flexibility useful for volatile data modelling.",
      overlayBgColor: "#1990FF",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [
        { name: "TensorFlow", iconifyClass: "logos-tensorflow" },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNjkwNzUwMZR=",
      name: "BitForecast",
      url: "https://github.com/Ammar-Raneez/BitForecast",
      description:
        "A Bitcoin forecasting system utilising the LTS algorithm and multiple factors.",
      overlayBgColor: "#1990FF",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [
        { name: "React", iconifyClass: "logos-react" },
        { name: "Firebase", iconifyClass: "logos-firebase" },
        { name: "Python", iconifyClass: "logos-python" },
        { name: "TensorFlow", iconifyClass: "logos-tensorflow" },
        { name: "Heroku", iconifyClass: "logos-heroku" },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNjkwNzUwMjM=",
      name: "ONCO",
      url: "https://github.com/Ammar-Raneez/SDGP-ONCO",
      description:
        "A thoracic (breast, skin and lung) cancer diagnosis, prognosis & management application.",
      overlayBgColor: "#00ffff",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [
        { name: "Flutter", iconifyClass: "logos-flutter" },
        { name: "Firebase", iconifyClass: "logos-firebase" },
        { name: "Python", iconifyClass: "logos-python" },
        { name: "TensorFlow", iconifyClass: "logos-tensorflow" },
        { name: "Azure", iconifyClass: "logos-azure" },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXDSDWAXZQSXZCSFXASAZQ=",
      name: "E-Ophthalmologist",
      url: "https://github.com/Ammar-Raneez/E-Ophthalmologist_UI",
      description: "A diabetic retinopathy diagnosis & management application.",
      overlayBgColor: "#264C59",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [
        { name: "Flutter", iconifyClass: "logos-flutter" },
        { name: "Firebase", iconifyClass: "logos-firebase" },
        { name: "Python", iconifyClass: "logos-python" },
        { name: "TensorFlow", iconifyClass: "logos-tensorflow" },
        { name: "Azure", iconifyClass: "logos-azure" },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNzM1MTI1NTE=",
      name: "SimpleScript",
      url: "https://github.com/Ammar-Raneez/Simple_Script",
      description:
        "A programming language with most of the basic functionality.",
      overlayBgColor: "#6C1C20",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [{ name: "Python", iconifyClass: "logos-python" }],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyMDIxNDc4ODA=",
      name: "Tinder Clone",
      url: "https://github.com/Ammar-Raneez/RN_Tinder_Clone",
      description: "A Clone of Tinder supporting most of the core features.",
      overlayBgColor: "#E84B68",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [
        { name: "React Native", iconifyClass: "logos-react" },
        { name: "Firebase", iconifyClass: "logos-firebase" },
        { name: "Expo", iconifyClass: "logos-expo" },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkxNTU5NTE3NTk=",
      name: "PL Guv'nor",
      url: "https://github.com/Ammar-Raneez/PL_Guvnor",
      description:
        "A premier league management application that aims to simulate the Premier League.",
      overlayBgColor: "#3A0243",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [
        { name: "Java", iconifyClass: "logos-java" },
        { name: "Play", iconifyClass: "logos-play" },
        { name: "Angular", iconifyClass: "logos-angular" },
      ],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyMDIxNQZALKLX=",
      name: "Text Editor Pro",
      url: "https://github.com/Ammar-Raneez/UCSD_Text_Editor_Pro",
      description:
        "A Text Editor with spell check, autocomplete & edit distance functionality.",
      overlayBgColor: "#ff00ff",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [{ name: "Java", iconifyClass: "logos-java" }],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkxODAZZQSDAFAZ=",
      name: "AWS CDK Auction Service",
      url: "https://github.com/Ammar-Raneez/cdk-poc",
      description:
        "An auction service built with multiple AWS services, including a CI/CD pipeline.",
      overlayBgColor: "#156ee2",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [
        { name: "AWS CDK", iconifyClass: "logos-aws" },
        { name: "Lambda", iconifyClass: "logos-aws-lambda" },
      ],
    },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkxODIxMjk3NTQ=",
    //   name: "Movie Recommender Engine",
    //   url: "https://github.com/Ammar-Raneez/UCSD_Earthquake_Volcano_Map",
    //   description: "A movie recommendation engine that is built without ML.",
    //   overlayBgColor: "#1D8E62",
    //   overlayTextColor: "#fff",
    //   isFork: false,
    //   languages: [{ name: "Java", iconifyClass: "logos-java" }],
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyMDIxNDc4OJP=",
    //   name: "BitPredict",
    //   url: "https://github.com/Ammar-Raneez/Bit_Predict",
    //   description: "An end-to-end solution to forecast bitcoin.",
    //   overlayBgColor: "#FF9900",
    //   overlayTextColor: "#fff",
    //   isFork: false,
    //   languages: [
    //     { name: "Python", iconifyClass: "logos-python" },
    //     { name: "TensorFlow", iconifyClass: "logos-tensorflow" },
    //   ],
    // },
  ],
};

// Journey page
const journey = {
  title: "My Journey",
  subtitle: "A Walkthrough Of My Journey",
  description:
    "Within the past three years, I have grown so much, from not being interested in computer science and not writing a single line of code to who I am now. Of course, I still have a long way to go :)",
  completeJourney: [
    {
      id: "SDASDAASDADXASXZ1",
      date: "Jun 2019",
      description: [
        "I just completed my ALs, (Chemistry, Physics & Math - I know, the question is, 'How did I end up with CS?') and wasn't sure what my next step would be. I was initially considering mechatronics engineering and discovered it would require some coding skills." 
      ],
    },
    {
      id: "SDASDAASDADXASXZ2",
      date: "Jul 2019",
      description: [
        "I began exploring the world of programming and wrote my very first HTML file, experimenting with simple styles such as background and font colors. I found it fascinating to see the immediate results and the practical applications it could have in the real world."
      ],
    },
    {
      id: "SDASDAASDADXASXZ3",
      date: "Aug 2019",
      description: [
        "My interest in technology grew exponentially as the demand for 'data science' started to rise. I explored several data science degrees offered in the country, which primarily focused on business analytics with only a limited emphasis on practical AI development or coding. As a result, I was not inclined to pursue a degree in that particular field."
      ],
    },
    {
      id: "SDASDAASDADXASXZ4",
      date: "Sep 2019",
      description: [
        "After thoroughly researching various universities for my higher studies, I made the decision to enroll in the computer science degree program at IIT. Opting for a CS degree would allow me to acquire comprehensive knowledge and skills in practical development, as well as gain exposure to other crucial aspects of the field. Additionally, I recognized the importance of obtaining the necessary business acumen alongside technical proficiency in order to thrive in the ever-evolving tech industry."
      ],
    },
    {
      id: "SDASDAASDADXASXZ5",
      date: "Oct 2019",
      description: [
        "I embarked on my journey of learning basic HTML, CSS, and JS, venturing into the world of programming. As someone with minimal coding experience, apart from HTML, the process proved to be incredibly challenging. The idea of 'logic' and logical thinking felt unfamiliar. For instance, while I knew how to solve mathematical expressions using math, translating that into code seemed daunting. It is important to acknowledge that struggling is a natural part of the learning process - it is 100% okay! However, what truly matters is the unwavering determination to persist and never give up, as it is this resilience that ultimately leads to success."
      ],
    },
    {
      id: "SDASDAASDADXASXZ6",
      date: "Nov 2019",
      description: [
        "Despite the ongoing struggles 😅, I persevered with a firm belief in myself. I reminded myself that embracing new challenges often comes with difficulty, and that was a normal part of the learning process. I couldn't help but reflect on the time I had previously spent pursuing the allure of data science and searching for related degrees. I realized that redirecting that energy towards exploring the world of computer science would have been a more fruitful endeavor. It became evident that my earlier perception of data science and computer science as separate domains was naive, as I discovered their interconnectedness and the valuable skills I could gain from embracing both disciplines."
      ],
    },
    {
      id: "SDASDAASDADXASXZ7",
      date: "Dec 2019",
      description: [
        "I embarked on my journey of learning Python through a module called 'Programming Principles I.' This module covered the fundamentals of programming, including concepts like conditions, loops, variables, and logical operators. One of the assignments involved checking a student's marks against certain criteria and determining their pass or fail status. Surprisingly, this seemingly simple task proved to be quite challenging for me at that time, and I only managed to achieve a score of 65%. As someone who had previously experienced academic success, this score was disheartening, and I contemplated the idea of giving up."
      ],
    },
    {
      id: "SDASDAASDADXASXZ8",
      date: "Jan 2020",
      description: [
        "As the New Year began, I made a firm decision to take action and address my struggles. It was clear that I couldn't continue to struggle with every aspect of programming. Fortunately, the second semester brought a new module called 'Programming Principles II,' which focused on the foundations of Object-Oriented Programming (OOP) using Java. During the two-week holiday break between semesters, I dedicated myself to learning Java in preparation for the upcoming semester. This decision proved to be transformative and made a world of a difference."
      ],
    },
    {
      id: "SDASDAASDADXASXZ9",
      date: "Feb 2020",
      description: [
        "The fundamental concepts that were introduced in Programming Principles I were now being reinforced in Programming Principles II, and I could feel myself becoming less stressed and more at ease with this new world of programming. Java, with its clear syntax and intuitive structure, proved to be accessible and easy to grasp. It was during this time that I began to experience a sense of progression and growth. I am truly grateful for this module, as it played a pivotal role in transforming me from a complete beginner to someone who finally understood the principles of logic and logical thinking."
      ],
    },
    {
      id: "SDASDAASDADXASXZ10",
      date: "Mar 2020",
      description: [
        "The assignment for 'Programming Principles II' introduced a significant leap in complexity compared to the previous module. We were tasked with creating a train ticket booking application to streamline the reservation process for the Denuwara Manike expressway. This project marked my first foray into developing something that could have real-world applications—an actual project.",
        "Initially, I faced challenges and encountered difficulties in navigating the intricacies of the task. However, as I invested more time and effort into the project, I witnessed substantial personal growth and development. The experience of working on this application proved to be transformative, allowing me to acquire new skills and knowledge in the process. In the end, I was gratified to receive a mark that ranked among the highest in our batch, reflecting the progress I had made."
      ],
    },
    {
      id: "SDASDAASDADXASXZ11",
      date: "Apr 2020",
      description: [
        "The next phase of my learning journey involved creating a simple web application using HTML, CSS, and JS. This task felt more manageable and approachable, primarily because I had gained prior experience in building a 'real project.' In my view, once you have undergone the process of developing an actual application, the subsequent challenges you encounter in your tech journey become more surmountable. You become acquainted with various problem-solving approaches and strategies, which instills a sense of confidence and adaptability.",
        "Furthermore, having trained my brain to think logically through these experiences, I found that the skills and mindset required for effective problem-solving came more naturally. Logical thinking became ingrained in my thought process, allowing me to tackle new technical challenges with greater ease and efficiency. This solid foundation in problem-solving principles became a valuable asset in my ongoing journey in the field of technology."
      ],
    },
    {
      id: "SDASDAASDADXASXZ12",
      date: "May - Sep 2020",
      description: [
        "The transition occurred when my first year came to an end around June, and we were granted an extended summer vacation that lasted until September. It marked a pivotal moment as I embraced the opportunity to learn and explore new horizons. While many people saw this break as a chance to relax and unwind, I approached it with unwavering determination. From morning till night, I immersed myself in my laptop, embarking on a relentless pursuit of knowledge.",
        "During this time, I discovered that Coursera was offering free access to a multitude of courses for university students in response to the pandemic's impact on employment. The prospect of learning from esteemed professors at prestigious universities, courses that were once priced at least $50, was simply too good to pass up. I seized the opportunity and delved into a wide array of subjects, ranging from revisiting HTML to exploring the MERN and MEAN stacks, as well as diving into the realms of machine learning, deep learning, and data science. This newfound access to high-quality, comprehensive courses became a game-changer for me.",
        "The extended summer vacation became an intensive period of self-directed learning and growth. It allowed me to expand my skills, deepen my understanding of various technologies, and broaden my knowledge across multiple domains. It was a transformative time that laid the foundation for my ongoing journey in the world of technology.",
        "As a testament to my dedication, my LinkedIn profile now proudly displays over 100+ certificates, showcasing the breadth and depth of my learning journey. Notably, the courses taught by Andrew Ng have been particularly mind-blowing, leaving a lasting impact on my understanding and skills development. If you know, you know :)"
      ],
    },
    {
      id: "SDASDAASDADXASXZ13",
      date: "Sep 2020",
      description: [
        "As I embarked on my second year of college, armed with my newly acquired skills, I felt more prepared than ever before. Surprisingly, the second year turned out to be much easier overall (I stand by what I just said), despite the assignments being more challenging. I not only welcomed the challenges but also found great enjoyment in tackling them. It was during this time that I realized all my hard work and dedication had truly paid off.",
        "One notable subject introduced in the second year was Object-Oriented Programming (OOP). The assignment for this module involved building a premier league simulation (available in the Projects section). In addition to OOP, we were also assigned a Software Development Group Project (SDGP), which is total another story.",
      ],
    },
    {
      id: "SDASDAASDADXASXZ14",
      date: "Oct 2020",
      description: [
        "SDGP was a group project that required the usage of machine learning to solve a real-world problem. It is a capstone project for those who are more familiar with that. As a team, we were tasked with pitching an idea to a panel of lecturers during a viva session. Only if our idea received their approval could we proceed with its development; otherwise, we would need to come up with an alternative proposal.",
        "It was idea pitching time; my team and I just learned that the idea had to be ML-heavy. Therefore we pitched something different and got turned down 😂 This upset my teammates a lot since they are all intelligent people. Having gone through hardship, I had to motivate them and carry the team to come up with a good idea, and we did. Boy, it took our whole lives within the next couple of months to produce a project of such a feat within a relatively short timeframe, all while balancing our other academic modules."
      ],
    },
    {
      id: "SDASDAASDADXASXZ15",
      date: "Nov - Dec 2020",
      description: [
        "These months were mainly about hackathons. One notable event I took part in was Coderally, an algorithm-based inter-country competition hosted by IIT on HackerRank. Equipped with the logical thinking capabilities I had developed, I performed well and achieved the 2nd position in Sri Lanka. It was a rewarding experience that showcased my growth and proficiency in problem-solving and algorithmic skills.",
        "As a team, we also participated in 'Datathon,' a data science-based hackathon hosted by SLIIT. We showcased our skills and knowledge in data science and emerged in 2nd place during the qualifiers. This achievement earned us a spot in the finals, which were scheduled to take place at the beginning of the following year",
        "Back then, I used to participate in hackathons regularly, and they played a significant role in building my confidence. Although I don't participate in them as frequently now, the experience and challenges of hackathons have provided me with the confidence I need to tackle complex projects and overcome obstacles in the long run.",
        "Around this time, I got a project for a final year BIS (Business Information Systems) student's FYP (Final Year Project) focused on machine learning. It was interesting to note that I was approached for this project specifically because of the numerous ML-related certifications listed on my LinkedIn profile 😅"
      ],
    },
    {
      id: "SDASDAASDADXASXZ16",
      date: "Jan 2021",
      description: [
        "The new year had arrived, and it was time to submit the OOP project that I had dedicated months of work to. Despite the project functioning properly, I couldn't help but feel nervous about the submission. This project was developed using Angular and Java, and as we all know, the node_modules folder in Angular can be quite massive, perhaps even larger than Sri Lanka's population 😄. Hence, during the submission, we typically excluded the node_modules folder, relying on the package.json file instead. However, we also know about the potential errors that could arise when running 'npm i' or 'yarn' due to node-gyp dependencies 🙃. What if such an error occurred during the project demonstration? 😅 Forunately, that was exactly what didn't happen 😝 The viva went well, and I managed to score quite high, again an overall considered one of the highest. Coursera, thank you so much. You changed everything.",
        "Surprise surprise! I received a special invitation from Coursera to be among the ten individuals worldwide chosen to create community-guided projects. This incredible opportunity came about as a result of the extensive work I had undertaken during the previous year's summer vacation. It was truly humbling to be recognized by Coursera for my dedication and commitment to learning.",
      ],
    },
    {
      id: "SDASDAASDADXASXZ17",
      date: "Feb 2021",
      description: [
        "The eagerly anticipated Datathon finals had arrived, and our team made our way to SLIIT to compete against ten other teams from universities across the country. Hosted by Zone24x7, the finals presented us with the task of estimating the number of vaccines required for a specific group of people. The challenge was intensified by the absence of proper datasets, requiring us to invest significant effort in data cleaning to prepare a suitable dataset. Despite the obstacles, we achieved a merit pass, an accomplishment that held even greater significance considering the formidable competition from teams representing esteemed institutions such as UOM and UOC. This experience further solidified my passion for data science and left me grateful for the knowledge I gained from Coursera, particularly the invaluable teachings of AndrewNG.",
        "It was also at this time that I got an internship interview with 99x. The interview was challenging, albeit well organized, and in some way, I managed to get through it.",
        "I was to start my internship in May; however, my university didn't allow it since they required me to complete my 2nd year. 99x was so understanding 💖 and they'd let me join after my 2nd year, on July.",
      ],
    },
    {
      id: "SDASDAASDADXASXZ18",
      date: "Mar - May 2021",
      description: [
        "The time had come to embark on the SDGP and FYP, two monumental projects that would likely stand as significant achievements for the foreseeable future. These projects, ONCO and E-Ophthalmologist, were mobile applications leveraging AI technology in the medical field. Built using Flutter, these applications aimed to make a positive impact in healthcare (both projects can be found in the Projects section). Undertaking two projects of this scale within a few months was undeniably challenging, but it also marked a remarkable milestone in my journey.",
        "ONCO consists of 6 ML models; it is about the diagnosis and prognosis of breast lung and skin cancers.",
        "E-Ophthalmologist was about the diagnosis and management of Diabetic Retinopathy (a condition that affects the eyes caused by diabetes).",
        "Completing both the SDGP and the FYP projects was undoubtedly a challenging endeavor. However, it was during this time that I discovered my ability to thrive under high-pressure situations. In addition to these significant projects, I also had to manage three other modules simultaneously. The workload was intense, and there were times when it felt overwhelming. Nevertheless, I persevered and learned valuable lessons in time management, teamwork, and problem-solving. This experience strengthened my confidence in my capabilities and prepared me to handle complex tasks with resilience and determination.",
      ],
    },
    {
      id: "SDASDAASDADXASXZ19",
      date: "Jan - Jul 2021",
      description: [
        "In addition to my university commitments, I also took on freelance projects with companies like Niftron and Inforwaves. Balancing these responsibilities allowed me to further develop my skills and work under pressure. I discovered that I thrive in fast-paced environments, and this adaptability has proven to be a valuable asset in any professional setting. Everything about this is mentioned in the Experience section 😝",
      ],
    },
    {
      id: "SDASDAASDADXASXZ20",
      date: "Jan 2021 - Jul 2021",
      description: [
        "I developed a deep passion for continuous learning and exploration, which is reflected in my GitHub profile. Whenever I acquire new knowledge or skills, I make it a point to translate that knowledge into practical code and share it on GitHub. As you can see from my 100+ repositories, my profile is a testament to my commitment to staying updated and embracing a wide range of topics. From fundamental concepts to more advanced subjects, I am constantly expanding my expertise and actively contributing to the coding community.",
        "Alongside, I also worked on two other FYPs of two other students."
      ],
    },
    {
      id: "SDASDAASDADXASXZ21",
      date: "Jul 2021 - Jul 2022",
      description: [
        "I joined 99x as a Trainee Software Engineer and got the privilege to work on 2 different projects. Thank you, Team Maturify & BLISS I'll always be forever grateful 💖",
        "All my other side-hustles are mentioned in the Experience section 😝",
      ],
    },
    {
      id: "SDASDAASDADXASXZ22",
      date: "Jan 2022 - July 2022 (Oh Well...)",
      description: [
        "I finally decided to start blogging after pushing it for months and months... SO that's an improvement for this year lol. (You can find my socials in the Home Page banner 😝).",
        "Additionally, I started answering some questions on StackOverFlow helping fellow developers in the community."
      ],
    },
    {
      id: "SDASDAASDADXASXZ23",
      date: "Jul 2022",
      description: [
        "I had the incredible opportunity to participate in the Community Exchange alpha project of GitHub, where I was selected to teach the community through a personal project. It was a valuable experience to utilize ONCO, which was previously idle on my GitHub profile, and use it as a means to educate and engage with the community. This initiative allowed me to share my knowledge, contribute to the learning of others, and foster a collaborative environment within the developer community 💖",
        "Rejoined Niftron as a full stack developer once again 😛, since my final year will not begin till September. So, might as well do some other work till then instead of doing nothing at all 😝",
        "If you noticed the date of the previous description, you may have realized that I have stopped blogging 🥹 Well, the reason being, I honestly lost interest and do not see the point of it 😅. Sorry to all hell-bent bloggers out there haha."
      ],
    },
    {
      id: "SDASDAASDADXASXZ24",
      date: "Jul 2022 - May 2023",
      description: [
        "While completing my final year at university, I continued to work part-time. However, in May 2023, I transitioned to a full-time role in the industry as a fresh graduate."
      ],
    },
    {
      id: "SDASDAASDADXASXZ25",
      date: "Sep 2022",
      description: [
        "Final year of uni begun and it went quite well to say the least 😌 No regrets whatsoever. Thanks to my strong performance in my second year, achieving a first-class degree was almost guaranteed. However, I didn't want to simply coast through my final year. Instead, I made a conscious choice to give my best effort in all of my modules, ensuring that I will have no regrets when I look back on this experience.",
        "To emphasize the reason for my strong commitment to working hard in my final year, it boils down to my personal philosophy. I have always strived to give my best in everything I do, so that I never have to look back and think, 'I could have done better.' It's not about the grade itself that brings me satisfaction. Even if I were to score above 90, I may still not feel content if I believe I could have achieved more. True satisfaction, for me, lies in knowing that I have given my absolute best and being genuinely happy with my performance.",
        "I could find contentment with a score of 85, while feeling dissatisfied with a 90, solely based on whether I believe I could have pushed myself further. However, that being said, there is no excuse for getting below 85 whatsoever, cuz I believe how much ever the difficulty, somehow, someway it is possible to get above that for anything, as long as I try my best."
      ],
    },
    {
      id: "SDASDAASDADXASXZ26",
      date: "Oct 2022",
      description: [
        "The time has finally come for me to work on my own thesis (not someone else's, to clarify 😂). Admittedly, I should have started my research much earlier, but as they say, better late than never. I discovered an intriguing avenue that captured my interest, and I was excited to dive into it as the focus of my research. Little did I know that this decision would take me on a thrilling rollercoaster ride of ups and downs.",
      ],
    },
    {
      id: "SDASDAASDADXASXZ27",
      date: "Nov 2022 - April 2023",
      description: [
        "Now, the spotlight is on my FYP. While there were other modules to attend to, they did not demand special attention as they all went smoothly as expected 😌",
        "The FYP proved to be an entirely different beast altogether. Initially, my plan was to simply implement an algorithm that had been proposed in a research paper and assess its suitability for time series forecasting. However, for some unknown reason, I made the daring choice to take it a step further. I decided to infuse my own unique twist into the design, ultimately creating my very own algorithm to replace the original one.",
        "Undoubtedly, the decision to enhance the initial algorithm proved to be one of the best choices I have made. The outcome was immensely rewarding, as I successfully published my work in a research paper (which is proudly listed under the Achievements section). This accomplishment brings me great joy and, more importantly, assured me that during the viva, there will be no room for arguments (there can be no arguments brought forward against citations 😝)."
      ],
    },
    {
      id: "SDASDAASDADXASXZ27",
      date: "May 2023 - PRESENT",
      description: [
        "In early May, I had my final viva, and I'm pleased to say it went exceptionally well! I performed strongly and even exceeded my own expectations with the final score. Truth be told, this remarkable outcome was largely influenced by the pivotal decision I made to create my own algorithm. Without that choice, I am certain my performance and score would not have reached the same level.",
        "Alright, let's shift our focus back to the present timeline 😝. I recently rejoined 99x as a full-time software engineer, and I must say, I have been thoroughly enjoying this journey ever since!"
      ],
    },
    {
      id: "SDASDAASDADXASXZ26",
      date: "June 2023",
      description: [
        "I am thrilled to share that my degree has been confirmed, and it's a resounding success - a first-class honor as expected! 💖 But that's not all! In a surprising turn of events, I also discovered that I achieved the highest mark for the FYP and came out as the valedictorian of my graduating class. It's truly amazing and incredibly rewarding to receive such recognition for the hard work and dedication I put into it."
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description:
      "Feel free to contact me to convert your idea into a reality!",
  },
  addressSection: {
    title: "Address",
    subtitle: "32-1/3, Ebenezer Place, Dehiwala",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MtTLzs9zcA7eF5uc6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+94 76 432 0855",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  competitions,
  experience,
  projects,
  journey,
  contactPageData,
};

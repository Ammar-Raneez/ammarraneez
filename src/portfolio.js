/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ammar's Portfolio",
  description:
    "I'm a Colombo based Aspiring Full Stack Developer, also passionate about Blockchain & Cloud Computing and a Current Third Year CS Student.",
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
    "I'm a Colombo based Aspiring Full Stack Developer, also passionate about Blockchain & Cloud Computing and a Current Third Year CS Student. Quick Problem Solver, Analytical Thinker & an avid Cube lover with the ability to solve complex problems under pressure",
  resumeLink:
    "https://drive.google.com/file/d/13BpBobn5pT_IywiBl742di3-6za2s8sb/view",
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
    link: "https://www.linkedin.com/in/ammar-raneez-246114196/",
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
    link: "https://www.instagram.com/_ammar._r/",
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
        "Develop Deep Learning & Machine Learning Models to be used for both Web & Mobile Platforms",
        "Experienced on working with Computer Vision and NLP",
        "Experienced on Data Cleaning, Analysis & Visualization and Forecasting & Time Series Analysis",
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
      title: "Full Stack | Cross Platform Development",
      fileName: "FullStackImg",
      gifName: "full_stack_dev",
      skills: [
        "Develop full stack web applications, including frontend, backend, infrastructure, database design and cloud deployment",
        "Develop cross platform mobile applications using Flutter and React Native",
        "Develop CI/CD pipelines and automate infrastructure",
        "Comfortable in using third-party libraries and frameworks",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
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
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
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
        "Experienced on working on multiple cloud platforms",
        "Experienced on building & designing serverless architectures",
        "Develop multiple projects using AWS CDK & Serverless Framework",
        "Deploy deep learning models on the cloud",
      ],
      softwareSkills: [
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
      ],
    },
    {
      title: "Tools | Design",
      fileName: "DesignImg",
      gifName: "tools",
      skills: [
        "Design user interfaces for mobile and web applications",
        "Experienced on a variety of tools",
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
      duration: "2019 - Present",
      descriptions: [
        "I have explored various Computer Science concepts such as Data Structures, Algorithms, DBMS, etc.",
        "I Have also experienced more intermediate concepts such as AI, Database Modeling and Software Design & Architecture",
        "Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing mainly focused on AWS and Full Stack Web & Mobile Development.",
        "I Have also received merits for a couple of hackathons and coding challenges, even winning some",
        "Currently I have a cummulative average of > 85%",
      ],
      website_link: "https://www.westminster.ac.uk/",
    },
  ],
};

const certifications = {
  certifications: [
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
      title: "Data Science: Foundations using R",
      subtitle: "- Coursera | John Hopkins University",
      logo_path: "jhu_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/KRQCR5YT5JKU",
      alt_name: "johnhopkins",
      color_code: "#0A2D7544",
      overlay_bg_color: "#0A2D75",
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
    {
      title: "CSS (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/65d65608f05f",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
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
    "I have worked on many aspects of development, including Machine Learning & Deep Learning, Full Stack Mobile & Web Development, User Interfaces & database design, and Cloud Infrastructure",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Trainee Software Engineer",
          company: "99X",
          logo_path: "99x_logo.png",
          duration: "Jul 2021 - PRESENT",
          description: [
            "Working in an EduTech startup - Maturify. Implementing static and dynamic UI screens using Angular; Implementing services in the backend, using Serverless Framework with AWS and MongoDB; Resolving bugs on both the frontend and backend",
            "Working on BLISS - A Mind-fitness Application. Implemented a POC for AWS CDK using multiple services including a CI/CD pipeline",
          ],
          bgColor: "#FF6962",
          bgColorFaded: "#FF696233",
          headColor: "#331C7A",
        },
        {
          title: "Full-stack Developer",
          company: "Freelance",
          logo_path: "freelance_logo.png",
          duration: "Jan 2021 - PRESENT",
          description: [
            "Worked on Vontech, a construction-based startup using React.js with TypeScript & Firebase and Node.js with Express & mongoDB",
            "Worked on the Official Website of Amirah Gems & Fine Jewelry, a complete E-Commerce jewelry application using React.js with TypeScript & Firebase for authentication & data persistence",
            "Worked on Masjib-al-Maqbool's Jummuah Registration Site, a application to reserver Jummuah tokens to visitors during times of restriction",
          ],
          bgColor: "#00ff00",
          bgColorFaded: "#00ff0033",
          headColor: "#476930",
        },
        {
          title: "Full-stack Developer",
          company: "Niftron",
          logo_path: "niftron_logo.png",
          duration: "Jan 2021 - Jul 2021",
          description: [
            "Worked on Amaten, a gift card tokenization solution using blockchain, using React.js with TypeScript, Redux & Material-UI for the client-side; AWS with the serverless framework & MongoDB for the server-side, along with Auth0 for a complete user authentication flow",
            "Worked on the UI for EXIP a blockchain marketing platform using React.js with TypeScript & MongoDB",
            "Worked on the frontend for project Nextentry which is a blockchain-based ticketing solution, using React.js with TypeScript & Ant design",
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
            "Worked on the backend of Execution Excellence creating several API's in a microservice architecture to maximize separation of concerns, using AWS RDS and Nest.js with TypeORM",
          ],
          bgColor: "#9BC5D9",
          bgColorFaded: "#9BC5D933",
          headColor: "#4A8396",
        },
        {
          title: "Full-stack Developer on Contract",
          company: "The Radiant",
          logo_path: "radiant_logo.png",
          duration: "Jan 2021 - May 2021",
          description: [
            "Worked on the Official Website of Amirah Gems & Fine Jewelry, a complete E-Commerce jewelry application using React.js with TypeScript & Firebase for authentication & data persistence",
          ],
          bgColor: "#00634A",
          bgColorFaded: "#00634A33",
          headColor: "#23395d",
        },
        {
          title: "Full Stack Mobile | Web Application Developer",
          company: "IIT",
          logo_path: "iit_logo.png",
          duration: "Nov 2020 - May 2021",
          description: [
            "Worked on E-Ophthalmologist, a diabetic retinopathy diagnosing & maintenance application built for a thesis of a Business Information Systems student, using Flutter with firebase for the client-side & Azure and Python with TensorFlow, OpenCV, Keras & Scikit-learn for the server-side",
          ],
          bgColor: "#E90000",
          bgColorFaded: "#E9000033",
          headColor: "#000000",
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
          description:
            "Was invited as one of the ten members in the world to create community guided projects. Created and published community guided projects for the Coursera learner Community",
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
          description:
            "Helping out students in Postman, contributing as a Student Expert",
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
          description:
            "Actively contributing to many opensource projects. My repo is filled with repositories of topics ranging from frontend development to data science and blockchain",
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
          description:
            "Took part in various events organised by the Google Developer Club including Dev Fest, Hash Code and KickStart",
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
          description:
            "Served as the sergeant-at-arms of the IIT Toastmasters Club",
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
          description:
            "Was the Lead Developer in creating the codesprint revamped website",
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
    "I contribute to, and create a variety of projects, ranging from simple to complex on subjects both old, or new. With a mindset of always having to learn, my GitHub profile is always busy with repositories consisting of the latest new technology that I have learnt",
  avatar_image_path: "projects_image.svg",
  projects: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNjkwNzUwMjM=",
      name: "ONCO",
      url: "https://github.com/Ammar-Raneez/SDGP-ONCO",
      description:
        "A Group Project that is a cancer diagnosis, prognosis & management application",
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
      description: "A Diabetic Retinopathy detection & management application",
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
        "A Personal Programming Language that supports most of the basic functionality",
      overlayBgColor: "#6C1C20",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [{ name: "Python", iconifyClass: "logos-python" }],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkxNTU5NTE3NTk=",
      name: "PL Guv'nor",
      url: "https://github.com/Ammar-Raneez/PL_Guvnor",
      description:
        "A Premier League management application that aims to simulate the Premier League",
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
      id: "MDEwOlJlcG9zaXRvcnkyMDIxNDc4ODA=",
      name: "Tinder Clone",
      url: "https://github.com/Ammar-Raneez/RN_Tinder_Clone",
      description: "A Clone of Tinder supporting most of the core features",
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
      id: "MDEwOlJlcG9zaXRvcnkyMDIxNQZALKLX=",
      name: "Text Editor Pro",
      url: "https://github.com/Ammar-Raneez/UCSD_Text_Editor_Pro",
      description:
        "A Text Editor with spell check, autocomplete & edit distance functionality",
      overlayBgColor: "#ff00ff",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [{ name: "Java", iconifyClass: "logos-java" }],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkxODIxMjk3NTQ=",
      name: "Movie Recommender Engine",
      url: "https://github.com/Ammar-Raneez/UCSD_Earthquake_Volcano_Map",
      description: "A Movie Recommendation Engine that is built without ML",
      overlayBgColor: "#1D8E62",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [{ name: "Java", iconifyClass: "logos-java" }],
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkxODAZZQSDAFAZ=",
      name: "AWS CDK Auction Service",
      url: "https://github.com/Ammar-Raneez/cdk-poc",
      description:
        "An Auction Service built with multiple AWS services, including CI/CD",
      overlayBgColor: "#FF9900",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [
        { name: "AWS CDK", iconifyClass: "logos-aws" },
        { name: "Lambda", iconifyClass: "logos-aws-lambda" },
      ],
    },
  ],
};

// Journey page
const journey = {
  title: "My Journey",
  subtitle: "A Walkthrough Of My Journey",
  description:
    "Within the past 3 years, I have grown so much, from not being at all interested in Computer Science and not having written a single line of code till mid-2019, to the person I am now",
  completeJourney: [
    {
      id: "SDASDAASDADXASXZ1",
      date: "Jun 2019",
      description: [
        "Just completed my ALs, wasn't really sure what my next step would be, was initially looking into mechatronics engineering. Checked it out and found out that it would require some type of coding",
      ],
    },
    {
      id: "SDASDAASDADXASXZ2",
      date: "Jul 2019",
      description: [
        "Started exploring the world of programming and Wrote my first ever HTML file adding some really simple styles like background and font colors. Started liking the immediate result you get and the practical use of it in the real world",
      ],
    },
    {
      id: "SDASDAASDADXASXZ3",
      date: "Aug 2019",
      description: [
        "Interest in technology spiked as the 'Data Science' hunger started manifesting, checked out a couple of Data Science degrees available in the country, but only found out those that are a mix of business analytics and a minute amount of practical AI development or coding in general. Was therefore not really interested in pursuing a degree as such",
      ],
    },
    {
      id: "SDASDAASDADXASXZ4",
      date: "Sep 2019",
      description: [
        "After looking at multiple unversities to pursue my higher studies, I finally decided to enroll on the CS degree at IIT. I realized that if I were to do a degree in CS in general I would be able to learn on both practical development as well as other aspects, while also getting the necessary business exposure required",
      ],
    },
    {
      id: "SDASDAASDADXASXZ5",
      date: "Oct 2019",
      description: [
        "Started learning on basic HTML CSS and JS. Programming by itself was a whole new experience to me, since I haven't written a single line of code, except for HTML, ever. And it was hard, really hard. The concept of 'Logic' and logical thinking was all very foreign. For instance, I know how I would solve a mathematical expression through Math, but how would I write code to do that?",
      ],
    },
    {
      id: "SDASDAASDADXASXZ6",
      date: "Nov 2019",
      description: [
        "Still struggling 😅 Was trying my best to continue, and kept believing in myself. Kept pushing on with the idea that 'this is supposed to be hard, anything that is new is supposed to be hard.' Was kicking myself because the time that I spent on the Data Science hunger and searching for degrees on it could have been much more productive had I have spent it on exploring the world of CS more. I was naive on thinking that the world of DS and CS were completely different",
      ],
    },
    {
      id: "SDASDAASDADXASXZ7",
      date: "Dev 2019",
      description: [
        "Started learning Python, due to a module called 'Programming Principles I' which taught the basics of programming (conditions, loops, variables, logical operators). The assignment given was pretty simple, it was just about checking an input students marks against a criteria and determining whether that student passed or failed. That too, at that time, was so difficult for me, and I only managed to get a 65%. After a successful school pathway, this score was hurtful, and I thought about giving up",
      ],
    },
    {
      id: "SDASDAASDADXASXZ8",
      date: "Jan 2020",
      description: [
        "New Year hit. Told myself that I must do something about this, I obviously cannot continue to struggle on literally everything. The second semester had just started which introduced a module called 'Programming Principles II' where the barebones of OOP was taught in Java. Within the 2 week or so holiday after semester 1 had ended, I had learnt on Java a bit just to get ready to face the next semester. And that made a world of a difference",
      ],
    },
    {
      id: "SDASDAASDADXASXZ9",
      date: "Feb 2020",
      description: [
        "The basic concepts that were introduced in 'Programming Principles I' was reinforced now, and I have finally started feeling less stressed and more comfortable with this whole new concept of programming. Java was easy to grasp, and that was when I started feeling some progression. I thank this module on bringing me from a complete noob, to a person who finally understood this whole concept of what logic and logical thinking actually was",
      ],
    },
    {
      id: "SDASDAASDADXASXZ10",
      date: "Mar 2020",
      description: [
        "The assignment of 'Programming Principles II' was revealed, and it was miles ahead in complexity in comparison to the assignment of 'Programming Principles I'. The goal was to create a Train Ticket Booking application to facilitate the Booking of tickets for the 'Denuwara Manike' Expressway. This was the initial steps towards creating something that would actually be used in the real world and something that is 'An Actual Project'. It was difficult initially, however, as time went on I managed to grow much more just while working on this application, and managed to get a mark that was considered as one of the highest in the batch, 94%",
      ],
    },
    {
      id: "SDASDAASDADXASXZ11",
      date: "Apr 2020",
      description: [
        "It was time to focus on a simple web application built using HTML CSS and JS, this was now much easier since I now had experience on building a 'Real Project'. Once you have had that experience, anything else that you come across in your tech journey will not be so challenging anymore, since you now know the different approaches to solve problems and your brain is trained in such a way that the logical thinking required is what comes into your mind, in my opinion",
      ],
    },
    {
      id: "SDASDAASDADXASXZ12",
      date: "May - Sep 2020",
      description: [
        "This was the time where everything changed. Once my first year had ended around June, we got a long summer vacation till September. It was time to learn and explore new things, although many people used this holiday as a 'holiday', I didn't. This time was when I, from morning till night, was on my laptop, learning course after course. Coursera had given us university students free access to most of their courses, since this was when the pandemic started and people started losing their jobs. Free courses taught by prestigious university professors that were once at least $50? Count me in! I went from again learning HTML to learning the MERN & MEAN stack, as well as ML, DL and DS. This was a game changer",
        "It is also the reason why my LinkedIn is flooded with over 100+ certificates. Side-note, the courses taught by AndrewNG are mind-blowing, if you know, you know :)",
      ],
    },
    {
      id: "SDASDAASDADXASXZ13",
      date: "Sep 2020",
      description: [
        "It was time to go back to college for the second year, and with my new arsenal of skills, I was ready as I'll ever be. The second year of uni was much more easier than my first. I stand by what I just said. Although the assignments were so much more challenging. I was ready, and I enjoyed doing them. It was a great time and so much fun, this was when I knew all my hard work had paid off. OOP was introduced here and the assignment was about building a premier league simulation (this can be found in my projects section :)). Alongside OOP we got a Software Development Group Project (SDGP). This was a whole another story",
      ],
    },
    {
      id: "SDASDAASDADXASXZ14",
      date: "Oct 2020",
      description: [
        "SDGP was a group project that required the usage of Machine Learning to solve a real world problem. It is basically a capstone project, for those who are more familiar with that. As a team, we had to pitch an idea to a group of lecturers in a viva, and only if you have gotten the green light to continue with the idea you can, else you had to come up with another idea",
        "Idea pitching time, my team and I honestly did not know that the idea had to be ML heavy, therefore we pitched something completely different and got turned down 😂 This upsetted my teammates a lot, since they are all smart people. I, having gone through hardship had to motivate them and carry the team at the moment to come up with a good idea, and we did, and boy did it take our whole lives within the next couple of months to produce a project of such feat in such a short period of time, at the same time focusing on other modules",
      ],
    },
    {
      id: "SDASDAASDADXASXZ15",
      date: "Nov - Dec 2020",
      description: [
        "These months were mainly about hackathons. Took part in Coderally, which was an algorithm based inter-country competition, hosted by IIT on HackerRank. Now having the logical thinking capability required, I was able to do it well, and emerged 2nd in Sri Lanka",
        "My SDGP team took part in Datathon, which is a data science-based hackathon, hosted by SLIIT and we emerged 2nd place in the qualifers, where the finals would be held later next year",
        "Back then hackathons were something I always took part in, although now I don't in much anymore, stuff like that is something that really gives you the confidence required in the long run",
        "Around this time I got a project to be done for a final year BIS (Business Information Systems) student (FYP - Final Year Project), which was also around Machine Learning. I specifically was reached out by them just because of the number of ML related certifications on my LinkedIn profile 😅",
      ],
    },
    {
      id: "SDASDAASDADXASXZ16",
      date: "Jan 2021",
      description: [
        "New year once again! It was time to submit the OOP project that I had been working on the past few months. I was nervous submitting it, eventhough it worked. This was built with Angular and Java, and we all know that the node_modules in Angular is larger than Sri Lanka's population. Obviously therefore you'd submit the project without the node_modules folder since you have the package.json. But, you also know the errors that turn up when you run 'npm i' or 'yarn' with the node gyp stuff 🙂 What if during the demo you get such an error? 🙂 Luckily, that was exactly what didn't happen 😝 The viva went well and I managed to score 90% for that alongside an exam which was 97%, again an overall that would be considered as one of the highest. Coursera, thank you so much, you really changed everything",
        "Surprise surprise! I was invited by Coursera as one of the 10 people in the world to be able to create community guided projects for the Coursera learner community, this was mainly due to the sheer amount of work I had done during the Summer vacation the prior year",
      ],
    },
    {
      id: "SDASDAASDADXASXZ17",
      date: "Feb 2021",
      description: [
        "Datathon finals time! It was time to head to SLIIT to go against 10 other teams coming from various universities around the country. Hosted by Zone24x7, the goal of the finals was to estimate the number of vaccines required for a specific set of people. This was challenging since there weren't any proper datasets, therefore much data cleaning had to be done just to prepare a suitable dataset. Alongside a time series forecast and a rather dirty dataset, we managed to secure a merit pass. Going against teams from UOM, UOC etc. it was a challenge to remember, and a challenge that would make me love data science. Once again thank you Coursera for teaching so much about ML, specifically, thank you AndrewNG",
        "It was also at this time where I got an internship interview with 99X. The interview was rather challenging, albeit well organized, and in someway I managed to get through it",
        "I was then to be called to start my internship on May, however my university didn't allow it since they required me to complete my 2nd year before doing. 99X was so understanding 💖 and they'd let me join after I'm done with my 2nd year, on July",
      ],
    },
    {
      id: "SDASDAASDADXASXZ18",
      date: "Mar - May 2021",
      description: [
        "It was time to start working on the SDGP, also, not to forget, the FYP. These two projects are the two largest projects that I have worked on, and might remain for some time in the future. ONCO & E-Opthalmologist. Both medical related AI mobile applications, built around Flutter (Both of these projects can be found in the Projects section). It was a challenge, a huge milestone to be able to do two projects of such magnitude within a couple of months",
        "ONCO had 6 ML models, it is about the diagnosis and prognosis of cancers of the thoracic region (Breast, Skin and Lung)",
        "E-Opthalmologist was about the diagnosis and management of Diabetic Retinopathy (a condition that affects the eyes caused by diabetes)",
        "It was such hardwork to complete them, however, it was also then that I knew that I am capable of handling high pressure situations. It was not only SDGP and the FYP, there were 3 more modules that were required",
      ],
    },
    {
      id: "SDASDAASDADXASXZ19",
      date: "Jan - July 2021",
      description: [
        "Worked on some freelance work with NIFTRON and Inforwaves alongside uni as well. It became clear now that I work well and don't suffer under pressure, which I feel is a really important skill in this world, be it any job at all. I'm not going to repeat all the boring details of what I did during my time working there, since everything is mentioned on the Experience section 😝",
      ],
    },
    {
      id: "SDASDAASDADXASXZ20",
      date: "Jan 2021 - PRESENT",
      description: [
        "Started falling in love with learning and exploring new things, whenever I learn something, I push code related to what I had just learnt into GitHub. The 100+ repos speak for themselves. My profile is almost always updated, and I'll continue doing so. Topics ranging from the literal basics to more advanced concepts, they are all present",
        "The constant desire to learn new things keeps my contributions graph almost fully green, and I don't plan on stopping this anytime soon 🤩",
        "Currently, I am also working on two other FYPs of two other students"
      ],
    },
    {
      id: "SDASDAASDADXASXZ21",
      date: "Jul 2021 - PRESENT",
      description: [
        "I have now joined 99X and am currently undergoing my internship. I have gotten the priviledge to work on 2 different projects. Thank you Team Maturify & BLISS, I'll always be forever grateful",
        "Have the opportunity to conduct Mock Interviews with various university students",
        "Fellow colleagues and I have also conducted multiple live sessions for all uni kids, and we will continue conducting more in the distant future 💖",
        "I'm excited to see what else would I be able to accomplish within the future & see what does this current year, 2022, have in store for me 🥰"
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
      "Feel free to contact me via any of the below platforms, I'm active on all of them :) Contact to convert your idea into a reality!",
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

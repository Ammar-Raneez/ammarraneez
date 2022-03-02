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
    url: "https://development-portfolio-382f4.firebaseapp.com/",
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
    "https://drive.google.com/file/d/1y0imwonNfItxJGBvhMKOGh7xm7XehzwK/view?usp=sharing",
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
      profileLink: "https://www.coursera.org/user/b075574015a3451caa9d89af60606360",
    },
    {
      siteName: "Udemy",
      iconifyClassname: "simple-icons:udemy",
      style: {
        color: "#A435F0",
      },
      profileLink: "https://www.udemy.com/user/ammar-raneez/",
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Westminster",
      subtitle: "Bsc. Computer Science",
      logo_path: "https://www.westminster.ac.uk/themes/uow_theme/images/navbar-westminster-logo.svg",
      alt_name: "UOW",
      duration: "2019 - Present",
      descriptions: [
        "I have explored various Computer Science concepts such as Data Structures, Algorithms, DBMS, etc.",
        "I Have also experienced more intermediate concepts such as AI, Database Modeling and Software Design & Architecture",
        "Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing mainly focused on AWS and Full Stack Web & Mobile Development.",
        "I Have also received merits for a couple of hackathons and coding challenges, even winning some",
        "Currently I have a cummulative average of > 85%"
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
      certificate_link:
        "https://www.hackerrank.com/certificates/54b6107b078b",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    {
      title: "Java (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/85b6ce7fa255",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    {
      title: "JavaScript (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/9f22bcea6f23",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    {
      title: "CSS (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/65d65608f05f",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    {
      title: "React (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/cc9aa24d347b",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    {
      title: "Angular (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/93e7b04d9493",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    {
      title: "Problem Solving (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/25f97cf5bbc3",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
      overlay_bg_color: "#2EC866",
    },
    {
      title: "SQL (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/1261abe583de",
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
    }
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
            "Working on BLISS - A Mind-fitness Application. Implemented a POC for AWS CDK using multiple services including a CI/CD pipeline"
          ],
          bgColor: '#FF6962',
          bgColorFaded: '#FF696233',
          headColor: '#331C7A'
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
          bgColor: '#00ff00',
          bgColorFaded: '#00ff0033',
          headColor: '#476930'
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
          bgColor: '#2160B2',
          bgColorFaded: '#2160B233',
          headColor: '#F0070D'
        },
        {
          title: "Freelance Backend Developer",
          company: "Inforwaves",
          logo_path: "inforwaves_logo.png",
          duration: "May 2021 - Jul 2021",
          description: [
            "Worked on the backend of Execution Excellence creating several API's in a microservice architecture to maximize separation of concerns, using AWS RDS and Nest.js with TypeORM",
          ],
          bgColor: '#9BC5D9',
          bgColorFaded: '#9BC5D933',
          headColor: '#4A8396'
        },
        {
          title: "Full-stack Developer on Contract",
          company: "The Radiant",
          logo_path: "radiant_logo.png",
          duration: "Jan 2021 - May 2021",
          description: [
            "Worked on the Official Website of Amirah Gems & Fine Jewelry, a complete E-Commerce jewelry application using React.js with TypeScript & Firebase for authentication & data persistence",
          ],
          bgColor: '#00634A',
          bgColorFaded: '#00634A33',
          headColor: '#23395d'
        },
        {
          title: "Full Stack Mobile | Web Application Developer",
          company: "IIT",
          logo_path: "iit_logo.png",
          duration: "Nov 2020 - May 2021",
          description: [
            "Worked on E-Ophthalmologist, a diabetic retinopathy diagnosing & maintenance application built for a thesis of a Business Information Systems student, using Flutter with firebase for the client-side & Azure and Python with TensorFlow, OpenCV, Keras & Scikit-learn for the server-side",
          ],
          bgColor: '#E90000',
          bgColorFaded: '#E9000033',
          headColor: '#000000'
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
          bgColor: '#0052C7',
          bgColorFaded: '#0052C733',
          headColor: '#1A5892'
        },
        {
          title: "Postman Student Expert",
          company: "Postman",
          company_url: "https://www.postman.com/",
          logo_path: "postman_logo.png",
          duration: "Nov 2021 - PRESENT",
          description:
            "Helping out students in Postman, contributing as a Student Expert",
          bgColor: '#FD6C35',
          bgColorFaded: '#FD6C3533',
          headColor: '#676767'
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          description:
            "Actively contributing to many opensource projects. My repo is filled with repositories of topics ranging from frontend development to data science and blockchain",
          bgColor: '#1B1F23',
          bgColorFaded: '#1B1F2333',
          headColor: '#430083'
        },
        {
          title: "Google Developer Group Member",
          company: "Google",
          company_url: "http://google.com/",
          logo_path: "google_logo.png",
          duration: "July 2019 - PRESENT",
          description:
            "Took part in various events organised by the Google Developer Club including Dev Fest, Hash Code and KickStart",
          bgColor: '#33A852',
          bgColorFaded: '#33A85233',
          headColor: '#4284F3'
        },
        {
          title: "Sergeant At Arms",
          company: "Toastmasters International",
          company_url: "https://www.toastmasters.org/",
          logo_path: "toastmasters_logo.png",
          duration: "Jun 2020 - Jun 2021",
          description:
            "Served as the sergeant-at-arms of the IIT Toastmasters Club",
          bgColor: '#770E29',
          bgColorFaded: '#770E2933',
          headColor: '#003F62'
        },
        {
          title: "Codesprint '21 Lead Developer",
          company: "Informatics Institute of Technology (IIT Campus)",
          company_url:
            "https://www.iit.ac.lk/",
          logo_path: "iit_logo.png",
          duration: "Nov 2020 - Jan 2021",
          description:
            "Was the Lead Developer in creating the codesprint revamped website",
          bgColor: '#E90000',
          bgColorFaded: '#E9000033',
          headColor: '#000000'
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
      description: "A Group Project that is a cancer diagnosis, prognosis & management application",
      overlayBgColor: "#00ffff",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [
        { name: "Flutter", iconifyClass: "logos-flutter" },
        { name: "Firebase", iconifyClass: "logos-firebase" },
        { name: "Python", iconifyClass: "logos-python" },
        { name: "TensorFlow", iconifyClass: "logos-tensorflow" },
        { name: "Azure", iconifyClass: "logos-azure" }
      ]
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
        { name: "Azure", iconifyClass: "logos-azure" }
      ]
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNzM1MTI1NTE=",
      name: "SimpleScript",
      url: "https://github.com/Ammar-Raneez/Simple_Script",
      description: "A Personal Programming Language that supports most of the basic functionality",
      overlayBgColor: "#6C1C20",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [
        { name: "Python", iconifyClass: "logos-python" }
      ]
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkxNTU5NTE3NTk=",
      name: "PL Guv'nor",
      url: "https://github.com/Ammar-Raneez/PL_Guvnor",
      description: "A Premier League management application that aims to simulate the Premier League",
      overlayBgColor: "#3A0243",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [
        { name: "Java", iconifyClass: "logos-java" },
        { name: "Play", iconifyClass: "logos-play" },
        { name: "Angular", iconifyClass: "logos-angular" }
      ]
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
        { name: "Expo", iconifyClass: "logos-expo" }
      ]
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyMDIxNQZALKLX=",
      name: "Text Editor Pro",
      url: "https://github.com/Ammar-Raneez/UCSD_Text_Editor_Pro",
      description: "A Text Editor with spell check, autocomplete & edit distance functionality",
      overlayBgColor: "#ff00ff",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [
        { name: "Java", iconifyClass: "logos-java" }
      ]
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkxODIxMjk3NTQ=",
      name: "Movie Recommender Engine",
      url: "https://github.com/Ammar-Raneez/UCSD_Earthquake_Volcano_Map",
      description: "A Movie Recommendation Engine that is built without ML",
      overlayBgColor: "#1D8E62",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [
        { name: "Java", iconifyClass: "logos-java" }
      ]
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkxODAZZQSDAFAZ=",
      name: "AWS CDK Auction Service",
      url: "https://github.com/Ammar-Raneez/cdk-poc",
      description: "An Auction Service built with multiple AWS services, including CI/CD",
      overlayBgColor: "#FF9900",
      overlayTextColor: "#fff",
      isFork: false,
      languages: [
        { name: "AWS CDK", iconifyClass: "logos-aws" },
        { name: "Lambda", iconifyClass: "logos-aws-lambda" }
      ]
    }
  ]
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
    subtitle:
      "32-1/3, Ebenezer Place, Dehiwala",
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
  contactPageData,
};

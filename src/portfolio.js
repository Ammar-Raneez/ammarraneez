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
  logo_name: "Ammar",
  nickname: "Amu",
  subTitle:
    "I'm a Colombo based Aspiring Full Stack Developer, also passionate about Blockchain & Cloud Computing and a Current Third Year CS Student",
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
      skills: [
        "⚡ Design user interfaces for mobile and web applications",
        "⚡ Experienced on a variety of tools",
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
            color: "#1EB4D4",
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
        "⚡ I have explored various Computer Science concepts such as Data Structures, Algorithms, DBMS, etc.",
        "⚡ I Have also experienced more intermediate concepts such as AI, Database Modeling and Software Design & Architecture",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing mainly focused on AWS and Full Stack Web & Mobile Development.",
        "⚡ I Have also won a couple of hackathons and coding challenges",
        "⚡ Currently I have a cummulative average of > 85%"
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
      color_code: "#00000044",
    },
    {
      title: "AI For Medicine",
      subtitle: "- DeepLearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/E3ZCCDMB65CQ",
      alt_name: "deeplearning.ai",
      color_code: "#00000044",
    },
    {
      title: "TensorFlow Developer",
      subtitle: "- DeepLearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/E3ZCCDMB65CQ",
      alt_name: "deeplearning.ai",
      color_code: "#00000044",
    },
    {
      title: "Data Science: Foundations using R",
      subtitle: "- Coursera | John Hopkins University",
      logo_path: "jhu_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/KRQCR5YT5JKU",
      alt_name: "johnhopkins",
      color_code: "#0A2D7544",
    },
    {
      title: "Mathematics For Machine Learning",
      subtitle: "- Coursera | Imperial College London",
      logo_path: "imperial_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#01538E44",
    },
    {
      title: "Fullstack Web Development With React",
      subtitle: "- Coursera | Hong Kong University",
      logo_path: "hongkong_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/SGTU9KWH8EVP",
      alt_name: "HK",
      color_code: "#A7833844",
    },
    {
      title: "Fullstack Web Development With Angular",
      subtitle: "- Coursera | Hong Kong University",
      logo_path: "hongkong_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/34AENMW2G7SN",
      alt_name: "HK",
      color_code: "#A7833844",
    },
    {
      title: "Object Oriented Programming in Java",
      subtitle: "- Coursera | UC San Diego",
      logo_path: "ucsd_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/44KNMTEPECLB",
      alt_name: "CaliforniaSanDiego",
      color_code: "#00135444",
    },
    {
      title: "Python (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/54b6107b078b",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
    },
    {
      title: "Java (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/85b6ce7fa255s",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
    },
    {
      title: "Problem Solving (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "hackerrank_logo.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/25f97cf5bbc3",
      alt_name: "hackerrank",
      color_code: "#2EC86644",
    },
    {
      title: "Responsive Web Design",
      subtitle: "- FreeCodeCamp",
      logo_path: "fcc_logo.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/ammuuu/responsive-web-design",
      alt_name: "hackerrank",
      color_code: "#11111144",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
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
    subtitle: "+94 764320855",
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
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
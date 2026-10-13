// All site copy lives here. Edit this file to update the portfolio.
// Last synced with LinkedIn (linkedin.com/in/ammar-raneez) on 2026-10-13.

export const person = {
  name: "Ammar Raneez",
  nickname: "Amu",
  role: "Head of Engineering",
  company: "SoftSora",
  city: "Colombo",
  timeZone: "Asia/Colombo",
  email: "ammarraneez@gmail.com",
  resume: "/Ammar_Raneez_CV.pdf",
  // A Cal.com or Google Calendar booking page. Until set, "Ask for a call" opens an email.
  booking: null,
  github: "https://github.com/Ammar-Raneez",
};

export const socials = [
  { name: "GitHub", link: "https://github.com/Ammar-Raneez" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/ammar-raneez" },
  { name: "Stack Overflow", link: "https://stackoverflow.com/users/13134768/ammar" },
  { name: "Medium", link: "https://ammarraneez.medium.com/" },
  { name: "DEV", link: "https://dev.to/ammarraneez" },
  { name: "Facebook", link: "https://www.facebook.com/ammar.raneez.3/" },
  { name: "Instagram", link: "https://www.instagram.com/__ammarrrrr__/" },
];

export const research = {
  title: "Liquid Time-stochasticity networks",
  venue: "IEEE CCWC 2023",
  paper: "https://ieeexplore.ieee.org/document/10099071",
  code: "https://github.com/Ammar-Raneez/Liquid-Time-stochasticity-networks",
  summary:
    "My final-year thesis started as a plan to re-implement an existing algorithm and test it on time-series forecasting. I replaced its core with my own design instead: a network that gives liquid neural networks more flexibility and faster adaptation, so they cope better with noisy data streams. It was published at IEEE CCWC 2023 and won Best Final Year Project at IIT.",
  appliedIn: {
    name: "BitForecast",
    url: "https://github.com/Ammar-Raneez/BitForecast",
    note: "A Bitcoin forecasting system that runs the LTS network over multiple market factors.",
  },
};

export const work = [
  {
    role: "Head of Engineering",
    company: "SoftSora",
    period: "May 2025 - Present",
    caseStudy: "ai-contact-center",
    points: [
      "Lead Software Engineer from May 2025, Head of Engineering since Mar 2026.",
      "Built a production AI call center system with sub-2s latency and 30% better response accuracy, on AWS, Bedrock and real-time streaming pipelines.",
      "Designed a real-time AI transcription platform for high-throughput audio, with sub-2s processing on Lambda, Kinesis Video Streams and AWS Transcribe.",
      "Raised AI response relevance by 30%+ by replacing fuzzy matching with a semantic similarity engine on Bedrock embeddings.",
      "Architect the ML and cloud infrastructure (S3, Lambda, RDS, EC2, Cognito, EventBridge, Bedrock, App Runner, Amplify) as code, cutting provisioning time by 50% with zero-downtime deployments.",
      "Built low-latency audio and WebSocket pipelines with Redis caching and Zustand state, and high-throughput REST APIs with Express and Nest.",
      "Shipped analytics dashboards, live UI and admin tools with React, Tailwind CSS, Express and automated CI/CD, plus a rules-based credit scoring engine.",
      "Own authentication and authorization, and created the full-stack MVP templates and mono-repo boilerplates (Next.js, Express) the team starts from.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "99x",
    logo: "99x_logo.png",
    period: "Jul 2024 - Jun 2025",
    caseStudy: "ml-in-production",
    points: [
      "Led an AI image segmentation system reaching 85%+ IoU on complex microscopic imagery, with TensorFlow and custom CNN architectures.",
      "Built the full ML pipeline: FastAPI preprocessing, TensorFlow training, Docker, deployment to Azure, and MLflow for experiment tracking.",
      "Cut manual data labeling from 40+ hours to under 2 with an OpenCV pre-labeling and validation workflow.",
      "Improved carbon credit forecasting accuracy by 50%+ with an LSTM system that detects drift and retrains automatically.",
      "Scaled model serving with FastAPI microservices on Kubernetes, monitored with Grafana and Prometheus.",
      "Built explainable AI workflows that validate LLM output against Wolfram Alpha and Wikipedia.",
      "Led a JavaScript to TypeScript migration, sped up frontends by up to 40%, and standardized UI on Next.js and Tailwind CSS.",
    ],
  },
  {
    role: "Visiting Lecturer",
    company: "Informatics Institute of Technology",
    logo: "iit_logo.png",
    period: "Sep 2023 - Present",
    points: [
      "Lecture Applied AI for part-time students.",
      "Run tutorials on software development foundations, object-oriented programming and web design.",
      "Guide and give feedback on final-year research theses.",
    ],
  },
  {
    role: "Software Engineer",
    company: "99x",
    logo: "99x_logo.png",
    period: "May 2023 - Jun 2024",
    points: [
      "Led a time-series forecasting system that improved prediction accuracy by over 50%.",
      "Automated data ingestion and preprocessing with Azure Data Factory ETL pipelines.",
      "Set performance baselines for real-time object detection at 85%+ accuracy with YOLO and Grounding DINO.",
      "Built a generative BI system that runs statistical tests and scikit-learn models to surface insights from structured data.",
      "Led a Next.js internal recruitment platform that replaced manual hiring workflows.",
      "Built serverless REST APIs on Node.js and the Serverless Framework, and enterprise UIs in Angular and React.",
    ],
  },
  {
    role: "Full-stack Developer",
    company: "Niftron",
    logo: "niftron_logo.png",
    period: "Jul 2022 - Apr 2023",
    points: [
      "Engineered serverless REST APIs with data consistency and concurrency safety.",
      "Designed a custom authentication library on Auth0 and React.",
      "Built an NFT marketplace and a gift card tokenization app with React, TypeScript and MongoDB.",
      "Contributed to a decentralized asset investment platform on Next, Express and Prisma.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Contract",
    logo: "freelance_logo.png",
    period: "Jan 2022 - May 2022",
    points: [
      "Built Ijazah Tours, a progressive web app for travel agents that brings pricing from popular travel platforms into one interface. React, Firebase and TypeScript.",
      "Built CanCure, a Flutter and Firebase app that diagnoses bone and kidney cancer with deep learning models and explainable AI visualizations.",
    ],
  },
  {
    role: "Trainee Software Engineer",
    company: "99x",
    logo: "99x_logo.png",
    period: "Jul 2021 - Jul 2022",
    points: [
      "Built static and dynamic UI screens in Angular, and mobile screens in React Native.",
      "Built backend services with the Serverless Framework, AWS and MongoDB, and infrastructure with AWS CDK and GraphQL.",
      "Set up the mobile deployment pipeline on App Center.",
      "Was the team's bug hunter for full-stack production issues, and ran training sessions for university students and interns.",
    ],
  },
  {
    role: "Full-stack Developer",
    company: "Niftron",
    logo: "niftron_logo.png",
    period: "Jan 2021 - Jul 2021",
    points: [
      "Led frontend development for reliability and speed.",
      "Built a blockchain gift card tokenization product.",
      "Worked on the frontend of the Nextentry ticketing platform with React and Ant Design.",
      "Designed interfaces for the EXIP marketing platform with TypeScript and MongoDB.",
    ],
  },
  {
    role: "Full-stack Developer",
    company: "The Radiant",
    logo: "radiant_logo.png",
    period: "Jan 2021 - May 2021",
    points: [
      "Built the official e-commerce website of Amirah Gems & Fine Jewellery with React, TypeScript and Firebase.",
    ],
  },
  {
    role: "Full-stack Developer",
    company: "Inforwaves",
    logo: "inforwaves_logo.png",
    period: "Oct 2020 - Jul 2021",
    points: [
      "Built APIs in a microservice architecture for Execution Excellence, with AWS RDS and NestJS with TypeORM.",
    ],
  },
];

export const volunteering = [
  {
    role: "Developer Program Member",
    company: "GitHub",
    link: "https://github.com/",
    logo: "github_logo.png",
    period: "Jul 2021 - Present",
    points: ["Keeps 100+ public repositories, from frontend development to data science and blockchain."],
  },
  {
    role: "Arctic Code Vault Contributor",
    company: "GitHub",
    link: "https://archiveprogram.github.com/",
    logo: "github_logo.png",
    period: "Nov 2020 - Present",
    points: ["Code preserved in the GitHub Arctic Code Vault."],
  },
  {
    role: "Postman Student Expert",
    company: "Postman",
    link: "https://www.postman.com/",
    logo: "postman_logo.png",
    period: "Nov 2021 - Nov 2022",
    points: ["Helped students get started with Postman as a Student Expert."],
  },
  {
    role: "Community guided projects author",
    company: "Coursera",
    link: "https://www.coursera.org/",
    logo: "coursera_logo.png",
    period: "Feb 2021 - May 2021",
    points: [
      "One of ten authors worldwide invited to design and publish community guided projects, part of Coursera's university initiative during the pandemic.",
    ],
  },
  {
    role: "Sergeant at Arms",
    company: "Toastmasters International",
    link: "https://www.toastmasters.org/",
    logo: "toastmasters_logo.png",
    period: "Jun 2020 - Jun 2021",
    points: ["Served as Sergeant at Arms of the IIT Toastmasters club."],
  },
  {
    role: "Codesprint '21 Lead Developer",
    company: "Informatics Institute of Technology",
    link: "https://www.iit.ac.lk/",
    logo: "iit_logo.png",
    period: "Nov 2020 - Jan 2021",
    points: ["Lead developer of the revamped Codesprint website, later discontinued because of COVID restrictions."],
  },
];

// `stack` names map to SVGs in src/assets/logos (Simple Icons slugs).
export const projects = [
  {
    name: "Liquid Time-stochasticity networks",
    url: "https://github.com/Ammar-Raneez/Liquid-Time-stochasticity-networks",
    description: "A neural network that makes liquid neural networks adapt faster to noisy data streams. From my IEEE paper.",
    stack: ["TensorFlow"],
  },
  {
    name: "BitForecast",
    url: "https://github.com/Ammar-Raneez/BitForecast",
    description: "Bitcoin price forecasting from multiple exogenous factors, stabilized against noise with the LTS network.",
    stack: ["React", "Firebase", "Python", "TensorFlow", "Heroku"],
  },
  {
    name: "ONCO",
    url: "https://github.com/Ammar-Raneez/SDGP-ONCO",
    description: "Diagnosis and prognosis for lung, skin and breast cancer, backed by six ML models.",
    stack: ["Flutter", "Firebase", "Python", "TensorFlow", "Azure"],
  },
  {
    name: "E-Ophthalmologist",
    url: "https://github.com/Ammar-Raneez/E-Ophthalmologist_UI",
    description: "Diagnoses the level of diabetic retinopathy and helps patients manage it.",
    stack: ["Flutter", "Firebase", "Python", "TensorFlow", "Azure"],
  },
  {
    name: "SimpleScript",
    url: "https://github.com/Ammar-Raneez/Simple_Script",
    description: "A basic command language with variables, conditionals and loops, built as a foundation for writing your own language.",
    stack: ["Python"],
  },
  {
    name: "Tinder Clone",
    url: "https://github.com/Ammar-Raneez/RN_Tinder_Clone",
    description: "A Tinder clone with most of the core features.",
    stack: ["React Native", "Firebase", "Expo"],
  },
  {
    name: "PL Guv'nor",
    url: "https://github.com/Ammar-Raneez/PL_Guvnor",
    description: "A management app that simulates a Premier League season.",
    stack: ["Java", "Play", "Angular"],
  },
  {
    name: "Text Editor Pro",
    url: "https://github.com/Ammar-Raneez/UCSD_Text_Editor_Pro",
    description: "A text editor with spell check, autocomplete and edit distance.",
    stack: ["Java"],
  },
  {
    name: "AWS CDK Auction Service",
    url: "https://github.com/Ammar-Raneez/cdk-poc",
    description: "An auction service across multiple AWS services, including a CI/CD pipeline.",
    stack: ["AWS", "Lambda"],
  },
];

export const stack = [
  {
    title: "AI, ML & MLOps",
    points: [
      "Real-time AI systems on Amazon Bedrock, from embeddings to streaming transcription.",
      "Computer vision, forecasting, NLP and explainable AI, from research to production.",
      "Training, tracking, serving and monitoring models in production.",
    ],
    tools: ["TensorFlow", "Keras", "scikit-learn", "OpenCV", "Python", "R", "FastAPI", "MLflow", "Jupyter", "Kaggle"],
  },
  {
    title: "Full stack, cross-platform & native",
    points: [
      "Full-stack web apps, real-time WebSocket products and high-throughput REST APIs.",
      "Cross-platform mobile with Flutter and React Native, iOS with Swift and SwiftUI.",
      "Frontend architecture, performance work and TypeScript migrations.",
    ],
    tools: [
      "TypeScript", "JavaScript", "React", "Next.js", "Angular", "Svelte", "Vue", "Tailwind CSS",
      "HTML5", "CSS", "Flutter", "Swift", "Node.js", "Express", "NestJS", "Deno", "GraphQL",
      "Prisma", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", "Firebase",
    ],
  },
  {
    title: "Cloud & infrastructure",
    points: [
      "AWS Certified Solutions Architect (Associate).",
      "Serverless and container architectures as code, with zero-downtime deployments.",
      "Kubernetes pipelines and observability with Grafana and Prometheus.",
    ],
    tools: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Serverless", "Grafana", "Prometheus", "Vercel", "Netlify", "Heroku"],
  },
  {
    title: "Tools & design",
    points: ["Interface design for mobile and web apps, and the boilerplates teams start from."],
    tools: ["Git", "Figma", "Auth0", "Hasura", "Expo", "VS Code", "Xcode", "JetBrains"],
  },
];

export const degree = {
  school: "University of Westminster",
  via: "Informatics Institute of Technology",
  title: "BSc Computer Science",
  period: "2019 - 2023",
  link: "https://www.westminster.ac.uk/",
  result: "First class honours",
  average: "89.3%",
  points: [
    "Dr. Gamini Wikramasinghe Gold Medal, awarded to the top of the batch.",
    "Best Final Year Project, and valedictorian of the graduating class.",
  ],
  also: "Zero To Mastery Academy, Computer Science, Jul 2021 - Aug 2024",
};

// `link` is optional: awards without a public page render as plain rows.
export const competitions = [
  { title: "Best Final Year Project", year: "2023", result: "IIT, most outstanding final-year research project in BSc Computer Science" },
  { title: "Dr. Gamini Wikramasinghe Gold Medal", year: "2023", result: "IIT, top of the BSc Computer Science batch" },
  { title: "NBQSA '23", year: "2023", result: "Merit, tertiary student project (technology), British Computer Society" },
  { title: "IEEE CCWC", year: "2023", result: "LTS algorithm proposal and publication", link: "https://ieeexplore.ieee.org/document/10099071" },
  { title: "Cutting Edge '21", year: "2021", result: "2nd place, poster design", link: "https://drive.google.com/file/d/1yfyk_Cri2wbK_3dwt8-cUSZK6ZhkxGQV/view?usp=sharing" },
  { title: "IITHack '21", year: "2021", result: "Finalist" },
  { title: "Datathon '20", year: "2021", result: "2nd place, all-island, SLIIT and Zone24x7", link: "https://drive.google.com/file/d/17t0sF8hkZlrLDGpUi7gpfvUyZIFaPO8K/view?usp=sharing" },
  { title: "PyHack '21", year: "2021", result: "4th of 120", link: "https://drive.google.com/file/d/15jHsDZ0HEDqLBpwbg9zYd2syiFex0rDn/view?usp=sharing" },
  { title: "Coderally 2", year: "2020", result: "1st of 120, all-island", link: "https://www.hackerrank.com/contests/coderally2/leaderboard" },
  { title: "Coderally", year: "2020", result: "2nd of 70, all-island", link: "https://www.hackerrank.com/contests/coderally/leaderboard" },
];

const coursera = (id) => `https://www.coursera.org/account/accomplishments/specialization/certificate/${id}`;
const hackerrank = (id) => `https://www.hackerrank.com/certificates/${id}`;

export const certifications = [
  { title: "AWS Certified Solutions Architect, Associate", issuer: "AWS, 2024", link: "https://www.credly.com/badges/69091ce5-cf08-47be-aecd-feb120467e70/public_url" },
  { title: "AWS Knowledge: Architecting", issuer: "AWS, 2024", link: "https://www.credly.com/badges/dcddb96f-6545-420a-9cbc-81307da81082/public_url" },
  { title: "AWS Knowledge: Serverless", issuer: "AWS, 2024", link: "https://www.credly.com/badges/f0844a30-d5d3-44cc-b360-5fcfc39c5cc9/public_url" },
  { title: "Google IT Automation with Python", issuer: "Coursera, 2024", link: "https://www.coursera.org/account/accomplishments/specialization/P1YQSE11DZ7O" },
  { title: "Machine Learning Engineering for Production (MLOps)", issuer: "DeepLearning.AI, 2023", link: "https://www.coursera.org/account/accomplishments/specialization/R6WGUMK6X9QP" },
  { title: "Swift 5 iOS Application Developer", issuer: "LearnQuest, 2023", link: "https://www.coursera.org/account/accomplishments/specialization/LWU39PXEKB56" },
  { title: "AWS Fundamentals", issuer: "Coursera, 2021", link: coursera("424ZJPYSNQ7Q") },
  { title: "TensorFlow Developer", issuer: "DeepLearning.AI, 2020", link: coursera("E3ZCCDMB65CQ") },
  { title: "Deep Learning", issuer: "DeepLearning.AI, 2020", link: coursera("KY6SJ66ZAWQM") },
  { title: "Machine Learning", issuer: "DeepLearning.AI", link: coursera("VDMPDJDZ5U3K") },
  { title: "TensorFlow: Data and Deployment", issuer: "DeepLearning.AI", link: "https://www.coursera.org/account/accomplishments/specialization/5XMHEGTKMK4U" },
  // The old site linked this to the TensorFlow Developer certificate. Add the right URL to restore the link.
  { title: "AI for Medicine", issuer: "DeepLearning.AI", link: "https://www.coursera.org/account/accomplishments/specialization/FX8WL7NCES6E" },
  { title: "Mathematics for Machine Learning", issuer: "Imperial College London, 2020", link: coursera("QY27NBKN8NZC") },
  { title: "Full-stack Web Development with React", issuer: "HKUST, 2020", link: coursera("SGTU9KWH8EVP") },
  { title: "Full-stack Web Development with Angular", issuer: "HKUST", link: coursera("34AENMW2G7SN") },
  { title: "Object Oriented Programming in Java", issuer: "UC San Diego, 2020", link: coursera("44KNMTEPECLB") },
  { title: "Java Programming and Software Engineering Fundamentals", issuer: "Duke University, 2020", link: coursera("DV5MQ92BKTC5") },
  { title: "Web Design for Everybody", issuer: "Coursera, 2020", link: coursera("SX87DZRHFJHY") },
  { title: "Responsive Web Design", issuer: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/ammuuu/responsive-web-design" },
  { title: "SQL (Basic)", issuer: "HackerRank, 2022", link: hackerrank("1261abe583de") },
  { title: "Angular (Basic)", issuer: "HackerRank, 2022", link: hackerrank("93e7b04d9493") },
  { title: "React (Basic)", issuer: "HackerRank, 2022", link: hackerrank("cc9aa24d347b") },
  { title: "CSS (Basic)", issuer: "HackerRank, 2022", link: hackerrank("65d65608f05f") },
  { title: "JavaScript (Basic)", issuer: "HackerRank, 2022", link: hackerrank("9f22bcea6f23") },
  { title: "Python (Basic)", issuer: "HackerRank, 2020", link: hackerrank("54b6107b078b") },
  { title: "Java (Basic)", issuer: "HackerRank", link: hackerrank("85b6ce7fa255") },
  { title: "Problem Solving (Basic)", issuer: "HackerRank", link: hackerrank("25f97cf5bbc3") },
];

export const learningProfiles = [
  { name: "HackerRank", link: "https://www.hackerrank.com/_ammar_" },
  { name: "Coursera", link: "https://www.coursera.org/user/b075574015a3451caa9d89af60606360" },
  { name: "Udemy", link: "https://www.udemy.com/user/ammar-raneez/" },
];

export const teaching = {
  role: "Visiting Lecturer",
  place: "Informatics Institute of Technology",
  since: "Sep 2023",
  subjects: ["Applied AI", "Software development foundations", "Object-oriented programming", "Web design"],
  points: [
    "Lecture Applied AI for part-time students.",
    "Run tutorials, sit on viva panels, and guide final-year research theses.",
  ],
  // `link` is optional; `note` points at a Notes slug.
  events: [
    { date: "2026", title: "Guest session, UWU", detail: "The dark side of AI: a co-pilot, not the captain", note: "logical-thinking" },
    { date: "Sep 2025", title: "AWS Community Day", detail: "Won the quiz" },
    { date: "2021 - 2022", title: "99x", detail: "Training sessions for university students and interns" },
    { date: "2021", title: "Coursera", detail: "One of ten authors invited to publish community guided projects" },
  ],
};

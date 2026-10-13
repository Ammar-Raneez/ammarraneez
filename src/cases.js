// Case studies. Every number and component here comes from Ammar's LinkedIn experience
// entries; nothing is estimated. Client names and internal details are deliberately left out.
// A string in `body` is a paragraph; an array is a list.

export const cases = [
  {
    slug: "ai-contact-center",
    title: "A real-time AI contact center with sub-2s latency.",
    org: "SoftSora",
    role: "Lead Software Engineer, then Head of Engineering",
    period: "2025 - Present",
    summary:
      "A production AI call center and a real-time transcription platform, built on AWS: audio streams in, the system understands it, and an answer goes back while the caller is still on the line.",
    outcomes: [
      { value: "<2s", label: "Latency for responses and for transcription processing" },
      { value: "+30%", label: "Response accuracy" },
      { value: "+30%", label: "Response relevance after replacing fuzzy matching with semantic similarity" },
      { value: "-50%", label: "Infrastructure provisioning time, with zero-downtime deployments" },
    ],
    diagram: {
      caption: "Simplified map of the main components, not a full architecture.",
      stages: [
        { title: "Ingest", items: ["Kinesis Video Streams", "Lambda", "AWS Transcribe"] },
        { title: "Understand", items: ["Amazon Bedrock", "Bedrock embeddings", "Semantic similarity engine"] },
        { title: "Deliver", items: ["WebSocket pipelines", "Redis cache", "React + Zustand live UI"] },
      ],
      platform: {
        title: "Platform, as infrastructure as code",
        items: ["S3", "Lambda", "RDS", "EC2", "Cognito", "EventBridge", "App Runner", "Amplify"],
      },
    },
    sections: [
      {
        heading: "The problem",
        body: [
          "A phone call does not wait. For an AI agent to hold a conversation, every step between the caller speaking and the system answering has to fit inside a budget measured in seconds: transcription, understanding, retrieval and delivery.",
        ],
      },
      {
        heading: "What I built",
        body: [
          [
            "A real-time transcription platform for high-throughput audio, using Kinesis Video Streams, optimized Lambda functions and AWS Transcribe, with sub-2s processing.",
            "A production AI call center on AWS and Bedrock with real-time streaming pipelines, reaching sub-2s latency and 30% better response accuracy.",
            "A semantic similarity engine on Bedrock embeddings that replaced traditional fuzzy matching and improved response relevance by more than 30%.",
            "Low-latency audio and WebSocket pipelines, with Redis caching and Zustand state management to keep the live UI from re-rendering more than it has to.",
            "The cloud and ML infrastructure as code, which cut provisioning time by 50% and made deployments zero-downtime.",
          ],
        ],
      },
      {
        heading: "Shipping it",
        body: [
          "This was the project of long nights and more than a few overnights at the office.",
        ],
      },
    ],
    stack: ["AWS", "Lambda", "React", "Next.js", "Tailwind CSS", "Express", "NestJS", "Redis"],
  },
  {
    slug: "ml-in-production",
    title: "Taking machine learning from notebook to production.",
    org: "99x",
    role: "Software Engineer, then Senior Software Engineer",
    period: "2023 - 2025",
    summary:
      "Two years of turning models into systems: image segmentation on microscopic imagery, carbon credit forecasting, object detection and the pipelines that train, ship and watch them.",
    outcomes: [
      { value: "85%+", label: "IoU on complex microscopic imagery with custom CNN architectures" },
      { value: "<2h", label: "Manual data labeling, down from 40+ hours, after automating pre-labeling" },
      { value: "+50%", label: "Carbon credit forecasting accuracy, with drift detection and automatic retraining" },
      { value: "85%+", label: "Real-time object detection accuracy with YOLO and Grounding DINO" },
    ],
    diagram: {
      caption: "Components from the role, grouped by stage. Simplified.",
      stages: [
        { title: "Prepare", items: ["Data", "FastAPI preprocessing", "OpenCV pre-labeling"] },
        { title: "Train", items: ["TensorFlow", "Custom CNNs and LSTMs", "MLflow tracking"] },
        { title: "Serve", items: ["Docker", "FastAPI microservices", "Kubernetes", "Azure"] },
      ],
      platform: {
        title: "Watch",
        items: ["Grafana", "Prometheus", "Drift detection", "Automated retraining"],
      },
    },
    sections: [
      {
        heading: "Image segmentation",
        body: [
          "I led an AI image segmentation system for complex microscopic imagery, reaching 85%+ IoU with TensorFlow and custom CNN architectures. The model was only part of it: I built the full pipeline from data to production, with FastAPI preprocessing, TensorFlow training, Docker, deployment to Azure, and MLflow for experiment tracking and performance monitoring.",
          "I also automated labeling with a computer vision pre-labeling and validation workflow with OpenCV and Python. Manual labeling went from more than 40 hours to under 2.",
        ],
      },
      {
        heading: "Forecasting, again",
        body: [
          "Time series came back. I designed and deployed an LSTM system for carbon credit forecasting, with real-time drift detection and automated retraining, and improved forecasting accuracy by more than 50%. Before that, as a Software Engineer, I led a forecasting system that improved prediction accuracy by over 50% using statistical models, with Azure Data Factory pipelines automating ingestion and preprocessing.",
        ],
      },
      {
        heading: "Serving and the rest",
        body: [
          [
            "Scaled model serving with FastAPI microservices on Kubernetes, monitored with Grafana and Prometheus.",
            "Set performance baselines for real-time object detection at 85%+ accuracy with YOLO and Grounding DINO.",
            "Built explainable AI workflows that check LLM output against Wolfram Alpha and Wikipedia.",
            "Built a generative BI system that runs statistical tests and scikit-learn models over structured data.",
            "Led a JavaScript to TypeScript migration and standardized frontends on Next.js and Tailwind CSS.",
          ],
        ],
      },
    ],
    stack: ["TensorFlow", "Python", "OpenCV", "FastAPI", "MLflow", "Docker", "Kubernetes", "Azure", "Grafana", "Prometheus"],
  },
  {
    slug: "lts-network",
    title: "Liquid Time-stochasticity: a network for noisy, volatile data.",
    org: "University of Westminster, IIT",
    role: "Final-year research",
    period: "2022 - 2023",
    summary:
      "My final-year thesis. A plan to re-implement a published algorithm turned into a new network of my own, which was published at IEEE CCWC 2023.",
    outcomes: [
      { value: "IEEE", label: "Published at CCWC 2023" },
      { value: "Best", label: "Final Year Project, IIT 2023" },
      { value: "Merit", label: "NBQSA '23, tertiary student project (technology)" },
    ],
    sections: [
      {
        heading: "The idea",
        body: [
          "The LTS network adds further flexibility and rapid adaptability to liquid neural networks so that they adapt more effectively to noisy data streams.",
        ],
      },
      {
        heading: "How it happened",
        body: [
          "The original plan was simple: implement an algorithm proposed in a research paper and assess how well it suited time series forecasting. Instead, I designed my own algorithm to replace the original one. It was one of the best decisions I have made. The work was published, won Best Final Year Project, and took a merit at NBQSA '23.",
        ],
      },
      {
        heading: "In use",
        body: [
          "BitForecast applies the network to Bitcoin prices, considering multiple exogenous factors that move the price directly or indirectly, and uses LTS to curb uncertainty and noise.",
        ],
      },
    ],
    links: [
      { label: "The paper on IEEE Xplore", href: "https://ieeexplore.ieee.org/document/10099071" },
      { label: "Reference implementation", href: "https://github.com/Ammar-Raneez/Liquid-Time-stochasticity-networks" },
      { label: "BitForecast", href: "https://github.com/Ammar-Raneez/BitForecast" },
    ],
    stack: ["TensorFlow", "Python", "React", "Firebase"],
  },
];

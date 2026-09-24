export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  impact: string;
  founded?: string;
  achievements?: string[];
  technologies?: string[];
  statistics?: { label: string; value: string }[];
  mission?: string;
  website?: string;
}

export const projects: Project[] = [
  {
    id: "fingerprint-recognition-analysis",
    title: "Fingerprint Recognition & Feature Analysis",
    description: "Engineered an automated fingerprint recognition system using advanced image processing and machine learning techniques to extract minutiae patterns and classify biometric features with high precision.",
    tags: ["Computer Vision", "Machine Learning", "OpenCV", "Python", "Feature Engineering"],
    impact: "High-precision ridge feature extraction & automated biometric classification",
    mission: "Develop robust, efficient computer vision architectures for biometric security and pattern analysis.",
    achievements: [
      "Developed a fingerprint recognition system using image processing techniques to extract unique ridge and minutiae patterns.",
      "Implemented pre-processing, noise reduction, and feature extraction algorithms to handle variable image quality.",
      "Trained and evaluated machine learning classifiers to achieve reliable pattern recognition and accurate matching.",
      "Established comprehensive performance evaluation frameworks analyzing FAR/FRR and processing throughput."
    ],
    technologies: [
      "Python",
      "OpenCV",
      "Scikit-learn",
      "NumPy",
      "Matplotlib",
      "Jupyter Notebook"
    ],
    statistics: [
      { label: "Domain", value: "Biometrics & Computer Vision" },
      { label: "Pipeline", value: "End-to-End Image Processing" }
    ],
    website: "https://www.linkedin.com/in/rajyalakshmikadiyala",
  },
  {
    id: "sentiment-analysis-vaccination-india",
    title: "Sentiment Analysis of Vaccination in India (Twitter)",
    description: "Built an NLP-based sentiment analysis pipeline processing Twitter data to classify public sentiment, uncover temporal discourse shifts, and evaluate public sentiment toward vaccination campaigns.",
    tags: ["NLP", "Sentiment Analysis", "Twitter Data", "Python", "Scikit-learn", "Pandas"],
    impact: "Automated text preprocessing and multi-class sentiment trend visualization",
    mission: "Transform unstructured social streams into clear, actionable public perception insights.",
    achievements: [
      "Built an NLP-based sentiment analysis pipeline to clean, tokenize, and preprocess Twitter text streams.",
      "Classified positive, negative, and neutral sentiments using trained machine learning models and text vectorization.",
      "Analyzed key sentiment trends and public attitudes toward COVID-19 vaccination initiatives across India.",
      "Generated interactive visualizations using Matplotlib and Seaborn to communicate complex data findings."
    ],
    technologies: [
      "Python",
      "NLP",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "Seaborn"
    ],
    statistics: [
      { label: "Data Source", value: "Twitter Dataset" },
      { label: "Classification", value: "Positive / Neutral / Negative" }
    ],
    website: "https://www.linkedin.com/in/rajyalakshmikadiyala",
  },
  {
    id: "jpmc-llm-chatbot",
    title: "LLM-Powered Enterprise Chatbot & API Platform (JPMC)",
    description: "Designed an intelligent LLM chatbot integrating Python, Flask, and Java to automate enterprise business workflows, improving response accuracy and reducing manual query turnaround time by 80%.",
    tags: ["LLMs", "NLP", "Flask", "Java", "MongoDB", "AWS S3", "Docker"],
    impact: "80% reduction in support response time via automated query resolution",
    mission: "Deliver scalable conversational AI solutions to streamline core business operations.",
    achievements: [
      "Developed AI-powered applications integrating machine learning and NLP models to automate business workflows.",
      "Designed and implemented an LLM-powered chatbot handling enterprise user queries, reducing manual support time by 80%.",
      "Built and deployed REST APIs for ML models using Flask, integrating MongoDB and AWS S3 for scalable model serving.",
      "Automated model deployment and delivery using Docker, GitHub Actions, and AWS for seamless CI/CD execution."
    ],
    technologies: [
      "Python",
      "Flask",
      "Java",
      "LLMs / NLP",
      "MongoDB",
      "AWS (S3, EC2)",
      "Docker",
      "GitHub Actions"
    ],
    statistics: [
      { label: "Turnaround", value: "80% Time Reduction" },
      { label: "Deployment", value: "Docker + AWS CI/CD" }
    ],
    website: "https://www.linkedin.com/in/rajyalakshmikadiyala",
  },
  {
    id: "abhibus-etl-streaming",
    title: "Scalable ETL & Real-Time Ingestion Engine (AbhiBus)",
    description: "Engineered high-performance ETL pipelines with Apache Spark and streaming ingestion via Kafka, processing 25+ e-commerce data tables and cutting query retrieval latency by 50%.",
    tags: ["Apache Spark", "Apache Kafka", "Python", "MySQL", "ETL", "Docker"],
    impact: "50% reduction in data retrieval latency across 25+ e-commerce tables",
    mission: "Build resilient, real-time data engineering infrastructure for scalable analytics.",
    achievements: [
      "Developed scalable ETL pipelines using Python, Apache Spark, and MySQL to process high-volume data across 25+ tables.",
      "Implemented real-time data ingestion pipelines using Apache Kafka to enable low-latency streaming analytics.",
      "Optimized backend SQL queries and data transformations, cutting query retrieval latency by 50%.",
      "Collaborated in Agile teams for continuous data integration, code review, and automated testing with Docker & Jenkins."
    ],
    technologies: [
      "Python",
      "Apache Spark",
      "Apache Kafka",
      "MySQL",
      "Docker",
      "Jenkins"
    ],
    statistics: [
      { label: "Query Latency", value: "50% Reduction" },
      { label: "Scale", value: "25+ Enterprise Tables" }
    ],
    website: "https://www.linkedin.com/in/rajyalakshmikadiyala",
  },
];

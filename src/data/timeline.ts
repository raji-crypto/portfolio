export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "Feb 2025 – Present",
    title: "AI/ML Engineer @ JPMC",
    description: "Developing AI applications with Python, Flask, and Java. Engineered an LLM-powered chatbot reducing query response time by 80%, built model REST APIs with MongoDB & AWS S3, and automated CI/CD using Docker & GitHub Actions.",
  },
  {
    year: "Aug 2024 – May 2026",
    title: "M.S. in Data Science @ University at Albany",
    description: "Master of Science in Data Science. Specializing in machine learning, deep learning, statistical analysis, predictive modeling, and scalable AI solutions.",
  },
  {
    year: "Jan 2023 – Apr 2024",
    title: "Data Engineer @ AbhiBus",
    description: "Built scalable ETL pipelines using Python, Apache Spark, and MySQL across 25+ tables. Implemented real-time Kafka ingestion streams and optimized SQL workloads to reduce query latency by 50%.",
  },
  {
    year: "Aug 2020 – May 2024",
    title: "B.Tech in Computer Science @ SRM University AP",
    description: "Bachelor's degree with specialization in Data Science. Built core foundations in machine learning, algorithms, computer vision, data engineering, and statistical modeling.",
  },
];

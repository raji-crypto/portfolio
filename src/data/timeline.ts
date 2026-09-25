export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    "year": "Feb 2025 - Present",
    "title": "Data Scientist @ JP Morgan Chase",
    "description": "Built AI-enabled financial analytics applications using Python, SQL, and Databricks to analyze credit portfolio performance, improving campaign decision accuracy by 18%. Developed scalable ETL/ELT pipelines with Snowflake and Azure reducing prep time by 35%, deployed ML solutions across 12+ segments, and applied generative AI & LangChain to automate commentary workflows."
  },
  {
    "year": "Aug 2024 - May 2026",
    "title": "M.S. in Data Science @ University at Albany",
    "description": "Master of Science in Data Science (Albany, NY). Specializing in machine learning, deep learning, big data architectures, statistical modeling, and cloud analytics."
  },
  {
    "year": "Jan 2023 - Apr 2024",
    "title": "Data Engineer @ AbhiBus",
    "description": "Built enterprise data pipelines using AWS, Apache Spark, and SQL processing 2M+ daily operational transactions. Managed Databricks and Snowflake workflows to boost query performance by 10x, and created automated real-time event streaming with Apache Kafka and AWS Kinesis."
  },
  {
    "year": "Aug 2020 - May 2024",
    "title": "B.Tech in Computer Science @ SRM University AP",
    "description": "Specialized in Data Science & Machine Learning. Built strong foundations in machine learning algorithms, distributed data engineering, computer vision, and statistical modeling."
  }
];

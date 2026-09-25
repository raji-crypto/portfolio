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
    "id": "jpmc-financial-analytics",
    "title": "AI-Enabled Financial Analytics & Forecasting Platform (JPMorgan Chase)",
    "description": "Built AI-enabled financial analytics applications using Python, SQL, and Databricks to analyze credit portfolio performance, supporting financial forecasting, scenario analysis, and business trend identification while improving campaign decision accuracy by 18%.",
    "tags": [
      "Databricks",
      "Python",
      "SQL",
      "LangChain",
      "LLMs / RAG",
      "Snowflake",
      "MLflow",
      "Azure",
      "PyTorch"
    ],
    "impact": "+18% campaign decision accuracy & 35% reduction in reporting prep time",
    "mission": "Deliver explainable, auditable, and automated financial analytics through generative AI and enterprise data lakehouses.",
    "achievements": [
      "Built AI-enabled financial analytics applications using Python, SQL, and Databricks to analyze credit portfolio performance, improving campaign decision accuracy by 18%.",
      "Developed scalable ETL and ELT pipelines using Azure, Enterprise Data Platform, and Snowflake to integrate transaction, operational, and financial datasets, reducing reporting preparation time by 35%.",
      "Created and validated machine learning solutions using Scikit-learn, PyTorch, and TensorFlow for regression, classification, anomaly detection, and financial forecasting across 12+ customer segments.",
      "Applied generative AI and LangChain with large language model capabilities to automate management commentary, knowledge retrieval, and self-service financial analysis workflows, reducing manual analysis effort by 30%.",
      "Managed model performance monitoring using MLflow, including back testing, feature selection, model interpretability reviews, and overfit prevention techniques aligned with finance governance standards."
    ],
    "technologies": [
      "Databricks",
      "Python",
      "SQL",
      "LangChain",
      "LLMs & RAG",
      "Snowflake",
      "Azure",
      "PyTorch",
      "Scikit-learn",
      "MLflow"
    ],
    "statistics": [
      {
        "label": "Accuracy",
        "value": "+18% Accuracy"
      },
      {
        "label": "Prep Time",
        "value": "-35% Time"
      },
      {
        "label": "Automation",
        "value": "-30% Effort"
      },
      {
        "label": "Segments",
        "value": "12+ Segments"
      }
    ],
    "website": "https://www.linkedin.com/in/rajyalakshmikadiyala"
  },
  {
    "id": "abhibus-scalable-etl",
    "title": "Scalable Enterprise Data Pipeline & Real-Time Analytics (AbhiBus)",
    "description": "Built enterprise data pipelines using AWS, Apache Spark, and SQL to process 2M+ daily operational transactions, managing cloud-based analytics workflows using Databricks and Snowflake to organize booking, revenue, and customer datasets with 10x faster query performance.",
    "tags": [
      "Databricks",
      "Apache Spark",
      "Apache Kafka",
      "AWS Kinesis",
      "Snowflake",
      "Power BI",
      "Tableau",
      "SQL"
    ],
    "impact": "10x query performance boost & real-time event streaming across 2M+ daily transactions",
    "mission": "Architect high-throughput, fault-tolerant data infrastructure for mission-critical transportation and booking systems.",
    "achievements": [
      "Built enterprise data pipelines using AWS, Apache Spark, and SQL to process 2M+ daily operational transactions for financial planning, budgeting, and enterprise reporting.",
      "Managed cloud-based analytics workflows using Databricks and Snowflake to organize booking, revenue, and customer datasets, improving query performance by 10x and enabling scalable management reporting.",
      "Developed automated analytics solutions with Apache Kafka and AWS Kinesis to capture real-time business events, supporting anomaly detection, forecasting, and operational trend identification.",
      "Created financial KPI visualization applications using Power BI and Tableau, delivering executive dashboards for revenue analysis, profitability tracking, and business decision-making.",
      "Participated in ERP and financial system integration activities involving Oracle GL/EPM, SAP, ERP, and EPM data sources, troubleshooting data quality issues, correcting validation errors, and improving audit readiness."
    ],
    "technologies": [
      "Databricks",
      "Apache Spark",
      "Apache Kafka",
      "AWS (S3, Kinesis, Glue)",
      "Snowflake",
      "Power BI",
      "Tableau",
      "SQL",
      "Python"
    ],
    "statistics": [
      {
        "label": "Daily Scale",
        "value": "2M+ Txns"
      },
      {
        "label": "Query Speed",
        "value": "10x Faster"
      },
      {
        "label": "Streaming",
        "value": "Kafka & Kinesis"
      },
      {
        "label": "Dashboards",
        "value": "Power BI & Tableau"
      }
    ],
    "website": "https://www.linkedin.com/in/rajyalakshmikadiyala"
  },
  {
    "id": "agentic-ai-document-intelligence",
    "title": "Agentic AI Assistant for Document Intelligence",
    "description": "Developed an autonomous AI agent using Python, LangChain, and GPT-4 with Retrieval-Augmented Generation (RAG) and vector databases to intelligently query, summarize, and extract insights from unstructured documents, drastically cutting manual review time.",
    "tags": [
      "Agentic AI",
      "LangChain",
      "GPT-4",
      "RAG",
      "Vector Databases",
      "Python",
      "FastAPI"
    ],
    "impact": "Autonomous multi-step document reasoning, hybrid semantic search, and structured data extraction",
    "mission": "Bridge unstructured enterprise documents with autonomous AI reasoning agents for rapid knowledge discovery.",
    "achievements": [
      "Developed an autonomous AI agent using Python, LangChain, and GPT-4 with Retrieval-Augmented Generation (RAG) and vector databases.",
      "Intelligently queried, summarized, and extracted structured insights from complex, unstructured multi-format documents.",
      "Implemented hybrid semantic retrieval and chunking strategies to minimize hallucinations and preserve document context.",
      "Automated repetitive analysis workflows, substantially reducing manual document review time for decision-makers."
    ],
    "technologies": [
      "Python",
      "LangChain",
      "GPT-4",
      "Vector Databases",
      "RAG Architecture",
      "FastAPI",
      "Docker"
    ],
    "statistics": [
      {
        "label": "Architecture",
        "value": "Agentic RAG"
      },
      {
        "label": "Foundation Model",
        "value": "GPT-4 / LLM"
      },
      {
        "label": "Capability",
        "value": "Autonomous Agent"
      },
      {
        "label": "Domain",
        "value": "Doc Intelligence"
      }
    ],
    "website": "https://www.linkedin.com/in/rajyalakshmikadiyala"
  },
  {
    "id": "automated-financial-etl-pipeline",
    "title": "Automated ETL Pipeline for Financial Data Processing",
    "description": "Designed and implemented an end-to-end automated ETL pipeline using Apache Airflow, Python, and Snowflake to extract, transform, and load 1M+ daily financial records from multi-source APIs, automating data validation and reducing manual data preparation effort by 40%.",
    "tags": [
      "Apache Airflow",
      "Snowflake",
      "Python",
      "ETL Pipelines",
      "Data Validation",
      "APIs",
      "SQL"
    ],
    "impact": "1M+ daily financial records processed & 40% reduction in manual data preparation effort",
    "mission": "Deliver high-reliability, automated financial pipelines with end-to-end data auditing and zero-touch ingestion.",
    "achievements": [
      "Designed and implemented an end-to-end ETL pipeline using Apache Airflow, Python, and Snowflake to ingest 1M+ daily financial records from multi-source APIs.",
      "Automated comprehensive data validation rules to enforce schema consistency, eliminate duplicate entries, and preserve audit trails.",
      "Reduced manual data preparation effort by 40% for downstream financial analytics, forecasting, and risk reporting.",
      "Configured robust DAG schedules, error alerts, and idempotent backfill mechanisms for continuous reliability."
    ],
    "technologies": [
      "Apache Airflow",
      "Snowflake",
      "Python",
      "SQL",
      "REST APIs",
      "Data Validation",
      "Docker"
    ],
    "statistics": [
      {
        "label": "Daily Records",
        "value": "1M+ Records"
      },
      {
        "label": "Prep Time",
        "value": "-40% Manual Effort"
      },
      {
        "label": "Orchestration",
        "value": "Apache Airflow"
      },
      {
        "label": "Warehouse",
        "value": "Snowflake"
      }
    ],
    "website": "https://www.linkedin.com/in/rajyalakshmikadiyala"
  },
  {
    "id": "fingerprint-recognition-analysis",
    "title": "Fingerprint Recognition & Feature Analysis",
    "description": "Engineered an automated fingerprint recognition system using advanced image processing and machine learning techniques to extract minutiae patterns and classify biometric features with high precision.",
    "tags": [
      "Computer Vision",
      "Machine Learning",
      "OpenCV",
      "Python",
      "Feature Engineering"
    ],
    "impact": "High-precision ridge feature extraction & automated biometric classification",
    "mission": "Develop robust, efficient computer vision architectures for biometric security and pattern analysis.",
    "achievements": [
      "Developed a fingerprint recognition system using image processing techniques to extract unique ridge and minutiae patterns.",
      "Implemented pre-processing, noise reduction, and feature extraction algorithms to handle variable image quality.",
      "Trained and evaluated machine learning classifiers to achieve reliable pattern recognition and accurate matching.",
      "Established comprehensive performance evaluation frameworks analyzing FAR/FRR and processing throughput."
    ],
    "technologies": [
      "Python",
      "OpenCV",
      "Scikit-learn",
      "NumPy",
      "Matplotlib",
      "Jupyter Notebook"
    ],
    "statistics": [
      {
        "label": "Domain",
        "value": "Biometrics & CV"
      },
      {
        "label": "Pipeline",
        "value": "Image Processing"
      }
    ],
    "website": "https://www.linkedin.com/in/rajyalakshmikadiyala"
  },
  {
    "id": "sentiment-analysis-vaccination-india",
    "title": "Sentiment Analysis of Vaccination in India (Twitter)",
    "description": "Built an NLP-based sentiment analysis pipeline processing Twitter data to classify public sentiment, uncover temporal discourse shifts, and evaluate public sentiment toward vaccination campaigns.",
    "tags": [
      "NLP",
      "Sentiment Analysis",
      "Twitter Data",
      "Python",
      "Scikit-learn",
      "Pandas"
    ],
    "impact": "Automated text preprocessing and multi-class sentiment trend visualization",
    "mission": "Transform unstructured social streams into clear, actionable public perception insights.",
    "achievements": [
      "Built an NLP-based sentiment analysis pipeline to clean, tokenize, and preprocess Twitter text streams.",
      "Classified positive, negative, and neutral sentiments using trained machine learning models and text vectorization.",
      "Analyzed key sentiment trends and public attitudes toward COVID-19 vaccination initiatives across India.",
      "Generated interactive visualizations using Matplotlib and Seaborn to communicate complex data findings."
    ],
    "technologies": [
      "Python",
      "NLP",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "Seaborn"
    ],
    "statistics": [
      {
        "label": "Data Source",
        "value": "Twitter Dataset"
      },
      {
        "label": "Classification",
        "value": "3-Class Sentiment"
      }
    ],
    "website": "https://www.linkedin.com/in/rajyalakshmikadiyala"
  }
];

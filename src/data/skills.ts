export interface Skill {
  id: string;
  name: string;
  category: string;
}

export const skills: Skill[] = [
  {
    "id": "prog-1",
    "name": "Python",
    "category": "Programming & Scripting"
  },
  {
    "id": "prog-2",
    "name": "SQL",
    "category": "Programming & Scripting"
  },
  {
    "id": "prog-3",
    "name": "PySpark",
    "category": "Programming & Scripting"
  },
  {
    "id": "prog-4",
    "name": "Java",
    "category": "Programming & Scripting"
  },
  {
    "id": "prog-5",
    "name": "R",
    "category": "Programming & Scripting"
  },
  {
    "id": "prog-6",
    "name": "Bash & Shell Scripting",
    "category": "Programming & Scripting"
  },
  {
    "id": "prog-7",
    "name": "Excel VBA",
    "category": "Programming & Scripting"
  },
  {
    "id": "ml-1",
    "name": "Scikit-learn",
    "category": "Machine Learning & AI"
  },
  {
    "id": "ml-2",
    "name": "PyTorch",
    "category": "Machine Learning & AI"
  },
  {
    "id": "ml-3",
    "name": "TensorFlow",
    "category": "Machine Learning & AI"
  },
  {
    "id": "ml-4",
    "name": "Large Language Models (LLMs)",
    "category": "Machine Learning & AI"
  },
  {
    "id": "ml-5",
    "name": "LangChain",
    "category": "Machine Learning & AI"
  },
  {
    "id": "ml-6",
    "name": "Retrieval-Augmented Generation (RAG)",
    "category": "Machine Learning & AI"
  },
  {
    "id": "ml-7",
    "name": "Natural Language Processing (NLP)",
    "category": "Machine Learning & AI"
  },
  {
    "id": "ml-8",
    "name": "Computer Vision & OpenCV",
    "category": "Machine Learning & AI"
  },
  {
    "id": "ml-9",
    "name": "XGBoost & LightGBM",
    "category": "Machine Learning & AI"
  },
  {
    "id": "ml-10",
    "name": "Deep Learning",
    "category": "Machine Learning & AI"
  },
  {
    "id": "ml-11",
    "name": "Predictive Modeling",
    "category": "Machine Learning & AI"
  },
  {
    "id": "ml-12",
    "name": "Time-Series Forecasting",
    "category": "Machine Learning & AI"
  },
  {
    "id": "ml-13",
    "name": "Feature Engineering",
    "category": "Machine Learning & AI"
  },
  {
    "id": "ml-14",
    "name": "Model Evaluation & Backtesting",
    "category": "Machine Learning & AI"
  },
  {
    "id": "de-1",
    "name": "Databricks",
    "category": "Data Engineering & ETL"
  },
  {
    "id": "de-2",
    "name": "Azure Databricks",
    "category": "Data Engineering & ETL"
  },
  {
    "id": "de-3",
    "name": "Apache Spark",
    "category": "Data Engineering & ETL"
  },
  {
    "id": "de-4",
    "name": "Apache Kafka",
    "category": "Data Engineering & ETL"
  },
  {
    "id": "de-5",
    "name": "Apache Airflow",
    "category": "Data Engineering & ETL"
  },
  {
    "id": "de-6",
    "name": "AWS Glue",
    "category": "Data Engineering & ETL"
  },
  {
    "id": "de-7",
    "name": "Azure Data Factory",
    "category": "Data Engineering & ETL"
  },
  {
    "id": "de-8",
    "name": "ETL / ELT Pipelines",
    "category": "Data Engineering & ETL"
  },
  {
    "id": "de-9",
    "name": "Data Modeling & Validation",
    "category": "Data Engineering & ETL"
  },
  {
    "id": "de-10",
    "name": "Workflow Automation & Incremental Loading",
    "category": "Data Engineering & ETL"
  },
  {
    "id": "cloud-1",
    "name": "Databricks",
    "category": "Cloud & MLOps"
  },
  {
    "id": "cloud-2",
    "name": "Snowflake",
    "category": "Cloud & MLOps"
  },
  {
    "id": "cloud-3",
    "name": "AWS (S3, EC2, Lambda, Kinesis, Glue, SageMaker)",
    "category": "Cloud & MLOps"
  },
  {
    "id": "cloud-4",
    "name": "Azure (ML, Synapse, AKS, Data Factory)",
    "category": "Cloud & MLOps"
  },
  {
    "id": "cloud-5",
    "name": "MLflow",
    "category": "Cloud & MLOps"
  },
  {
    "id": "cloud-6",
    "name": "Docker",
    "category": "Cloud & MLOps"
  },
  {
    "id": "cloud-7",
    "name": "Kubernetes",
    "category": "Cloud & MLOps"
  },
  {
    "id": "cloud-8",
    "name": "GitHub Actions & CI/CD Pipelines",
    "category": "Cloud & MLOps"
  },
  {
    "id": "cloud-9",
    "name": "REST APIs (FastAPI, Flask)",
    "category": "Cloud & MLOps"
  },
  {
    "id": "db-1",
    "name": "Snowflake",
    "category": "Databases & Data Warehousing"
  },
  {
    "id": "db-2",
    "name": "Databricks Lakehouse",
    "category": "Databases & Data Warehousing"
  },
  {
    "id": "db-3",
    "name": "PostgreSQL",
    "category": "Databases & Data Warehousing"
  },
  {
    "id": "db-4",
    "name": "MySQL",
    "category": "Databases & Data Warehousing"
  },
  {
    "id": "db-5",
    "name": "MongoDB",
    "category": "Databases & Data Warehousing"
  },
  {
    "id": "db-6",
    "name": "Azure Synapse Analytics",
    "category": "Databases & Data Warehousing"
  },
  {
    "id": "db-7",
    "name": "Medallion Architecture & Data Lakes",
    "category": "Databases & Data Warehousing"
  },
  {
    "id": "db-8",
    "name": "Star Schema & Query Optimization",
    "category": "Databases & Data Warehousing"
  },
  {
    "id": "viz-1",
    "name": "Power BI (DAX, Power Query)",
    "category": "Data Visualization & BI"
  },
  {
    "id": "viz-2",
    "name": "Tableau",
    "category": "Data Visualization & BI"
  },
  {
    "id": "viz-3",
    "name": "Matplotlib & Seaborn",
    "category": "Data Visualization & BI"
  },
  {
    "id": "viz-4",
    "name": "Executive KPI Dashboards",
    "category": "Data Visualization & BI"
  },
  {
    "id": "viz-5",
    "name": "Exploratory Data Analysis (EDA)",
    "category": "Data Visualization & BI"
  }
];

export const skillCategories = [
  "Programming & Scripting",
  "Machine Learning & AI",
  "Data Engineering & ETL",
  "Cloud & MLOps",
  "Databases & Data Warehousing",
  "Data Visualization & BI"
];

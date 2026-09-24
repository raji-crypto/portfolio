export interface Skill {
  id: string;
  name: string;
  category: string;
}

export const skills: Skill[] = [
  // Programming
  { id: "prog-1", name: "Python", category: "Programming" },
  { id: "prog-2", name: "SQL", category: "Programming" },
  { id: "prog-3", name: "R", category: "Programming" },
  { id: "prog-4", name: "Java", category: "Programming" },

  // Machine Learning & AI
  { id: "ml-1", name: "Scikit-learn", category: "Machine Learning & AI" },
  { id: "ml-2", name: "TensorFlow", category: "Machine Learning & AI" },
  { id: "ml-3", name: "PyTorch", category: "Machine Learning & AI" },
  { id: "ml-4", name: "Pandas", category: "Machine Learning & AI" },
  { id: "ml-5", name: "NumPy", category: "Machine Learning & AI" },
  { id: "ml-6", name: "OpenCV", category: "Machine Learning & AI" },
  { id: "ml-7", name: "Deep Learning", category: "Machine Learning & AI" },
  { id: "ml-8", name: "Natural Language Processing (NLP)", category: "Machine Learning & AI" },
  { id: "ml-9", name: "Large Language Models (LLMs)", category: "Machine Learning & AI" },
  { id: "ml-10", name: "Computer Vision", category: "Machine Learning & AI" },
  { id: "ml-11", name: "Feature Engineering", category: "Machine Learning & AI" },
  { id: "ml-12", name: "Model Evaluation", category: "Machine Learning & AI" },

  // Data Science
  { id: "ds-1", name: "Exploratory Data Analysis (EDA)", category: "Data Science" },
  { id: "ds-2", name: "Data Preprocessing", category: "Data Science" },
  { id: "ds-3", name: "Data Cleaning", category: "Data Science" },
  { id: "ds-4", name: "Statistical Analysis", category: "Data Science" },
  { id: "ds-5", name: "Predictive Modeling", category: "Data Science" },
  { id: "ds-6", name: "Data Visualization", category: "Data Science" },

  // Visualization
  { id: "viz-1", name: "Power BI", category: "Visualization" },
  { id: "viz-2", name: "Tableau", category: "Visualization" },
  { id: "viz-3", name: "Matplotlib", category: "Visualization" },
  { id: "viz-4", name: "Seaborn", category: "Visualization" },

  // Databases & Data Warehousing
  { id: "db-1", name: "PostgreSQL", category: "Databases & Data Warehousing" },
  { id: "db-2", name: "MySQL", category: "Databases & Data Warehousing" },
  { id: "db-3", name: "MongoDB", category: "Databases & Data Warehousing" },
  { id: "db-4", name: "Snowflake", category: "Databases & Data Warehousing" },

  // Cloud & MLOps
  { id: "cloud-1", name: "AWS (S3, EC2, Lambda)", category: "Cloud & MLOps" },
  { id: "cloud-2", name: "Docker", category: "Cloud & MLOps" },
  { id: "cloud-3", name: "Git", category: "Cloud & MLOps" },
  { id: "cloud-4", name: "GitHub Actions", category: "Cloud & MLOps" },
  { id: "cloud-5", name: "MLflow", category: "Cloud & MLOps" },

  // Methodologies & Tools
  { id: "tool-1", name: "REST APIs", category: "Methodologies & Tools" },
  { id: "tool-2", name: "CI/CD", category: "Methodologies & Tools" },
  { id: "tool-3", name: "Agile", category: "Methodologies & Tools" },
  { id: "tool-4", name: "Jupyter Notebook", category: "Methodologies & Tools" },
  { id: "tool-5", name: "Google Colab", category: "Methodologies & Tools" },
  { id: "tool-6", name: "VS Code", category: "Methodologies & Tools" },
  { id: "tool-7", name: "IntelliJ IDEA", category: "Methodologies & Tools" },
  { id: "tool-8", name: "Postman", category: "Methodologies & Tools" },
];

export const skillCategories = [
  "Programming",
  "Machine Learning & AI",
  "Data Science",
  "Visualization",
  "Databases & Data Warehousing",
  "Cloud & MLOps",
  "Methodologies & Tools",
];

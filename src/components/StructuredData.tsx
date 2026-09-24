"use client";

import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Rajya Lakshmi Kadiyala",
      jobTitle: "Data Scientist & AI/ML Engineer",
      description: "Data Science graduate experienced in Artificial Intelligence, Machine Learning, Data Pipelines, LLMs, and Cloud Solutions.",
      url: "https://www.linkedin.com/in/rajyalakshmikadiyala",
      sameAs: [
        "https://www.linkedin.com/in/rajyalakshmikadiyala",
        "https://www.instagram.com/raji__kadiyala/",
      ],
      knowsAbout: [
        "Python",
        "SQL",
        "R",
        "Java",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing (NLP)",
        "Large Language Models (LLMs)",
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Apache Spark",
        "Apache Kafka",
        "Power BI",
        "AWS",
        "Docker",
      ],
      affiliation: [
        {
          "@type": "Organization",
          name: "JPMC",
        },
        {
          "@type": "Organization",
          name: "AbhiBus",
        },
        {
          "@type": "EducationalOrganization",
          name: "University at Albany",
        },
        {
          "@type": "EducationalOrganization",
          name: "SRM University AP",
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}


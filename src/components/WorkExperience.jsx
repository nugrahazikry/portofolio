import { useEffect } from "react";
import "./WorkExperience.css";

const experiences = [
  {
    title: "Senior Full-stack AI Engineer",
    company: "PT. Merdeka Copper Gold Tbk.",
    companyUrl: "https://merdekacoppergold.com/",
    companyNote: "Leading Gold Mining Company in Indonesia",
    period: "December 2025 – Present",
    responsibilities: [
      "Spearheaded end-to-end AI application development, focusing on backend (APIs, databases, AI ML models), frontend UIs, and cloud deployment.",
      "Designed AI and ML algorithms to analyze mining-related data to support data-driven decision-making and improve overall operational strategies.",
      "Developed frontend UIs (HTML, CSS, JS) that translated complex data into actionable dashboards and applications for stakeholders and site engineers.",
      "Deployed production-ready applications and data automation across Google Cloud Platform (GCP) and internal company servers.",
      "Executed successful go-live rollouts to stakeholders, ensuring seamless adoption by employees across the parent company and its subsidiaries."
    ],
    projects: [
      {
        name: "AI Agentic Chatbot App",
        description: [
          "Built an enterprise agentic RAG platform enabling employees to query internal documents, reducing manual document lookup through AI-powered responses.",
          "Supports multimodal inputs and multi-agent workflows across **100+ knowledge documents**.",
          "Integrated with BigQuery and persistent chat history via web UI and API."
        ],
        tech: ["Python", "FastAPI", "LangChain", "OpenAI GPT-5", "PostgreSQL", 
              "pgvector", "Docker", "Traefik", "BigQuery"],
      },
      {
        name: "Geotech ML Dashboard",
        description: [
          "Real-time geotechnical 3D map monitoring dashboard for slope stability across **500+ sensor points**, replacing previously manual review processes.",
          "Automated daily data pipeline (SQL Server → BigQuery) and generated **30-day displacement forecasts** per point, cutting decision-making time for engineers.",
          "AI-generated insight summaries on **4 charts** to support fast risk decision-making.",
        ],
        tech: ["Python", "Flask", "XGBoost", "OpenAI GPT-5", "Mapbox API", 
            "BigQuery", "SQL Server", "Docker", "Cloud Run"],
      },
      {
        name: "Limonite Consumption App",
        description: [
          "Predictive simulation app forecasting next-day Limonite Consumption Index with **80%+ accuracy**, supporting operational planning for nickel processing.",
          "Replaced manual estimation with an ML model (XGBoost) trained on historical data, with exportable results for offline use by site engineers.",
          "Displays MAE and ROC AUC metrics with interactive what-if simulation table for site engineers."
        ],
        tech: ["Python", "Flask", "XGBoost", "scikit-learn", 
          "Docker", "Cloud Run"],
      },
      {
        name: "AI Lithology App",
        description: [
          "Automated soil-to-rock material classification by type, color, and lithology class with AI-generated summaries per borehole stored in BigQuery.",
          "Reduced drill core photo classification from **1 hour** to **~3 minutes** per box using a **2-stage** ML pipeline, saving significant manual labor at scale.",
          "Eliminates inconsistency in manual visual inspection at scale.",
        ],
        tech: ["Python", "Flask", "YOLO", "scikit-learn", 
          "OpenCV", "OpenAI GPT-5", "BigQuery", "Docker", "Gunicorn"],
      },
    ],
  },
  {
    title: "AI Data Scientist",
    company: "NucleusX BV",
    companyUrl: "https://nucleusbi.com/en/",
    companyNote: "AI & Data Analytics consultant firm based in Netherlands",
    period: "February 2024 – November 2025",
    responsibilities: [
      "Developed an end-to-end AI, ML, and NLP pipeline seamlessly integrated and deployed into Amazon Web Services (AWS) cloud infrastructure.",
      "Integrated Azure OpenAI models into client applications, optimizing LLMs and prompts for highly accurate classification, matching, and QA.",
      "Implemented MLOps standards (Docker, CI/CD) and project automation to streamline AI deployment workflows.",
      "Collaborated with international stakeholders and multidisciplinary teams, communicating data science insights to C-level leaders in business English."
    ],
    clients: "2 HR/Payroll Tech Startup, 2 Automotive Financial Services, 1 E-Commerce Platform, 1 Optical Retail Chain",
    projects: [
      {
        name: "Multilingual RAG Chatbot",
        description:[
          "Deployed a production-grade AI chatbot serving **3-language** (Dutch, German, English) for a European SaaS client, handling **100+ daily user interactions**.",
          "Improved support response accuracy using semantic search, ML reranking, and grounded answer generation via Azure OpenAI.",
          "Integrated with Intercom webhooks for live customer conversations, deployed via Docker + Traefik with HTTPS on AWS."
        ],
          tech: ["Python", "FastAPI", "Azure OpenAI GPT-4o mini", "Embedding-ada-002", 
          "Qdrant", "LangChain", "scikit-learn", "XGBoost", "Docker", "Traefik", "Granian", 
          "AWS EC2", "Amazon RDS", "AWS ECR", "AWS AppRunner", "AWS S3"],
      },
      {
        name: "AI FAQ Automation System",
        description:[
          "Deployed an AI-powered question-answering system to analyze and extract insights from **300+ customer FAQs** weekly.",
          "Generated structured, LLM-powered answers with topic labels from raw multilingual support data, stored in Amazon RDS for team-wide access.",
          "Reduced time-to-insight for support teams by converting unstructured conversation data into queryable, organized knowledge."
        ],
        tech: ["Python", "FastAPI", "LangChain", "Azure OpenAI GPT-4o mini", "Embedding-ada-002", "Azure Cosmos DB",
          "Intercom API",  "Hubspot API", "PostgreSQL", 
          "AWS S3",  "AWS EC2", "Amazon RDS"],
      },
      {
        name: "AI Market Detection",
        description:[
          "Deployed an LLM-powered company profiling system classifying **20,000+ company descriptions** by focus, target clients, and industry type, replacing manual categorization entirely.",
          "Automated batch processing from raw Excel input to enriched, structured output, reducing classification turnaround from **5 days** to **1 hour**."
        ],
        tech: ["Python", "LangChain", "OpenAI GPT-4o-mini", 
          "Regex", "BeautifulSoup", "Selenium", "AWS S3"],
      },
      {
        name: "AI Store Review",
        description:[
          "Improved LLM classification algorithm reducing unclassified review labels from **60%** to **10%** across **50,000+ customer reviews**, a **6x improvement** in coverage.",
          "Built per-review sentiment and category pipeline with store-level summarization, surfacing actionable attractors and detractors for store management teams.",
          "Enabled automated multilingual preprocessing (Dutch/German → English) to standardize analysis across all markets."
        ],
        tech: ["Python", "LangChain", "Regex", "PowerBI", "Azure OpenAI GPT-4o mini", "SerpAPI",
           "AWS S3"],
      },
      {
        name: "NLP Product Matching",
        description:[
          "Redesigned fuzzy matching algorithm for competitor lease pricing data, increasing product match rate from **50%** to **80%** across car model names.",
          "Automated anomaly detection for pricing outliers (trend deviations, abnormal jumps) that reduces manual monitoring effort.",
          "Streamlined weekly pipeline from AWS S3 data ingestion to structured CSV reports, giving pricing teams faster, more reliable competitive intelligence."
        ],
          tech: ["Python",  "Azure OpenAI GPT-4o mini", "Regex", "Cosine Similarity", "Jellyfish NLP", "SFTP", 
          "SQLAlchemy", "AWS S3", "Amazon RDS"],
      },
    ],
  },
  {
    title: "Data Scientist",
    company: "IlmuOne Data",
    companyUrl: "https://www.ilmuonedata.com/",
    companyNote: "Digital Marketing & Data Analytics consultant firm based in Indonesia",
    period: "March 2022 – January 2024",
    responsibilities: [
      "(Acting senior) Led the team projects, delivered and presented the data science business solutions to numerous national clients on the weekly basis.",
      "(Acting senior) Managed task distribution and project timeline among other team members based on their skills, knowledges and workload.",
      "Designed and monitored the ETL BigQuery, Python data transformation, and automation for numerous projects within Google Cloud Platform.",
      "Analyzed and gained business solutions for data-driven decision-making from Google Analytics and visualized it into Looker Studio dashboard."
    ],
    clients: " 2 Automotive Clients, 1 Digital Banking Client, 1 E-Commerce Platform, 1 FMCG Brand, 1 Aquaculture Tech Startup",
    projects: [
      {
        name: "Computer Vision Creative Analysis Automation",
        description:[
          "Reduced creative ad image analysis time from **3 weeks** to **1 day** by automating feature extraction across **100+ ad creatives** monthly, reducing the manual effort.",
          "Identified key visual attributes (colors, labels, text) correlated with campaign performance, directly guiding creative strategy decisions for the marketing team.",
          "Deployed as a fully automated, serverless pipeline on Google Cloud Platform with auto-updated stakeholder reporting via Google Sheets and BigQuery."
        ],
        tech: ["Python", "Google Cloud Vision API", "scikit-learn", "Google Sheets",
          "Cloud Storage", "Cloud Functions", "BigQuery"],
      },
      {
        name: "ROI Forecasting ML Model",
        description:[
          "Built a time series ROI monitoring and forecasting model with **85%+ accuracy**, enabling **5-day planning** for marketing spend decisions across channels.",
          "Automated ongoing ROI tracking across multiple marketing channels, replacing manual periodic reporting with continuous, data-driven insights."
        ],
        tech: ["Python", "ARIMA", "Time Series Modelling", 
          "statsmodels", "Python"],
      },
      {
        name: "Shrimp Pond Detection",
        description:[
          "Achieved **90%+ accuracy** on pond detection using a model trained on satellite imagery, enabling accurate identification of water reservoirs across Indonesia.",
          "Extracted GPS coordinates of **100+ shrimp pond locations** nationwide and automated satellite image retrieval, building a scalable monitoring pipeline.",
          "Reduced manual geographic surveying effort by automating end-to-end pond identification from satellite data."
        ],
        tech: ["Python", "YOLO", "SerpAPI", "TensorFlow", "Keras",
           "Google Maps API", "Cloud Storage", "Cloud Functions", "BigQuery"
        ],
      },
      {
        name: "BigQuery Data Migration",
        description:[
          "Reduced GA360-to-GA4 data discrepancies from **50%** to **10%** across multiple e-commerce clients, ensuring continuity during platform migration.",
          "Validated and reconciled data integrity across both platforms, giving clients confidence in their post-migration reporting accuracy."
        ],
        tech: ["SQL", "Google Analytics 4",
          "Google Sheets", "BigQuery", "BigQuery ML", 
        ],
      },
      {
        name: "Business Dashboard",
        description:[
          "Built and automated daily GCP data pipelines across **3 clients** (e-commerce, FMCG, automotive), eliminating manual reporting workflows.",
          "Delivered real-time Looker dashboards surfacing cross-platform performance metrics, replacing manual reporting workflows for stakeholders.",
          "Standardized order data integration across marketplaces, enabling consistent, comparable analytics for e-commerce clients."
        ],
        tech: ["Python", "Cloud Storage", 
          "Cloud Functions", "Pub/Sub", "Cloud Scheduler", 
          "BigQuery", "Looker Studio", "Ecommerce Seller API"],
      },
    ],
  },
];

export default function WorkExperience() {
  useEffect(() => {
    const spans = document.querySelectorAll(".exp-num-highlight");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("nums-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1.0 }
    );
    spans.forEach((span) => observer.observe(span));
    return () => observer.disconnect();
  }, []);

  const parseHighlights = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**")
        ? <span key={i} className="exp-num-highlight">{part.slice(2, -2)}</span>
        : part
    );
  };

  return (
    <section className="work-experience" id="experience">
      <div className="section-badge">Work Experience</div>

      {experiences.map((exp, i) => (
        <div className="exp-card" key={i}>
          <div className="exp-header">
            <h3 className="exp-title">{exp.title}</h3>
            <div className="exp-company-row">
              <p className="exp-company">
                {exp.companyUrl
                  ? <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="exp-company-link">{exp.company}</a>
                  : exp.company}
                {exp.companyNote && <span className="exp-company-note"> — {exp.companyNote}</span>}
              </p>
              <span className="exp-period">{exp.period}</span>
            </div>
          </div>

          <ul className="exp-responsibilities">
            {exp.responsibilities.map((r, j) => (
              <li key={j}>{r}</li>
            ))}
          </ul>

          {exp.clients && (
            <div className="exp-clients-a">
              <span className="exp-clients-label">Clients &amp; Collaborations</span>
              <div className="exp-clients-chips">
                {exp.clients.split(", ").map((c) => (
                  <span className="client-chip" key={c}>{c}</span>
                ))}
              </div>
            </div>
          )}

          <div className="exp-projects-table">
            <div className="exp-table-header">
              <span>Go-Live Project</span>
              <span>Impact / Description</span>
              <span>Tech Stack</span>
            </div>
            {exp.projects.map((p, k) => (
              <div className="exp-table-row" key={k}>
                <span className="exp-project-name">{p.name}</span>
                <span className="exp-project-desc">
                  {Array.isArray(p.description) ? (
                    <ul className="exp-project-desc-list">
                      {p.description.map((d, di) => <li key={di}>{parseHighlights(d)}</li>)}
                    </ul>
                  ) : (
                    parseHighlights(p.description)
                  )}
                </span>
                <span className="exp-project-tech">
                  {p.tech.map((t) => (
                    <span className="tech-pill" key={t}>
                      {t}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

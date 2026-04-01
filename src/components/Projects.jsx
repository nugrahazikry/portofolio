import "./Projects.css";

const PROJECTS = [
  {
    id: "p1",
    name: "AI Enhanced News Sentiment Analysis Dashboard",
    description:
      "Automated Google News RSS scraper enriched by Gemini 2.5 AI for sentiment classification, NER, and topic tagging. Renders real-time dashboard with time-series charts and AI narrative. Deployed on GCP Cloud Run.",
    topics: ["Python", "Flask", "Gemini 2.5", "Nginx", "Docker Compose", "Cloud Run",  "LLM Zero-shot Classification", "Sentiment Analysis", "Topic Modelling", "Multi-turn Agentic Prompting", "Named-Entity Recognition"],
    html_url: "https://github.com/nugrahazikry/AI-Enhanced-News-Dashboard",
    categories: ["NLP", "AI LLM", "DASHBOARD"],
    homepage: "https://news-monitoring-prod-v1-118493320623.asia-southeast2.run.app/",
    image: "/images/personal project/news_dashboard.png",
  },
  {
    id: "p2",
    name: "AI Diabetes Prediction & Nutritional Recommendation",
    description:
      "Scikit-learn diabetes classifier with KNN-based 3-meal nutritional recommendations and multimodal food-label OCR, each enhanced with Gemini GenAI for personalized nutritional insights. Deployed on GCP Cloud Run.",
    topics: ["Python", "Flask", "scikit-learn", "Gemini 2.5", "Gunicorn", "Nginx", "Docker Compose", "Cloud Run", "Random Forest","GridSearchCV", "K-Nearest Neighbours", "Multimodal LLM Inference"],
    html_url: "https://github.com/nugrahazikry/AI-Driven-Diabetes-Prediction-and-Personalized-Nutritional-Recommendation-System",
    categories: ["MACHINE LEARNING", "COMPUTER VISION", "AI LLM"],
    homepage: "https://ai-diabetes-healthkaton-2024-v1-118493320623.asia-southeast2.run.app",
    image: "/images/personal project/diabetes_apps.png",
  },
  {
    id: "p3",
    name: "AI-Skill Gap Analysis",
    description:
      "4-agent LangGraph pipeline parsing CVs against live job market data via Google Search grounding. Outputs structured markdown upskilling report covering skill gaps, strengths, and recommendations.",
    topics: ["Python", "LangGraph", "Gemini 2.5", "Google Search Grounding", "Streamlit", "Hierarchical Multi-agent Chaining", "LLM-based Skill Inference", "Grounded Web Search"],
    html_url: "https://github.com/nugrahazikry/AI-Powered-Skill-Gap-Analysis",
    categories: ["AI AGENT", "AI LLM", "GROUNDED SEARCH"],
    homepage: "https://github.com/nugrahazikry/AI-Powered-Skill-Gap-Analysis",
    image: "/images/personal project/skill_gap.png",
  },
  {
    id: "p4",
    name: "AI-Powered Alarm Diagnostic Assistant",
    description:
      "Integrates BLIV Dashboard real-time monitoring with Vertex AI RAG, indexing industrial maintenance PDFs into BigQuery vector store, retrieving top-3 relevant chunks with Gemini grounded answers.",
    topics: ["Python", "Streamlit", "Vertex AI", "Gemini 2.5", "Vertex AI RAG Engine", "BigQuery", "Google Cloud Storage", "Vector Similarity Search", "Multimodal LLM Inference"],
    html_url: "https://github.com/nugrahazikry/RAG-Enhanced-AI-for-Industrial-Alarm-Diagnostics",
    homepage: "https://github.com/nugrahazikry/RAG-Enhanced-AI-for-Industrial-Alarm-Diagnostics",
    image: "/images/personal project/bliv dashboard.jpg",
    categories: ["MACHINE LEARNING", "AI LLM", "RAG"],
  },
  // {
  //   id: "p5",
  //   name: "AI Exporters for Product Analyzer & Export Trend",
  //   description:
  //     "Multimodal OCR pipeline extracting HS codes from product images via LLM, paired with 5-year UN Comtrade trade analytics identifying top 3 Asian import markets. Deployed on AWS ECS + ALB with PostgreSQL.",
  //   topics: ["Python", "FastAPI", "Streamlit", "Google GenAI Gemini 2.5", "UN Comtrade API", "PostgreSQL", "Docker Compose", "AWS ECS", "AWS ALB", "Granian", "Uvicorn"],
  //   html_url: "https://github.com/nugrahazikry/AI-Exporters-Product-Analyzer-and-Export-Trend",
  //   homepage: "#",
  //   image: "https://placehold.co/600x200/0d1035/6aefff?text=AI-Driven+Export",
  // }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-badge">Personal Projects</div>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-img">
        <a href={project.html_url} target="_blank" rel="noreferrer">
          <img src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`} alt={project.name} loading="lazy" />
        </a>
      </div>
      <div className="project-card-top">
        <span className="project-folder">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
        </span>
        <div className="project-links">
          {project.homepage ? (
            <a href={project.homepage} target="_blank" rel="noreferrer" className="project-link-btn">
              Demo
            </a>
          ) : (
            <span className="project-link-spacer" />
          )}
          <a href={project.html_url} target="_blank" rel="noreferrer" className="project-link-btn">
            Github
          </a>
        </div>
      </div>
      <a href={project.html_url} target="_blank" rel="noreferrer" className="project-name-link">
        <h3 className="project-name">{project.name}</h3>
      </a>
      {project.categories && (
        <div className="project-tags project-categories">
          {project.categories.map((c) => (
            <span key={c} className="tag tag-category">
              {c}
            </span>
          ))}
        </div>
      )}
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.topics.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

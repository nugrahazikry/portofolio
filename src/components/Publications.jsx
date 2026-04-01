import { useState } from "react";
import "./Publications.css";

const publications = [
  {
    category: "AI Research",
    title:
      "Evaluation of the Multimodal Gemini Model in Analyzing Nutritional Value Information",
    excerpt:
      "Evaluates the Gemini 1.5 Flash multimodal LLM model in analyzing sugar content from photos of nutritional information on 10 beverage products, achieving 90% accuracy and an F1 score of 94%.",
    link: "https://openjournal.unpam.ac.id/index.php/PROKASDADIK/article/view/47666",
    image: "/images/articles/gemini_journal_unpam.png",
  },
  {
    category: "Computer Vision",
    title:
      "Simple Computer Vision Image Creative Analysis using Google Vision API",
    excerpt:
      "Tutorial demonstration on using Google Vision AI to extract meaningful information from an image and identify key parameters such as object, text, color.",
    link: "https://towardsdatascience.com/simple-computer-vision-image-creative-analysis-using-google-vision-api-50cc42737a00/",
    image: "/images/articles/comvis_detection.png",
  },
  {
    category: "Machine Learning",
    title:
      "Tree-Based Algorithms Approach on Predicting Customer Satisfaction",
    excerpt:
      "Tutorial on designing a machine learning hyperparameter model and evaluating it to predict customer satisfaction from an e-commerce dataset.",
    link: "https://towardsdatascience.com/tree-based-algorithms-approach-on-predicting-customer-satisfaction-296730e19baa/",
    image: "/images/articles/tree_based_ml.png",
  },
  {
    category: "Data Analysis",
    title:
      "EDA and Visualization of Indonesia Earthquake Over the Last 20 Years",
    excerpt:
      "Earthquake data analysis, visualization, and insights creation focused on the region of Indonesia over the past 20 years.",
    link: "https://towardsdatascience.com/eda-and-visualization-of-earthquake-occurrence-in-indonesia-over-the-last-20-years-using-r-4c76e94e94c2/",
    image: "/images/articles/earthquake.png",
  },
];

const VISIBLE = 3;

export default function Publications() {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [dir, setDir] = useState("right");
  const n = publications.length;

  const next = () => { setDir("right"); setIndex((i) => (i + 1) % n); setAnimKey((k) => k + 1); };
  const prev = () => { setDir("left");  setIndex((i) => (i - 1 + n) % n); setAnimKey((k) => k + 1); };

  const visible = Array.from({ length: VISIBLE }, (_, k) => ({
    ...publications[(index + k) % n],
    key: (index + k) % n,
  }));

  return (
    <section className="publications" id="publications">
      <div className="section-badge" style={{ marginBottom: "1.5rem", display: "block" }}>Research Article and Publications</div>

      <div className="carousel-wrapper">
        <button className="swipe-btn swipe-btn-left" onClick={prev} aria-label="Scroll left">
          ←
        </button>

        <div className={`swipe-track swipe-track--${dir}`} key={animKey}>
          {visible.map((p, i) => (
            <div className="swipe-card" key={i}>
              <a href={p.link} target="_blank" rel="noreferrer" className="swipe-card-img">
                <img src={`${import.meta.env.BASE_URL}${p.image.replace(/^\//, '')}`} alt={p.title} loading="lazy" />
              </a>
              <h3 className="swipe-card-title">{p.title}</h3>
              <div className="swipe-card-meta">
                <span className="swipe-category">{p.category}</span>
              </div>
              <p className="swipe-card-excerpt">{p.excerpt}</p>
              <a href={p.link} target="_blank" rel="noreferrer" className="swipe-read-more">Read more →</a>
            </div>
          ))}
        </div>

        <button className="swipe-btn swipe-btn-right" onClick={next} aria-label="Scroll right">
          →
        </button>
      </div>
    </section>
  );
}

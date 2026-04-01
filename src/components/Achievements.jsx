import { useState } from "react";
import "./Achievements.css";

const achievements = [
  {
    category: "Competition",
    date: "Feb 2025",
    title: "Top 8 Finalist of Spark Telkomsel National Datathon",
    excerpt:
      "Surpassed 65+ teams nationwide, recognized as the only team who delivers the only AI innovation in manufacturing.",
    link: "https://www.linkedin.com/in/zikry-adjie-nugraha/",
    image: "/images/awards/spark_datathon.png",
  },
  {
    category: "Competition",
    date: "Nov 2024",
    title: "Top 10 Finalist of AI Category in BPJS Kesehatan National Healthkathon",
    excerpt:
      "Chosen as a finalist from 350+ teams across national level, recognized for developing an AI innovation for the Diabetes patient.",
    link: "https://www.linkedin.com/in/zikry-adjie-nugraha/",
    image: "/images/awards/bpjs_awards_2024.png",
  },
  {
    category: "Award",
    date: "Mar 2023",
    title: "Excellence Staff in Domain Knowledge Curiosity — IlmuOne Data",
    excerpt:
      "Acknowledged as the top performer among 30+ coworkers for outstanding curiosity in domain knowledge exploration.",
    link: "#",
    image: "/images/awards/ilmuone_awards.png",
  },
  {
    category: "Award",
    date: "Dec 2021",
    title: "2nd Best Data Science Final Project",
    excerpt:
      "Achieved 2nd best project among 40+ students with project featured on Towards Data Science platform.",
    link: "#",
    image: "/images/awards/dibimbing.png",
  },
  {
    category: "Scholarship",
    date: "Oct 2018",
    title: "Grantee of the POSCO Asia International Fellowship Scholarship",
    excerpt:
      "Earned the scholarship for self-development and thesis after a highly competitive selection process involving over 100+ applicants in Indonesia.",
    link: "#",
    image: "/images/awards/posco_scholarship.png",
  },
];

const VISIBLE = 3;

export default function Achievements() {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [dir, setDir] = useState("right");
  const n = achievements.length;

  const next = () => { setDir("right"); setIndex((i) => (i + 1) % n); setAnimKey((k) => k + 1); };
  const prev = () => { setDir("left");  setIndex((i) => (i - 1 + n) % n); setAnimKey((k) => k + 1); };

  const visible = Array.from({ length: VISIBLE }, (_, k) => ({
    ...achievements[(index + k) % n],
    key: (index + k) % n,
  }));

  return (
    <section className="achievements-section" id="achievements">
      <div className="section-badge" style={{ marginBottom: "1.5rem", display: "block" }}>Achievements and Awards</div>

      <div className="carousel-wrapper">
        <button className="swipe-btn swipe-btn-left" onClick={prev} aria-label="Scroll left">
          ←
        </button>

        <div className={`swipe-track swipe-track--${dir}`} key={animKey}>
          {visible.map((a, i) => (
            <div className="swipe-card" key={i}>
              <div className="swipe-card-img">
                <img src={`${import.meta.env.BASE_URL}${a.image.replace(/^\//, '')}`} alt={a.title} loading="lazy" />
              </div>
              <h3 className="swipe-card-title">{a.title}</h3>
              <div className="swipe-card-meta">
                <span className="swipe-category">{a.category}</span>
                <span className="swipe-date">{a.date}</span>
              </div>
              <p className="swipe-card-excerpt">{a.excerpt}</p>
              <a href={a.link} target="_blank" rel="noreferrer" className="swipe-read-more" style={{ visibility: "hidden" }}>Read more →</a>
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

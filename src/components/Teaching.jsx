import { useState } from "react";
import "./Teaching.css";

const teachings = [
  {
    category: "Seminar",
    title: "Seminar Speaker at Spark Telkomsel National Datathon",
    excerpt:
      "Presented an AI-powered alarm diagnostic solution for smart maintenance to 50+ seminar participants, as the sole AI manufacturing innovation among all speakers.",
    date: "Feb 2025",
    link: "https://www.linkedin.com/posts/nugrahazikry_spark-telkomsel-national-datathon-2025-moment-activity-7299301599384850434-vUEn/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACPdiSsBBfoGtnShJYyAstylISY9c9LY4cs",
    image: "/images/teaching/spark_telkomsel.png",
  },
  {
    category: "Seminar",
    title: "Seminar Speaker at BPJS Kesehatan National Healthkathon",
    excerpt:
      "Presented an AI-Driven Diabetes Prediction and Personalized Nutritional Recommendation System to 300+ seminar participants on National level.",
    date: "Nov 2024",
    link: "https://www.linkedin.com/posts/diki-rustian_healthcareinnovation-artificialintelligence-ugcPost-7284082454812835840-paiA/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACPdiSsBBfoGtnShJYyAstylISY9c9LY4cs",
    image: "/images/teaching/BPJS Healtkathon.png",
  },
  {
    category: "Guest Speaker",
    title: "Guest Speaker at SULUH Senior High School Career Sharing",
    excerpt:
      "Shared my experience after graduating to 50+ high school students, from having a career in metallurgy manufacture to eventually shifting to a career in data science.",
    date: "Oct 2024",
    link: "https://www.linkedin.com/posts/nugrahazikry_career-datascience-advancement-activity-7279844376661385216-NZ_z?utm_source=share&utm_medium=member_desktop&rcm=ACoAACPdiSsBBfoGtnShJYyAstylISY9c9LY4cs",
    image: "/images/teaching/suluh_sharing_session.jpg",
  },
  {
    category: "Guest Lecturer",
    title: "Guest Lecturer at Sultan Ageng Tirtayasa University Data Science Career Course",
    excerpt:
      "Lectured a university class for 80+ students on how data science principles can be implemented in the metallurgical industry.",
    date: "Sep 2024",
    link: "https://www.linkedin.com/posts/nugrahazikry_it-was-an-honor-to-have-the-opportunity-to-activity-7252678496022380544-wP84?utm_source=share&utm_medium=member_desktop&rcm=ACoAACPdiSsBBfoGtnShJYyAstylISY9c9LY4cs",
    image: "/images/teaching/guest_lecturer_univ.jpeg",
  },
  {
    category: "Seminar",
    title: "Seminar Speaker at IlmuUniversity, IlmuOne Data Company Data Science Sharing",
    excerpt:
      "Private company seminar for 30+ colleges that provided a general explanation of data science to non-data persons.",
    date: "Jun 2022",
    link: null,
    image: "/images/teaching/ilmuone_ngajar.jpeg",
  },
  {
    category: "Trainer",
    title: "Trainer of Manufacturing Process at PT. Saga Hikari Teknindo Sejati",
    excerpt:
      "Lectured a training class for 10+ machine operators that explained and assessed their heat treatment manufacturing flow process understanding capability.",
    date: "Jan 2022",
    link: null,
    image: "/images/teaching/saga_hikari.jpeg",
  },
];

const VISIBLE = 3;

export default function Teaching() {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [dir, setDir] = useState("right");
  const n = teachings.length;

  const next = () => { setDir("right"); setIndex((i) => (i + 1) % n); setAnimKey((k) => k + 1); };
  const prev = () => { setDir("left");  setIndex((i) => (i - 1 + n) % n); setAnimKey((k) => k + 1); };

  const visible = Array.from({ length: VISIBLE }, (_, k) => ({
    ...teachings[(index + k) % n],
    key: (index + k) % n,
  }));

  return (
    <section className="teaching" id="teaching">
      <div className="section-badge" style={{ marginBottom: "1.5rem", display: "block" }}>Teaching and Seminar Experience</div>

      <div className="carousel-wrapper">
        <button className="swipe-btn swipe-btn-left" onClick={prev} aria-label="Scroll left">
          ←
        </button>

        <div className={`swipe-track swipe-track--${dir}`} key={animKey}>
          {visible.map((t, i) => (
            <div className="swipe-card" key={i}>
              {t.link ? (
                <a href={t.link} target="_blank" rel="noreferrer" className="swipe-card-img">
                  <img src={`${import.meta.env.BASE_URL}${t.image.replace(/^\//, '')}`} alt={t.title} loading="lazy" />
                </a>
              ) : (
                <div className="swipe-card-img">
                  <img src={`${import.meta.env.BASE_URL}${t.image.replace(/^\//, '')}`} alt={t.title} loading="lazy" />
                </div>
              )}
              <h3 className="swipe-card-title">{t.title}</h3>
              <div className="swipe-card-meta">
                <span className="swipe-category">{t.category}</span>
                <span className="swipe-date">{t.date}</span>
              </div>
              <p className="swipe-card-excerpt">{t.excerpt}</p>
              {t.link && (
                <a href={t.link} target="_blank" rel="noreferrer" className="swipe-read-more">Read more →</a>
              )}
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

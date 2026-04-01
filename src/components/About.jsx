import "./About.css";

const stats = [
  { value: "4+", label: "Years Of Experience" },
  { value: "20+", label: "Complete Projects" },
  { value: "10+", label: "National & Global Clients" },
];

export default function About() {
  return (
    <section className="about" id="about">
      {/* Two-column body — no header above */}
      <div className="about-body">
        <div className="about-image-col">
          <div className="about-photo-wrap">
            <img
              src={`${import.meta.env.BASE_URL}images/PRDR3976357462_1.jpg`}
              alt="Zikry Adjie Nugraha"
              className="about-photo"
            />
          </div>
        </div>

        <div className="about-text-col">
          <h1 className="about-name">Zikry Adjie Nugraha</h1>
          <p className="about-role">AI Engineer | Data Scientist</p>

          <h3 className="about-tagline">
            A Passionate <span className="highlight">AI Engineer</span>{" "}
            Turning <span className="highlight">Ideas</span> Into Impactful,
            Cutting-Edge AI-Driven Business Solutions.
          </h3>
          <p className="about-description">
            Hello! I'm <strong>Zikry Adjie Nugraha</strong>, an AI Engineer
            proficient in Python, SQL, and major cloud platforms (GCP, AWS,
            Azure) for end-to-end development. I build from data engineering
            and ML modeling to backend APIs and frontend UIs. I deliver
            seamless go-live rollouts with MLOps integration across the mining,
            e-commerce, and digital marketing industries.
          </p>

          {/* Stats row */}
          <div className="about-stats">
            {stats.map((s, i) => (
              <div className="about-stat" key={i}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="about-cta">
            <a href={`${import.meta.env.BASE_URL}CV_Zikry_Adjie_Nugraha.pdf`} className="btn-outline" download>
              Download My CV
            </a>
            <a href="#contact" className="btn-outline">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

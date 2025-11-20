import React from "react";

// Import course thumbnails (your files)
import imgAIEngineer from "../assets/AI_engineer_Course.png";
import imgIntroAI from "../assets/Intro_ToaI.png";
import imgAIForBusiness from "../assets/Ai_Forbussnis.png";
import imgDataScience from "../assets/Data_sci.png";

// Extra placeholder image (uses uploaded path so it loads locally during dev)
const SAMPLE_EXTRA = "/mnt/data/e8fb2741-1909-44d1-a0bb-42904334d1b1.png";

/*
  SkillsSection carousel:
  - responsive visible counts (3 / 2 / 1)
  - left/right arrows, clickable dots
  - more courses (duplicates + extra) so carousel can move
  - measures first card to compute translateX
*/

const TABS = [
  "Artificial Intelligence (AI)",
  "Python",
  "Microsoft Excel",
  "AI Agents & Agentic AI",
  "Digital Marketing",
  "Amazon AWS",
];

const BASE_COURSES = [
  {
    id: 1,
    title: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp",
    instructor: "365 Careers",
    badge: "Bestseller",
    rating: 4.6,
    reviews: 11778,
    price: "£309.99",
    oldPrice: "£349.99",
    image: imgAIEngineer,
  },
  {
    id: 2,
    title: "Intro to AI Agents and Agentic AI",
    instructor: "365 Careers",
    badge: "Bestseller",
    rating: 4.4,
    reviews: 1806,
    price: "£309.99",
    oldPrice: "£349.99",
    image: imgIntroAI,
  },
  {
    id: 3,
    title: "Artificial Intelligence for Business + ChatGPT Prize [2025]",
    instructor: "Hadelín de Ponteves",
    badge: "Premium",
    rating: 4.4,
    reviews: 4859,
    price: "£579.99",
    oldPrice: "£719.99",
    image: imgAIForBusiness,
  },
  {
    id: 4,
    title: "Data Science & AI Masters 2025 - From Python To Gen AI",
    instructor: "Dr. Satyajit Pattnaik",
    badge: "Bestseller",
    rating: 4.5,
    reviews: 1623,
    price: "£309.99",
    oldPrice: "£349.99",
    image: imgDataScience,
  },
  // extras so carousel can move
  {
    id: 5,
    title: "Advanced Generative AI",
    instructor: "AI Academy",
    badge: "Bestseller",
    rating: 4.7,
    reviews: 8400,
    price: "£329.99",
    oldPrice: "£369.99",
    image: SAMPLE_EXTRA,
  },
  {
    id: 6,
    title: "Applied Machine Learning",
    instructor: "Data School",
    badge: "Bestseller",
    rating: 4.6,
    reviews: 6420,
    price: "£279.99",
    oldPrice: "£319.99",
    image: imgAIEngineer,
  },
];

export default function SkillsSection() {
  const CARDS = BASE_COURSES;
  const [index, setIndex] = React.useState(0); // slide index (0..maxIndex)
  const [visible, setVisible] = React.useState(3);
  const trackRef = React.useRef(null);
  const cardRef = React.useRef(null);
  const gap = 24; // must match CSS .skills-track gap

  // responsive visible count
  React.useEffect(() => {
    function updateVisible() {
      const w = window.innerWidth;
      if (w >= 1100) setVisible(4); // show 4 on wide screens to match screenshot
      else if (w >= 900) setVisible(3);
      else if (w >= 640) setVisible(2);
      else setVisible(1);
      setIndex(0); // keep at start when resizing
    }
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, CARDS.length - visible);

  // measure card width and translate
  React.useEffect(() => {
    const track = trackRef.current;
    const card = cardRef.current;
    if (!track || !card) return;

    const cardRect = card.getBoundingClientRect();
    const move = index * (cardRect.width + gap);
    track.style.transform = `translateX(-${move}px)`;
  }, [index, visible]);

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }
  function next() {
    setIndex((i) => Math.min(maxIndex, i + 1));
  }

  return (
    <section className="skills-section">
      <div className="skills-inner container">
        <div className="skills-header">
          <h2>Skills to transform your career and life</h2>
          <p className="skills-sub">
            From critical skills to technical topics, Udemy supports your professional development.
          </p>

          <div className="skills-tabs" role="tablist" aria-label="course categories">
            {TABS.map((t, i) => (
              <button
                key={t}
                className={`skills-tab ${i === 0 ? "active" : ""}`}
                role="tab"
                aria-selected={i === 0}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="tabs-underline" />
        </div>

        {/* carousel viewport */}
        <div className="skills-carousel">
          <div className="skills-viewport">
            <div className="skills-track" ref={trackRef}>
              {CARDS.map((c, idx) => (
                <article
                  key={c.id}
                  className="course-card"
                  ref={idx === 0 ? cardRef : null}
                >
                  <div className="course-thumb">
                    <img src={c.image} alt={c.title} />
                  </div>

                  <div className="course-body">
                    <div className="course-badges">
                      <span className={`badge ${c.badge === "Premium" ? "premium" : "bestseller"}`}>
                        {c.badge}
                      </span>
                      <span className="rating">⭐ {c.rating}</span>
                      <span className="reviews">{c.reviews.toLocaleString()}</span>
                    </div>

                    <h3 className="course-title">{c.title}</h3>
                    <div className="course-instructor">{c.instructor}</div>

                    <div className="course-price-row">
                      <div className="price">{c.price}</div>
                      <div className="old-price">{c.oldPrice}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* arrows overlay */}
          <div className="skills-arrows">
            <button className="arrow-btn" onClick={prev} disabled={index === 0} aria-label="Previous">
              ◀
            </button>
            <button className="arrow-btn" onClick={next} disabled={index === maxIndex} aria-label="Next">
              ▶
            </button>
          </div>
        </div>

        {/* dots and show-all */}
        <div className="skills-footer">
          <div className="pager-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`dot-btn ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="show-all">
            <a href="#" className="show-all-link">Show all Artificial Intelligence (AI) courses →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

import img1 from "../assets/Image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";

const CARDS = [
  { id: 1, title: "Generative AI", meta: "1.7M+", img: img1 },
  { id: 2, title: "IT Certifications", meta: "1.4M+", img: img2 },
  { id: 3, title: "Data Science", meta: "8.1M+", img: img3 },
  // add extra for smooth sliding
  { id: 4, title: "Machine Learning", meta: "2.3M+", img: img1 },
  { id: 5, title: "Cloud Engineering", meta: "900K+", img: img2 },
];

export default function CareerSection() {
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(3);
  const trackRef = React.useRef(null);
  const cardRef = React.useRef(null);
  const gap = 24;

  // responsive visible card count
  React.useEffect(() => {
    function resize() {
      const w = window.innerWidth;
      if (w >= 1100) setVisible(3);
      else if (w >= 760) setVisible(2);
      else setVisible(1);
      setIndex(0);
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const maxIndex = CARDS.length - visible;

  // move slider
  React.useEffect(() => {
    const card = cardRef.current;
    const track = trackRef.current;
    if (!card || !track) return;

    const cardWidth = card.getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
  }, [index, visible]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="career-section">
      <div className="career-wrap">
        <div className="career-inner">
          {/* left side */}
          <div className="career-text">
            <h2>Learn essential career and life skills</h2>
            <p className="career-lead">
              Udemy helps you build in-demand skills fast and advance your career
              in a changing job market.
            </p>
          </div>

          {/* slider */}
          <div className="career-cards-viewport">
            <div className="career-cards-track" ref={trackRef}>
              {CARDS.map((c, i) => (
                <div
                  className="feature-card"
                  key={c.id}
                  ref={i === 0 ? cardRef : null}
                >
                  <div className="artwrap">
                    <img src={c.img} alt={c.title} className="card-art" />

                    <div className="card-overlay">
                      <div className="card-meta">
                        <span className="meta-pill">👥 {c.meta}</span>
                      </div>

                      <div className="card-title-row">
                        <div className="card-title">{c.title}</div>
                        <div className="card-arrow">➜</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* arrows */}
            <div className="career-controls">
              <button
                className="pager-btn"
                onClick={prev}
                disabled={index === 0}
              >
                ◀
              </button>
              <button
                className="pager-btn"
                onClick={next}
                disabled={index === maxIndex}
              >
                ▶
              </button>
            </div>
          </div>
        </div>

        {/* dots */}
        <div className="career-pager">
          <div className="pager-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`dot-btn ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

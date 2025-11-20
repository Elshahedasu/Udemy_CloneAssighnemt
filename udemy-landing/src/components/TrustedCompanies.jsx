// src/components/Companies.jsx
import React from "react";
import companiesImg from "../assets/image.png"; // <-- your composite image

export default function Companies() {
  return (
    <section className="companies-strip">
      <div className="container trusted-inner">
        <div className="trusted-text">
          Trusted by over 17,000 companies and millions of learners around the world
        </div>

        {/* Composite image centered (exact match to screenshot) */}
        <div className="companies-composite-wrap">
          <img
            src={companiesImg}
            alt="Trusted companies logos"
            className="companies-composite"
          />
        </div>
      </div>
    </section>
  );
}

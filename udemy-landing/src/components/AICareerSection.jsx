import React from "react";
import aiImage from "../assets/ai-career@2x.webp";

export default function AICareerSection() {
  return (
    <section className="ai-career-section">
      <div className="ai-career-card">

      
        <div className="ai-left">
          <h2>Reimagine your career in the<br />AI era</h2>

          <p className="ai-subtext">
            Future-proof your skills with Personal Plan. Get access to a variety of
            fresh content from real-world experts.
          </p>

          <div className="ai-benefits">
            <div className="benefit">
              <span className="benefit-icon">🌟</span>
              Learn AI and more
            </div>

            <div className="benefit">
              <span className="benefit-icon">💬</span>
              Practice with AI coaching
            </div>

            <div className="benefit">
              <span className="benefit-icon">🎓</span>
              Prep for a certification
            </div>

            <div className="benefit">
              <span className="benefit-icon">🚀</span>
              Advance your career
            </div>
          </div>

          <button className="ai-btn">Learn more</button>
          <p className="ai-price">Starting at ££204.00/month</p>
        </div>

        {/* Right Image */}
        <div className="ai-right">
          <img src={aiImage} alt="AI Career" className="ai-img" />
        </div>
      </div>
    </section>
  );
}

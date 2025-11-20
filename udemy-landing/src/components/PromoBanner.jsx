import React from "react";
import promoImg from "../assets/5ab81bd5-af55-4235-9f1e-07cdc7ce0b93 (1).jpg";

export default function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="promo-banner-inner">
        <img src={promoImg} alt="" className="promo-bg" />

        <div className="promo-card">
          <h2>
            Learn more, spend less — <br /> Black Friday Sale from £279.99
          </h2>
          <p>Sitewide savings on thousands of courses. Ends Nov 28.</p>
        </div>
      </div>
    </section>
  );
}

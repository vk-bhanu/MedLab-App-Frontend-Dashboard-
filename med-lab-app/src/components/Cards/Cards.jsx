import React from "react";
import "./Cards.css";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Full Body Checkup - Essential",
      priceOriginal: "Rs 1999",
      priceDiscounted: "Rs 1499",
      description:
        "8 Tests - Complete Blood Count with ESR, Liver Test, Blood-Sugar & 5 Others.",
      features: [
        "✅ No Fasting Required",
        "✅ Report in 48 Hours",
        "✅ Online & Physical Report",
      ],
      recommended: false,
    },
    {
      id: 2,
      title: "Full Body Checkup - Comprehensive",
      priceOriginal: "Rs 4999",
      priceDiscounted: "Rs 3499",
      description:
        "28 Tests - Complete Blood Count with ESR, Liver Test, Blood-Sugar & 25 Others.",
      features: [
        "✅ No Fasting Required",
        "✅ Report in 12 Hours",
        "✅ Online & Physical Report",
      ],
      recommended: true,
    },
    {
      id: 3,
      title: "Full Body Checkup - Advanced",
      priceOriginal: "Rs 2999",
      priceDiscounted: "Rs 2499",
      description:
        "16 Tests - Complete Blood Count with ESR, Liver Test, Blood-Sugar & 13 Others.",
      features: [
        "✅ No Fasting Required",
        "✅ Report in 24 Hours",
        "✅ Online & Physical Report",
      ],
      recommended: false,
    },
  ];

  return (
    <div className="card-container my-5">
      <div className="section-heading-container">
        <h1 className="section-heading">Test Packages</h1>
      </div>
      <div className="row justify-content-center">
        {cards.map((card, index) => (
          <div key={index} className="col-md-4">
            <div
              className={`custom-card ${
                card.recommended ? "highlight recommended-card" : ""
              }`}
              style={card.recommended ? { order: -1 } : {}}
            >
              <div className="discount-badge">20% OFF</div>
              {card.recommended && (
                <div className="recommended-badge">RECOMMENDED</div>
              )}
              <div className="card-pricing">
                <span className="original-price">{card.priceOriginal}</span>
                <span className="discounted-price">{card.priceDiscounted}</span>
              </div>
              <h5 className="card-title">{card.title}</h5>
              <p className="card-description">{card.description}</p>

              <hr className="card-divider" />

              <ul className="card-features">
                {card.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href="/RateList.pdf" target="_blank" rel="noopener noreferrer">
              <button
                className={`btnnn ${
                  card.recommended ? "btnnn-highlight" : "btnnn-primary-alt"
                }`}
              >
                Know More
              </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

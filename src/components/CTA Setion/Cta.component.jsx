import "./Cta.styles.css";
import eating from "./eating.jpg";
import { useState } from "react";

export default function CTA() {
  const [where, setWhere] = useState("");

  const handleWhere = (e) => {
    setWhere(e.target.value);
  };

  return (
    <section className="section-cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first meal for free</h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form className="cta-form">
              <div>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  id="name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  placeholder="JohnSmith2@gmail.com"
                  id="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="select-where">
                  Where did you hear from about us?
                </label>
                <select
                  id="select-where"
                  value={where}
                  onChange={(e) => handleWhere(e)}
                  required
                >
                  <option value="" disabled>
                    Please choose one option:{" "}
                  </option>
                  <option value="friends">Friends and Family</option>
                  <option value="youtube">YouTube Video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">others</option>
                </select>
              </div>

              <button
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Sign up now
              </button>
            </form>
          </div>
          <div
            className="cta-img-box"
            style={{
              backgroundImage: `linear-gradient(to right bottom, rgba(235,151,78,0.35), rgba(230,125,34,0.35)) ,url(${eating})`,
            }}
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
}

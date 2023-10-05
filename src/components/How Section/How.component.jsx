import "./How.styles.css";

export default function How() {
  return (
    <section className="section-how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className="container grid grid--2-cols grid--center-v">
        {/* <!-- Step 01 -->  */}
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">
            Tell us what you like (and what not)
          </h3>
          <p className="step-description">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        <div className="step-img-box">
          <img
            src="/img/app/app-screen-1.png"
            alt="iPhone app preferences slection screen"
            className="step-img"
          />
        </div>
        {/* <!-- Step 02 -->  */}
        <div className="step-img-box">
          <img
            src="/img/app/app-screen-2.png"
            alt="iPhone app meal approving plan"
            className="step-img"
          />
        </div>
        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="heading-tertiary">Approve your weekly meal plan</h3>
          <p className="step-description">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>
        {/* <!-- Step 03 -->  */}
        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary">Receive meals at convenient time</h3>
          <p className="step-description">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>
        <div className="step-img-box">
          <img
            src="/img/app/app-screen-3.png"
            alt="iPhone app delivery screen"
            className="step-img"
          />
        </div>
      </div>
    </section>
  );
}

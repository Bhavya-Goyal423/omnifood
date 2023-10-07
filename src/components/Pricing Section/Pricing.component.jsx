import "./Pricing.styles.css";

export default function Pricing() {
  return (
    <section className="section-pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>
      <div className="container grid grid--2-cols">
        <div className="pricing-plan pricing-plan--starter">
          <header className="plan-header">
            <p className="plan-name">Starter</p>
            <p className="plan-price">
              <span>$</span>399
            </p>
            <p className="plan-text">per month. That's just $11 per meal</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>{" "}
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>{" "}
              <span>Order from 11am and 9pm</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>{" "}
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon name="close-outline"></ion-icon>{" "}
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="/" className="btn btn--full">
              Buy Basic
            </a>
          </div>
        </div>
        <div className="pricing-plan pricing-plan--complete">
          <header className="plan-header">
            <p className="plan-name">Complete</p>
            <p className="plan-price">
              <span>$</span>649
            </p>
            <p className="plan-text">per month. That's just $13 per meal</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>{" "}
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>{" "}
              <span>
                Order <strong> 24/7</strong>
              </span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>{" "}
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon name="checkmark-outline"></ion-icon>{" "}
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="/" className="btn btn--full">
              Buy Complete
            </a>
          </div>
        </div>
      </div>
      <div className="container grid grid--4-cols"></div>
    </section>
  );
}

import "./Hero.styles.css";

export default function Hero() {
  return (
    <main>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <a
              href="/"
              className="btn btn--full margin-right-sm"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Start eating well
            </a>
            <a
              href="/"
              className="btn btn--outline"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Learn more &darr;
            </a>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src="/img/customers/customer-1.jpg" alt="customer" />
                <img src="/img/customers/customer-2.jpg" alt="customer" />
                <img src="/img/customers/customer-3.jpg" alt="customer" />
                <img src="/img/customers/customer-4.jpg" alt="customer" />
                <img src="/img/customers/customer-5.jpg" alt="customer" />
                <img src="/img/customers/customer-6.jpg" alt="customer" />
              </div>
              <p className="delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              src="/img/hero.png"
              className="hero-img"
              alt="Woman enjoying food"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

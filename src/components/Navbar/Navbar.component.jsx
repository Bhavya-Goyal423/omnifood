import "./Navbar.styles.css";

export default function Navbar() {
  return (
    <header className="header">
      <a href="/">
        <img
          src="/img/omnifood-logo.png"
          alt="Omnifood logo"
          className="logo"
        />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a
              className="main-nav-link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              How it works
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Meals
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              className="main-nav-link nav-cta"
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Try for free
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

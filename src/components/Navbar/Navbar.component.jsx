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
              Section 1
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
              Section 2
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
              Section 3
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
              Section 4
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
              Section 5
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

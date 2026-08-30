import "../styels/header.css"
export function Header() {
  return (
    <header className="main-header">

      {/* Logo */}
      <div className="brand">
        <div className="brand-title">BATTLEGROUND</div>

        <div className="brand-subtitle">
          <span>MOBILE</span>
          <strong>INDIA</strong>
        </div>
      </div>

      {/* Social Icons */}
      <nav className="social-icons">
        <a href="#" aria-label="Facebook">
          <i className="bi bi-facebook"></i>
        </a>

        <a href="#" aria-label="Instagram">
          <i className="bi bi-instagram"></i>
        </a>

        <a href="#" aria-label="YouTube">
          <i className="bi bi-youtube"></i>
        </a>
      </nav>

      {/* Hamburger */}
      <button className="menu-button" aria-label="Menu">
        <i className="bi bi-list"></i>
      </button>

    </header>
  );
}
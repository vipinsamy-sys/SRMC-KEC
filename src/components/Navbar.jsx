import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Crew", href: "/crew" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Achievements", href: "/achievements" },
  { label: "Quiz", href: "/quiz" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const goToHero = (e) => {
    closeMenu();
    if (window.location.pathname === "/") {
      e.preventDefault();
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <a className="logo" href="/" onClick={goToHero} aria-label="Go to home">
        <img src="/images/MATHSLOGO.jpg" alt="SRMC Logo" />
        <div className="logo-text">
          <h2>SRMC</h2>
          <span>KEC Mathematics Club</span>
        </div>
      </a>

      <nav className="desktop-nav">
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>
      </nav>

      <div className="auth-buttons">
        <a href="/login" className="login-btn">Log In</a>
        <a href="/signup" className="signup-btn">Sign Up</a>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}><a href={item.href} onClick={closeMenu}>{item.label}</a></li>
          ))}
        </ul>
        <div className="mobile-auth">
          <a href="/login" className="login-btn" onClick={closeMenu}>Log In</a>
          <a href="/signup" className="signup-btn" onClick={closeMenu}>Sign Up</a>
        </div>
      </div>
    </header>
  );
}

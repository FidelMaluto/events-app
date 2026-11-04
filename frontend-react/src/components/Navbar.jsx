import { useState } from "react";

const LINKS = ["Home", "Actividades", "Eventos", "Publicar", "Sobre"];

export default function Navbar() {
  // Substitui o classList.toggle("mobile-menu")
  const [menuOpen, setMenuOpen] = useState(false);
  // Substitui o classList.add/remove("active")
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="navbar">
      <h1 className="logo">Notícias</h1>

      <ul className={`nav-links${menuOpen ? " mobile-menu" : ""}`}>
        {LINKS.map((label) => (
          <li key={label}>
            <a
              href="#"
              className={`li${activeLink === label ? " active" : ""}`}
              onClick={() => setActiveLink(label)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <img
        src="/img/menu-btn.png"
        alt=""
        className="menu-btn"
        onClick={() => setMenuOpen((open) => !open)}
      />
    </nav>
  );
}

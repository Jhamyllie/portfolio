import { useState } from "react";
import "./Header.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header__content">
        <a className="header__brand" href="#" onClick={closeMenu}>
          Jamile Santana
        </a>

        <button
          className="header__menu-button"
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="main-navigation" aria-label="Navegação principal">
          <ul
            className={`header__list ${
              isMenuOpen ? "header__list--open" : ""
            }`}
          >
            <li>
              <a href="#about" onClick={closeMenu}>
                Sobre
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                Projetos
              </a>
            </li>

            <li>
              <a href="#experience" onClick={closeMenu}>
                Experiência
              </a>
            </li>

            <li>
              <a href="#education" onClick={closeMenu}>
                Formação
              </a>
            </li>

            <li>
              <a href="#skills" onClick={closeMenu}>
                Habilidades
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
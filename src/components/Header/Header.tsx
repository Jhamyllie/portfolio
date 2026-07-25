import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <a className="header__brand" href="#">
          Jamile Santana
        </a>

        <nav aria-label="Navegação principal">
          <ul className="header__list">
            <li>
              <a href="#about">Sobre</a>
            </li>

            <li>
              <a href="#projects">Projetos</a>
            </li>

            <li>
              <a href="#skills">Habilidades</a>
            </li>

            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
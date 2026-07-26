import "./Footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <p className="footer__name">Jamile Santana</p>
          <p className="footer__role">Desenvolvedora Full Stack</p>
        </div>

        <nav className="footer__navigation" aria-label="Navegação do rodapé">
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#experience">Experiência</a>
          <a href="#skills">Habilidades</a>
          <a href="#contact">Contato</a>
        </nav>

        <div className="footer__bottom">
          <p>© {currentYear} Jamile Santana.</p>
          <p>Desenvolvido com React e TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}
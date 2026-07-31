import "./Hero.css";
import profileImage from "../../assets/jamile.webp";

export function Hero() {
  return (
    <section className="hero">
  <div className="hero__content">
    <div className="hero__text">
      <p className="hero__greeting">Olá, eu sou</p>

      <h2 className="hero__title">Jamile Santana</h2>

      <p className="hero__role">Desenvolvedora Full Stack</p>

      <p className="hero__description">
        Crio aplicações web modernas e funcionais utilizando React, Next.js,
        Node.js, TypeScript, Java e PostgreSQL.
      </p>

      <div className="hero__actions">
        <a className="hero__button hero__button--primary" href="#projects">
          Ver projetos
        </a>

        <a
          className="hero__button hero__button--secondary"
          href="https://github.com/Jhamyllie"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>

    <div className="hero__image">
      <img src={profileImage} alt="Jamile Santana" />
    </div>
  </div>
</section>
  );
}
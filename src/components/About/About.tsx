import "./About.css";

export function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <p className="about__eyebrow">Sobre mim</p>

        <h2 className="about__title">
          Tecnologia, criatividade e aprendizado contínuo
        </h2>

        <div className="about__text">
          <p>
            Sou desenvolvedora Full Stack em início de carreira, com experiência
            prática no desenvolvimento e na manutenção de{" "}
            <span>aplicações web</span>.
          </p>

          <p>
            Minha trajetória profissional começou na área da educação, onde
            desenvolvi habilidades de <span>comunicação</span>,{" "}
            <span>organização</span> e{" "}
            <span>resolução de problemas</span>. Hoje, aplico essas competências
            na construção de <span>soluções digitais</span>.
          </p>

          <p>
            Gosto de compreender o problema antes de começar a programar e busco
            desenvolver <span>interfaces claras</span>,{" "}
            <span>APIs bem estruturadas</span> e{" "}
            <span>aplicações fáceis de manter</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
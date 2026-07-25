// export function About() {
//   return 
//   <section id="about">
//     About
//   </section>;
// }
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
            prática no desenvolvimento e manutenção de aplicações web.
          </p>

          <p>
            Minha trajetória começou na área da educação, onde desenvolvi
            habilidades de comunicação, organização e resolução de problemas.
            Hoje, aplico essas competências no desenvolvimento de soluções
            digitais.
          </p>

          <p>
            Gosto de entender o problema antes de começar a programar e busco
            construir interfaces claras, APIs bem estruturadas e soluções que
            sejam fáceis de manter.
          </p>
        </div>
      </div>
    </section>
  );
}
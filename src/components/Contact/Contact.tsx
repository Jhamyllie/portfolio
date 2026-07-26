import "./Contact.css";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__content">
        <p className="contact__eyebrow">Contato</p>

        <h2 className="contact__title">
          Vamos conversar?
        </h2>

        <p className="contact__description">
          Estou aberta a oportunidades em desenvolvimento de software,
          colaboração em projetos e novas conexões profissionais.
        </p>

        <div className="contact__links">
  <a href="mailto:jamilesan204@gmail.com" className="contact__link">
    Enviar e-mail
  </a>

  <a
    href="https://www.linkedin.com/in/jamile-santana-da-silva/"
    target="_blank"
    rel="noreferrer"
    className="contact__link"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/Jhamyllie"
    target="_blank"
    rel="noreferrer"
    className="contact__link"
  >
    GitHub
  </a>
</div>
      </div>
    </section>
  );
}
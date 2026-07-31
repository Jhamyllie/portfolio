import "./Education.css";

const education = [
    {
        id: 1,
        title: "Análise e Desenvolvimento de Sistemas",
        institution: "Graduação",
        status: "Em andamento",
        description:
            "Formação superior com foco em desenvolvimento de software, banco de dados, engenharia e arquitetura de sistemas.",
    },
    {
        id: 2,
        title: "AWS re/Start",
        institution: "Escola da Nuvem",
        status: "Concluído",
        description:
            "Formação em Cloud Computing com foco em AWS, Linux, redes e fundamentos da computação em nuvem.",
    },
    {
        id: 3,
        title: "Desenvolvimento Web Full Stack",
        institution: "Trybe",
        status: "Concluído",
        description:
            "Formação prática em desenvolvimento Full Stack com React, Node.js, testes automatizados e bancos de dados.",
    },
    {
        id: 4,
        title: "Backend",
        institution: "{reprograma}",
        status: "Concluído",
        description:
            "Especialização em desenvolvimento Backend com foco em APIs REST e bancos de dados.",
    },
    {
        id: 5,
        title: "Backend",
        institution: "Cubos Academy + iFood",
        status: "Concluído",
        description:
            "Formação em desenvolvimento Backend com JavaScript, Node.js e arquitetura de aplicações.",
    },
];

export function Education() {
    return (
        <section id="education" className="education">
            <div className="education__content">
                <p className="education__eyebrow">Formação</p>

                <h2 className="education__title">
                    Formação e aprendizado contínuo
                </h2>

                <p className="education__description">
                    Minha trajetória acadêmica e os programas de formação que contribuíram
                    para o desenvolvimento das minhas habilidades técnicas.
                </p>

                <div className="education__grid">
                    {education.map((item) => (
                        <article key={item.id} className="education-card">
                            <div className="education-card__header">
                                <h3 className="education-card__title">{item.title}</h3>

                                <span
                                    className={`education-card__status ${item.status === "Em andamento"
                                            ? "education-card__status--progress"
                                            : "education-card__status--completed"
                                        }`}
                                >
                                    {item.status}
                                </span>
                            </div>

                            <p className="education-card__institution">
                                {item.institution}
                            </p>

                            <p className="education-card__description">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
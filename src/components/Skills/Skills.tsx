import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "MUI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Java", "Spring Boot"],
  },
  {
    title: "Banco de dados",
    skills: ["PostgreSQL", "MySQL", "Mongo.db"],
  },
  {
    title: "Ferramentas e práticas",
    skills: ["Git", "GitHub", "Jest", "RTL", "Vercel", "Postman"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__content">
        <p className="skills__eyebrow">Habilidades</p>

        <h2 className="skills__title">
          Tecnologias e ferramentas
        </h2>

        <p className="skills__description">
          Tecnologias e ferramentas que utilizei no desenvolvimento de aplicações web e projetos pessoais.
        </p>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article className="skills__group" key={group.title}>
              <h3 className="skills__group-title">{group.title}</h3>

              <ul className="skills__list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
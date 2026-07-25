import "./Experience.css";
import { ExperienceCard } from "./ExperienceCard/ExperienceCard";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Estagiária de Desenvolvimento Full Stack",
    company: "Aceleradora Ágil",
    period: "Abr/2025 - Jul/2026",
    description:
      "Atuei no desenvolvimento e evolução da plataforma e-acelera, participando da criação do CMS próprio, da migração gradual do Stackby para PostgreSQL utilizando feature flags e da manutenção de funcionalidades no front-end e back-end.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Git",
    ],
  },
  {
    id: 2,
    title: "Auxiliar de Desenvolvimento Humano",
    company: "Prefeitura Municipal de Brejões",
    period: "Mar/2018 - Dez/2021",
    description:
      "Atuei no apoio ao desenvolvimento infantil, acompanhamento de estudantes com deficiência, suporte em sala de aula e atendimento ao público nas secretarias escolares do município.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__content">
        <p className="experience__eyebrow">
          Experiência profissional
        </p>

        <h2 className="experience__title">
          Minha trajetória profissional
        </h2>

        <div className="experience__list">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              technologies={experience.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
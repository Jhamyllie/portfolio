import "./Projects.css";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import animaiImage from "../../assets/anime.jpeg";
import eAceleraImage from "../../assets/e-aceleraImg.png";

const projects = [
  {
    id: 1,
    title: "AnimAi",
    description:
      "API REST desenvolvida com Java, Spring Boot e PostgreSQL para gerenciamento de animes favoritos, implementando operações CRUD.",
    image: animaiImage,
    githubUrl: "https://github.com/Jhamyllie/AnimAi",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    id: 2,
    title: "e-acelera",
    description:
      "Plataforma educacional da Aceleradora Ágil. Atuei na evolução do sistema, incluindo o desenvolvimento do CMS próprio e a migração gradual do Stackby para PostgreSQL com uso de feature flags.",
    image: eAceleraImage,
    projectUrl: "https://aceleradora-agil.com.br/",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__content">
        <p className="projects__eyebrow">Projetos</p>

        <h2 className="projects__title">Projetos em destaque</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              githubUrl={project.githubUrl}
              projectUrl={project.projectUrl}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
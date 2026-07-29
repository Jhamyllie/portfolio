import "./Projects.css";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import docImage from "../../assets/doc.png";
import eAceleraImage from "../../assets/e-aceleraImg.png";

const projects = [
  {
    id: 1,
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
  {
    id: 2,
    title: "AnimAi",
    description:
      "API REST desenvolvida com Java e Spring Boot para gerenciamento de animes favoritos. O projeto conta com CRUD completo, persistência em PostgreSQL, documentação interativa com Swagger/OpenAPI, containerização com Docker e deploy em produção na Render.",
    image: docImage,
    githubUrl: "https://github.com/Jhamyllie/animAi",
    projectUrl: "https://animai-f5fu.onrender.com/animes",
    swaggerUrl:
      "https://animai-f5fu.onrender.com/swagger-ui/index.html",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Data JPA",
      "Docker",
      "Swagger",
      "Render",
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
              swaggerUrl={project.swaggerUrl}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
import "./ProjectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  projectUrl?: string;
  technologies: string[];
}

export function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  projectUrl,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <img
        className="project-card__image"
        src={image}
        alt={`Prévia do projeto ${title}`}
      />

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>

        <p className="project-card__description">{description}</p>

        <ul className="project-card__technologies">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-card__links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}

          {projectUrl && (
            <a href={projectUrl} target="_blank" rel="noreferrer">
              Ver projeto
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
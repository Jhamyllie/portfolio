import "./ExperienceCard.css";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <article className="experience-card">
      <h3 className="experience-card__title">{title}</h3>

      <p className="experience-card__company">
        <strong>{company}</strong>
        <span>{period}</span>
      </p>

      <p className="experience-card__description">{description}</p>

      {technologies && technologies.length > 0 && (
        <ul className="experience-card__technologies">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
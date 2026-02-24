import { ArrowRight } from "lucide-react";
import styles from "./project-card.module.scss";
import { Link } from "react-router-dom";

export type ProjectCardProps = {
  image: string;
  title: string;
  category: "all" | "frontend" | "uiux" | "fullstack";
  label: string;
  date: string;
  link: string;
  tech: string[];
};

const ProjectCard = ({
  image,
  title,
  label,
  date,
  link,
  tech,
}: ProjectCardProps) => {
  return (
    <div className={styles["card"]} data-aos="zoom-in">
      <img src={image} className={styles["card-img-top"]} />

      <div className={styles["card-body"]}>
        <div className={styles["content"]}>
          <div className={styles["card-text-container"]}>
            <Link
              to={link}
              className={styles["card-title"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </Link>
            <p className={styles["card-category"]}>{label}</p>
            <h6 className={styles["card-date"]}>{date}</h6>
          </div>

          <Link
            to={link}
            className={styles["arrow"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowRight />
          </Link>
        </div>
        <div className={styles["badge-container"]}>
          {tech.map((t, i) => (
            <div key={i} className={styles.badge}>
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

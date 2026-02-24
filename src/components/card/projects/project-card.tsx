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
};

const ProjectCard = ({ image, title, label, date, link }: ProjectCardProps) => {
  return (
    <div className={styles["card"]} data-aos="zoom-in">
      <img src={image} className={styles["card-img-top"]} />

      <div className={styles["card-body"]}>
        <div className={styles["card-text-container"]}>
          <h5 className={styles["card-title"]}>{title}</h5>
          <p className={styles["card-category"]}>{label}</p>
          <h6 className={styles["card-date"]}>{date}</h6>
        </div>

        <Link to={link} className={styles["arrow"]}>
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

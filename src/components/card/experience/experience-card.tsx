import styles from "./experience-card.module.scss";

type Props = {
  title: string;
  year: string;
  company: string;
  description: React.ReactNode;
};

const ExperienceCard = ({ title, year, company, description }: Props) => {
  return (
    <div className={styles["card"]} data-aos="fade-up">
      <div className={styles["card-body"]}>
        <h5 className={styles["card-title"]}>{title}</h5>
        <h6 className={styles["card-subtitle-one"]}>{year}</h6>
        <h6 className={styles["card-subtitle-two"]}>{company}</h6>
        <p className={styles["card-text"]}>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;

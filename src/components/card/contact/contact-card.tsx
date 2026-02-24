import React from "react";
import styles from "./contact-card.module.scss";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ContactCardProps {
  title: string;
  link: string;
  iconSrc: string;
  iconAlt?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  link,
  iconSrc,
  iconAlt,
}) => {
  return (
    <div className={styles["card"]} data-aos="flip-left">
      <Link to={link} target="_blank" className={styles["card-link"]}>
        <div className={styles["card-title-container"]}>
          <img
            src={iconSrc}
            alt={iconAlt || title}
            className={styles["icon"]}
          />
          <h5 className={styles["card-title"]}>{title}</h5>
          <ArrowUpRight />
        </div>
      </Link>
    </div>
  );
};

export default ContactCard;

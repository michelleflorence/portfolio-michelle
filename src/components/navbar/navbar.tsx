import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./navbar.module.scss";
import Button from "../button/button";

const NavbarApps = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className={styles["navbar-container"]}>
      <nav className={styles.navbar}>
        <div className={styles["navbar-brand"]}>Michelle Florence</div>

        <button
          className={styles["navbar-toggler"]}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`${styles.mobileMenu} ${isOpen ? styles.mobileOpen : ""}`}
        >
          <ul className={styles["nav-links"]}>
            <li
              className={styles["nav-link"]}
              onClick={() => handleScroll("about")}
            >
              About
            </li>

            <li
              className={styles["nav-link"]}
              onClick={() => handleScroll("experience")}
            >
              Experience
            </li>

            <li
              className={styles["nav-link"]}
              onClick={() => handleScroll("projects")}
            >
              Projects
            </li>

            <li
              className={styles["nav-link"]}
              onClick={() => handleScroll("contact")}
            >
              Contact
            </li>
            
            <Button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/michelle-florence/",
                  "_blank",
                )
              }
            >
              Visit LinkedIn
            </Button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavbarApps;

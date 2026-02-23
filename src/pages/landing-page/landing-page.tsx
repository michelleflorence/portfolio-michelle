import styles from "./landing-page.module.scss";
import profilePhoto from "@/assets/landing-page/about/profile-image.png";

const Home = () => {
  return (
    <>
      <section id="about" className={styles["about-section"]}>
        <div className={styles["image-container"]} data-aos="fade-down">
          <img src={profilePhoto} alt="Profile Photo" />
        </div>
        <div className={styles["text-container"]} data-aos="fade-up">
          <div className={styles["text-title"]}>
            FRONT-END DEVELOPER & UI/UX ENTHUSIAST
          </div>
          <div className={styles["description"]}>
            Creating Seamless and Engaging Digital Experiences
          </div>
          <div className={styles["bio"]}>
            I’m a front-end developer with a deep passion for UI/UX design,
            dedicated to building interactive and user-friendly websites that
            prioritize both form and function.
          </div>
        </div>
      </section>

      <section id="experience" className={styles["experience-section"]}>
        <h2 className={styles["title-text"]}>Work Experiences</h2>
        <div className={styles["experience-card-container"]}>
          <div className={styles["card"]} data-aos="fade-up">
            <div className={styles["card-body"]}>
              <h5 className={styles["card-title"]}>Front-End Engineer</h5>
              <h6 className={styles["card-subtitle-one"]}>
                TECHNET VISION, 2025
              </h6>
              <h6 className={styles["card-subtitle-two"]}>
                PT. Technet Vision Indonesia
              </h6>
              <p className={styles["card-text"]}>
                Revamped company profile website and built internal project
                management system using <strong> React.js</strong> and
                <strong>SASS/SCSS</strong>.
              </p>
            </div>
          </div>
          <div className={styles["card"]} data-aos="fade-up">
            <div className={styles["card-body"]}>
              <h5 className={styles["card-title"]}>Front-End Engineer</h5>
              <h6 className={styles["card-subtitle-one"]}>AUTOMA, 2024</h6>
              <h6 className={styles["card-subtitle-two"]}>
                PT. Sentra Solusi Automa
              </h6>
              <p className={styles["card-text"]}>
                Developed website UI and handled front-end data for an internal
                platform using <strong>React.js</strong> and{" "}
                <strong>SASS/SCSS</strong> for modular styling.
              </p>
            </div>
          </div>
          <div className={styles["card"]} data-aos="fade-up">
            <div className={styles["card-body"]}>
              <h5 className={styles["card-title"]}>UI/UX Designer</h5>
              <h6 className={styles["card-subtitle-one"]}>VISTEK, 2022</h6>
              <h6 className={styles["card-subtitle-two"]}>
                PT. Visi Teguh Kreatif
              </h6>
              <p className={styles["card-text"]}>
                Developed a user-friendly interface that enabled users to
                understand how to use complex technical products using{" "}
                <strong>Figma</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

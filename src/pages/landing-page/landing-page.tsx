import ExperienceCard from "@/components/card/experience/experience-card";
import styles from "./landing-page.module.scss";
import profilePhoto from "@/assets/landing-page/about/profile-image.png";
import { experiences } from "@/utils/helper";
import TabMenu from "@/components/tab/tab";
import AllTab from "@/components/tab/all/all";
import FrontendTab from "@/components/tab/frontend/frontend";
import UIUXTab from "@/components/tab/uiux/uiux";
import FullstackTab from "@/components/tab/fullstack/fullstack";

const Home = () => {
  // const ITEMS_PER_PAGE = 9;
  // const [currentPage] = useState(1);

  // const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // const paginatedProjects = projects.slice(
  //   startIndex,
  //   startIndex + ITEMS_PER_PAGE,
  // );

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
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </section>

      <section id="projects" className={styles["projects-section"]}>
        <h2 className={styles["title-text"]}>My Recent Projects</h2>

        <div className={styles["projects-card-container"]}>
          <TabMenu
            defaultActive="all"
            tabs={[
              { key: "all", label: "All Projects", content: <AllTab /> },
              {
                key: "frontend",
                label: "Front-End Development",
                content: <FrontendTab />,
              },
              { key: "uiux", label: "UI/UX Design", content: <UIUXTab /> },
              { key: "fullstack", label: "Full-Stack Development", content: <FullstackTab /> },
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default Home;

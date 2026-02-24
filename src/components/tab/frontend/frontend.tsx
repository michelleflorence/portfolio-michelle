import { useState } from "react";
import styles from "../tab.module.scss";
import ProjectCard from "@/components/card/projects/project-card";
import { frontendProject } from "@/utils/helper";
import Pagination from "@/components/pagination/pagination";

const FrontendTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = frontendProject.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles["container"]}>
      <div className={styles["card-grid"]}>
        {currentItems.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className={styles["pagination-container"]}>
        <p>
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, frontendProject.length)} of {frontendProject.length}
        </p>
        <Pagination
          currentPage={currentPage}
          totalItems={frontendProject.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default FrontendTab;

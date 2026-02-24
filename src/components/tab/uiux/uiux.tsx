import { useState } from "react";
import styles from "../tab.module.scss";
import ProjectCard from "@/components/card/projects/project-card";
import { uiuxProject } from "@/utils/helper";
import Pagination from "@/components/pagination/pagination";

const UIUXTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = uiuxProject.slice(indexOfFirstItem, indexOfLastItem);

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
          {Math.min(indexOfLastItem, uiuxProject.length)} of {uiuxProject.length}
        </p>
        <Pagination
          currentPage={currentPage}
          totalItems={uiuxProject.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default UIUXTab;

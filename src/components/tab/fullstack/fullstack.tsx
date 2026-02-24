import { useState } from "react";
import styles from "../tab.module.scss";
import ProjectCard from "@/components/card/projects/project-card";
import { fullstackProject } from "@/utils/helper";
import Pagination from "@/components/pagination/pagination";

const FullstackTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fullstackProject.slice(indexOfFirstItem, indexOfLastItem);

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
          {Math.min(indexOfLastItem, fullstackProject.length)} of {fullstackProject.length}
        </p>
        <Pagination
          currentPage={currentPage}
          totalItems={fullstackProject.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default FullstackTab;

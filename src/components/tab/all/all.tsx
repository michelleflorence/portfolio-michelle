import { useState } from "react";
import styles from "../tab.module.scss";
import ProjectCard from "@/components/card/projects/project-card";
import { allProject } from "@/utils/helper";
import Pagination from "@/components/pagination/pagination";

const AllTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProject.slice(indexOfFirstItem, indexOfLastItem);

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
          {Math.min(indexOfLastItem, allProject.length)} of {allProject.length}
        </p>
        <Pagination
          currentPage={currentPage}
          totalItems={allProject.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default AllTab;

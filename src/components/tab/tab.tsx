import { useEffect, useState } from "react";
import styles from "./tab.module.scss";

export type TabItem = {
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
};

export type TabMenuProps = {
  defaultActive: string;
  tabs: TabItem[];
  onTabChange?: (key: string) => void;
};

const TabMenu = ({ defaultActive, tabs, onTabChange }: TabMenuProps) => {
  const [activeTab, setActiveTab] = useState(defaultActive);

  useEffect(() => {
    setActiveTab(defaultActive);
  }, [defaultActive]);

  const handleClick = (key: string) => {
    setActiveTab(key);
    onTabChange?.(key);
  };

  return (
    <div className={styles["tab-container"]}>
      <div className={styles["tab-header"]}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles["tab"]} ${
              activeTab === tab.key ? styles["active"] : ""
            }`}
            onClick={() => handleClick(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles["tab-content"]}>
        {tabs.find((tab) => tab.key === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabMenu;
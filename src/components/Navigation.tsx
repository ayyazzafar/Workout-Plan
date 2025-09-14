import React from "react";
import { TabName } from "../types";

interface NavigationProps {
  activeTab: TabName;
  onTabChange: (tab: TabName) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <button
          className={`nav-tab ${activeTab === "quick-ref" ? "active" : ""}`}
          onClick={() => onTabChange("quick-ref")}
        >
          📊 Quick Reference
        </button>
        <button
          className={`nav-tab ${activeTab === "detailed" ? "active" : ""}`}
          onClick={() => onTabChange("detailed")}
        >
          📖 Detailed Plan
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

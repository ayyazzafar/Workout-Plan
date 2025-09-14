import React from "react";
import { SpecialSectionProps } from "../types";

const SpecialSection: React.FC<SpecialSectionProps> = ({
  id,
  title,
  icon,
  children,
  isExpanded,
  onToggle,
}) => {
  const handleToggle = () => {
    onToggle(id);
  };

  return (
    <div className={`special-section ${isExpanded ? "expanded" : ""}`} id={id}>
      <div className="section-header" onClick={handleToggle}>
        <h2>
          {icon} {title}
        </h2>
        <svg
          className="expand-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      <div className="section-content">{children}</div>
    </div>
  );
};

export default SpecialSection;

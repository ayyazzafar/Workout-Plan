import React from "react";
import { InfoCardProps } from "../types";

const InfoCard: React.FC<InfoCardProps> = ({
  data,
  index,
  type,
  isActive,
  onToggle,
}) => {
  const cardId = `${type}-${index}`;

  const handleToggle = () => {
    onToggle(cardId);
  };

  return (
    <div
      className={`info-card ${isActive ? "active" : ""}`}
      id={cardId}
      onClick={handleToggle}
    >
      <h3>{data.name}</h3>
      <p>
        <strong>{data.schedule}</strong>
      </p>
      {type === "cardio" && "duration" in data && <p>{data.duration}</p>}
      {type === "core" && "description" in data && <p>{data.description}</p>}
      {type === "cardio" && "equipment" in data && (
        <p style={{ fontSize: "0.75rem", color: "var(--gray-500)" }}>
          {data.equipment}
        </p>
      )}
      <div className="info-details">
        {data.details.map((detail, detailIndex) => (
          <p key={detailIndex}>• {detail}</p>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;

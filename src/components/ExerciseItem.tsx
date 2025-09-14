import React from "react";
import { ExerciseItemProps } from "../types";

const ExerciseItem: React.FC<ExerciseItemProps> = ({
  exercise,
  dayKey,
  exerciseIndex,
  isActive,
  onToggle,
}) => {
  const exerciseId = `${dayKey}-ex-${exerciseIndex}`;

  const handleToggle = () => {
    onToggle(exerciseId);
  };

  return (
    <div className={`exercise-item ${isActive ? "active" : ""}`}>
      <div className="exercise-header" onClick={handleToggle}>
        <span className="exercise-name">{exercise.name}</span>
        <span className="sets-reps">{exercise.sets}</span>
      </div>
      <div className="exercise-details">
        <ul>
          {exercise.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExerciseItem;

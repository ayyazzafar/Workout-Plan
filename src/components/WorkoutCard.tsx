import React from "react";
import { WorkoutDay } from "../types";

interface WorkoutCardProps {
  dayKey: string;
  workout: WorkoutDay;
  onOpenModal: (dayKey: string, workout: WorkoutDay) => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  dayKey,
  workout,
  onOpenModal,
}) => {
  const handleClick = () => {
    onOpenModal(dayKey, workout);
  };

  return (
    <div className="day-card" id={`${dayKey}-card`} onClick={handleClick}>
      <div className="day-header">
        <span className="day-name">{workout.day}</span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="workout-badge">{workout.type}</span>
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
              d="M15 12l3-3m0 0l-3-3m3 3H9"
            ></path>
          </svg>
        </div>
      </div>
      <div className="day-preview">
        <h3>Focus: {workout.focus}</h3>
        <p className="exercise-count">
          {workout.exercises.length} exercises • Click to view details
        </p>
      </div>
    </div>
  );
};

export default WorkoutCard;

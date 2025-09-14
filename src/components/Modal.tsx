import React, { useEffect } from "react";
import { WorkoutDay } from "../types";
import ExerciseItem from "./ExerciseItem";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  workout: WorkoutDay | null;
  dayKey: string;
  activeExercises: Set<string>;
  onExerciseToggle: (exerciseId: string) => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  workout,
  dayKey,
  activeExercises,
  onExerciseToggle,
}) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !workout) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>
            {workout.day} - {workout.type}
          </h2>
          <button className="modal-close" onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div className="workout-focus">
            <h3>Focus: {workout.focus}</h3>
          </div>

          <div className="workout-details">
            <div className="workout-info-section">
              <h4>🔥 Warm-up</h4>
              <p>{workout.warmup}</p>
            </div>

            <div className="exercise-list-modal">
              <h4>💪 Exercises</h4>
              {workout.exercises.map((exercise, index) => (
                <ExerciseItem
                  key={index}
                  exercise={exercise}
                  dayKey={dayKey}
                  exerciseIndex={index}
                  isActive={activeExercises.has(`${dayKey}-ex-${index}`)}
                  onToggle={onExerciseToggle}
                />
              ))}
            </div>

            <div className="workout-info-section">
              <h4>❄️ Cool-down</h4>
              <p>{workout.cooldown}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

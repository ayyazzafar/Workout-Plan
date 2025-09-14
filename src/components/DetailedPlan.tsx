import React from "react";
import { WorkoutDay } from "../types";
import { tips, restDay } from "../data";

interface DetailedPlanProps {
  workouts: {
    monday: WorkoutDay;
    tuesday: WorkoutDay;
    wednesday: WorkoutDay;
    thursday: WorkoutDay;
    friday: WorkoutDay;
    saturday: WorkoutDay;
  };
}

const DetailedPlan: React.FC<DetailedPlanProps> = ({ workouts }) => {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ] as const;

  return (
    <div id="detailedContent">
      {days.map((day) => {
        const data = workouts[day];
        return (
          <div key={day} className="detailed-section">
            <h3>
              {data.day} - {data.type} ({data.focus})
            </h3>
            <div className="warmup-cooldown">🔥 WARM-UP: {data.warmup}</div>
            {data.exercises.map((exercise, index) => (
              <div key={index} className="exercise-detail">
                <h4>
                  {index + 1}. {exercise.name} - {exercise.sets}
                </h4>
                <ul>
                  {exercise.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="warmup-cooldown">❄️ COOL-DOWN: {data.cooldown}</div>
          </div>
        );
      })}

      {/* Sunday */}
      <div className="detailed-section">
        <h3>{restDay.day} - {restDay.title}</h3>
        <div style={{ padding: "1.5rem" }}>
          <h4>Options:</h4>
          <ul style={{ marginLeft: "1.5rem" }}>
            {restDay.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="detailed-section">
        <h3>💡 Pro Tips for Maximum Gains</h3>
        <div className="tips-grid">
          {Object.entries(tips).map(([key, tip]) => (
            <div key={key} className="tip-card">
              <h4>{tip.title}</h4>
              <p>
                {tip.points.map((point, index) => (
                  <span key={index}>
                    • {point}
                    {index < tip.points.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedPlan;

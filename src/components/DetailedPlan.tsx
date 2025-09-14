import React from "react";
import { WorkoutData } from "../types";

interface DetailedPlanProps {
  workoutData: WorkoutData;
}

const DetailedPlan: React.FC<DetailedPlanProps> = ({ workoutData }) => {
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
        const data = workoutData[day];
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
        <h3>SUNDAY - Active Recovery Day</h3>
        <div style={{ padding: "1.5rem" }}>
          <h4>Options:</h4>
          <ul style={{ marginLeft: "1.5rem" }}>
            <li>30-45 minutes easy walking or cycling</li>
            <li>20-30 minutes full body stretching</li>
            <li>Light yoga or mobility work</li>
            <li>Meal prep for the week</li>
            <li>Complete rest if needed</li>
          </ul>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="detailed-section">
        <h3>💡 Pro Tips for Maximum Gains</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>Progressive Overload</h4>
            <p>
              • Weeks 1-2: Focus on form
              <br />
              • Weeks 3-4: Add 2.5-5kg
              <br />
              • Weeks 5-6: Add reps first
              <br />• Weeks 7-8: Deload week
            </p>
          </div>
          <div className="tip-card">
            <h4>Nutrition</h4>
            <p>
              • 300-500 calorie surplus
              <br />
              • 1.6-2.2g protein per kg
              <br />
              • Post-workout meal within 2h
              <br />• 3-4 liters water daily
            </p>
          </div>
          <div className="tip-card">
            <h4>Recovery</h4>
            <p>
              • 7-9 hours sleep
              <br />
              • Take rest days seriously
              <br />
              • Foam rolling on off days
              <br />• Listen to your body
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPlan;

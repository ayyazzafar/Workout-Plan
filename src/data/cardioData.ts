import { CardioData } from "../types";

export const cardioData: CardioData[] = [
  {
    name: "Pre-Workout",
    schedule: "Every Training Day",
    duration: "10 minutes moderate intensity",
    equipment: "Stationary Cycle / Treadmill",
    details: [
      "Target heart rate: 50-60% max",
      "Purpose: Increase blood flow",
      "Gradually increase intensity",
      "Focus on full body warm-up",
    ],
  },
  {
    name: "Post-Workout",
    schedule: "Every Training Day",
    duration: "30 minutes steady state",
    equipment: "65-75% max heart rate",
    details: [
      "Fat burning zone",
      "Improve cardiovascular endurance",
      "Aid in recovery",
      "Can split into 15 min intervals",
    ],
  },
  {
    name: "HIIT Sessions",
    schedule: "Tuesday & Friday",
    duration: "15 minutes air bike",
    equipment: "30s sprint / 30s rest",
    details: [
      "Maximum effort during sprints",
      "Complete recovery during rest",
      "15 total intervals",
      "Boosts metabolism for 24+ hours",
    ],
  },
  {
    name: "Active Recovery",
    schedule: "Sunday (Optional)",
    duration: "30-45 minutes easy pace",
    equipment: "Walk or light cycle",
    details: [
      "Very low intensity",
      "Promotes blood flow",
      "Reduces muscle soreness",
      "Mental relaxation",
    ],
  },
];

import { workoutPlan } from "./workoutPlan";

// Export the typed workout plan data
export { workoutPlan };

// Export individual sections for convenience
export const {
  metadata,
  person,
  workouts,
  cardio,
  core,
  equipment,
  tips,
  restDay,
} = workoutPlan;

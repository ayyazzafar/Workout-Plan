import { workoutPlan } from "./workoutPlan";

// Export the complete workout plan
export { workoutPlan };

// Export metadata for convenience
export const { metadata } = workoutPlan;

// Helper function to get current user's data
export const getCurrentUser = (plan = workoutPlan) => {
  return (
    plan.users.find((user) => user.id === plan.currentUserId) || plan.users[0]
  );
};

// Helper function to get all users
export const getAllUsers = (plan = workoutPlan) => {
  return plan.users;
};

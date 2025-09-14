// Exercise details interface
export interface Exercise {
  name: string;
  sets: string;
  details: string[];
}

// Workout day interface
export interface WorkoutDay {
  day: string;
  type: string;
  focus: string;
  warmup: string;
  cooldown: string;
  exercises: Exercise[];
}

// Complete workout data interface
export interface WorkoutData {
  monday: WorkoutDay;
  tuesday: WorkoutDay;
  wednesday: WorkoutDay;
  thursday: WorkoutDay;
  friday: WorkoutDay;
  saturday: WorkoutDay;
}

// Cardio data interface
export interface CardioData {
  name: string;
  schedule: string;
  duration: string;
  equipment: string;
  details: string[];
}

// Core data interface
export interface CoreData {
  name: string;
  schedule: string;
  description: string;
  details: string[];
}

// Equipment data interface
export interface EquipmentData {
  name: string;
  tooltip: string;
}

// Tab names type
export type TabName = "quick-ref" | "detailed";

// Component state interfaces
export interface DayCardProps {
  dayKey: string;
  workout: WorkoutDay;
  isExpanded: boolean;
  onToggle: (dayKey: string) => void;
}

export interface ExerciseItemProps {
  exercise: Exercise;
  dayKey: string;
  exerciseIndex: number;
  isActive: boolean;
  onToggle: (exerciseId: string) => void;
}

export interface InfoCardProps {
  data: CardioData | CoreData;
  index: number;
  type: "cardio" | "core";
  isActive: boolean;
  onToggle: (cardId: string) => void;
}

export interface SpecialSectionProps {
  id: string;
  title: string;
  icon: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: (sectionId: string) => void;
}

import { CoreData } from "../types";

export const coreData: CoreData[] = [
  {
    name: "Primary Core Days",
    schedule: "Wednesday & Saturday",
    description: "Full core circuit after legs",
    details: [
      "Perform after leg workout",
      "3 complete circuits",
      "30 seconds rest between exercises",
      "Focus on form over speed",
    ],
  },
  {
    name: "Secondary Core",
    schedule: "Monday & Thursday",
    description: "2 exercises, 3 sets each",
    details: [
      "Choose any 2 exercises",
      "Higher rep range (15-25)",
      "Can superset with triceps",
      "5-10 minutes total",
    ],
  },
  {
    name: "Core Circuit",
    schedule: "Standard Circuit",
    description: "Complete workout",
    details: [
      "Crunches × 20",
      "Leg Raises × 15",
      "Side Touches × 20/side",
      "Plank × 45-60s",
    ],
  },
  {
    name: "Quick Core",
    schedule: "Time-Saver Option",
    description: "10 minutes max",
    details: [
      "Plank × 60s",
      "Bicycle Crunches × 30",
      "Perfect for busy days",
      "Add weight for progression",
    ],
  },
];

import { UserProfile } from "../types";

// Generate a unique ID
const generateUserId = (): string => {
  return `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Generate default workout plan structure
const generateDefaultWorkouts = () => ({
  monday: {
    day: "MONDAY",
    type: "FULL BODY",
    focus: "Getting Started",
    warmup: "5-10 minutes light movement",
    cooldown: "5-10 minutes stretching",
    exercises: [
      {
        name: "Bodyweight Squats",
        sets: "2-3 sets x 8-12 reps",
        details: [
          "Stand with feet shoulder-width apart",
          "Lower down as if sitting in a chair",
          "Keep chest up and knees behind toes"
        ]
      },
      {
        name: "Push-ups (Modified if needed)",
        sets: "2-3 sets x 5-10 reps", 
        details: [
          "Start on knees if full push-ups are too difficult",
          "Keep straight line from head to knees/toes",
          "Lower chest to ground, push back up"
        ]
      },
      {
        name: "Plank Hold",
        sets: "2-3 sets x 15-30 seconds",
        details: [
          "Hold straight line from head to heels",
          "Engage core muscles",
          "Breathe normally during hold"
        ]
      }
    ]
  },
  tuesday: {
    day: "TUESDAY", 
    type: "CARDIO",
    focus: "Cardiovascular Health",
    warmup: "5 minutes easy movement",
    cooldown: "5 minutes walking + stretches",
    exercises: [
      {
        name: "Walking/Light Jogging",
        sets: "20-30 minutes",
        details: [
          "Start at comfortable pace",
          "Gradually increase intensity if comfortable",
          "Focus on consistent movement"
        ]
      }
    ]
  },
  wednesday: {
    day: "WEDNESDAY",
    type: "FULL BODY", 
    focus: "Building Strength",
    warmup: "5-10 minutes dynamic movement",
    cooldown: "10 minutes stretching",
    exercises: [
      {
        name: "Lunges",
        sets: "2-3 sets x 6-10 per leg",
        details: [
          "Step forward into lunge position",
          "Both knees at 90 degrees",
          "Push back to starting position"
        ]
      },
      {
        name: "Wall Sit",
        sets: "2-3 sets x 20-45 seconds",
        details: [
          "Back flat against wall",
          "Knees at 90 degrees",
          "Hold steady position"
        ]
      }
    ]
  },
  thursday: {
    day: "THURSDAY",
    type: "ACTIVE RECOVERY",
    focus: "Flexibility & Mobility",
    warmup: "Gentle movement",
    cooldown: "Relaxation",
    exercises: [
      {
        name: "Gentle Stretching",
        sets: "15-20 minutes",
        details: [
          "Hold each stretch 20-30 seconds",
          "Focus on major muscle groups",
          "Breathe deeply and relax"
        ]
      }
    ]
  },
  friday: {
    day: "FRIDAY",
    type: "FULL BODY",
    focus: "Endurance & Strength",
    warmup: "5-10 minutes warm-up",
    cooldown: "10 minutes stretching",
    exercises: [
      {
        name: "Glute Bridges",
        sets: "3 sets x 10-15 reps",
        details: [
          "Lie on back with knees bent",
          "Lift hips by squeezing glutes",
          "Hold for 1-2 seconds at top"
        ]
      },
      {
        name: "Modified Burpees",
        sets: "2 sets x 5-8 reps",
        details: [
          "Step back instead of jumping if needed",
          "Include push-up if comfortable",
          "Step forward and stand tall"
        ]
      }
    ]
  },
  saturday: {
    day: "SATURDAY", 
    type: "CARDIO & FLEXIBILITY",
    focus: "Active Recovery",
    warmup: "Light movement",
    cooldown: "Extended stretching",
    exercises: [
      {
        name: "Easy Walk",
        sets: "20-30 minutes",
        details: [
          "Maintain comfortable pace",
          "Enjoy the movement",
          "Can include gentle hills"
        ]
      },
      {
        name: "Full Body Stretch",
        sets: "10-15 minutes",
        details: [
          "Hold stretches 30 seconds each",
          "Focus on tight areas",
          "Deep breathing throughout"
        ]
      }
    ]
  }
});

// Create a default user profile
export const createDefaultUser = (userName: string = "New User"): UserProfile => {
  return {
    id: generateUserId(),
    person: {
      name: userName,
      age: 25,
      height: {
        value: 170,
        unit: "cm"
      },
      weight: {
        value: 65,
        unit: "kg"
      },
      goal: "Get fit and build healthy habits",
      fitnessLevel: "Beginner",
      experience: "Just starting out"
    },
    workouts: generateDefaultWorkouts(),
    cardio: [
      {
        name: "Walking",
        schedule: "Daily",
        duration: "20-30 minutes",
        equipment: "None",
        details: [
          "Great starting point for fitness",
          "Low impact on joints",
          "Can be done anywhere",
          "Perfect for building the habit"
        ]
      },
      {
        name: "Light Jogging",
        schedule: "2-3x per week",
        duration: "15-20 minutes", 
        equipment: "None",
        details: [
          "Progress gradually from walking",
          "Start with walk-jog intervals",
          "Build endurance slowly",
          "Listen to your body"
        ]
      }
    ],
    core: [
      {
        name: "Basic Plank",
        schedule: "3x per week",
        description: "Build core strength with planks",
        details: [
          "Start with 15-30 seconds",
          "Progress gradually",
          "Keep straight line from head to heels",
          "Focus on proper form"
        ]
      },
      {
        name: "Dead Bug",
        schedule: "3x per week", 
        description: "Core stability exercise",
        details: [
          "Lie on back, opposite arm and leg",
          "Keep lower back pressed down",
          "Move slowly and controlled",
          "Great for beginners"
        ]
      }
    ],
    equipment: [
      {
        name: "Exercise Mat",
        tooltip: "Provides comfort for floor exercises and stretching"
      },
      {
        name: "Water Bottle",
        tooltip: "Stay hydrated during workouts"
      },
      {
        name: "Comfortable Clothes",
        tooltip: "Wear clothes that allow easy movement"
      }
    ],
    tips: {
      progressiveOverload: {
        title: "Start Small, Build Gradually",
        points: [
          "Begin with bodyweight exercises",
          "Focus on proper form first",
          "Add repetitions or time each week",
          "Consistency is more important than intensity"
        ]
      },
      nutrition: {
        title: "Simple Nutrition Tips",
        points: [
          "Eat regular, balanced meals",
          "Stay hydrated throughout the day", 
          "Include fruits and vegetables",
          "Don't restrict too much - balance is key"
        ]
      },
      recovery: {
        title: "Rest and Recovery",
        points: [
          "Aim for 7-9 hours of sleep",
          "Take rest days seriously",
          "Light movement on rest days is good",
          "Listen to your body's signals"
        ]
      }
    },
    restDay: {
      day: "SUNDAY",
      title: "Rest & Recovery Day",
      options: [
        "Complete rest day",
        "Light stretching (10-15 minutes)",
        "Easy walk in nature",
        "Meal preparation",
        "Reading about health and fitness",
        "Relaxation and self-care"
      ]
    }
  };
};

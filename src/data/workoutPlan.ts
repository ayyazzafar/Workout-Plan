import { WorkoutPlan } from "../types";

export const workoutPlan: WorkoutPlan = {
  metadata: {
    title: "Ultimate Home Workout Plan",
    subtitle: "6-Day Push/Pull/Legs Split for Maximum Muscle Growth",
    version: "2.0",
    lastUpdated: "2024-12-13",
  },

  currentUserId: "user-1",

  users: [
    {
      id: "user-1",
      person: {
        name: "Ayyaz Zafar",
        age: 28,
        height: {
          value: 175,
          unit: "cm",
        },
        weight: {
          value: 75,
          unit: "kg",
        },
        goal: "Build lean muscle mass and increase strength",
        fitnessLevel: "Intermediate",
        experience: "2 years consistent training",
      },

      workouts: {
        monday: {
          day: "MONDAY",
          type: "PUSH A",
          focus: "Chest Focus",
          warmup: "10 minutes stationary cycle at moderate pace",
          cooldown: "30 minutes steady-state cardio + Core work (optional)",
          exercises: [
            {
              name: "Barbell Bench Press",
              sets: "4 × 8-10",
              details: [
                "Primary chest mass builder",
                "Lower bar with control (2-3 seconds)",
                "Explosive push up, squeeze chest at top",
                "Rest 2-3 minutes between sets",
                "Progressive overload: Add 2.5kg when completing all sets",
              ],
            },
            {
              name: "DB Shoulder Press",
              sets: "4 × 8-10",
              details: [
                "Can perform seated or standing",
                "Full range of motion - dumbbells touch at top",
                "Keep core tight throughout",
                "Alternative: Barbell military press",
              ],
            },
            {
              name: "Dumbbell Flyes",
              sets: "3 × 10-12",
              details: [
                "Slight bend in elbows throughout movement",
                "Focus on chest stretch at bottom",
                "Bring dumbbells together at top, squeeze",
                "Use lighter weight for better form",
              ],
            },
            {
              name: "Lateral Raises",
              sets: "4 × 12-15",
              details: [
                "Lead with elbows, not hands",
                "Pause at top for 1 second",
                "Control the negative portion",
                "Last set: Drop set (reduce weight 50%, continue)",
              ],
            },
            {
              name: "Dips",
              sets: "3 × 8-12",
              details: [
                "Lean forward 30° for chest emphasis",
                "Lower until shoulders below elbows",
                "Add weight belt when bodyweight becomes easy",
                "Alternative: Decline close-grip push-ups",
              ],
            },
            {
              name: "Overhead Triceps Ext",
              sets: "3 × 10-12",
              details: [
                "Use single heavy dumbbell",
                "Keep elbows close to head",
                "Full stretch at bottom position",
                "Don't let elbows flare out",
              ],
            },
          ],
        },

        tuesday: {
          day: "TUESDAY",
          type: "PULL A",
          focus: "Back Thickness",
          warmup: "10 minutes cycle + Band pull-aparts",
          cooldown: "30 minutes cardio + 15 minutes HIIT on air bike",
          exercises: [
            {
              name: "Deadlifts",
              sets: "4 × 5-6",
              details: [
                "King of all exercises - full body mass builder",
                "Start with hips high, chest up, neutral spine",
                "Drive through heels, hips and shoulders rise together",
                "Lock out with glutes, don't hyperextend back",
                "Rest 3-4 minutes - this is heavy work",
              ],
            },
            {
              name: "Pull-Ups",
              sets: "4 × Max",
              details: [
                "Wide grip for maximum lat activation",
                "Full dead hang at bottom",
                "Chin over bar at top",
                "If can't do pull-ups: Negative reps (jump up, slow down)",
                "Advanced: Add weight when hitting 12+ reps",
              ],
            },
            {
              name: "Barbell Rows",
              sets: "4 × 8-10",
              details: [
                "45-degree torso angle",
                "Pull bar to lower chest/upper abdomen",
                "Squeeze shoulder blades together",
                "Don't use momentum - strict form",
              ],
            },
            {
              name: "EZ Bar Curls",
              sets: "4 × 8-10",
              details: [
                "Primary bicep mass builder",
                "Keep elbows stationary at sides",
                "Full stretch at bottom, squeeze at top",
                "No swinging or body momentum",
              ],
            },
            {
              name: "DB Hammer Curls",
              sets: "3 × 10-12",
              details: [
                "Targets brachialis for arm thickness",
                "Can perform alternating or together",
                "Keep wrists neutral throughout",
                "Control the negative portion",
              ],
            },
            {
              name: "Face Pulls",
              sets: "3 × 15-20",
              details: [
                "Use resistance band or light dumbbells",
                "Pull to face level, elbows high",
                "Focus on rear delts and rhomboids",
                "Hold peak contraction for 1 second",
              ],
            },
          ],
        },

        wednesday: {
          day: "WEDNESDAY",
          type: "LEGS A",
          focus: "Quad Focus",
          warmup: "10 minutes cycle + Dynamic leg swings + Bodyweight squats",
          cooldown: "30 minutes steady cardio + Leg stretches",
          exercises: [
            {
              name: "Barbell Squats",
              sets: "4 × 8-10",
              details: [
                "The king of leg exercises",
                "Feet shoulder-width apart, toes slightly out",
                "Descend until hips below knees (if mobility allows)",
                "Drive through heels, squeeze glutes at top",
                "3 minutes rest between heavy sets",
              ],
            },
            {
              name: "Romanian Deadlifts",
              sets: "4 × 8-10",
              details: [
                "Hamstring and glute focus",
                "Keep bar close to body throughout",
                "Hinge at hips, minimal knee bend",
                "Feel deep stretch in hamstrings",
                "Don't go too heavy initially - form is crucial",
              ],
            },
            {
              name: "Bulgarian Split Squats",
              sets: "3 × 10/leg",
              details: [
                "Rear foot elevated on bench",
                "Keep torso upright",
                "Drive through front heel",
                "Can hold dumbbells for added resistance",
                "Brutal for quads and glutes",
              ],
            },
            {
              name: "Walking Lunges",
              sets: "3 × 12/leg",
              details: [
                "Hold dumbbells at sides",
                "Take long strides for glute emphasis",
                "Keep front knee behind toes",
                "Push off back foot to step forward",
              ],
            },
            {
              name: "Single-Leg Calf Raises",
              sets: "4 × 15-20",
              details: [
                "Hold dumbbell in same-side hand",
                "Full range of motion - stretch to contraction",
                "Pause at top for 1 second",
                "Use other hand for balance if needed",
              ],
            },
            {
              name: "Core Circuit",
              sets: "3 rounds",
              details: [
                "Crunches × 20 reps",
                "Leg Raises × 15 reps",
                "Side Toe Touches × 20 reps per side",
                "Plank × 45-60 seconds",
                "Rest 30 seconds between rounds",
              ],
            },
          ],
        },

        thursday: {
          day: "THURSDAY",
          type: "PUSH B",
          focus: "Shoulder Focus",
          warmup: "10 minutes cycle + Arm circles + Band work",
          cooldown: "30 minutes cardio + Quick core work (2 exercises)",
          exercises: [
            {
              name: "DB Bench Press",
              sets: "4 × 8-10",
              details: [
                "Different angle and stabilization than barbell",
                "Can go deeper for better stretch",
                "Press dumbbells up and slightly inward",
                "Don't let dumbbells touch at top",
              ],
            },
            {
              name: "Arnold Press",
              sets: "4 × 8-10",
              details: [
                "Hits all three deltoid heads",
                "Start with palms facing you",
                "Rotate as you press up",
                "Smooth, controlled rotation",
                "Named after Arnold Schwarzenegger",
              ],
            },
            {
              name: "Close-Grip Bench",
              sets: "4 × 8-10",
              details: [
                "Hands shoulder-width apart",
                "Keep elbows tucked to sides",
                "Lower bar to lower chest",
                "Primary triceps mass builder",
              ],
            },
            {
              name: "Front Raises",
              sets: "3 × 12-15",
              details: [
                "Can use barbell or dumbbells",
                "Raise to eye level",
                "No momentum - strict form",
                "Slight pause at top",
              ],
            },
            {
              name: "Dips (Triceps)",
              sets: "3 × 10-12",
              details: [
                "Stay more upright than chest dips",
                "Elbows close to body",
                "Lower until 90-degree elbow angle",
                "Add weight when proficient",
              ],
            },
            {
              name: "Skull Crushers",
              sets: "3 × 10-12",
              details: [
                "Use EZ bar for wrist comfort",
                "Lower to forehead or slightly behind",
                "Keep elbows stationary",
                "Extend through triceps only",
              ],
            },
          ],
        },

        friday: {
          day: "FRIDAY",
          type: "PULL B",
          focus: "Back Width",
          warmup: "10 minutes cycle + Scapular pull-ups",
          cooldown: "30 minutes cardio + 15 minutes HIIT",
          exercises: [
            {
              name: "Barbell Rows",
              sets: "4 × 8-10",
              details: [
                "Underhand grip for variation",
                "More bicep involvement",
                "Pull to lower chest",
                "Explosive pull, controlled negative",
              ],
            },
            {
              name: "Chin-Ups",
              sets: "4 × Max",
              details: [
                "Underhand grip, shoulder-width",
                "Easier than pull-ups for most",
                "Great for biceps and lats",
                "Add weight when hitting 12+ reps",
              ],
            },
            {
              name: "Single-Arm DB Rows",
              sets: "4 × 10/arm",
              details: [
                "Use heavy weight",
                "Support with other hand on bench",
                "Pull dumbbell to hip",
                "Full stretch at bottom",
                "Don't rotate torso",
              ],
            },
            {
              name: "Barbell Curls",
              sets: "4 × 8-10",
              details: [
                "Straight bar for variation",
                "Shoulder-width grip",
                "Keep elbows locked at sides",
                "Try '21s' on last set (7 bottom half, 7 top half, 7 full)",
              ],
            },
            {
              name: "Incline DB Curls",
              sets: "3 × 10-12",
              details: [
                "Set bench to 45-degree incline",
                "Let arms hang for maximum stretch",
                "Don't let shoulders come forward",
                "Peak bicep contraction exercise",
              ],
            },
            {
              name: "Barbell Shrugs",
              sets: "4 × 12-15",
              details: [
                "Use heavy weight",
                "Shrug straight up",
                "Hold at top for 1-2 seconds",
                "Don't roll shoulders",
              ],
            },
          ],
        },

        saturday: {
          day: "SATURDAY",
          type: "LEGS B",
          focus: "Hamstring/Glute Focus",
          warmup: "10 minutes cycle + Hip circles + Glute bridges",
          cooldown: "30 minutes cardio + Full body stretching",
          exercises: [
            {
              name: "Goblet Squats",
              sets: "4 × 10-12",
              details: [
                "Hold heavy dumbbell at chest",
                "Excellent for form and mobility",
                "Deep squat, knees track over toes",
                "Keep chest up throughout",
              ],
            },
            {
              name: "Deadlifts",
              sets: "4 × 6-8",
              details: [
                "Different rep range for power",
                "Focus on explosive pull",
                "Reset between each rep",
                "Perfect form essential",
              ],
            },
            {
              name: "Step-Ups",
              sets: "3 × 12/leg",
              details: [
                "Use bench height",
                "Drive through heel of working leg",
                "Don't push off back foot",
                "Hold dumbbells for resistance",
              ],
            },
            {
              name: "Reverse Lunges",
              sets: "3 × 12/leg",
              details: [
                "Easier on knees than forward lunges",
                "Step back into lunge position",
                "Can hold barbell on back",
                "Push through front heel to return",
              ],
            },
            {
              name: "Seated Calf Raises",
              sets: "4 × 15-20",
              details: [
                "Place barbell across knees",
                "Use pad for comfort",
                "Targets soleus muscle",
                "Vary foot positions each set",
              ],
            },
            {
              name: "Core Circuit",
              sets: "3 rounds",
              details: [
                "Same as Wednesday",
                "Increase reps/time if getting easier",
                "Focus on quality over speed",
                "Breathe properly throughout",
              ],
            },
          ],
        },
      },

      cardio: [
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
      ],

      core: [
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
      ],

      equipment: [
        {
          name: "Dumbbells (1-20kg)",
          tooltip: "Adjustable preferred for space saving",
        },
        {
          name: "Olympic Barbell",
          tooltip: "Standard 20kg/45lb bar",
        },
        {
          name: "EZ Curl Bar",
          tooltip: "Reduces wrist strain",
        },
        {
          name: "Press Bench",
          tooltip: "Adjustable incline preferred",
        },
        {
          name: "Pull-Up/Dip Station",
          tooltip: "Wall-mounted saves space",
        },
        {
          name: "Stationary Cycle",
          tooltip: "Low-impact cardio option",
        },
      ],

      tips: {
        progressiveOverload: {
          title: "Progressive Overload",
          points: [
            "Weeks 1-2: Focus on form",
            "Weeks 3-4: Add 2.5-5kg",
            "Weeks 5-6: Add reps first",
            "Weeks 7-8: Deload week",
          ],
        },
        nutrition: {
          title: "Nutrition",
          points: [
            "300-500 calorie surplus",
            "1.6-2.2g protein per kg",
            "Post-workout meal within 2h",
            "3-4 liters water daily",
          ],
        },
        recovery: {
          title: "Recovery",
          points: [
            "7-9 hours sleep",
            "Take rest days seriously",
            "Foam rolling on off days",
            "Listen to your body",
          ],
        },
      },

      restDay: {
        day: "SUNDAY",
        title: "Active Recovery Day",
        options: [
          "30-45 minutes easy walking or cycling",
          "20-30 minutes full body stretching",
          "Light yoga or mobility work",
          "Meal prep for the week",
          "Complete rest if needed",
        ],
      },
    },

    // Second user example
    {
      id: "user-2",
      person: {
        name: "Sarah Johnson",
        age: 25,
        height: {
          value: 165,
          unit: "cm",
        },
        weight: {
          value: 60,
          unit: "kg",
        },
        goal: "Tone muscles and improve cardiovascular health",
        fitnessLevel: "Beginner",
        experience: "6 months training",
      },

      workouts: {
        monday: {
          day: "MONDAY",
          type: "FULL BODY A",
          focus: "Upper Body & Core",
          warmup: "5 min light cardio + dynamic stretches",
          cooldown: "10 min cool-down walk + static stretches",
          exercises: [
            {
              name: "Modified Push-ups",
              sets: "2-3 sets x 8-12 reps",
              details: [
                "Start on knees if needed",
                "Focus on proper form over speed",
                "Keep core engaged throughout",
              ],
            },
            {
              name: "Bodyweight Squats",
              sets: "3 sets x 10-15 reps",
              details: [
                "Feet shoulder-width apart",
                "Lower until thighs parallel to floor",
                "Keep knees behind toes",
              ],
            },
            {
              name: "Plank Hold",
              sets: "3 sets x 15-30 seconds",
              details: [
                "Keep straight line from head to heels",
                "Engage core muscles",
                "Breathe normally during hold",
              ],
            },
          ],
        },
        tuesday: {
          day: "TUESDAY",
          type: "CARDIO",
          focus: "Cardiovascular Health",
          warmup: "5 min light walking",
          cooldown: "10 min walking + stretches",
          exercises: [
            {
              name: "Walking/Jogging",
              sets: "20-30 minutes",
              details: [
                "Start with comfortable pace",
                "Gradually increase intensity",
                "Listen to your body",
              ],
            },
          ],
        },
        wednesday: {
          day: "WEDNESDAY",
          type: "FULL BODY B",
          focus: "Lower Body & Balance",
          warmup: "5 min light cardio + mobility",
          cooldown: "10 min stretches",
          exercises: [
            {
              name: "Wall Sit",
              sets: "3 sets x 15-30 seconds",
              details: [
                "Back flat against wall",
                "Knees at 90 degrees",
                "Hold steady position",
              ],
            },
            {
              name: "Glute Bridges",
              sets: "3 sets x 12-15 reps",
              details: [
                "Lie on back, knees bent",
                "Lift hips by squeezing glutes",
                "Hold for 1-2 seconds at top",
              ],
            },
          ],
        },
        thursday: {
          day: "THURSDAY",
          type: "ACTIVE RECOVERY",
          focus: "Flexibility & Mobility",
          warmup: "Gentle movement",
          cooldown: "Relaxation",
          exercises: [
            {
              name: "Yoga Flow",
              sets: "15-20 minutes",
              details: [
                "Focus on gentle movements",
                "Hold poses for 30 seconds",
                "Breathe deeply throughout",
              ],
            },
          ],
        },
        friday: {
          day: "FRIDAY",
          type: "FULL BODY C",
          focus: "Strength & Endurance",
          warmup: "5 min warm-up",
          cooldown: "10 min stretches",
          exercises: [
            {
              name: "Step-ups",
              sets: "3 sets x 8-10 per leg",
              details: [
                "Use sturdy chair or step",
                "Step up completely",
                "Control the descent",
              ],
            },
            {
              name: "Modified Burpees",
              sets: "2 sets x 5-8 reps",
              details: [
                "Step back instead of jumping",
                "Push-up from knees if needed",
                "Step forward and stand",
              ],
            },
          ],
        },
        saturday: {
          day: "SATURDAY",
          type: "CARDIO & FLEXIBILITY",
          focus: "Active Recovery",
          warmup: "Light movement",
          cooldown: "Extended stretching",
          exercises: [
            {
              name: "Light Walking",
              sets: "20-30 minutes",
              details: [
                "Maintain easy conversational pace",
                "Focus on enjoying movement",
                "Include hills if available",
              ],
            },
            {
              name: "Full Body Stretch",
              sets: "15 minutes",
              details: [
                "Hold each stretch 30 seconds",
                "Focus on tight areas",
                "Breathe deeply and relax",
              ],
            },
          ],
        },
      },

      cardio: [
        {
          name: "Walking",
          schedule: "Daily (20-30 min)",
          duration: "20-30 minutes",
          equipment: "None",
          details: [
            "Great for beginners",
            "Low impact on joints",
            "Can be done anywhere",
            "Perfect for active recovery",
          ],
        },
        {
          name: "Light Jogging",
          schedule: "2-3x per week",
          duration: "15-20 minutes",
          equipment: "None",
          details: [
            "Progress from walking",
            "Start with walk-jog intervals",
            "Build endurance gradually",
            "Listen to your body",
          ],
        },
      ],

      core: [
        {
          name: "Basic Plank",
          schedule: "3x per week",
          description:
            "Hold plank position building from 15 seconds to 1 minute",
          details: [
            "Start on knees if needed",
            "Keep straight line from head to heels",
            "Engage core throughout",
            "Progress slowly",
          ],
        },
        {
          name: "Dead Bug",
          schedule: "3x per week",
          description: "Lie on back, opposite arm and leg movements",
          details: [
            "Keep lower back pressed to floor",
            "Move slowly and controlled",
            "8-10 reps each side",
            "Great for core stability",
          ],
        },
      ],

      equipment: [
        {
          name: "Yoga Mat",
          tooltip:
            "Provides cushioning and grip for floor exercises and stretching",
        },
        {
          name: "Water Bottle",
          tooltip:
            "Stay hydrated during workouts - can also use as light weight",
        },
        {
          name: "Resistance Band",
          tooltip: "Optional: adds variety and resistance to exercises",
        },
      ],

      tips: {
        progressiveOverload: {
          title: "Start Small, Progress Gradually",
          points: [
            "Begin with bodyweight exercises",
            "Focus on proper form first",
            "Add 1-2 reps each week",
            "Listen to your body's signals",
          ],
        },
        nutrition: {
          title: "Simple Nutrition for Beginners",
          points: [
            "Eat plenty of fruits and vegetables",
            "Stay hydrated throughout the day",
            "Don't skip meals, especially breakfast",
            "Treat yourself occasionally - balance is key",
          ],
        },
        recovery: {
          title: "Rest and Recovery Basics",
          points: [
            "Aim for 7-9 hours of sleep",
            "Take rest days seriously",
            "Light walking on rest days is great",
            "Stretch regularly to prevent stiffness",
          ],
        },
      },

      restDay: {
        day: "SUNDAY",
        title: "Complete Rest & Recovery",
        options: [
          "Take a complete rest day",
          "Light stretching or yoga (10-15 minutes)",
          "Leisurely walk in nature",
          "Foam rolling or self-massage",
          "Meal prep for the week",
          "Read about fitness and health",
        ],
      },
    },
  ],
};

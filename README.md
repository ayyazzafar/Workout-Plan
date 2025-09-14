# Ultimate Home Workout Plan - React TypeScript

🏋️ A modern React TypeScript application for managing your 6-Day Push/Pull/Legs workout split.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast development server and build tool
- **CSS3** - Custom styling with CSS variables
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── Navigation.tsx
│   ├── WorkoutCard.tsx
│   ├── Modal.tsx       # Modal for workout details
│   ├── ExerciseItem.tsx
│   ├── InfoCard.tsx
│   ├── SpecialSection.tsx
│   ├── EquipmentItem.tsx
│   └── DetailedPlan.tsx
├── data/               # Data management
│   ├── workoutPlan.ts  # Single TypeScript file with ALL data
│   └── index.ts        # Data exports and type safety
├── styles/             # CSS stylesheets
│   ├── globals.css
│   ├── components.css
│   ├── exercises.css
│   ├── sections.css
│   ├── modal.css       # Modal-specific styles
│   └── detailed.css
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

## 🗄️ Data Management

### Single TypeScript Data Source

All workout data is managed through a **single TypeScript file** (`src/data/workoutPlan.ts`), providing:

✅ **Full TypeScript Type Safety** - Compile-time error detection  
✅ **IntelliSense Support** - Autocomplete and suggestions in IDE  
✅ **Centralized Management** - One place to update all content  
✅ **Type Checking** - Ensures data structure consistency  
✅ **Developer Experience** - Better refactoring and maintenance

```typescript
// src/data/workoutPlan.ts
import { WorkoutPlan } from "../types";

export const workoutPlan: WorkoutPlan = {
  metadata: {
    title: "Ultimate Home Workout Plan",
    subtitle: "6-Day Push/Pull/Legs Split for Maximum Muscle Growth"
  },
  workouts: {
    monday: { ... },
    tuesday: { ... }
  },
  cardio: [...],
  core: [...],
  equipment: [...],
  tips: {...},
  restDay: {...}
};
```

### Easy Content Updates

To modify any workout data:

1. Edit `src/data/workoutPlan.ts`
2. Get **full TypeScript support** with autocomplete and error checking
3. Save the file - changes appear instantly (hot reload)
4. **Compile-time validation** ensures no broken references

### Benefits of TypeScript over JSON:

- 🎯 **Type Safety**: Catch errors at compile time, not runtime
- 🚀 **Better DX**: Full IDE support with autocomplete and navigation
- 🔍 **Refactoring**: Safe renaming and restructuring across the codebase
- 📝 **Documentation**: Types serve as inline documentation
- ⚡ **Performance**: No runtime type casting or validation needed

## 🏋️ Features

### Quick Reference Tab

- **Interactive Workout Cards**: Click to open detailed modal popups
- **Modal Interface**: Beautiful, focused view of workout details
- **Exercise Details**: Collapsible exercise information with sets, reps, and detailed instructions
- **Cardio Schedule**: Organized cardio routines with HIIT sessions
- **Core Training**: Dedicated core workout schedules
- **Equipment List**: Complete equipment requirements with tooltips

### Detailed Plan Tab

- **Comprehensive Workout Plans**: Full details for each day's workout
- **Dynamic Content**: All content loaded from the central TypeScript file
- **Progressive Overload Tips**: Guidelines for increasing difficulty
- **Nutrition Guidelines**: Diet recommendations for muscle growth
- **Recovery Tips**: Rest and recovery best practices

### Interactive Features

- ✅ **Modal Popups**: Click workout cards to view detailed information
- ✅ **Fully responsive design**
- ✅ **Expandable/collapsible sections**
- ✅ **Tab navigation** between Quick Reference and Detailed Plan
- ✅ **Hover effects** and smooth transitions
- ✅ **Keyboard accessible** (ESC to close modals)
- ✅ **Print-friendly** styles
- ✅ **Mobile-optimized** interface

## 🎯 Workout Program

**6-Day Push/Pull/Legs Split:**

- **Monday**: Push A (Chest Focus)
- **Tuesday**: Pull A (Back Thickness)
- **Wednesday**: Legs A (Quad Focus)
- **Thursday**: Push B (Shoulder Focus)
- **Friday**: Pull B (Back Width)
- **Saturday**: Legs B (Hamstring/Glute Focus)
- **Sunday**: Active Recovery

## 📝 Customizing Your Workout

### Editing Workout Data with TypeScript Support

1. Open `src/data/workoutPlan.ts`
2. Enjoy **full TypeScript intellisense** while editing:
   - **Autocomplete** for all properties
   - **Type checking** for data structure
   - **Error highlighting** for invalid data
   - **Go to definition** for type navigation
3. Modify any section with confidence:
   - **Workouts**: Change exercises, sets, reps, instructions
   - **Cardio**: Update schedules, duration, equipment
   - **Core**: Modify core workout routines
   - **Equipment**: Add/remove equipment items
   - **Tips**: Update nutrition, recovery, or training tips
   - **Metadata**: Change title, subtitle, version

### Example TypeScript Structure

```typescript
// Full type safety and intellisense
export const workoutPlan: WorkoutPlan = {
  workouts: {
    monday: {
      day: "MONDAY", // ✅ Type: string
      type: "PUSH A", // ✅ Type: string
      focus: "Chest Focus", // ✅ Type: string
      exercises: [
        // ✅ Type: Exercise[]
        {
          name: "Barbell Bench Press", // ✅ Autocomplete
          sets: "4 × 8-10", // ✅ Type checking
          details: [
            // ✅ string[] validation
            "Primary chest mass builder",
            "Lower bar with control (2-3 seconds)",
          ],
        },
      ],
    },
  },
};
```

### Type Safety Benefits

- **Compile-time validation** prevents runtime errors
- **IDE warnings** for typos or invalid structure
- **Refactoring support** - safely rename properties across files
- **Auto-completion** speeds up data entry
- **Documentation** via TypeScript interfaces

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Browser Support

Modern browsers that support ES2020+ features:

- Chrome 88+
- Firefox 84+
- Safari 14+
- Edge 88+

## 🤝 Contributing

This project was converted from a static HTML page to a modern React TypeScript application with centralized TypeScript data management. The combination of React components and strongly-typed data provides an excellent developer experience while maintaining easy content management.

Feel free to submit issues or pull requests for improvements!

## 📄 License

This project is for educational and personal use.

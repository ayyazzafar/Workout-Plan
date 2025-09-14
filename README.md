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
│   ├── ExerciseItem.tsx
│   ├── InfoCard.tsx
│   ├── SpecialSection.tsx
│   ├── EquipmentItem.tsx
│   └── DetailedPlan.tsx
├── data/               # Static data files
│   ├── workoutData.ts
│   ├── cardioData.ts
│   ├── coreData.ts
│   └── equipmentData.ts
├── styles/             # CSS stylesheets
│   ├── globals.css
│   ├── components.css
│   ├── exercises.css
│   ├── sections.css
│   └── detailed.css
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

## 🏋️ Features

### Quick Reference Tab

- **Interactive Workout Cards**: Expandable cards for each day (Monday-Saturday)
- **Exercise Details**: Collapsible exercise information with sets, reps, and detailed instructions
- **Cardio Schedule**: Organized cardio routines with HIIT sessions
- **Core Training**: Dedicated core workout schedules
- **Equipment List**: Complete equipment requirements with tooltips

### Detailed Plan Tab

- **Comprehensive Workout Plans**: Full details for each day's workout
- **Progressive Overload Tips**: Guidelines for increasing difficulty
- **Nutrition Guidelines**: Diet recommendations for muscle growth
- **Recovery Tips**: Rest and recovery best practices

### Interactive Features

- ✅ Fully responsive design
- ✅ Expandable/collapsible sections
- ✅ Tab navigation between Quick Reference and Detailed Plan
- ✅ Hover effects and smooth transitions
- ✅ Print-friendly styles
- ✅ Mobile-optimized interface

## 🎯 Workout Program

**6-Day Push/Pull/Legs Split:**

- **Monday**: Push A (Chest Focus)
- **Tuesday**: Pull A (Back Thickness)
- **Wednesday**: Legs A (Quad Focus)
- **Thursday**: Push B (Shoulder Focus)
- **Friday**: Pull B (Back Width)
- **Saturday**: Legs B (Hamstring/Glute Focus)
- **Sunday**: Active Recovery

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

This project was converted from a static HTML page to a modern React TypeScript application. Feel free to submit issues or pull requests for improvements!

## 📄 License

This project is for educational and personal use.

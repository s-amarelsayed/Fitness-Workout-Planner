# Fitness Workout Planner (FitTrack)

**SW302 - User Interface Development | Phase 2: UI/UX Design & Static Prototype**

## Project Description

FitTrack is a fitness and workout planning website designed to help users organize their training and follow their progress in one place. Users can browse a library of exercises, read instructions and safety tips, view a weekly workout routine, and check workout statistics and history.

For Phase 2, the project is a **static frontend prototype**. Its pages demonstrate the intended design and navigation using sample data. Login, registration, and workout editing do not connect to a database or backend at this stage.

## Team Members

| Team Member | Assigned Part |
| --- | --- |
| Ammar Yasser | Person 1 |
| Mohamed Eslam | Person 2 |
| Yousry Khaled | Person 3 |

## Website Pages

The website includes **9 main pages**:

1. **Landing Page** (`landing.html`) - Introduces FitTrack and its main features.
2. **Dashboard** (`dashboard.html`) - Displays workout statistics and activity charts.
3. **Login** (`login.html`) - Provides the login screen design.
4. **Register** (`register.html`) - Provides the account registration screen design.
5. **Routine Builder** (`routine_builder.html`) - Displays a weekly training plan and an add-exercise form.
6. **Profile** (`profile.html`) - Shows personal information, fitness goals, and progress.
7. **Exercise Library** (`exercise_library.html`) - Displays six exercises with images.
8. **Exercise Details** (`exercise_details.html`) - Shows instructions, equipment, difficulty, and safety tips.
9. **Workout History** (`workout_history.html`) - Shows previous workouts and summary statistics.

## Technologies Used

- **HTML5** for page structure.
- **Tailwind CSS** installed locally for styling and responsive utilities (no CDN).
- **CSS3** for additional page styling and reusable components.
- **Figma** for wireframes and mockups.
- **Git and GitHub** for version control and team collaboration.

## How to Run the Project Locally

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Open `landing.html` in a browser to start navigating the static pages.
4. Keep the HTML files, generated `output_1.css`, `output_2.css`, `output_3.css`, any additional CSS files, and the `images` folder in their correct relative locations.

To rebuild Tailwind CSS after editing the source CSS, install Node.js and npm. First, run `npm install` in the folder containing `package.json` and `package-lock.json`. Then open the folder containing the `input_*.css` files and run:

```bash
npx @tailwindcss/cli -i ./input_1.css -o ./output_1.css
npx @tailwindcss/cli -i ./input_2.css -o ./output_2.css
npx @tailwindcss/cli -i ./input_3.css -o ./output_3.css
```

The repository includes `package.json` and `package-lock.json` for installing Tailwind CSS locally. The `node_modules` folder is not included in version control.

> **Note:** This Phase 2 version uses static sample content. It does not require a backend or database.

## Figma Design

**Figma Link:** [FitTrack - Full Phase 2 (9 Screens) - Interactive Prototype](https://www.figma.com/proto/rv13kAhgW0cm85NQoMGybZ/FitTrack-%7C-Full-Phase-2-%E2%80%94-9-Screens---Prototype?node-id=2-217&p=f&t=ckzffuThTdlLDPcU-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1)

The design includes wireframes and mockups for desktop and mobile screens.

## Team Work Distribution

| Team Member | Pages | Main Responsibilities |
| --- | --- | --- |
| **Ammar Yasser** | Dashboard, Login, Register | Workout statistics and charts; authentication page designs. |
| **Mohamed Eslam** | Landing Page, Routine Builder, Profile | Homepage, weekly workout planning form, and user profile layout. |
| **Yousry Khaled** | Exercise Library, Exercise Details, Workout History | Exercise cards and images, exercise instructions, and workout history. |

Each member contributed to three pages and their corresponding desktop and mobile UI/UX designs. The team also worked together on page navigation, visual consistency, responsive layout, and testing.

## Project Status

**Phase 2 - UI/UX Design & Static Prototype**

- Nine HTML pages prepared.
- Desktop and mobile layouts designed.
- Wireframes and mockups prepared in Figma.
- Pages linked for navigation.
- Static charts, exercise details, and sample workout data included.

The next development phase will focus on reusable React components and interactive navigation.

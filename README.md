# FrontendMaster React Intro Tutorial - Learning Journey

This repository is part of my journey to learn React through the FrontendMaster React Intro course. It contains the demo projects and exercises I've built while following the course.

## About

This project showcases the fundamentals of React, a popular JavaScript library for building user interfaces. It includes key concepts like:

- Components
- Props and State
- Event handling
- React hooks (useState, useEffect, etc.)
- Building modular and interactive UIs

## Why This Repo?

This is a hands-on demo repository where I:

1. Practice React concepts taught in the course.
2. Build interactive features step-by-step.
3. Deepen my understanding of React and frontend development.

## Getting Started

### Prerequisites

To run the project, ensure the following are installed:

- Node.js (LTS version recommended)
- npm (comes with Node.js) or yarn

### Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/frontendmaster-react-intro-tutorial.git
   cd frontendmaster-react-intro-tutorial
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Clone the [repo](https://github.com/btholt/citr-v9-project/tree/main/api) from bholt to run the backend api (`/api` directory) needed for the frontend
   
4. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to http://localhost:3000 to view the demo app.

## Current Features

- Basic React Components: Reusable components to build a modular UI.
- Interactive State Management: Handling dynamic behavior with React useState.
- Vite Setup: Leveraging a fast development server and build tool.

## Scripts in the Project

Here are some useful commands:

- `npm run dev`: Starts the local development server.
- `npm run build`: Bundles the app for production.
- `npm run lint`: Checks for code style and errors using ESLint.

## Technologies Used

This project is powered by:

- React: For building interactive UIs.
- JavaScript (ES6+): Writing modern and clean JavaScript.
- Vite: A fast and efficient development/build tool.

## Goals for This Repo

1. Follow along with the FrontendMaster React course to complete all demos.
2. Learn how to structure a React project for scalability.
3. Gain confidence in using React features like hooks, state, and props.

## Acknowledgments

- Special thanks to FrontendMaster for the amazing course and tutorials.
- Inspiration for this project comes from my goal to improve my frontend skills and build robust web applications.

## Notes
- Using context and state; use context when you have a state that it used in multiple points of your application like user profile, shopping cart, theme. You can use usestate when you have a state that needs to be managed when the view is active, like filling a form and you need to pass the data forward to another component
- When we use context we want to provide app level state
- We can use it like the useState only that it's managed somewhere else in our application and other components can also use the same data or information
- Setup
  - Choose where to use it and where it's needed to be read
  - Create the context
  - Render the context at the right component level
  - Set up the hook for the context provider
  - Import useContext and your custom context
  - Use useContext(your-custom-context) with state values [cart, setCart] 

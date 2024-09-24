## Project Milestones

### Week 1: Initial Setup and Backend Development
- Set up project repository and environment for both backend and frontend.
- Install necessary dependencies: Node.js, Express, MySQL, Axios, React, etc.
- Design and create the MySQL database schema (`teams`, `matches`, etc.).
- Integrate Riot Games API to fetch and store team data in the database.
- Create basic API routes to retrieve team stats (`GET /teams`).

### Week 2: Prediction Engine and Backend API
- Build a simple predictive model using TensorFlow.js (or other logic) to predict match outcomes.
- Set up a prediction route (`POST /predict`) to accept two teams and return predicted results.
- Refine database queries for advanced stats (KDA, win/loss ratio, objectives).
- Ensure API can serve comparison data and advanced team stats.

### Week 3: Frontend Development and Integration
- Set up React frontend and configure layout for the dashboard.
- Integrate team stats display by fetching data from the backend API.
- Add charts and visualizations for team performance trends using Chart.js.
- Build a prediction form for users to select teams and view predicted outcomes.

### Week 4: Testing, Refinement, and Deployment
- Write unit and integration tests for backend and frontend components.
- Test and refine the prediction engine with real-world data.
- Deploy the backend API and React frontend using platforms like Heroku, AWS, Netlify, or Vercel.
- Final polish: Improve UI/UX, ensure responsiveness, and add additional features (e.g., team comparison, real-time match updates).


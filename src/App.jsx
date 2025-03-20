import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import PsychologistDashboard from "./pages/PsychologistDashboard";
import PsychiatristDashboard from "./pages/PsychiatristDashboard";
import GamesTests from "./pages/GamesTests"; // Import the new page
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/psychologist-dashboard" element={<PsychologistDashboard />} />
        <Route path="/psychiatrist-dashboard" element={<PsychiatristDashboard />} />
        <Route path="/games-tests" element={<GamesTests />} />  {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;

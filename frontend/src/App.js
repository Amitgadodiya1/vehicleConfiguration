// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FeaturePage from "./pages/FeaturePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model/:id/features" element={<FeaturePage />} />
      </Routes>
    </Router>
  );
};

export default App;

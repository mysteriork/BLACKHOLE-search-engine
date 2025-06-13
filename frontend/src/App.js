import "./App.css";
import SE from "./components/searchEngine";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchpage" element={<SE />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

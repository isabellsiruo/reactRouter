import "./App.css";
// Import Routes, Route, and Link
import { Routes, Route, Link } from "react-router-dom"; 
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";


function App() {
  return (
    <div id="container">
      {/* Navigation */}
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
      </div>

      {/* Routes */}
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;


import Home  from "./components/home/home.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TourDetails from "./components/tourDetails/tourDetatils.js"
import Header from "./components/header/header.js";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

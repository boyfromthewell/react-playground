import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Slider from "./components/carousel/Slider";
import Home from "./components/Home";
import Calculator from "./components/calculator/Calculator";
import ProgressBar from "./components/progressBar/ProgressBar";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carousel" element={<Slider />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/progress" element={<ProgressBar />} />
    </Routes>
  );
}

export default App;

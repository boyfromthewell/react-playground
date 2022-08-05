import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Slider from "./components/carousel/Slider";
import Home from "./components/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carousel" element={<Slider />} />
    </Routes>
  );
}

export default App;

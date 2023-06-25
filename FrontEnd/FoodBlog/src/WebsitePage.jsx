import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddFood from "./components/AddFood";
import Foods from "./components/Foods";

const WebsitePage = () => {
  return (
    <div className="website" style={{overflowX:"hidden", height:"100vh"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addFood" element={<AddFood />} />
        <Route path="/foods" element={<Foods />} />
      </Routes>
    </div>
  );
};

export default WebsitePage;
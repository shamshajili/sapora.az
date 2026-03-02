import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Reviews />} />
      </Routes>
    </>
  );
}

export default App;
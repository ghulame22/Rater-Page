import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Ratings from "./routes/ratingPage";
import Thankyou from "./routes/thankyou";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Ratings />} />
          <Route exact path="/thankyou" element={<Thankyou />} />
        </Routes>
    </Router>
  );
}

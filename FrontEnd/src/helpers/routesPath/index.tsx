import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";

import NotFound from "../../pages/notFound";

const RoutesPath: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home  />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RoutesPath;

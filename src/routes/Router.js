import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Second from "./Second";
import Third from "./Third";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<Home />} />
        <Route path="/secondpage" element={<Second />} />
        <Route path="/thirdpage" element={<Third />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

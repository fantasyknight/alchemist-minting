import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import layout
import Landing from "../pages/Landing";
import Footer from "../pages/Landing/Footer";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;

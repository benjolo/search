import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Search />} />
            <Route path="details/:id" element={<Details />}/>
        </Routes>
      </BrowserRouter>
      {/* <Search /> */}
    </>
	)
}

export default App;

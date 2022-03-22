import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AvailableRequest from "./component/AvailableRequest/AvailableRequest";
import Header from "./component/Header/Header";
import Interest from "./pages/Interested/Interest";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<AvailableRequest />}></Route>
        <Route path="/requests" element={<AvailableRequest />}></Route>
        <Route path="/interested" element={<Interest />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

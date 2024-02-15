import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Homepage from "./Page/Homepage";
import Login from "./login.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Login />} />
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

root.render(<App />);

export default App;

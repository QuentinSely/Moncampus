import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Covoiturage from "./pages/Covoiturage";

import Login from "./pages/Login";
import ProtectedRoute from "./composants/protectedRoute/ProtectedRoute";
import Signaler from "./pages/Signaler";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/covoiturage" element={<Covoiturage />} />
          <Route path="/signaler" element={<Signaler />} />

          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
          </Route>

          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

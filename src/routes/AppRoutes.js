import React from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import RouteGuard from "../middleware/RouteGuard";
import Patients from "../pages/Patients";
import Prescriptions from "../pages/Prescriptions";
import Stock from "../pages/stockPages/Stock";
import Home from "../pages/Home";
import AddItemToStockComponent from "../components/stockComponent/AddItemToStockComponent";

import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<RouteGuard Component={Home}/>} />
        <Route path="/patients" element={<RouteGuard Component={Patients}/>} />
        <Route path="/prescriptions" element={<RouteGuard Component={Prescriptions}/>} />
        <Route path="/stock" element={<RouteGuard Component={Stock}/>} />
        <Route path="/stock/add" element={<RouteGuard Component={AddItemToStockComponent}/>} />
      </Routes>
    </Router>
  );
}

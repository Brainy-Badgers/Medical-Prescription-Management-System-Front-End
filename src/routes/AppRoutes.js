import React,  {useContext} from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { UserContext } from "../contexts/AuthContext";

import RouteGuard from "../middleware/RouteGuard";
import Patients from "../pages/patientPages/Patients";
import Prescriptions from "../pages/Prescriptions";
import Stock from "../pages/stockPages/Stock";
import Home from "../pages/Home";


import Login from "../pages/Login";
import Register from "../pages/Register";
import AddItemToStock from "../pages/stockPages/AddItemToStock";
import PatientHistory from "../pages/patientPages/PatientHistory";
import Profile from "../pages/userPages/Profile";
import CreatePatient from "../pages/patientPages/CreatePatient";

export default function AppRoutes() {

  const { globalState, setGlobalState } = useContext(UserContext);
  var userTypes = globalState.currentUserType;


  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<RouteGuard Component={Home} autherized={userTypes.includes("Doctor")}/>} />
        <Route path="/patients" element={<RouteGuard Component={Patients} autherized={userTypes.includes("Admin")}/>} />
        <Route path="/prescriptions" element={<RouteGuard Component={Prescriptions} autherized={userTypes.includes("Admin")}/>} />
        <Route path="/stock" element={<RouteGuard Component={Stock}/>} autherized={userTypes.includes("Admin")}/>
        <Route path="/stock/add" element={<RouteGuard Component={AddItemToStock} autherized={userTypes.includes("Admin")}/>} />

        {/* User Routes */}
        <Route path="/user/profile" element={<RouteGuard Component={Profile} autherized={userTypes.includes("Admin")}/>} />

        {/* Patient Routes */}
        <Route path="/patients/history" element={<RouteGuard Component={PatientHistory} autherized={userTypes.includes("Admin")}/>} />
        <Route path="/patients/create" element={<RouteGuard Component={CreatePatient} autherized={userTypes.includes("Admin")}/>} />
      </Routes>
    </Router>
  );
}

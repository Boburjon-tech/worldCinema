// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/register" />;
};

export default PrivateRoute;

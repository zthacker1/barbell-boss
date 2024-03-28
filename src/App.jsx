import React, { Component, useEffect, useState } from "react";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { ApplicationView } from "./view/ApplicationView";
import { Authorized } from "./view/Authorized";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationView />
          </Authorized>
        }
      />
    </Routes>
  );
};
export default App;

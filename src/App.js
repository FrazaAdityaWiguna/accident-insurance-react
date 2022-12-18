import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import FormClaim from "./pages/register/form-claim";
import FormSimStnk from "./pages/register/sim-stnk";
import VehicleDamage from "./pages/register/kerusakan-kendaraan";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<FormClaim to="/register/form-claim" />} />
            <Route
              path="/register/kerusakan-kendaraan"
              element={<VehicleDamage />}
            />
            <Route path="/register/sim-stnk" element={<FormSimStnk />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

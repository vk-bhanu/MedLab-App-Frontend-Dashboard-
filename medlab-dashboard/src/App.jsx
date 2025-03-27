// localStorage.clear();
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import AddTest from "./pages/AddTest/AddTest";
import ManageTest from "./pages/ManageTests/ManageTest";
import EditTest from "./pages/EditTest/EditTest";
import Login from "./pages/Login/Login";

const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <div className="flex-grow-1">
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<PrivateRoute> <Layout /> </PrivateRoute> }>
              <Route index element={<Home />} />
              <Route path="/add-test" element={<AddTest />} />
              <Route path="/manage-tests" element={<ManageTest />} />
              <Route path="/edit-test/:id" element={<EditTest />} />
              {/* <Route path="/profile" element={<h1>Profile</h1>} />
              <Route path="/settings" element={<h1>Settings</h1>} /> */}
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

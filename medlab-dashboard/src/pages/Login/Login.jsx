import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded valid users
  const validUsers = [
    {
        email: import.meta.env.VITE_ADMIN_EMAIL1,
        password: import.meta.env.VITE_ADMIN_PASSWORD1,
      },
      {
        email: import.meta.env.VITE_ADMIN_EMAIL2,
        password: import.meta.env.VITE_ADMIN_PASSWORD2,
      },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const user = validUsers.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("isAuthenticated", "true"); 
      navigate("/"); 
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Dashboard</h2>
        {error && <div className="alert">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email:</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

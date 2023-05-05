import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username: ", username);
    console.log("Password: ", password);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Welcome To Ema-John Shop</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-container">
          <label htmlFor="username" className="input-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input-field"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="show-password-button"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;

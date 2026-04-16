import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../api';
import '../styles/login.css';


export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/login", { username, password });


      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      sessionStorage.removeItem("selectedAccount");
      if(res.data.role == "ADMIN"){
        navigate("/admin-panel");
      }else{
        navigate("/select-account");
      }
      
    } catch {
      console.log("Invalid username or password");
    }
  };


return (
  <div className="bank-login-page">

    {/* LEFT SIDE — BRANDING */}
    <div className="bank-login-left">

      <div className="brand">
        <h1 className="brand-logo">PayPulse</h1>
        <p className="brand-tagline">
          Secure Digital Banking Platform
        </p>
      </div>

      <div className="bank-features">
        <div className="feature">
          <h3>Instant Transfers</h3>
          <p>UPI & IMPS payments anytime</p>
        </div>

        <div className="feature">
          <h3>Real-time Statements</h3>
          <p>Track every transaction instantly</p>
        </div>

        <div className="feature">
          <h3>Secure Authentication</h3>
          <p>JWT + MPIN protected banking</p>
        </div>
      </div>

    </div>

    {/* RIGHT SIDE — LOGIN FORM */}
    <div className="bank-login-right">

      <form className="login-form" onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}>

        <h2 className="login-title">Sign in to PayPulse</h2>
        <p className="login-subtitle">Enter your credentials to continue</p>

        <label>Username</label>
        <input
          className="login-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          required
        />

        <label>Password</label>
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        <button className="login-btn" type="submit">
          Login Securely
        </button>

        <p className="login-footer">
          New user?
          <span
            className="login-link"
            onClick={() => navigate("/register")}
          >
            Create account
          </span>
        </p>

      </form>

    </div>

  </div>
);
}

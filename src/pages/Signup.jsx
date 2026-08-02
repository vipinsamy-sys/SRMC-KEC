import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import "../styles/Auth.css";

function EyeToggle({ show, onClick, label }) {
  return (
    <button
      type="button"
      className="password-toggle"
      onClick={onClick}
      aria-label={label}
    >
      {show ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )}
    </button>
  );
}

export default function Signup() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", mobile: "", password: "", confirm: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.mobile.trim() || !form.password.trim() || !form.confirm.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    try {
      setLoading(true);
      await register({
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        password: form.password,
      });
      setSuccess(true);
      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <Navbar />

      <div className="math-symbol auth-symbol-one">π</div>
      <div className="math-symbol auth-symbol-two">Σ</div>
      <div className="math-symbol auth-symbol-three">∫</div>
      <div className="math-symbol auth-symbol-four">∞</div>

      <div className="auth-card">
        <img src="/images/MATHSLOGO.jpg" alt="SRMC Logo" className="auth-logo" />
        <h1>Join SRMC</h1>
        <p className="auth-subtitle">Create an account and be part of the mathematical journey</p>

        {success && <div className="auth-success">Account created! Redirecting...</div>}

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="mobile">Mobile Number</label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="Enter your mobile number"
            value={form.mobile}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <div className="password-wrap">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="At least 6 characters"
              value={form.password}
              onChange={handleChange}
            />
            <EyeToggle
              show={showPassword}
              onClick={() => setShowPassword(!showPassword)}
              label={showPassword ? "Hide password" : "Show password"}
            />
          </div>

          <label htmlFor="confirm">Confirm Password</label>
          <div className="password-wrap">
            <input
              id="confirm"
              name="confirm"
              type={showConfirm ? "text" : "password"}
              placeholder="Re-enter your password"
              value={form.confirm}
              onChange={handleChange}
            />
            <EyeToggle
              show={showConfirm}
              onClick={() => setShowConfirm(!showConfirm)}
              label={showConfirm ? "Hide password" : "Show password"}
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </section>
  );
}

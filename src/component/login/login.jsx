import React, { useState } from "react";
import "../Register/Register";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    try {
      let url="http://localhost:8000/api/v1/accounts/student-login/"
      if (mode === "r") {
        url = "http://localhost:8000/api/v1/accounts/recruiter-login/"
      }
      const response = await fetch(url, {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("accessToken", data.data.access);
        window.location.reload();
        setSuccess(data.message);
        setError("");
        setEmail("");
        setPassword("");
        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      } else {
        setSuccess(false);
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
      setSuccess(false);
      setError("Login failed. Please try again later.");
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex">
      <label class="flex">
        <span class="checkmark mr-2">Student</span>
        <input type="radio" checked="checked" name="mode" value={mode} onChange={(e)=> setMode("s")} />
      </label>
      <label class="flex">
        <span class="checkmark mr-2">Recruiter</span>
        <input type="radio" name="mode" value={mode} onChange={(e)=> setMode("r")} />
      </label>
      </div>
      <button type="submit">Login</button>
      {success && (
        <p className="success-message">{success}</p>
      )}
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default Login;

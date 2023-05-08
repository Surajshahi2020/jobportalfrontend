import React, { useEffect, useState } from "react";
import "./Register.css";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(null);
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [mode, setMode] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("slug", slug);
    formData.append("image", image);
    formData.append("mobile", mobile);
    formData.append("gender", gender);

    let url = "http://localhost:8000/api/v1/accounts/student-create/"
    if (mode === "r") {
      url = "http://localhost:8000/api/v1/accounts/recruiter-create/"
    }
    const response = await fetch(url, {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      setSuccess(data.message);
      setError("");
      setEmail("");
      setPassword("");
      setImage("null");
      setSlug("");
      document.getElementById("image").value = "";
      setMobile("");
      setGender("");
      setTimeoutId(setTimeout(() => {
        setSuccess(false);
      }, 4000));
    } else {
      setSuccess(false);
      setError(data.message);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
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
      <div>
        <label htmlFor="slug">Slug</label>
        <input
          type="slug"
          id="slug"
          name="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
          required
        />
      </div>
      <div>
        <label htmlFor="mobile">Mobile</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="flex">
        <label className="flex">
          <span className="checkmark mr-2">Student</span>
          <input type="radio" checked="checked" name="mode" value={mode} onChange={(e) => setMode("s")} />
        </label>
        <label className="flex">
          <span className="checkmark mr-2">Recruiter</span>
          <input type="radio" name="mode" value={mode} onChange={(e) => setMode("r")} />
        </label>
      </div>
      <button type="submit">Submit</button>
      {success && (
        <p className="success-message">{success}</p>
      )}
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default Register;

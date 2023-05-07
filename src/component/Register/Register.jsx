import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(null);
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("slug", slug);
    formData.append("image", image);
    formData.append("mobile", mobile);
    formData.append("gender", gender);
  
    try {
      const response = await fetch("http://localhost:8000/api/v1/accounts/student-create/", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setSuccess(data.message);
        setError("");
      } else {
        setSuccess(false);
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
      setSuccess(false);
      setError("Registration failed. Please try again later.");
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
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" onChange={handleImageChange} />
      </div>
      <div>
        <label htmlFor="mobile">Mobile</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit">Register</button>
      {success && (
        <p className="success-message">{success}</p>
      )}
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default Register;

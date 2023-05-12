import React, { useState } from "react";

function SProfile() {
  let authData = JSON.parse(localStorage.getItem("accessToken"))

  const [studentData, setStudentData] = useState(authData);
  const [image, setImage] = useState(null);

  const [previous, setPrevious] = useState( authData?.image?.includes('http') ? authData.image: "http://localhost:8000"+authData.image );
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setPrevious(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("first_name", studentData.first_name);
    formData.append("last_name", studentData.last_name);
    formData.append("mobile", studentData.mobile);
    formData.append("gender", studentData.gender);
    formData.append("type", studentData.type);
    if (image != null) {
      formData.append("image", image);
    }

    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/student/change-profile/${authData?.own_id}/`,
        {
          method: "PATCH",
          body: formData,
          headers: { "Authorization": `Bearer ${authData?.access}` }
        }
      );
      const data = await response.json();
      
      if(response.ok){
        setSuccess(data.message);
        setError("");
        authData["first_name"] = data?.data?.first_name
        authData["last_name"] = data?.data?.last_name
        authData["image"] = data?.data?.image
        authData["gender"] = data?.data?.gender
        authData["type"] = data?.data?.type
        authData["mobile"] = data?.data?.mobile

        localStorage.setItem("accessToken", JSON.stringify(authData))
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      
      }else{
        setSuccess(false);
        setError(data.message);
      }        
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    
    <form className="student-profile-form" onSubmit={handleSubmit}>
      <div className="container">
        <div className="name">
      <h1>Profile</h1>
      </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="first_name" className="form-label">
                First_Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="form-control"
                onChange={handleInputChange}
                value={studentData.first_name}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="last_name" className="form-label">
                Last_Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="form-control"
                onChange={handleInputChange}
                value={studentData.last_name}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                className="form-control"
                onChange={handleInputChange}
                value={studentData.mobile}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="form-control"
                onChange={handleInputChange}
                value={studentData.gender}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="image" className="form-label">
                Image
              </label>

              <input
                type="file"
                id="image"
                name="image"
                className="form-control"
                onChange={handleImageChange}
              />

            </div>
          </div>
          <div className="col-md-6">
          {previous ? (
                <img src={previous} alt="previous" className="img-thumbnail" />
              ) : (
                <img src={image} alt="Student" className="img-thumbnail" />
              )}

          </div>
        </div>
        <div className="text-left">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          {success && (
            <p className="success-message">{success}</p>
          )}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </form>
  );
}
export default SProfile;
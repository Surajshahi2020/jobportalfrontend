import React, { useState, useEffect } from "react";

function SProfile() {
  const [studentData, setStudentData] = useState({});
  const [image, setImage] = useState({});


  useEffect(() => {
    async function fetchStudentData() {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/cadmin/student-list/"
        );
        const data = await response.json();
        if (data) {
          setStudentData(data.data.docs[0]);
          setImage(data.data.docs[0].image);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchStudentData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("first_name", studentData.first_name);
    formData.append("last_name", studentData.last_name);
    formData.append("mobile", studentData.mobile);
    formData.append("gender", studentData.gender);
    formData.append("type", studentData.type);
    formData.append("image", image);

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/student/change-profile/35/",
        {
          method: "PATCH",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="student-profile-form" onSubmit={handleSubmit}>
      <div className="container">
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
              <input
                type="text"
                id="gender"
                name="gender"
                className="form-control"
                onChange={handleInputChange}
                value={studentData.gender}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="type" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  className="form-control"
                  onChange={handleInputChange}
                  value={studentData.type}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <img src={image} alt="Student" className="img-fluid" />
              <input
                type="file"
                id="image"
                name="image"
                className="form-control"
                onChange={handleImageChange}
              />
            </div>
          </div>

        </div>
        <div className="text-left">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
export default SProfile;
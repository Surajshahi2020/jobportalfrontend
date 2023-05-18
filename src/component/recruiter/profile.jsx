import React, { useState } from "react";

function RProfile() {
  let authData = JSON.parse(localStorage.getItem("accessToken"))
  
  return (
    
    <div className="row student-profile-form">
      <div className="col-md-6 offset-md-3">
      <form className="" >
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
                // onChange={handleInputChange}
                // value={studentData.first_name}
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
                // onChange={handleInputChange}
                // value={studentData.last_name}
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
                // onChange={handleInputChange}
                // value={studentData.mobile}
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
                // onChange={handleInputChange}
                // value={studentData.gender}
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
                // onChange={handleImageChange}
              />

            </div>
          </div>
          <div className="col-md-6 my-5">
          {/* {previous ? (
                <img src={previous} alt="previous" className="img-thumbnail" />
              ) : (
                <img src={image} alt="Student" className="img-thumbnail" />
              )} */}

          </div>
        </div>
        <div className="text-left">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          {/* {success && (
            <p className="success-message">{success}</p>
          )}
          {error && <p className="error-message">{error}</p>} */}
        </div>
      </div>
    </form>
      </div>
    </div>
  );
}
export default RProfile;
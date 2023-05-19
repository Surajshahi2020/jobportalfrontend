import React, { useState } from "react";
import "./post_job.css";

function PostJob() {
    const [formData, setFormData] = useState({});
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleImageUpload = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const accessToken = JSON.parse(localStorage.getItem("accessToken"))?.access;
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("image", image);

            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            const response = await fetch("http://localhost:8000/api/v1/recruiter/job-post/", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                body: formDataToSend,
            });

            if (response.ok) {
                response.json()
                    .then((data) => {
                        setSuccess(data?.message);
                        setError("");
                        setImage(null);
                        setTimeout(() => {
                            window.location.reload()
                        }, 2000);
                    })
                    .catch((error) => {
                        console.error("An error occurred while parsing the JSON response:", error);
                    });
            }
            else {
                response.json()
                    .then((data) => {
                        setSuccess(false);
                        setError(data?.message);
                    });
            }
        } catch (error) {
            console.error("An error occurred while sending form data:", error);
        }
    };
    return (
        <form className="job-post-form" onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="job-post-title">
                    <h4>Recruiter Job Post</h4>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            class="form-control"
                            value={formData?.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="salary">Salary:</label>
                        <input
                            type="number"
                            id="salary"
                            name="salary"
                            class="form-control"
                            value={formData?.salary}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="experience">Experience:</label>
                        <input
                            type="number"
                            id="experience"
                            name="experience"
                            class="form-control"
                            value={formData?.experience}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="location">Location:</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            class="form-control"
                            value={formData?.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="skills">Skills:</label>
                        <input
                            type="text"
                            id="skills"
                            name="skills"
                            className="form-control"
                            value={formData?.skills}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            className="form-control"
                            value={formData?.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="image">Image:</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className="form-control"
                            onChange={handleImageUpload}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="creationdate">Creation Date:</label>
                        <input
                            type="text"
                            id="creationdate"
                            name="creationdate"
                            className="form-control"
                            value={formData?.creationdate}
                            placeholder="yyyy-MM-dd"
                            onChange={handleChange}
                            format="yyyy-MM-dd"
                            required
                        />
                    </div>
                </div>




                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="start_date">Start Date:</label>
                        <input
                            type="text"
                            id="start_date"
                            name="start_date"
                            className="form-control"
                            value={formData?.start_date}
                            onChange={handleChange}
                            placeholder="yyyy-MM-dd"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="end_date">End Date:</label>
                        <input
                            type="text"
                            id="end_date"
                            name="end_date"
                            className="form-control"
                            value={formData?.end_date}
                            onChange={handleChange}
                            placeholder="yyyy-MM-dd"
                            required
                            format="yyyy-MM-dd"
                        />
                    </div>
                    <div className="submit-button">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    {success && (
                        <p className="success-message">{success}</p>
                    )}
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </form>
    );
}
export default PostJob;
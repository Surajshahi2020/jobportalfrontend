import React, { useEffect, useState } from 'react';
import './pages.css';
import { useParams } from 'react-router-dom';

function JobApplyPage() {
    let authData = JSON.parse(localStorage.getItem("accessToken"))
    const [formData, setFormData] = useState({});
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            resume: file,
        }));
    };

    const { id } = useParams();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const url = 'http://localhost:8000/api/v1/student/job-apply/';
            const formDataToSend = new FormData();
            formDataToSend.append('resume', formData.resume);
            formDataToSend.append('job', id);
            const response = await fetch(url, {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    Authorization: `Bearer ${authData?.access}`,
                },
            });
            const responseData = await response.json();
            console.log(responseData);

            if (response.ok) {
                setSuccess(responseData.message);
                setError("");
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            } else {
                setSuccess(false);
                setError(responseData.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className="job-post-form" onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="job-post-title">
                    <h4>Student ApplyJob</h4>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="resume">Resume</label>
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            className="form-control"
                            onChange={handleFileUpload}
                            accept=".pdf,.doc,.docx"
                            required
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
        </form >

    );
}
export default JobApplyPage;

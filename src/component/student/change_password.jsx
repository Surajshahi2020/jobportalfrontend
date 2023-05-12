import React, { useState } from "react";
import "./style.css";

function StudentChangePassword() {
    let authData = JSON.parse(localStorage.getItem("accessToken"))
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("old_password", oldPassword);
        formData.append("new_password", newPassword);
        formData.append("confirm_password", confirmPassword);

        try {
            const response = await fetch(
                "http://localhost:8000/api/v1/student/change-password/",
                {
                    method: "POST",
                    headers: { "Authorization": `Bearer ${authData?.access}` },
                    body: formData,
                }
            );
            const data = await response.json();
            console.log(data);

            if (response.ok) {
                setSuccess(data.message);
                setError("");
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            } else {
                setSuccess(false);
                setError(data.message);
            }
        } catch (error) {
            console.error(error); 
        }
    };

    return (
        <form className="change-password-form" onSubmit={handleSubmit}>
            <div className="password-container">
                <div className="change-password">
                    <h1>Change Password</h1>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="old_password" className="form-label">
                                Old Password
                            </label>
                            <input
                                type="text"
                                id="old_password"
                                name="old_password"
                                className="form-control"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="new_password" className="form-label">
                                New Password
                            </label>
                            <input
                                type="text"
                                id="new_password"
                                name="new_password"
                                className="form-control"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="confirm_password" className="form-label">
                                Confirm Password
                            </label>
                            <input
                                type="text"
                                id="confirm_password"
                                name="confirm_password"
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
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
            </div>
        </form>
    );
}

export default StudentChangePassword;

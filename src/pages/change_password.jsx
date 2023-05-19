import React from 'react'
import StudentChangePassword from '../component/student/change_password';
import RecruiterChangePassword from '../component/recruiter/change_password';
import "../App.css"

function StudentChangePasswordPage() {
    let authData = JSON.parse(localStorage.getItem("accessToken"))
    return (
        <div>
            
            {authData?.type === "student" ? (
                <div>
                    <StudentChangePassword />
                </div>
            ) : (
                <div>
                    <RecruiterChangePassword />
                </div>
            )}
        </div>
    )
}
export default StudentChangePasswordPage;


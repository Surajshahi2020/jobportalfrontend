import React, { useEffect, useState } from 'react';
import './pages.css';

function StudentJobApplyPage() {
    const [jobApplyList, setJobApplyList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/student/job-apply-list/')
            .then((response) => response.json())
            .then((data) => {
                setJobApplyList(data.data.docs);
            })
            .catch((error) => console.error(error));
    }, []);

    let count = 0;

    return (
        <table>
            <thead>
                <div className="table-title">
                    <h5>Applied Job</h5>
                </div>
                <tr>
                    <th>S.N</th>
                    <th>Title</th>
                    <th>Salary</th>
                    <th>Experience</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Applied Date</th>
                    <th>Resume</th>
                </tr>
            </thead>
            <tbody>
                {jobApplyList.map(job => (
                    <tr key={job.id}>
                        <td>{++count}</td>
                        <td>{job.title}</td>
                        <td>Rs {job.salary}</td>
                        <td>{job.experience} years</td>
                        <td>{job.start_date}</td>
                        <td>{job.end_date}</td>
                        <td>{job.apply_date}</td>

                        
                        <td>
                            <a href={job.resume} download>
                                Download
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default StudentJobApplyPage;

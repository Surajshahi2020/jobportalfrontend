import React, { useEffect, useState } from 'react';
import './pages.css';

function CandidateListPage() {
    const [jobApplyList, setJobApplyList] = useState([]);
    let authData = JSON.parse(localStorage.getItem("accessToken"))

    useEffect(() => {
        async function fetchJobApplyList() {
            const requestOptions = {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${authData?.access}` },
            };
            try {
                const response = await fetch('http://localhost:8000/api/v1/recruiter/candidate-applied/', requestOptions);
                const data = await response.json();
                console.log(data.data.docs);
                setJobApplyList(data.data.docs);
            } catch (error) {
                console.error(error);
            }
        }
        fetchJobApplyList();
    }, [authData]);

    let count = 0;

    return (
        <table>
            <thead>
                <div className="table-title">
                    <h5>Candidates List</h5>
                </div>
                <tr>
                    <th>S.N</th>
                    <th>Title</th>
                    <th>Salary</th>
                    <th>Experience</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Applied Date</th>
                    <th>Resume</th>
                </tr>
            </thead>
            <tbody>
                {jobApplyList.map(job => (
                    <tr key={job.id}>
                        <td>{++count}</td>
                        <td>{job.title}</td>
                        <td>{job.salary}</td>
                        <td>Rs {job.experience}</td>
                        <td>{job.start_date}</td>
                        <td>{job.end_date}</td>
                        <td>{job.first_name}</td>
                        <td>{job.last_name}</td>
                        <td>{job.email}</td>
                        <td>{job.mobile}</td>
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

export default CandidateListPage;

import React, { useState, useEffect } from "react"; import "./content.css";

function Content() {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/recruiter/job-list/")
      .then((response) => response.json())
      .then((data) => {
        setJobList(data.data.docs);
        console.log(data.data.docs);
      })
      .catch((error) => console.log(error));
  }, []);
  
  
  return (
    <div className="content">
      <h1>Find Your Dream Job</h1>
      <form>
        <input type="text" placeholder="Job title or keyword" />
        <input type="text" placeholder="Location" />
        <button>Search</button>
      </form>
      <h2>Featured Jobs</h2>
      <div className="job-list">
        {jobList.map((job) => (
          <div className="job" key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.start_date}</p>
            <p>{job.end_date}</p>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.experience}</p>
            <p>{job.salary}</p>
            <p>{job.creationdate}</p>
            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
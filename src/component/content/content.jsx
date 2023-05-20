import React, { useState, useEffect } from "react";
import "./content.css";
import image from "../../images/image.jpg";
import { Link } from 'react-router-dom';


function Content() {
  let authData = JSON.parse(localStorage.getItem("accessToken"))
  const [jobList, setJobList] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/recruiter/job-list/", {
          headers: {
            Authorization: ``,
          },
        });
        const data = await response.json();
        setJobList(data.data.docs);
        console.log(data.data.docs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="content">
      <div className="content-image">
        <img src={image} alt="" />

        <h1>Find Your Dream Job</h1>
        <form>
          <input type="text" placeholder="Job title or keyword" />
          <input type="text" placeholder="Location" />
          <button>Search</button>
        </form>
      </div>
      <div className="content-header">
        <h1>Latest Featured Jobs</h1>
      </div>

      <div className="container mc">
        <div className="row">
          <div className="col-md-12">
            <div className="second-content-header ">
            </div>

            <div className="row">
              {jobList?.map((job) => (
                <div className="col-md-4 my-2">
                  <div className="card" key={job?.id}>
                    <div className="card-image">
                      <img src={job?.image} alt={job?.title} />
                    </div>

                    <div className="company-area">
                      <div className="image-logo">
                        <img src={job?.image} alt={job?.title} />
                      </div>
                      <div className="company-details">
                        <div className="name-location">
                          <h5>{job?.title}</h5>
                          <ul>
                            <li>{job?.company}</li>
                            <li><span className="title">Deadline:</span>{job?.end_date}</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="job-description">
                      <ul>
                        <li>
                          <p>
                            <span className="title">Salary:</span>{job?.salary}
                            <span className="time">/</span>Per Hour

                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="title">Experience:</span>{job?.experience}
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="title">Location:</span>{job.location}
                          </p>
                        </li>

                      </ul>
                    </div>

                    <div className="job-type-apply">
                      <div className="job-type">
                        <span className="light-green">Full Time</span>
                      </div>

                      <div className="apply-btn">
                        {authData ? (
                          <Link to={`/job_apply/${job?.id}`}>Apply</Link>
                        ) : (
                          <button onClick={() => 
                            alert('Login is Required')}>Apply
                            </button>
                        )}
                      </div>

                    </div>


                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}

export default Content;

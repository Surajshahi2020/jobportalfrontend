import React, { useState, useEffect } from "react";
import "./content.css";
import image from "../../images/image.jpg";

function Content() {
  const [jobList, setJobList] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(token);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/recruiter/job-list/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        setJobList(data.data.docs);
        console.log(data.data.docs);
      } catch (error) {
        console.log(error);
      }
    };
    if (accessToken) {
      fetchData();
    }
  }, [accessToken]);

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

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="job-list">


            { localStorage.getItem("accessToken") && (<>
            <h2>Lastest Jobs</h2>
              </>)}
              {jobList.map((job) => (
                <div className="job" key={job.id}>
                  <div className="job-list-content">
                    <div className="job-list-content-detail">
                      <div className="job-list-content-img">
                        <img src={image} alt="" />
                      </div>
                      <div className="job-list-content-list">
                        <h3>{job.title}</h3>
                        <div className="job-list-content-list-descrip">
                          <i className="fa fa-check "></i>
                          <p>{job.description}</p>
                        </div>
                        <div className="job-list-content-list-descrip">
                          <i className="fa fa-check "></i>
                          <p>{job.experience}</p>
                        </div>
                        <div className="job-list-content-list-descrip">
                          <i className="fa fa-check "></i>
                          <p>Rs.{job.salary}</p>
                        </div>
                        <div className="job-list-content-list-descrip">
                          <i className="fa fa-check "></i>
                          <p>{job.creationdate}</p>
                        </div>
                      </div>
                    </div>
                    <div className="date-apply-now">
                      <div className="date now">
                        <div className="date-start-end">
                          <i className="fa fa-calendar-plus-o"></i>{" "}
                          <p className="date">
                            <span>Start: </span>
                            {job.start_date}
                          </p>
                        </div>
                        <div className="date-start-end">
                          <i className="fa fa-calendar-plus-o"></i>{" "}
                          <p className="date">
                            <span>End: </span>
                            {job.end_date}
                          </p>
                        </div>
                      </div>
                      <div className="date-link">
                      <a href="https://example.com">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    </div>
  );
}

export default Content;

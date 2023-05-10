import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./category.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function Category() {
    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:8000/api/v1/recruiter/job-list/",
                    {
                        headers: {
                            Authorization: ``,
                        },
                    }
                );
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
        <div className="category-container">
            <div className="category-name">
                <h1>Popular Category List</h1>
            </div>
            <Carousel responsive={responsive}>
                {jobList.map((job) => (
                    <div key={job._id} className="card border-0 text-bg-white">
                        <img
                            src={job.image}
                            className="card-img movimg"
                            alt={job.title}
                        />
                        <div className="card-img-overlay">
                            <h5 className="card-title">{job.title}</h5>
                            <p className="card-text">
                                <span className="open-post">Salary:</span> {job.salary}
                            </p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Category;

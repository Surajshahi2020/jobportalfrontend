import React, { useState, useEffect } from "react";
import "./content.css";
import image from "../../images/image.jpg";

import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination]);


function Content() {
  const [jobList, setJobList] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [activeSlide, setActiveSlide] = useState(null);
  const cardData = [
    {
      title: "Developer",
      content: "Card content for Developer goes here",
      imageUrl: "https://picsum.photos/id/242/200/300",
    },
    {
      title: "Graphics Designer",
      content: "Card content for Graphics Designer goes here",
      imageUrl: "https://picsum.photos/id/238/200/300",
    },
    {
      title: "Marketing",
      content: "Card content for Marketing goes here",
      imageUrl: "https://picsum.photos/id/239/200/300",
    },
    {
      title: "Nurse",
      content: "Card content for Nurse goes here",
      imageUrl: "https://picsum.photos/id/240/200/300",
    },
    {
      title: "Hardware",
      content: "Card content for Hardware goes here",
      imageUrl: "https://picsum.photos/id/241/200/300",
    },
    {
      title: "Engineering",
      content: "Card content for Engineering goes here",
      imageUrl: "https://picsum.photos/id/242/200/300",
    },
  ];
  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };


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

      <div className="container mc">
        <div className="row">
          <div className="col-md-3">
            <div className="job-list">
              {localStorage.getItem("accessToken") && (<>
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
                        <a href="https://example.com">Apply Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-9">
            <div className="second-content-header ">
              <Swiper
                spaceBetween={10}
                slidesPerView={3}
                navigation
              >
                <SwiperSlide onClick={() => setActiveSlide(0)}>Developer</SwiperSlide>
                <SwiperSlide onClick={() => setActiveSlide(1)}>Graphics Designer</SwiperSlide>
                <SwiperSlide onClick={() => setActiveSlide(2)}>Marketing</SwiperSlide>
                <SwiperSlide onClick={() => setActiveSlide(3)}>Nurse</SwiperSlide>
                <SwiperSlide onClick={() => setActiveSlide(4)}>Hardware</SwiperSlide>
                <SwiperSlide onClick={() => setActiveSlide(5)}>Engineering</SwiperSlide>
              </Swiper>
            </div>

            {activeSlide !== null && (
              <div className="card-container">
                {cardData.map((card, index) => (
                  <div key={index} className={`card ${index === activeSlide ? "active" : ""}`}>
                    <div className="card-image">
                      <img src={card.imageUrl} alt={card.title} />
                    </div>

                    <div className="company-area">
                      <div className="image-logo">
                        <img src={card.imageUrl} alt={card.title} />
                      </div>
                      <div className="company-details">
                        <div className="name-location">
                          <h5>Wordpress Developer</h5>
                          <ul>
                            <li>Soft Benz Info Sys</li>
                            <li><span className="title">Deadline:</span>2 April 2023</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="job-description">
                      <ul>
                        <li>
                          <p>
                          <span className="title">Salary:</span>$60-$90
                          <span className="time">/</span>Per Hour

                          </p>
                        </li>
                        <li>
                          <p>
                          <span className="title">Experience:</span>3-3.5 Years
                          </p>
                        </li>
                        <li>
                          <p>
                          <span className="title">Location:</span>Dhaka, Bangladesh
                          </p>
                        </li>

                      </ul>
                    </div>

                    <div className="job-type-apply">
                      <div className="job-type">
                        <span className="light-green">Full Time</span>
                      </div>  
                      <div className="apply-btn">
                          <a href="https://preview.themeforest.net/item/jobes-job-portal-html-template/full_screen_preview/43974301?_ga=2.78735261.860034729.1683561914-196358546.1674547707">
                          <span>
                          <i className="fa fa-circle"></i>
                          </span>
                          Apply Now
                          </a>
                      </div>
                    </div>
                    

                  </div>
                ))}
              </div>
            )}


          </div>
        </div>
      </div>
    </div>



  );
}

export default Content;

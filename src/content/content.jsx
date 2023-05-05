import React, { useState, useEffect } from "react"; import "./content.css";
import image from '../images/image.jpg';



function Content() {
  // const [jobList, setJobList] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8000/api/v1/recruiter/job-list/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setJobList(data.data.docs);
  //       console.log(data.data.docs);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  
  
  return (
    
      <div className="content">
      <div className="content-image">
        <img src={image}/>
        <h1>Find Your Dream Job</h1>
        <form >
        <input type="text" placeholder="Job title or keyword" />
        <input type="text" placeholder="Location" />
        <button>Search</button>
      </form>
      </div>
      
    
      <div className="container">
        <div className="row">
       

<div className="col-md-4">
<div className="job-list">
  <h2>Lastest Jobs</h2>
    {/* {jobList.map((job) => (
      <div className="job" key={job.id}> */}
      <div className="job-list-content">
        <div className="job-list-content-detail">
            <div className="job-list-content-img">
               <img src={image} />
    
             </div>
             <div className="job-list-content-list">
                <h3>Softbenz Pvt.Ltd</h3>
              
                <div className="job-list-content-list-descrip">
                   <i className="fa  fa-check "></i><p>Python Developer</p>
                </div>
                <div className="job-list-content-list-descrip">
                   <i className="fa  fa-check "></i><p>3 years</p>
                </div>
                <div className="job-list-content-list-descrip">
                   <i className="fa  fa-check "></i><p>Rs.30000</p>
                </div>
                <div className="job-list-content-list-descrip">
                   <i className="fa  fa-check "></i><p>2023-06-01</p>
                </div>
               
              
              
              </div>
    
            </div>
         <div className="date-apply-now">
         <div className="date now">
          <div className="date-start-end">
            <i className="fa  fa-calendar-plus-o"></i> <p className="date"><span>Start: </span>2023-01-06</p>

         </div>
         <div className="date-start-end">
            <i className="fa  fa-calendar-plus-o"></i> <p className="date"><span>End: </span>2023-01-06</p>

         </div>
            </div> 
          <div className="date-link">
             <a>Buy Now</a>

          </div>
       
          </div>  
         
        
      </div>
        
        
        
        
      </div>
    {/* ))} */}
  </div>

</div>
<div className="col-md-8">


</div>
  

        </div>
        

      </div>
    
    // </div>


   
  );
}

export default Content;
import React, { useEffect, useState } from 'react'
import "../App.css"
import { useParams } from 'react-router-dom'; 

function BuyPage() {
    const [jobData, setJobData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/v1/recruiter/job-list/${id}/`);
                const data = await response.json();
                setJobData(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [id]);

    let authData = JSON.parse(localStorage.getItem("accessToken"))


    const handlePaymentClick = async () => {
        try {
            const currentDate = new Date().toISOString().split("T")[0];
            const paymentData = {
                amount: 100,
                job: id,
                student: authData?.own_id,
                apply_date: currentDate,
            };

            const response = await fetch(`http://localhost:8000/api/v1/payment/make-payment/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paymentData),
            });
            const data = await response.json();
            if (response.ok) {
                window.location.href = data.data.khalti.payment_url;
            } else {
                alert("Payment failed. Please try again.");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div>
            {authData?.type === "student" && jobData && (
                <div className="job-description">
                    <div className="first-row">
                        <div className="col-md-9">
                            <h4>Job Title
                            <p className="title-name">{jobData.title}</p>
                            </h4>
                        </div>
                        <div className="col-md-3">
                            <h4>Company Name
                            <p className="title-name">{jobData.company}</p>
                            </h4>
                        </div>
                    </div>

                    <div className="first-row">
                        <div className="col-md-9">
                            <h4>Location
                            <p className="title-name">{jobData.location}</p>
                            </h4>
                        </div>
                        <div className="col-md-3">
                            <h4>Experience
                            <p className="title-name">{jobData.experience}</p>
                            </h4>
                        </div>
                    </div>

                    <div className="first-row">
                        <div className="col-md-9">
                            <h4>Starting
                            <p className="title-name">{jobData.start_date}</p>
                            </h4>
                        </div>
                        <div className="col-md-3">
                            <h4>Ending
                            <p className="title-name">{jobData.end_date}</p>
                            </h4>
                        </div>
                    </div>
                    
                    <div className="first-row">
                        <div className="col-md-9">
                            <h4>Description
                            <p className="title-name">{jobData.description}</p>
                            </h4>
                        </div>
                        <div className="col-md-3">
                            <h4>Posted
                            <p className="title-name">{jobData.creationdate}</p>
                            </h4>
                        </div>
                    </div>

                    <div className="first-row">
                        <div className="col-md-9">
                            <h4>Skills
                            <p className="title-name">{jobData.skills}</p>
                            </h4>
                        </div>
                        <div className="col-md-3">
                            <h4>Image
                            <p className="title-image"><img src={jobData?.image} alt="Job Image" /></p>
                            </h4>
                        </div>
                    </div>

                    <div className="first-row">
                        <div className="col-md-9">
                            <h4>Fee
                            <p className="title-name">Rs 10,000</p>
                            </h4>
                        </div>
                        <div className="col-md-3">
                            <a href="#" className="app-btn" onClick={handlePaymentClick}>Pay with Khalti</a>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}

export default BuyPage;


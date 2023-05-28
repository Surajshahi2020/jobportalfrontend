import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import Homepage from '../component/homepage/Homepage';
import './pages.css';

function IndexPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pidx = searchParams.get('pidx');
    const job = searchParams.get('purchase_order_id');

    if (pidx && job) {
      postDataToAPI(pidx, job);
    }
  }, [location]);

  const postDataToAPI = async (pidx, job) => {
    console.log("Hitting the pidx validation APIs");
    const url = 'http://localhost:8000/api/v1/payment/verify-payment/';
    let authData = JSON.parse(localStorage.getItem("accessToken"));

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authData?.access}`,
    };

    const data = {
      pidx: pidx,
      job: job,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok) {
        setSuccess(responseData.message);
        setError("");
        setTimeoutId(setTimeout(() => {
          setSuccess(false);
        }, 7000));
        console.log('Request successful!', responseData.message);
      } else {
        setSuccess(false);
        setError(responseData.message);
        console.log('Request failed with status code', response.status);
      }
    } catch (error) {
      console.log('Request failed with error', error);
    }
  };

  return (
    <div>
      {success && (
        <p className="success-message-khalti">{success}</p>
      )}
      {error && <p className="error-message-khalti">{error}</p>}
      <Homepage />
    </div>
  );
}

export default IndexPage;

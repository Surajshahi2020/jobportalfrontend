import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Homepage from '../component/homepage/Homepage';

function IndexPage() {
  const location = useLocation();

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
  };
  return (
    <div>
      <Homepage />
    </div>
  );
}
export default IndexPage;

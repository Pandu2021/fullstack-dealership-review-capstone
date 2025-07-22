import React, { useEffect, useState } from 'react';

function DealerList() {
  const [dealers, setDealers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/dealers')
      .then(res => res.json())
      .then(data => setDealers(data));
  }, []);

  return (
    <div>
      <h1>Dealer Reviews</h1>
      {dealers.map((dealer, idx) => (
        <div key={idx}>
          <h2>{dealer.name}</h2>
          <p>City: {dealer.city}</p>
          <p>Review: {dealer.review}</p>
        </div>
      ))}
    </div>
  );
}

export default DealerList;
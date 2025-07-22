import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function DealerList() {
  const [dealers, setDealers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/dealers')
      .then(res => res.json())
      .then(data => setDealers(data));
  }, []);

  return (
    <div>
      <h1>Dealer List</h1>
      {dealers.map((dealer, idx) => (
        <div key={idx} style={{ marginBottom: "20px" }}>
          <Link to={`/dealer/${dealer.id}`}>
          <h2>{dealer.name}</h2>
          </Link>
          
          <p>City: {dealer.city}</p>
          <p>Review: {dealer.review}</p>
        </div>
      ))}
    </div>
  );
}

export default DealerList;
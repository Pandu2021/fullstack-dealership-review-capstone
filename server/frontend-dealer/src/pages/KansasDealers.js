import React, { useEffect, useState } from 'react';

function KansasDealers() {
  const [dealers, setDealers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/dealers?state=KS')
      .then(res => res.json())
      .then(data => setDealers(data));
  }, []);

  return (
    <div>
      <h1>Kansas Dealers</h1>
      {dealers.map((dealer, idx) => (
        <div key={idx} style={{ border: "1px solid #ccc", padding: "10px", margin: "15px" }}>
          <h2>{dealer.name}</h2>
          <p>State: {dealer.state}</p>
        </div>
      ))}
    </div>
  );
}

export default KansasDealers;
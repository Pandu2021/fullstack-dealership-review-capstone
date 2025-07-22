import React, { useEffect, useState } from 'react';

function ReviewPage() {
  const [dealers, setDealers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/dealers')
      .then(res => res.json())
      .then(data => setDealers(data));
  }, []);

  return (
    <div>
      <h1>All Dealer Reviews</h1>
      {dealers.map((dealer, idx) => (
        <div key={idx} style={{ border: "1px solid #ccc", margin: "15px", padding: "10px" }}>
          <h2>{dealer.name}</h2>
          <p>City: {dealer.city}</p>
          <h4>Reviews:</h4>
          {Array.isArray(dealer.review) && dealer.review.length > 0 ? (
            <ul>
              {dealer.review.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ReviewPage;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DealerDetail() {
  const { id } = useParams();
  const [dealer, setDealer] = useState(null);
  const [review, setReview] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/dealers/${id}`)
      .then(res => res.json())
      .then(data => setDealer(data));
  }, [id]);

  const submitReview = () => {
    fetch(`http://localhost:3001/dealers/${id}/review`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ review })
    }).then(() => {
      setDealer(prev => ({
        ...prev,
        review: [...(prev.review || []), review]
      }));
      setReview('');
    });
  };

  if (!dealer) return <p>Loading...</p>;

  return (
    <div>
      <h1>{dealer.name}</h1>
      <p>City: {dealer.city}</p>

      <h3>Reviews:</h3>
      <ul>
        {(dealer.review || []).map((r, idx) => <li key={idx}>{r}</li>)}
      </ul>

      <input
        type="text"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review"
      />
      <button onClick={submitReview}>Submit Review</button>
    </div>
  );
}

export default DealerDetail;
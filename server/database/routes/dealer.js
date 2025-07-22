const express = require('express');
const router = express.Router();

// Dummy database untuk testing
const allDealers = [
  { id: 1, name: "Best Cars NYC", state: "NY" },
  { id: 2, name: "Drive Kansas", state: "KS" },
  { id: 3, name: "Speed KS Dealer", state: "KS" },
  { id: 4, name: "Fast Cars CA", state: "CA" }
];

// Endpoint: /api/dealers?state=KS
router.get('/api/dealers', (req, res) => {
  const state = req.query.state;
  if (state) {
    const filtered = allDealers.filter(d => d.state === state);
    res.json(filtered);
  } else {
    res.json(allDealers);
  }
});

module.exports = router;
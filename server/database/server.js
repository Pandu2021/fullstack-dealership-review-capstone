const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


const dealerRoutes = require('./routes/dealer');
app.use('/', dealerRoutes);
app.use(express.json());


app.listen(3001, () => console.log('Backend dealer on port 3001'));
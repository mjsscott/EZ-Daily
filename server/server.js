const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const PORT = 5000;
const dailyRoutes = require('./routes/dailies');
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/dailies', dailyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
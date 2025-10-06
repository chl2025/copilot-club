require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const memberRoutes = require('./routes/membersRoutes');
const facilityRoutes = require('./routes/facilitiesRoutes');
const bookingRoutes = require('./routes/bookingsRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(bodyParser.json());

app.use('/members', memberRoutes);
app.use('/facilities', facilityRoutes);
app.use('/bookings', bookingRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

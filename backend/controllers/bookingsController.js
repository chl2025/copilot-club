const pool = require('../db');

exports.createBooking = async (req, res) => {
  const { member_id, facility_id, booking_time } = req.body;
  const booking = await pool.query(
    'INSERT INTO bookings (member_id, facility_id, booking_time) VALUES ($1, $2, $3) RETURNING *',
    [member_id, facility_id, booking_time]
  );
  await pool.query('INSERT INTO transactions (booking_id, action) VALUES ($1, $2)', [booking.rows[0].id, 'created']);
  res.json(booking.rows[0]);
};

const pool = require('../db');

exports.createMember = async (req, res) => {
  const { name, email } = req.body;
  const result = await pool.query('INSERT INTO members (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
  res.json(result.rows[0]);
};

exports.getMember = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM members WHERE id = $1', [id]);
  res.json(result.rows[0]);
};

exports.updateMember = async (req, res) => {
  const { id } = req.params;
  const { name, email, status } = req.body;
  const result = await pool.query('UPDATE members SET name = $1, email = $2, status = $3 WHERE id = $4 RETURNING *', [name, email, status, id]);
  res.json(result.rows[0]);
};

exports.deleteMember = async (req, res) => {
  const { id } = req.params;
  await pool.query('UPDATE members SET status = $1 WHERE id = $2', ['inactive', id]);
  res.sendStatus(204);
};

exports.getMemberBookings = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM bookings WHERE member_id = $1 ORDER BY booking_time DESC', [id]);
  res.json(result.rows);
};

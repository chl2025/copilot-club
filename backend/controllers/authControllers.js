const pool = require('../db');
const { generateToken } = require('../middleware/auth');

exports.login = async (req, res) => {
  const { email } = req.body;
  const result = await pool.query('SELECT * FROM members WHERE email = $1', [email]);
  if (result.rows.length === 0) return res.sendStatus(404);

  const token = generateToken(result.rows[0]);
  res.json({ token });
};

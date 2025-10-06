const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '1h' });
}

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = { generateToken, authenticateToken };

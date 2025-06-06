const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("🔐 Incoming Auth Header:", authHeader);
  console.log("🧪 JWT_SECRET:", process.env.JWT_SECRET);

  const token = authHeader?.split(' ')[1]; // Format: Bearer <token>

  if (!token) {
    console.log("❌ Token missing");
    return res.status(401).json({ message: 'Unauthorized - token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Token decoded:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("❌ Token verification failed:", err.message);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;

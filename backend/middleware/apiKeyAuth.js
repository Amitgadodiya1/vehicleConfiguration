require("dotenv").config();

const apiKeyAuth = (req, res, next) => {
  const userKey = req.header("x-api-key");
  if (userKey && userKey === process.env.API_KEY) {
    next();
  } else {
    return res.status(403).json({ message: "Forbidden: Invalid API Key" });
  }
};

module.exports = apiKeyAuth;

const { getLocationByIP } = require("../utils/getLocationByIP");

const getLocation = async (req, res) => {
  const clientIP = req.socket.remoteAddress; // Get request's remote IP
  const location = await getLocationByIP(clientIP);
  res.send(location);
};

module.exports = { getLocation };

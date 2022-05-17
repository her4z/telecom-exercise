const { getLocationByIP } = require("../utils/getLocationByIP");

const getLocation = async (req, res) => {
  const clientIP =
    req.headers["x-forwarded-for"]?.split(",").shift() ||
    req.socket?.remoteAddress;
  const location = await getLocationByIP(clientIP);
  res.send(location);
};

module.exports = { getLocation };

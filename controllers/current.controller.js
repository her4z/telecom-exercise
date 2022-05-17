const fetch = require("node-fetch");
const { getLocationByIP } = require("../utils/getLocationByIP");

const getCurrentWeather = async (req, res) => {
  let { city } = req.params;
  if (!city) {
    const clientIP =
      req.headers["x-forwarded-for"]?.split(",").shift() ||
      req.socket?.remoteAddress;
    const location = await getLocationByIP(clientIP);
    city = location.city;
  }
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
  );
  const data = await result.json();
  res.send(data);
};

module.exports = { getCurrentWeather };

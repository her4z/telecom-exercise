const fetch = require("node-fetch");
const { getLocationByIP } = require("../utils/getLocationByIP");

const getCurrentWeather = async (req, res) => {
  let { city } = req.params;
  if (!city) {
    const remoteAddress =
      req.headers["x-forwarded-for"]?.split(",").shift() ||
      req.socket?.remoteAddress;
    res.send(remoteAddress);
    const location = await getLocationByIP(
      remoteAddress[0] // If x-forwarded-for returns an array of IPs, it uses the first element, which should be the closest address to the client.
    );
    city = location.city;
  }
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
  );
  const data = await result.json();
  res.send(data);
};

module.exports = { getCurrentWeather };

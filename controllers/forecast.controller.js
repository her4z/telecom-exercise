const fetch = require("node-fetch");
const { getLocationByIP } = require("../utils/getLocationByIP");

const getForecast = async (req, res) => {
  let { city } = req.params;
  if (!city) {
    const { remoteAddress } = req.socket;
    const location = await getLocationByIP(remoteAddress);
    city = location.city;
  }
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.API_KEY}`
  );
  const data = await result.json();
  res.send(data);
};

module.exports = { getForecast };

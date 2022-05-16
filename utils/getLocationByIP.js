const fetch = require("node-fetch");

const getLocationByIP = async (ip) => {
  console.log(ip);
  const res = await fetch(`http://ip-api.com/json/${ip}`);
  const data = await res.json();
  return data;
};

module.exports = { getLocationByIP };

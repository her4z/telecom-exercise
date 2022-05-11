const fetch = require("node-fetch");

const current = (fastify, options, done) => {
  fastify.get(
    "/current/:city",
    {
      schema: {
        description:
          "Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo actual.",
        params: {
          type: "object",
          properties: {
            city: {
              type: "string",
              description: "city's name",
            },
          },
        },
      },
    },
    async (req, res) => {
      const { city } = req.params;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
      );
      const data = await response.json();
      res.send(data);
    }
  );

  done();
};

module.exports = { current };

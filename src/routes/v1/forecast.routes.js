const fetch = require("node-fetch");

const forecast = (fastify, options, done) => {
  fastify.get(
    "/forecast/:city",
    {
      schema: {
        description:
          "Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo a 5 días.",
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
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.API_KEY}`
      );
      const data = await response.json();
      res.send(data);
    }
  );

  done();
};

module.exports = { forecast };

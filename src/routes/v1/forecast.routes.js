const forecastController = require("../../controllers/forecast.controller");

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
    forecastController.getForecast
  );

  done();
};

module.exports = { forecast };

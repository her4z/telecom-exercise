const currentController = require("../../controllers/current.controller");

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
    currentController.getCurrentWeather
  );

  done();
};

module.exports = { current };

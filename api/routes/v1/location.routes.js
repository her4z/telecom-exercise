const locationController = require("../../controllers/location.controller");

const location = (fastify, options, done) => {
  fastify.get(
    "/location",
    {
      schema: {
        description: "Devuelve los datos de ubicación city según ip-api.",
      },
    },
    locationController.getLocation
  );

  done();
};

module.exports = { location };

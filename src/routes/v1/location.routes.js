const location = (fastify, options, done) => {
  fastify.get(
    "/location",
    {
      schema: {
        description: "Devuelve los datos de ubicación city según ip-api.",
      },
    },
    (req, res) => {
      const clientIP = req.socket.remoteAddress;
      res.send(clientIP);
    }
  );

  done();
};

module.exports = { location };

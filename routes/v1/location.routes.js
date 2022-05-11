const location = (fastify, options, done) => {
  fastify.get(
    "/location",
    {
      schema: {
        description: "Devuelve los datos de ubicación city según ip-api.",
      },
    },
    (request, reply) => {
      const clientIP = request.socket.remoteAddress;
      reply.send(clientIP);
    }
  );

  done();
};

module.exports = { location };

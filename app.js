require("dotenv").config();

const fastify = require("fastify");
const swagger = require("@fastify/swagger");

const { location } = require("./routes/v1/location.routes");
const { forecast } = require("./routes/v1/forecast.routes");
const { current } = require("./routes/v1/current.routes");

const build = (opts = {}) => {
  const app = fastify(opts);

  app.register(swagger, {
    routePrefix: "/v1",
    swagger: {
      info: {
        title: "Weather API",
        description: "Weather API for Telecom technical exercise",
        version: "1.0.0",
      },
      externalDocs: {
        url: "https://github.com/her4z/telecom-exercise",
        description: "GitHub Repository",
      },
      host: `0.0.0.0:${process.env.PORT}`,
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
    },
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next();
      },
      preHandler: function (request, reply, next) {
        next();
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    exposeRoute: true,
  });
  app.register((fastify, options, done) => {
    // Redirect base url to /v1 route
    fastify.get("/", {}, (req, rep) => {
      rep.removeHeader("Content-Length");
      rep.redirect("/v1");
    });
    done();
  });
  app.register(location, { prefix: "/v1" });
  app.register(forecast, { prefix: "/v1" });
  app.register(current, { prefix: "/v1" });

  return app;
};

module.exports = { build };

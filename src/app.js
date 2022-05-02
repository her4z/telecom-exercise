require("dotenv").config();

const fastify = require("fastify");

const { location } = require("./routes/location.routes");
const { forecast } = require("./routes/forecast.routes");
const { current } = require("./routes/current.routes");

const build = (opts = {}) => {
    const app = fastify(opts);

    app.register(location);
    app.register(forecast);
    app.register(current);

  return app;
};

module.exports = { build };
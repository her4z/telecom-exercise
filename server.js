const { build } = require("./app.js");

const app = build({ logger: false });

const start = async () => {
  try {
    await app.listen(process.env.PORT || 5000, "0.0.0.0");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();

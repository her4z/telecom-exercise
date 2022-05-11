const { build } = require("./app.js");

const app = build({ logger: true });

const start = async () => {
  try {
    await app.listen(process.env.PORT || 3000);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();

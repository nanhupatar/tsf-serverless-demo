const Koa = require("koa");

const app = new Koa();

// error logger
app.on("error", async (err, ctx) => {
  console.error("error occured:", err);
});

const port = process.env.TENCENTCLOUD_SERVER_PORT || 8080;
console.log("listening port", port);
app.listen(port, () => console.log("Example app listening on", port));

module.exports = app;

if (process.env.NODE_ENV !== "production") {
  require("dotenv/config");
}

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRoute = require("./routes/index");
const questionRoute = require("./routes/question");

const app = express();

app.use(bodyParser.json());
app.use("/", indexRoute);
app.use("/questions", questionRoute);

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => console.log("Connected to database"));
db.on("error", (err) => console.error(err));

app.listen(process.env.PORT);

const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.DB_URL,{useNewUrlParser: true, useUnifiedTopology:true});
const db = mongoose.connection;
db.once("open",() => console.log("Connected to database"));
db.on("error", (err) => console.error(err));



app.listen(process.env.PORT);

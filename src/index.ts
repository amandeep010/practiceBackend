import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./Routes";
dotenv.config();

const app = express();

const port = process.env.PORT || 4000;

app.set("port", port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", route);

app.listen(8000, () => {
  console.log("Server running");
});

import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/MainRoute.ts";
import PG from "./lib/PG.ts";
import { check } from "./lib/Prisma.ts";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.set("port", port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/route", router);

app.listen(port, () => {
  // const data = PG.connect()
  check();
  console.log("\n\nServer running : ", port);
});

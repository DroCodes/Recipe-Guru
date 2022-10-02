import express from "express";
import { main } from "./config/server";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./api-routes/TestRoute";
import { RecipeRouter } from "./api-routes/RecipeRoute";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/test", router);
app.use("/recipes", RecipeRouter);

app.listen(8080, () => {
  console.log("Server started on port 8080");
  main().catch((err) => {
    console.log(err);
  });
});

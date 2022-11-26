import express from "express";
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";
import { main } from "./config/server";
// import router from "./api-routes/TestRoute";
import { RecipeRouter } from "./api-routes/RecipeRoute";
import { imageRouter } from "./api-routes/recipeImageRoute";

const app = express();
const upload = multer({ dest: "./uploads" });

app.use(cors());
app.use(bodyParser.json());
app.use("/static", express.static("uploads"));

// app.use("/test", router);
app.use("/recipes", RecipeRouter);
app.use("/uploadFile", imageRouter);

app.listen(8080, () => {
    console.log("Server started on port 8080");
    main().catch((err) => {
        console.log(err);
    });
});

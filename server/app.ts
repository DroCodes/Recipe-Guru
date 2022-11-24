import express from "express";
import { main } from "./config/server";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./api-routes/TestRoute";
import { RecipeRouter } from "./api-routes/RecipeRoute";
import multer from "multer";
import fs from "fs";

const app = express();
const upload = multer({ dest: "./uploads" });

app.use(cors());
app.use(bodyParser.json());
app.use("/static", express.static("uploads"));

app.use("/test", router);
app.use("/recipes", RecipeRouter);
app.post("/uploadFile", upload.single("recipeImage"), (req: any, res: any) => {
    let fileType = req.file.mimetype.split("/")[1];
    let newFileName = req.file.filename + "." + fileType;

    fs.rename(
        `./uploads/${req.file.filename}`,
        `./uploads/${newFileName}`,
        () => {
            res.send("200");
        }
    );
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
    main().catch((err) => {
        console.log(err);
    });
});

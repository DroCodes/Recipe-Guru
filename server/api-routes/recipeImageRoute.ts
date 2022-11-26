import multer from "multer";
import express from "express";
import { RecipeImageController } from "../controllers/imageController";

const imageRouter = express.Router();
const upload = multer({ dest: "./uploads" });

const newImageUpload = new RecipeImageController();

imageRouter.post("/", upload.single("recipeImage"), newImageUpload.uploadImage);

export { imageRouter };

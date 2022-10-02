import express from "express";
import { RecipeController } from "../controllers/RecipeController";

const RecipeRouter = express.Router();

const recipe = new RecipeController();

RecipeRouter.get("/", recipe.getAllRecipes);

RecipeRouter.get("/:id", recipe.getSpecificRecipe);

RecipeRouter.post("/", recipe.saveRecipe);

RecipeRouter.patch("/:id", recipe.updateRecipe);

RecipeRouter.delete("/:id", recipe.deleteRecipe);

export { RecipeRouter };

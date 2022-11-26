import { Schema, model } from "mongoose";

interface IRecipe {
    RecipeName: String;
    RecipeDescription: String;
    RecipeIngredients: { ingrediendName: String; ingrediendQuantity: Number }[];
    RecipeInstructions: String;
    RecipeDifficulty: String;
    RecipeCookTime: String;
    RecipeServingSize: String;
}

const recipeSchema = new Schema<IRecipe>({
    RecipeName: { type: String, required: true },
    RecipeDescription: { type: String, required: true },
    RecipeIngredients: { type: [], required: true },
    RecipeInstructions: { type: String, required: true },
    RecipeDifficulty: { type: String, required: true },
    RecipeCookTime: { type: String, required: true },
    RecipeServingSize: { type: String, required: true },
});

const Recipe = model<IRecipe>("recipe", recipeSchema);

export { Recipe };

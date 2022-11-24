import { Recipe } from "../models/RecipeSchema";

export class RecipeController {
    public async getAllRecipes(req: any, res: any) {
        try {
            const recipes = await Recipe.find({});
            res.json(recipes);
        } catch (err) {
            res.json({ message: err });
        }
    }

    public async getSpecificRecipe(req: any, res: any) {
        try {
            const recipe = await Recipe.findById(req.params.id);
            res.json(recipe);
        } catch (err) {
            res.json({ message: err });
        }
    }

    public async saveRecipe(req: any, res: any) {
        const recipe = new Recipe(req.body);

        try {
            const savedRecipe = await recipe.save();
            res.json(savedRecipe);
        } catch (err) {
            res.json({ message: err });
        }
    }

    public async updateRecipe(req: any, res: any) {
        console.log("Test");
        try {
            const recipe = await Recipe.updateOne(
                { _id: req.params.id },
                {
                    $set: {
                        RecipeName: req.body.RecipeName,
                        RecipeDescription: req.body.RecipeDescription,
                        RecipeIngredients: req.body.RecipeIngredients,
                        RecipeInstructions: req.body.RecipeInstructions,
                        RecipeDifficulty: req.body.RecipeDifficulty,
                        RecipeImage: req.body.RecipeImage,
                        RecipeCookTime: req.body.RecipeCookTime,
                        RecipeServingSize: req.body.RecipeServingSize,
                    },
                }
            );
            res.json(recipe);
        } catch (err) {
            res.json({ message: err });
        }
    }

    public async deleteRecipe(req: any, res: any) {
        try {
            const removedRecipe = await Recipe.remove({ _id: req.params.id });
            res.json(removedRecipe);
        } catch (err) {
            res.json({ message: err });
        }
    }
}

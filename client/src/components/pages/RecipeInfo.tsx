import { useEffect, useState } from "react";
import image from "../../images/deborah-rainford-zOlZgELBMRg-unsplash.jpg";

const RecipeInfo = (props: { data: any }) => {
    const [recipe, setRecipe] = useState(
        !localStorage.getItem("recipes")
            ? props.data
            : JSON.parse(localStorage.getItem("recipes")!)
    );

    useEffect(() => {
        const data = localStorage.getItem("recipes");
        if (data === null)
            localStorage.setItem("recipes", JSON.stringify(recipe));
    }, [recipe]);

    // useEffect(() => {
    //     const data = localStorage.getItem("recipes");
    //     if (data !== null && recipe !== null) setRecipe(JSON.parse(data));
    // }, []);

    return (
        <div className="container">
            <h1 className="text-center">Recipe Info</h1>
            {/* two divs for image and description */}
            <div id="recipeHeading" className="row row-cols-2">
                <div className="row">
                    <div className="container col-md-6">
                        <img
                            src={image}
                            alt="recipe"
                            className="img-fluid d-block"
                            height="400"
                            width="400"
                        />
                    </div>
                </div>
                <div className="container">
                    <h3 className="text-center">{recipe.RecipeName}</h3>
                    <p id="description" className="m-auto">
                        {recipe.RecipeDescription}
                    </p>
                    <div className="">
                        <h5>{recipe.RecipeServingSize}</h5>
                        <div className="row row-cols-2">
                            <label
                                className="d-none"
                                htmlFor="servingAdjustment"
                            >
                                Change serving size
                            </label>
                            <select name="servingAdjustment" id="servingSize">
                                <option value="">Select One</option>
                                <option value="half">1/2</option>
                                <option value="double">2</option>
                            </select>
                            <div>
                                <p id="prepTime">{recipe.RecipeCookTime}</p>
                            </div>
                            <div>
                                <p id="difficulty">{recipe.RecipeDifficulty}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3>Ingredients</h3>
                <ul>
                    {recipe.RecipeIngredients.map((item: any, index: any) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Instructions</h3>
                <ul>
                    <li>{recipe.RecipeInstructions}</li>
                </ul>
            </div>
        </div>
    );
};

export default RecipeInfo;

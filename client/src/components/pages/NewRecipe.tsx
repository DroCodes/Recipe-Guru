import React, { Component } from "react";

type myState = {
    // sets value of myState
    RecipeName: string;
    RecipeDescription: string;
    RecipeIngredients: string;
    RecipeInstructions: string;
    RecipeDifficulty: string;
    RecipeImage: string;
    RecipeCookTime: string;
    RecipeServingSize: string;
};
export class NewRecipe extends Component<any, myState> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props);
        this.state = {
            RecipeName: "",
            RecipeDescription: "",
            RecipeIngredients: "",
            RecipeInstructions: "",
            RecipeDifficulty: "",
            RecipeImage: "",
            RecipeCookTime: "",
            RecipeServingSize: "",
        };
    }

    // handleChange method
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as unknown as Pick<
            myState,
            keyof myState
        >);
    };

    // onSubmit()
    onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {
            RecipeName,
            RecipeDescription,
            RecipeIngredients,
            RecipeInstructions,
            RecipeDifficulty,
            RecipeImage,
            RecipeCookTime,
            RecipeServingSize,
        } = this.state;
        const recipe = {
            RecipeName,
            RecipeDescription,
            RecipeIngredients,
            RecipeInstructions,
            RecipeDifficulty,
            RecipeImage,
            RecipeCookTime,
            RecipeServingSize,
        };
        fetch("http://localhost:8080/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipe),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    render() {
        return (
            <div>
                <h1>New Recipe</h1>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="RecipeName">Recipe Name</label>
                    <input
                        type="text"
                        name="RecipeName"
                        id="RecipeName"
                        onChange={this.handleChange}
                        value={this.state.RecipeName}
                    />
                    <label htmlFor="RecipeDescription">
                        Recipe Description
                    </label>
                    <input
                        type="text"
                        name="RecipeDescription"
                        id="RecipeDescription"
                        onChange={this.handleChange}
                        value={this.state.RecipeDescription}
                    />
                    <label htmlFor="RecipeIngredients">
                        Recipe Ingredients
                    </label>
                    <input
                        type="text"
                        name="RecipeIngredients"
                        id="RecipeIngredients"
                        onChange={this.handleChange}
                        value={this.state.RecipeIngredients}
                    />
                    <label htmlFor="RecipeInstructions">
                        Recipe Instructions
                    </label>
                    <input
                        type="text"
                        name="RecipeInstructions"
                        id="RecipeInstructions"
                        onChange={this.handleChange}
                        value={this.state.RecipeInstructions}
                    />
                    <label htmlFor="RecipeDifficulty">Recipe Difficulty</label>
                    <input
                        type="text"
                        name="RecipeDifficulty"
                        id="RecipeDifficulty"
                        onChange={this.handleChange}
                        value={this.state.RecipeDifficulty}
                    />
                    <label htmlFor="RecipeCookTime">Recipe Cook Time</label>
                    <input
                        type="text"
                        name="RecipeCookTime"
                        id="RecipeCookTime"
                        onChange={this.handleChange}
                        value={this.state.RecipeCookTime}
                    />
                    <label htmlFor="RecipeServingSize">
                        Recipe Serving Size
                    </label>
                    <input
                        type="text"
                        name="RecipeServingSize"
                        id="RecipeServingSize"
                        onChange={this.handleChange}
                        value={this.state.RecipeServingSize}
                    />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default NewRecipe;

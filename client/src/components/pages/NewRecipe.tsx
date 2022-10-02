import React from "react";

const NewRecipe = () => {
  return (
    <div className="container">
      <h1 className="text-center">New Recipe</h1>
      <div>
        <form className="container form" action="">
          <div className="form-group  col-md-6 m-auto my-3">
            <label htmlFor="difficulty" className="form-control d-none">
              Recipe Name
            </label>
            <input
              type="text"
              name="difficulty"
              id="difficulty"
              placeholder="Recipe Name"
              className="form-control"
            />
          </div>
          <div className="form-group  col-md-6 m-auto my-3">
            <label htmlFor="servingSize" className="form-control d-none">
              Recipe Name
            </label>
            <input
              type="text"
              name="servingSize"
              id="servingsize"
              placeholder="Serving size"
              className="form-control"
            />
          </div>
          <div className="form-group  col-md-6 m-auto my-3">
            <label htmlFor="cookTime" className="form-control d-none">
              Recipe Name
            </label>
            <input
              type="text"
              name="cookTime"
              id="cookTime"
              placeholder="Recipe Name"
              className="form-control"
            />
          </div>
          <div className="form-group  col-md-6 m-auto my-3">
            <label htmlFor="difficulty" className="form-control d-none">
              Recipe Name
            </label>
            <input
              type="text"
              name="difficulty"
              id="difficulty"
              placeholder="Dificulty"
              className="form-control"
            />
          </div>
          <div className="form-group  col-md-6 m-auto my-3">
            <label htmlFor="ingredients" className="form-control d-none">
              Recipe Name
            </label>
            <p className="mb-0">
              Enter ingredient and quantity then click add ingredient
            </p>
            <div className="row row-cols-2">
              <div>
                <input
                  type="text"
                  name="ingredients"
                  id="ingredients"
                  placeholder="ingredient"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  placeholder="quantity"
                  className="form-control"
                />
              </div>
            </div>
            <button className="btn btn-dark mt-2">Add Ingredient</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;

import React from "react";
import { Link } from "react-router-dom";
import RecipeInfo from "./RecipeInfo";

const Home = (props: { recipe: { name: number; desc: string }[] }) => {
  return (
    <div>
      <h1 className="text-center">Recipe's</h1>
      <form className="d-flex flex-column justify-content-center align-items-center">
        <input
          type="text"
          id="search"
          className="col-md-8 col-lg-6 mt-1 mb-2"
          placeholder="Search Recipe's"
        />
        <button type="submit" className="btn btn-dark col-md-3 col-lg-2">
          Search
        </button>
      </form>
      <div id="recipe-list">
        {props.recipe.map((item) => (
          <Link
            to={"view-recipe/" + item.name}
            className="d-flex flex-column justify-content-center align-items-center w-100"
          >
            <div className="recipe custom-card col-12 col-sm-8 col-md-8 col-lg-6">
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

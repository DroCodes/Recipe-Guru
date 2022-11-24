import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NewRecipe from "./components/pages/NewRecipe";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import RecipeInfo from "./components/pages/RecipeInfo";
import { useEffect, useState } from "react";

function App() {
    const apiUrl = "http://localhost:8080/recipes";

    const [recipes, setRecipes]: any = useState([]);
    const [recipeData, setRecipeData] = useState([]);

    function useRecipeData(r: []) {
        setRecipeData(r);
        console.log(r);
    }

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setRecipes(data);
            });
    }, []);

    console.log(recipes);

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                recipe={recipes}
                                getRecipeData={useRecipeData}
                            />
                        }
                    />
                    <Route path="/new-recipe" element={<NewRecipe />} />
                    <Route
                        path="/view-recipe/:id"
                        element={<RecipeInfo data={recipeData} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NewRecipe from "./components/pages/NewRecipe";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import RecipeInfo from "./components/pages/RecipeInfo";

function App() {
  const testRecipe = [
    { name: 2, desc: "test" },
    { name: 2, desc: "test2" },
    { name: 3, desc: "test3" },
    { name: 4, desc: "test4" },
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home recipe={testRecipe} />} />
          <Route path="/new-recipe" element={<NewRecipe />} />
          <Route path="/view-recipe/:id" element={<RecipeInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react'
import "./componets/style.css"
import Meal from "./componets/Meal"
import Recipe from "./componets/Recipe"
import { Route,Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
 <Routes>
 <Route path="/" element={<Meal />} />
        <Route exact path="/:recipeId" element={<Recipe />} />
      </Routes>
    </>
    
  )
}

export default App;
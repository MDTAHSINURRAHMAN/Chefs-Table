import { useState } from "react";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id);
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe]);
    }
    else{
      alert('Recipe already exists in the queue');
    }
  }
  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      {/* Banner Section */}
      {/* Our Recipes Section */}
      {/* Recipe Card Section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Cards Section */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* Sidebar */}
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </div>
  );
};

export default App;
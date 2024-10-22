import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      {/* Banner Section */}
      {/* Our Recipes Section */}
      {/* Recipe Card Section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Cards Section */}
        <Recipes></Recipes>
        {/* Sidebar */}
        <Sidebar></Sidebar>
      </section>
    </div>
  );
};

export default App;
const Sidebar = ({recipeQueue}) => {
    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
            {/* Want To Cook Table */}
            <div className="overflow-x-auto">
                <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">Want To Cook: {recipeQueue.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        recipeQueue.map((recipe, index) => (
                        <tr className="hover" key={index}>
                        <th>{index + 1}</th>
                        <td>{recipe.recipe_name}</td>
                        <td>{recipe.preparing_time}</td>
                        <td>{recipe.calories}</td>
                        <td><button onClick={() => console.log('preparing')} className="btn bg-green-400 rounded-full px-2 py-1 md:px-4 my-2 text-gray-800 font-medium">Preparing</button></td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {/* Currently Cooking Table */}
        </div>
    );
};

export default Sidebar;
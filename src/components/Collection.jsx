import PropTypes from "prop-types";
import { useState } from "react";
import categories from "./data";
import { Link } from "react-router-dom";

function Collection({ addToCart = [] }) {
  const [activeCategory, setActiveCategory] = useState("Cloths");
  const [activeSubcategory, setActiveSubcategory] = useState("Men");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const subcategories = Object.keys(categories[category]);
    setActiveSubcategory(subcategories[0]); // Default to the first subcategory
  };

  return (
    <div className="p-6 bg-gray-100 font-Fira">
      <div className="">
        <h1 className="mb-6 text-3xl font-bold">Product Collection</h1>
        <div className="flex flex-col lg:flex-row ">
          {/* Categories */}
          <div className="flex gap-4 md:flex-col ">
            <div className="w-full md:w-64">
              <h2 className="mb-4 text-xl font-semibold">Categories</h2>
              <ul className="space-y-2">
                {Object.keys(categories).map((category) => (
                  <li
                    key={category}
                    className={`cursor-pointer p-2 rounded ${
                      category === activeCategory
                        ? "bg-blue-700 hover:bg-blue-800 text-white"
                        : "bg-white hover:bg-gray-200"
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Subcategories */}
            <div className="w-full md:pt-6 md:w-64">
              <h2 className="mb-4 text-xl font-semibold">Subcategories</h2>
              <ul className="space-y-2">
                {Object.keys(categories[activeCategory]).map((subcategory) => (
                  <li
                    key={subcategory}
                    className={`cursor-pointer p-2 rounded ${
                      subcategory === activeSubcategory
                        ? "bg-blue-700 hover:bg-blue-800 text-white"
                        : "bg-white hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveSubcategory(subcategory)}
                  >
                    {subcategory}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col items-center justify-center pt-6 lg:w-full md:pl-12 font-Fira lg:pl-12">
            <h2 className="mb-4 text-xl font-semibold ">Products</h2>
            <div className="grid items-center justify-center grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
              {categories[activeCategory][activeSubcategory].map((product) => (
                <div
                  key={product.id}
                  className="grid items-center justify-center w-full p-3 transition duration-300 transform bg-white rounded-lg shadow-lg items-left max-w-52 hover:scale-105"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 p-1 md:h-40 md:p-4 md:w-auto"
                  />
                  <h2 className="pt-4 text-md">{product.name}</h2>
                  <p className="text-gray-500">Price: ${product.price}</p>
                  <Link
                    to={`/product/${product.id}`}
                    className="inline-block my-2 text-blue-500 hover:underline"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => addToCart(product)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Collection.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
export default Collection;

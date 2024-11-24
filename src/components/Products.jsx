import PropTypes from "prop-types";
import plain_icon from "../assets/tees/PlainWhite.png";
import pattern_icon from "../assets/tees/Pattern.png";
import plain_white_jeans_icon from "../assets/tees/PlainJeans.png";
import pattern_grey_icon from "../assets/tees/PatternGrey.png";
import leather_bag from "../assets/tees/bag.png";
import casual_sweater from "../assets/tees/sweater.jpg";
import round_sunglasses from "../assets/tees/sung.jpg";
import women_top from "../assets/tees/womentoop.jpg";
import { Link } from "react-router-dom";

const productsData = [
  {
    id: 1,
    name: "Plain White T-Shirt",
    image: plain_icon,
    price: 999,
    description: "100% cotton",
    subcategory: "men",
  },
  {
    id: 2,
    name: "Pattern T-Shirt",
    image: pattern_icon,
    price: 999,
    description: "V-Neck 100% cotton",
    category: "men",
  },
  {
    id: 3,
    name: "Plain White Jeans",
    image: plain_white_jeans_icon,
    price: 999,
    description: "100% cotton",
    category: "men",
  },
  {
    id: 4,
    name: "Pattern T-Shirt",
    image: pattern_grey_icon,
    price: 999,
    description: "100% cotton",
    category: "men",
  },
  {
    id: 5,
    name: "Plain White Top",
    image: women_top,
    price: 999,
    description: "Cotton ",
    category: "women",
  },
  {
    id: 6,
    name: "Gray Leather Bag",
    image: leather_bag,
    price: 999,
    description: "Handbag",
    category: "accessories",
  },
  {
    id: 7,
    name: "Casual Sweater",
    image: casual_sweater,
    price: 999,
    description: "Woolen fabric",
    category: "women",
  },
  {
    id: 8,
    name: "Round Sunglasses",
    image: round_sunglasses,
    price: 999,
    description: "Golden Black",
    category: "accessories",
  },
];

const Products = ({ addToCart }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-6 font-Fira">
      <h1 className="flex items-center justify-center mb-4 text-2xl font-bold">
        Latest Collection
      </h1>
      <div className="grid items-center justify-center grid-cols-2 gap-4 m-2 hover:cursor-pointer lg:gap-y-4 sm:grid-cols-2 md:grid-cols-4 md-gap-2 lg:grid-cols-4 lg:p-6 lg:gap-10">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-center w-full p-3 transition duration-300 transform bg-white rounded-lg shadow-lg items-left max-w-52 hover:scale-105"
          >
            <img src={product.image} alt={product.name} className="w-40 h-40" />
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
  );
};

Products.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Products;

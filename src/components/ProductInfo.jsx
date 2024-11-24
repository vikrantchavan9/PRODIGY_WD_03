import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import categories from "./data"; // Import your categories
import { StarIcon } from "@heroicons/react/20/solid";

const ProductInfo = ({ addToCart }) => {
  const { id } = useParams(); // Get the product id from the URL
  const navigate = useNavigate();

  // Convert the id from params to a number for comparison
  const productId = parseInt(id, 10);

  // Function to find a product by its ID in the categories structure
  const findProductById = (id) => {
    // Flatten the nested categories structure into a single array of products
    const allProducts = Object.values(categories).flatMap((category) =>
      Object.values(category).flat()
    );

    // Find the product with the matching id
    return allProducts.find((product) => product.id === id);
  };

  const product = findProductById(productId);

  const reviews = { href: "#", average: 4, totalCount: 117 };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  if (!product) {
    return <p className="mt-12 text-center text-red-500">Product not found!</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mb-4 rounded md:mx-10 font-Fira">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="h-auto pt-5 mb-6 md:w-52"
        />
      </div>
      <div className="px-6 py-8 mx-6">
        <h1 className="text-2xl font-bold ">{product.name}</h1>
        {/* Reviews */}
        <div className="mt-3">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  aria-hidden="true"
                  className={classNames(
                    reviews.average > rating
                      ? "text-gray-900"
                      : "text-gray-200",
                    "size-5 shrink-0"
                  )}
                />
              ))}
            </div>
            <p className="sr-only">{reviews.average} out of 5 stars</p>
            <a
              href={reviews.href}
              className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              {reviews.totalCount} reviews
            </a>
          </div>
        </div>
        <p className="my-6 text-md">{product.description}</p>
        <p className="mb-6 text-xl font-semibold">Price: ${product.price}</p>
        <div className="flex gap-2">
          <button
            onClick={() => addToCart(product)}
            className="text-white w-36 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to Cart
          </button>
          <button
            onClick={() => navigate(-1)}
            className="text-white w-36 bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
ProductInfo.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
export default ProductInfo;

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems = [], updateQuantity }) => {
  // Default to empty array if undefined
  const navigate = useNavigate();

  // Calculate the total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Define tax and discount rates
  const TAX_RATE = 0.05; // 5% tax
  const DISCOUNT_RATE = 0.2; // 20% discount

  // Calculate tax, discount, and final total
  const subtotal = calculateTotal();
  const tax = subtotal * TAX_RATE;
  const discount = subtotal * DISCOUNT_RATE;
  const total = subtotal + tax - discount;

  return (
    <div className="flex flex-col items-center justify-center py-8 pb-16 mt-10 mb-6 bg-white font-Fira">
      <h1 className="mb-4 text-2xl font-bold">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <div className="max-w-full space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between w-full p-4 bg-white border rounded-lg shadow-md md:gap-4"
              >
                <div className="hidden md:flex ">
                  <img className="h-16" src={item.image} alt="item_image" />
                </div>
                <div className="flex-1 md:pr-8 md:w-64">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 mt-10 text-white bg-black rounded-xl hover:bg-blue-800"
                  >
                    -
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 mt-10 text-white bg-black rounded-xl hover:bg-blue-800"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => updateQuantity(item.id, 0)}
                  className="px-4 py-2 mt-10 ml-4 text-white bg-red-600 rounded-xl hover:bg-red-800"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          {/* Cart Summary */}
          <div className="flex flex-col items-center justify-center mt-6 font-normal text-right text-md ">
            <h1 className="mb-4 text-2xl font-bold">Cart Summary</h1>
            <p className="">Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <p>Discount : -${discount.toFixed(2)}</p>
            <p className="px-2 mt-4 text-white bg-black rounded w-36">
              Total: ${total.toFixed(2)}
            </p>
          </div>

          {/* Proceed to Checkout Button */}
          <div className="flex items-center justify-center mt-8">
            <button
              onClick={() => navigate("/checkout")}
              className="px-6 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default Cart;

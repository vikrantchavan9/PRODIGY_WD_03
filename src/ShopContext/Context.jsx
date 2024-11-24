import { createContext, useContext, useState, useEffect } from "react";

// Create ShopContext
const ShopContext = createContext();

// Provider component
export const ShopProvider = ({ children }) => {
  // Initialize cartItems state with a function to ensure robust localStorage loading
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart items from localStorage:", error);
      return [];
    }
  });

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cart items to localStorage:", error);
    }
  }, [cartItems]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to update the quantity of a cart item
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Clear cart items (optional utility function)
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems"); // Clear from localStorage as well
  };

  return (
    <ShopContext.Provider
      value={{ cartItems, addToCart, updateQuantity, clearCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};

// Custom hook to use the ShopContext
export const useShop = () => useContext(ShopContext);

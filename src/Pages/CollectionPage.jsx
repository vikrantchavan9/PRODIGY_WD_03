import { useState } from "react";
import Cart from "../components/Cart";
import Collection from "../components/Collection";
import Breadcrumbs from "../components/Breadcrumbs";

const CollectionPage = () => {
  const [cartItems, setCartItems] = useState([]); // Initialize cartItems as an empty array

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
  return (
    <div className="">
      <Breadcrumbs />
      <Collection addToCart={addToCart} />
      <Cart cartItems={cartItems} updateQuantity={updateQuantity} />
    </div>
  );
};

export default CollectionPage;

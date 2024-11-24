import Products from "../components/Products";
import Cart from "../components/Cart";
import Hero from "../components/Hero";
import { useShop } from "../ShopContext/Context";

const Homepage = () => {
  const { cartItems, addToCart, updateQuantity } = useShop();
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <div className="">
        <Products addToCart={addToCart} />
        <Cart cartItems={cartItems} updateQuantity={updateQuantity} />
      </div>
    </div>
  );
};

export default Homepage;

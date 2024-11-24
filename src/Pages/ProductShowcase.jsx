import Cart from "../components/Cart";
import ProductInfo from "../components/ProductInfo";
import { useShop } from "../ShopContext/Context";
import Breadcrumbs from "../components/Breadcrumbs";
const ProductShowcase = () => {
  const { addToCart, cartItems, updateQuantity } = useShop();

  return (
    <div>
      <Breadcrumbs />
      <div className="flex flex-col items-center justify-center gap-10 md:gap-24 lg:flex-row">
        <ProductInfo addToCart={addToCart} />
        <Cart cartItems={cartItems} updateQuantity={updateQuantity} />
      </div>
    </div>
  );
};

export default ProductShowcase;

import Breadcrumbs from "../components/Breadcrumbs";
import Cart from "../components/Cart";
import { useShop } from "../ShopContext/Context";

const CartSection = () => {
  const { cartItems, updateQuantity } = useShop();
  return (
    <div>
      <Breadcrumbs />
      <Cart cartItems={cartItems} updateQuantity={updateQuantity} />
    </div>
  );
};

export default CartSection;

import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import CollectionPage from "./Pages/CollectionPage";
import About from "./Pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductShowcase from "./Pages/ProductShowcase";
import { ShopProvider } from "./ShopContext/Context";
import CartSection from "./Pages/CartSection";

const App = () => {
  return (
    <div>
      <ShopProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductShowcase />} />
          <Route path="/cart" element={<CartSection />} />
        </Routes>
        <Footer />
      </ShopProvider>
    </div>
  );
};

export default App;

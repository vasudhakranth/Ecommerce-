import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/User Authentication/login.jsx';
import Register from './pages/User Authentication/signup.jsx';  
import { BsRouter } from 'react-icons/bs';
import './index.js';
import LandingPage from './pages/Splash/LandingPage.jsx';
import Home from './pages/Home.jsx';
import WomensFashion from "./pages/WomensFashion.jsx";
import Saree from "./pages/sare.jsx";
import Kurthi from "./pages/Kurthi.jsx";
import Tops from "./pages/womentop.jsx";
import Footwear from "./pages/footwear.jsx";
import Flats from "./pages/flat.jsx";
import Heels from "./pages/heels.jsx";
import Boots from "./pages/boots.jsx";
import Accessories from "./pages/Accessories.jsx";
import Jewelry from "./pages/Jewelry.jsx";
import Handbag from "./pages/Handbag.jsx";
import Watches from "./pages/Watches.jsx";
import Cart from "./pages/cart/Cart.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Profile from "./pages/Profile.jsx";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (  
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/womens-fashion" element={<WomensFashion />} />
        <Route path="/saree" element={<Saree />} />
        <Route path="/kurthi" element={<Kurthi />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/footwear" element={<Footwear />} />
        <Route path="/womens-footwear" element={<Footwear />} />
        <Route path="/flats" element={<Flats />} />
        <Route path="/heels" element={<Heels />} />
        <Route path="/boots" element={<Boots />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/handbag" element={<Handbag />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;

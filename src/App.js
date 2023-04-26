import { BrowserRouter, Routes, Route } from "react-router-dom";
//Style//
import Styles from "./App.scss";
//Layout//
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
//Pages//
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import Bag from "./pages/bag/Bag";
import Login from "./pages/login/Login";
import Buying from "./pages/buying/Buying";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buying" element={<Buying />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

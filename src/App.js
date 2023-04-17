import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
//Layout//
import Header from "./layout/header/Header";
//Pages//
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Header from "./layout/header/Header";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/download" element={<Download />} /> */}
        {/* <Route path="/SignUp" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "../src/components/Products";
import Accompaniment from "../src/components/Accompaniment";
import Experiences from "../src/components/Experiences";
import Testimonials from "../src/components/Testimonials";
import Embajadoras from "./components/Embajadoras";
import About from "../src/components/About";
import Navbar from "./components/Navbar";
import WhatsAppPresence from "./components/WhatsappSticky";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/acompanamiento" element={<Accompaniment />} />
        <Route path="/experiencias" element={<Experiences />} />
        <Route path="/testimonios" element={<Testimonials />} />
        <Route path="/embajadoras" element={<Embajadoras />} />
        <Route path="/sobre-mi" element={<About />} />
      </Routes>

      <WhatsAppPresence />
    </BrowserRouter>
  );
}

export default App;



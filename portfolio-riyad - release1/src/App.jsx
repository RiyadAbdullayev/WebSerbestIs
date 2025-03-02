// MAIN COMPONENTS
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import GradientIcons from "./components/ui/GradientIcons";

// ROUTING
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
// PAGES


function App() {
  return (
    <>
      <BrowserRouter>
        <GradientIcons />
        {/* that's the svg generator.It affect all gradient icons */}

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

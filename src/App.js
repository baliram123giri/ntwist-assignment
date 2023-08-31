import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Homepage from "./View/Homepage/Homepage";
import Sustainability from "./View/Sustainability/Sustainability";
import Mineral from "./View/Mineral/Mineral";
import Mine from "./View/Mine/Mine";
import Oil from "./View/Oil/Oil";
import Ai from "./View/Ai/Ai";
import ScrollToTopOnPageChange from "./Components/Scroll/ScrollToTopOnPageChange ";
import Blog from "./View/Blog/Blog";
import Contact from "./View/Contact/Contact";

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <ScrollToTopOnPageChange>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/mineral" element={<Mineral />} />
            <Route path="/mine" element={<Mine />} />
            <Route path="/oil" element={<Oil />} />
            <Route path="/ai" element={<Ai />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </ScrollToTopOnPageChange>
      </BrowserRouter>
    </div>
  );
}

export default App;

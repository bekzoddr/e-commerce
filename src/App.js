import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SingleRoute from "./pages/singleRoute/SingleRoute";
import Wishlist from "./pages/wishlist/Wishlist";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<SingleRoute />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

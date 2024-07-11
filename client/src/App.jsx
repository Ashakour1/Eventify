import "./App.css";
import Header from "./components/Header";
import HeroSection from "./pages/Hero-section";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContectPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import { Toaster } from "react-hot-toast";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

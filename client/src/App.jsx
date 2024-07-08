import "./App.css";
import Header from "./components/Header";
import HeroSection from "./pages/Hero-section";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import { Toaster } from "react-hot-toast";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HeroSection />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

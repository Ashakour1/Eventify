import "./App.css";
import Header from "./components/Header";
import HeroSection from "./pages/Hero-section";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
          </>} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

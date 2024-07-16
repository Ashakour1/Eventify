import "./App.css";
import Header from "./components/Header";
import HeroSection from "./pages/Hero-section";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Register-page";
import { Toaster } from "react-hot-toast";
import NotFound from "./components/NotFound";
import LoginPage from "./pages/Login-page";
import { Dashboard } from "./pages/Dashboard";
import QuickFindAnswers from "./components/QuickFindAnswers";
import Upcoming from "./components/UpcomingEvents";

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
                <QuickFindAnswers />
                <Upcoming/>
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <NotFound />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Header />
                <RegisterPage />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <AboutPage />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <ContactPage />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header />
                <LoginPage />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

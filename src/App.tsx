import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/landing-page/landing-page";
import Footer from "./components/footer/footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 40,
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container" id="pdf-content">
        <Navbar />
        <main className="main-content" style={{ overflowX: "hidden" }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

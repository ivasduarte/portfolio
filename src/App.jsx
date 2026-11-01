import { useState, useEffect } from "react";
import useLaptopZoom from "./hooks/useLaptopZoom";
import ptData from "./data/pt.json";
import enData from "./data/en.json";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import MainPortfolio from "./pages/MainPortfolio";
import OpenBookTerminal from "./pages/OpenBookTerminal";

import fundoDesktop from "./assets/fundo.png";
import fundoMobile from "./assets/fundo-movel.png";

export default function App() {
  const [language, setLanguage] = useState("pt");
  const [theme, setTheme] = useState("dark");
  const [isOpenBook, setIsOpenBook] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const content = language === "pt" ? ptData : enData;

  const zoom = useLaptopZoom();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  const toggleOpenBook = () => setIsOpenBook((prev) => !prev);

  if (isLoading) return <Loader />;

  return (
    <div className="relative min-h-screen pt-24 bg-slate-900 text-slate-200 overflow-x-hidden">
      {/* Imagem de fundo com opacidade original de 0.7 e zoom focado no portátil */}
      <div
        aria-hidden="true"
        className="fixed top-15 left-0 w-screen h-screen z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url(${isMobile ? fundoMobile : fundoDesktop})`,
          transformOrigin: zoom.origin,
          transform: isOpenBook ? `scale(${zoom.k})` : "scale(1)",
          opacity: isOpenBook ? 1 : 0.7,
          filter: isOpenBook ? "brightness(0.8)" : "none",
          transition:
            "transform 1.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease, filter 0.8s ease",
        }}
      ></div>

      <div className="relative z-10">
        <Navbar
          content={content.nav}
          theme={theme}
          toggleTheme={toggleTheme}
          language={language}
          toggleLanguage={toggleLanguage}
          isOpenBook={isOpenBook}
          toggleOpenBook={toggleOpenBook}
        />

        {isOpenBook ? (
          <OpenBookTerminal content={content} screen={zoom.screen} />
        ) : (
          <>
            <MainPortfolio content={content} />
            <Footer content={content.footer} />
          </>
        )}
      </div>
    </div>
  );
}

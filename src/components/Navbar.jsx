import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar({
  content,
  theme,
  toggleTheme,
  language,
  toggleLanguage,
  isOpenBook,
  toggleOpenBook,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-[#d4b28c]/20 transition-colors duration-300 flex justify-between items-center px-12 py-4 bg-[#f5f2eb]/95 text-[#2c2925] dark:bg-slate-900/85 dark:text-slate-200">
      {/* Logo */}
      <a
        href="#inicio"
        className="hover:scale-106 transition-transform mr-auto z-50"
      >
        <img src={logo} alt="IDS" className="h-10 w-auto dark:invert" />
      </a>

      {/* Links (Estilo exato do antigo: font-size 0.9rem, letter-spacing 0.5px) */}
      <div className="hidden xl:flex items-center gap-10">
        <a
          href="#sobre"
          className="font-semibold text-[0.9rem] tracking-[0.5px] hover:text-[#d4b28c] transition-colors"
        >
          {content.about}
        </a>
        <a
          href="#skills"
          className="font-semibold text-[0.9rem] tracking-[0.5px] hover:text-[#d4b28c] transition-colors"
        >
          {content.skills}
        </a>
        <a
          href="#projetos"
          className="font-semibold text-[0.9rem] tracking-[0.5px] hover:text-[#d4b28c] transition-colors"
        >
          {content.projects}
        </a>
        <a
          href="#projetos-pessoais"
          className="font-semibold text-[0.9rem] tracking-[0.5px] hover:text-[#d4b28c] transition-colors"
        >
          {content.personalProjs}
        </a>
        <a
          href="#certificacoes"
          className="font-semibold text-[0.9rem] tracking-[0.5px] hover:text-[#d4b28c] transition-colors"
        >
          {content.certs}
        </a>
        <a
          href="#contacto"
          className="border border-[#d4b28c] text-[#d4b28c] px-[1.1rem] py-2 rounded-lg hover:bg-[#d4b28c] hover:text-slate-900 transition-all font-semibold text-[0.9rem]"
        >
          {content.contact}
        </a>
      </div>

      {/* Controles (Idioma, Tema, Livro) */}
      <div className="flex items-center gap-4 z-50 ml-6">
        <button
          onClick={toggleLanguage}
          className="font-bold text-[0.9rem] hover:text-[#d4b28c] transition-colors"
        >
          {language.toUpperCase()}
        </button>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-[#d4b28c] text-[#d4b28c] hover:bg-[#d4b28c] hover:text-slate-900 transition-all"
        >
          {theme === "dark" ? (
            <FaMoon size={14} />
          ) : (
            <FaSun size={14} className="text-slate-800" />
          )}
        </button>

        <button
          onClick={toggleOpenBook}
          className="text-[#d4b28c] hover:text-[#e6c59d] transition-colors focus:outline-none flex items-center justify-center w-7 h-7"
          title="Open Book Mode"
        >
          <svg viewBox="0 0 32 32" width="28" height="28">
            <g
              className={`transition-all duration-400 origin-center ${isOpenBook ? "opacity-0 scale-50" : "opacity-100 scale-100"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="5"
                y="4"
                width="22"
                height="24"
                rx="2"
                fill="currentColor"
                fillOpacity="0.1"
              />
              <line
                x1="10"
                y1="4"
                x2="10"
                y2="28"
                strokeWidth="1.2"
                opacity="0.6"
              />
              <line x1="14" y1="10" x2="22" y2="10" strokeWidth="1.2" />
              <line x1="14" y1="14" x2="20" y2="14" strokeWidth="1.2" />
            </g>
            <g
              className={`transition-all duration-400 origin-center ${isOpenBook ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
              fill="currentColor"
            >
              <path
                d="M 16 7 C 12 5, 4 6, 2 8 L 2 24 C 4 22, 12 21, 16 23 Z"
                fillOpacity="0.2"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M 16 8 C 12 6, 5 7, 3 9 L 3 25 C 5 23, 12 22, 16 24 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M 16 7 C 20 5, 28 6, 30 8 L 30 24 C 28 22, 20 21, 16 23 Z"
                fillOpacity="0.2"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M 16 8 C 20 6, 27 7, 29 9 L 29 25 C 27 23, 20 22, 16 24 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="16"
                y1="7"
                x2="16"
                y2="24"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </button>

        {/* Botão Hamburguer para Telemóveis */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden text-[#d4b28c] hover:text-[#e6c59d] transition-colors focus:outline-none p-1 ml-1"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Menu Dropdown Telemóvel */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#f5f2eb] dark:bg-slate-900 border-b border-[#d4b28c]/20 shadow-2xl py-6 px-8 flex flex-col gap-4 xl:hidden">
          <a
            href="#sobre"
            onClick={handleLinkClick}
            className="font-semibold text-[0.9rem] hover:text-[#d4b28c] transition-colors py-2 border-b border-slate-700/10 dark:border-slate-700/50"
          >
            {content.about}
          </a>
          <a
            href="#skills"
            onClick={handleLinkClick}
            className="font-semibold text-[0.9rem] hover:text-[#d4b28c] transition-colors py-2 border-b border-slate-700/10 dark:border-slate-700/50"
          >
            {content.skills}
          </a>
          <a
            href="#projetos"
            onClick={handleLinkClick}
            className="font-semibold text-[0.9rem] hover:text-[#d4b28c] transition-colors py-2 border-b border-slate-700/10 dark:border-slate-700/50"
          >
            {content.projects}
          </a>
          <a
            href="#personal-projects"
            onClick={handleLinkClick}
            className="font-semibold text-[0.9rem] hover:text-[#d4b28c] transition-colors py-2 border-b border-slate-700/10 dark:border-slate-700/50"
          >
            {content.personalProjs}
          </a>
          <a
            href="#certificacoes"
            onClick={handleLinkClick}
            className="font-semibold text-[0.9rem] hover:text-[#d4b28c] transition-colors py-2 border-b border-slate-700/10 dark:border-slate-700/50"
          >
            {content.certs}
          </a>
          <a
            href="#contacto"
            onClick={handleLinkClick}
            className="mt-2 text-center border border-[#d4b28c] text-[#d4b28c] px-4 py-2.5 rounded-lg bg-[#d4b28c]/10 hover:bg-[#d4b28c] hover:text-slate-900 transition-all font-semibold text-[0.9rem]"
          >
            {content.contact}
          </a>
        </div>
      )}
    </nav>
  );
}

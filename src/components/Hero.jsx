import useTypewriter from "../hooks/useTypewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero({ content }) {
  const { displayedLines, currentLine } = useTypewriter(content.typewriter);

  return (
    <header
      id="inicio"
      className="min-h-[50vh] flex flex-col justify-center items-center md:items-end text-center md:text-right w-full pt-20 md:pt-32 pb-16"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8">
        <span className="text-[#d4b28c]">{content.name}</span>
      </h1>

      <div className="font-mono text-sm sm:text-base md:text-lg leading-relaxed min-h-30 max-w-full md:max-w-162.5">
        {content.typewriter.map((_, index) => (
          <div key={index} className="min-h-6 mb-2 text-[#d4b28c]">
            {displayedLines[index]}
            {currentLine === index && (
              <span className="inline-block w-0.5 h-[1.1em] bg-[#d4b28c] ml-0.5 animate-pulse align-text-bottom"></span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-6 justify-center md:justify-end w-full">
        <a
          href="https://github.com/ivasduarte"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-700 dark:border-[#d4b28c]/30 text-slate-700 dark:text-slate-200 hover:bg-[#8c6d53] hover:text-white dark:hover:bg-[#d4b28c] dark:hover:text-slate-900 transition-all shadow-md"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://linkedin.com/in/iva-silva-92a79a438"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-700 dark:border-[#d4b28c]/30 text-slate-700 dark:text-slate-200 hover:bg-[#8c6d53] hover:text-white dark:hover:bg-[#d4b28c] dark:hover:text-slate-900 transition-all shadow-md"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="mailto:ivaduartesilva2006@gmail.com"
          className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-700 dark:border-[#d4b28c]/30 text-slate-700 dark:text-slate-200 hover:bg-[#8c6d53] hover:text-white dark:hover:bg-[#d4b28c] dark:hover:text-slate-900 transition-all shadow-md"
        >
          <FaEnvelope size={22} />
        </a>
      </div>
    </header>
  );
}
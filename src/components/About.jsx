import { FaTerminal } from "react-icons/fa";
import cvPdf from "../assets/cv.pdf";

export default function About({ content }) {
  return (
    <section id="sobre" className="pt-24 mb-24">
      <h2 className="text-2xl font-bold mb-10 flex items-center gap-4 justify-end">
        <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#8c6d53] dark:to-[#d4b28c] mr-4 opacity-50"></div>
        <FaTerminal className="text-[#8c6d53] dark:text-[#d4b28c]" />
        <span>{content.title}</span>
      </h2>

      <div className="card-glow bg-white/90 dark:bg-slate-800/85 backdrop-blur-md p-8 rounded-xl border border-[#8c6d53]/20 dark:border-[#d4b28c]/20 text-slate-900 dark:text-slate-200">
        <p className="mb-4 opacity-90">{content.p1}</p>
        <p className="mb-8 opacity-90">{content.p2}</p>

        {/* Nome do ficheiro */}
        <a
          href={cvPdf}
          download="CV_Iva_Silva.pdf"
          className="inline-flex items-center gap-2 bg-[#8c6d53]/10 dark:bg-[#d4b28c]/10 text-[#8c6d53] dark:text-[#d4b28c] px-6 py-3 rounded-lg border border-[#8c6d53]/30 dark:border-[#d4b28c]/30 font-semibold hover:bg-[#8c6d53] hover:text-[#f5f2eb] dark:hover:bg-[#d4b28c] dark:hover:text-slate-900 transition-all"
        >
          {content.cvButton}
        </a>
      </div>
    </section>
  );
}
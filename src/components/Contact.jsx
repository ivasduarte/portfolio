import { FaPaperPlane } from "react-icons/fa";
import cvPdf from "../assets/cv.pdf";

export default function Contact({ content }) {
  return (
    <section id="contacto" className="pt-24 mb-24">
      <h2 className="text-2xl font-bold mb-10 flex items-center gap-4 justify-end">
        <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#8c6d53] dark:to-[#d4b28c] mr-4 opacity-50"></div>
        <FaPaperPlane className="text-[#8c6d53] dark:text-[#d4b28c]" />
        <span className="text-[#2c2925] dark:text-slate-200">
          {content.title}
        </span>
      </h2>

      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-[70%] p-8 md:p-10 rounded-xl bg-[#8c6d53] dark:bg-[#d4b28c] text-[#f5f2eb] dark:text-slate-900 shadow-xl relative z-10">
          <span className="text-sm tracking-wide uppercase opacity-90">
            {content.emailLabel}
          </span>
          <a
            href={`mailto:${content.email}`}
            className="block my-4 text-lg md:text-xl lg:text-2xl font-bold hover:underline tracking-tight whitespace-normal sm:whitespace-nowrap"
          >
            {content.email}
          </a>
          <p className="text-sm font-medium opacity-90">{content.message}</p>
        </div>

        <div className="w-full md:w-[40%] mt-6 md:mt-16 md:ml-[-10%] p-10 md:pl-[calc(10%+2rem)] rounded-xl border border-[#8c6d53]/20 dark:border-[#d4b28c]/20 text-slate-900 dark:text-slate-200 bg-white/85 dark:bg-slate-900/75 backdrop-blur-md text-center relative z-0">
          <p className="mb-2 text-sm">{content.moreLabel}</p>
          <p className="mb-2 text-sm">{content.socialLabel}</p>
          <a
            href="https://linkedin.com/in/iva-silva-92a79a438"
            target="_blank"
            rel="noreferrer"
            className="block w-fit mx-auto mt-2 border-b-2 border-[#8c6d53] dark:border-[#d4b28c] font-bold uppercase tracking-wide hover:text-[#8c6d53] dark:hover:text-[#d4b28c] text-slate-900 dark:text-slate-200 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ivasduarte"
            target="_blank"
            rel="noreferrer"
            className="block w-fit mx-auto mt-2 border-b-2 border-[#8c6d53] dark:border-[#d4b28c] font-bold uppercase tracking-wide hover:text-[#8c6d53] dark:hover:text-[#d4b28c] text-slate-900 dark:text-slate-200 transition-colors"
          >
            GitHub
          </a>
          <p className="my-2 text-sm">{content.orLabel}</p>
          <a
            href={cvPdf}
            download="CV_Iva_Silva.pdf"
            className="block w-fit mx-auto border-b-2 border-[#8c6d53] dark:border-[#d4b28c] font-bold uppercase tracking-wide hover:text-[#8c6d53] dark:hover:text-[#d4b28c] text-slate-900 dark:text-slate-200 transition-colors"
          >
            {content.cvLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

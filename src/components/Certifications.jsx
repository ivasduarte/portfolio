import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

export default function Certifications({ content }) {
  return (
    <section id="certificacoes" className="pt-24 mb-24">
      <h2 className="text-2xl font-bold mb-10 flex items-center gap-4 justify-end">
        <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#d4b28c] mr-4 opacity-50"></div>
        <FaCertificate className="text-[#8c6d53] dark:text-[#d4b28c]" />
        <span>{content.title}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.list.map((cert, index) => (
          <div
            key={index}
            className="bg-white/85 dark:bg-slate-900/75 backdrop-blur-md p-6 rounded-lg border-y border-r border-[#8c6d53]/20 dark:border-[#d4b28c]/20 border-l-4 border-l-[#8c6d53]/20 dark:border-l-[#d4b28c]/20 transition-all duration-300 hover:border-l-[#8c6d53] dark:hover:border-l-[#d4b28c] text-slate-900 dark:text-slate-200 hover:-translate-x-1 hover:shadow-lg"
          >
            <div className="flex justify-between items-start mb-2 gap-4">
              <span className="font-semibold text-base">{cert.name}</span>
              <span className="text-[#8c6d53] dark:text-[#d4b28c] text-xs font-mono bg-[#8c6d53]/10 dark:bg-[#d4b28c]/10 px-2 py-1 rounded whitespace-nowrap">
                {cert.date}
              </span>
            </div>
            <div className="text-sm opacity-70 mb-3">{cert.org}</div>
            <ul className="text-sm opacity-80 mb-4 list-disc list-inside">
              {cert.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#8c6d53] dark:text-[#d4b28c] text-sm font-semibold hover:underline"
            >
              <FaExternalLinkAlt /> Ver Credencial
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
import {
  FaCodeBranch,
  FaArrowRight,
  FaCubes,
  FaNetworkWired,
} from "react-icons/fa";
import { DiNodejs, DiJsBadge, DiReact, DiVisualstudio } from "react-icons/di";
import { GiTargetDummy } from "react-icons/gi";
import { SiMermaid } from "react-icons/si";

const tagIcons = {
  "Node.js": <DiNodejs />,
  JavaScript: <DiJsBadge />,
  React: <DiReact />,
  "Visual Studio": <DiVisualstudio />,
  DDD: <FaCubes />,
  "TCP Sockets": <FaNetworkWired />,
  "Dummy Objects": <GiTargetDummy />,
  Mermaid: <SiMermaid />,
};

export default function PersonalProjects({ content }) {
  return (
    <section id="projetos-pessoais" className="pt-24 mb-24">
      <h2 className="text-2xl font-bold mb-10 flex items-center gap-4 justify-end">
        <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#d4b28c] mr-4 opacity-50"></div>
        <FaCodeBranch className="text-[#8c6d53] dark:text-[#d4b28c]" />
        <span>{content.title}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {content.list.map((project, index) => (
          <div
            key={index}
            className="card-glow flex flex-col bg-white/85 dark:bg-slate-900/75 backdrop-blur-md p-8 rounded-xl border border-[#8c6d53]/20 dark:border-[#d4b28c]/20 text-slate-900 dark:text-slate-200"
          >
            <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
            <p className="opacity-85 text-sm mb-6 grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 w-fit bg-[#8c6d53]/10 dark:bg-[#d4b28c]/10 text-[#8c6d53] dark:text-[#d4b28c] border border-[#8c6d53]/20 dark:border-[#d4b28c]/20 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {tagIcons[tag]} {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-[#d4b28c]/20 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#8c6d53] hover:text-white dark:hover:bg-[#d4b28c] text-slate-900 dark:text-slate-200 hover:border-[#8c6d53] dark:hover:border-[#d4b28c] transition-all w-fit"
            >
              Source Code <FaArrowRight className="text-xs" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
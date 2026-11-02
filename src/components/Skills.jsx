import { FaLayerGroup } from "react-icons/fa";

export default function Skills({ content }) {
  return (
    <section id="skills" className="pt-24 mb-24">
      <h2 className="text-2xl font-bold mb-10 flex items-center gap-4 justify-end">
        <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#d4b28c] mr-4 opacity-50"></div>
        <FaLayerGroup className="text-[#8c6d53] dark:text-[#d4b28c] " />
        <span>{content.title}</span>
      </h2>

      <div className="bg-white/85 dark:bg-slate-900/75 backdrop-blur-md p-8 rounded-xl border border-[#8c6d53]/20 dark:border-[#d4b28c]/20 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:border-[#8c6d53] dark:hover:border-[#d4b28c] text-slate-900 dark:text-slate-200">
        {content.categories.map((category, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <h3 className="text-lg font-semibold mb-4 border-b border-dashed border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 pb-2">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item, i) => (
                <span
                  key={i}
                  className="bg-[#8c6d53]/5 dark:bg-[#d4b28c]/10 text-slate-900 dark:text-slate-200 px-4 py-2 rounded-lg border border-[#8c6d53]/20 dark:border-[#d4b28c]/20 text-sm flex items-center gap-2 hover:border-[#8c6d53] dark:hover:border-[#d4b28c]  transition-colors"
                >
                  <span className="text-[#8c6d53] dark:text-[#d4b28c] ">•</span>{" "}
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

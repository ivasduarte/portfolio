import { FaCoffee, FaHeadphones } from "react-icons/fa";

export default function Footer({ content }) {
  return (
    <footer className="text-center py-10 px-4 opacity-80 text-xs md:text-sm border-t border-[#8c6d53]/20 dark:border-[#d4b28c]/20 mt-12 bg-transparent text-[#8c6d53] dark:text-slate-200">
      <p className="flex items-center justify-center gap-2 flex-wrap">
        {content.text}{" "}
        <FaCoffee className="text-[#8c6d53] dark:text-slate-200" /> e{" "}
        <FaHeadphones className="text-[#8c6d53] dark:text-slate-200" />
      </p>
    </footer>
  );
}

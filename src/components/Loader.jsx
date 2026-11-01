import logo from "../assets/logo.png";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-9999 bg-slate-900 flex flex-col items-center justify-center">
      <img src={logo} alt="Logo" className="w-24 mb-6 animate-pulse invert" />
      <div className="w-48 h-1 bg-[#d4b28c]/20 rounded overflow-hidden">
        <div className="h-full bg-[#d4b28c] animate-progress"></div>
      </div>
    </div>
  );
}
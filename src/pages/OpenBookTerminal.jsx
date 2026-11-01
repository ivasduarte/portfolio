import { useState, useEffect } from "react";
import { FaBookOpen } from "react-icons/fa";

export default function OpenBookTerminal({ content, screen }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detetar redimensionamento para alternar entre mobile e desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Temporizador de entrada do texto
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Se for mobile, centra o terminal. Se for desktop, usa as coordenadas do ecrã do portátil.
  const containerStyle = isMobile
    ? { top: "12vh", left: "5%", width: "90%", height: "85vh" }
    : {
        top: screen?.top || 0,
        left: screen?.left || 0,
        width: screen?.width || "100%",
        height: screen?.height || "100%",
      };

  return (
    <div
      className="fixed z-50 overflow-y-auto scrollbar-hide"
      style={containerStyle}
    >
      <div
        className={`w-full max-w-200 mx-auto bg-transparent py-4 md:py-6 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-3 text-slate-200 font-['Poppins']">
          <FaBookOpen className="text-[#d4b28c]" />
          open-book-details.js
        </h2>

        {/* Adicionados p-4 md:p-8 e text-sm md:text-base para melhor adaptação no telemóvel */}
        <div className="bg-[#1e1e1e] text-[#d4d4d4] p-4 md:p-8 rounded-xl shadow-2xl border border-white/10 font-['Anonymous_Pro'] text-sm md:text-base leading-relaxed overflow-x-auto scrollbar-hide">
          <pre className="whitespace-pre-wrap wrap-break-word">
            <code>
              <span className="text-[#569cd6]">const</span>{" "}
              <span className="text-[#4fc1ff]">aboutMe</span>{" "}
              <span className="text-[#d4d4d4]">=</span> {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-[#9cdcfe]">name</span>:{" "}
              <span className="text-[#ce9178]">"Iva Duarte Silva"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-[#9cdcfe]">birth</span>:{" "}
              <span className="text-[#ce9178]">"January 10, 2006"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-[#9cdcfe]">city</span>:{" "}
              <span className="text-[#ce9178]">"Porto"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-[#9cdcfe]">country</span>:{" "}
              <span className="text-[#ce9178]">"Portugal"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-[#9cdcfe]">email</span>:{" "}
              <a
                href="mailto:ivaduartesilva2006@gmail.com"
                className="text-[#ce9178] underline hover:opacity-80"
              >
                "ivaduartesilva2006@gmail.com"
              </a>
              ,
              <br />
              &nbsp;&nbsp;<span className="text-[#9cdcfe]">role</span>:{" "}
              <span className="text-[#ce9178]">
                "Final-year computer engineering student at ISEP"
              </span>
              <br />
              {"}"};
              <br />
              <br />
              <span className="text-[#569cd6]">const</span>{" "}
              <span className="text-[#4fc1ff]">skills</span>{" "}
              <span className="text-[#d4d4d4]">=</span> {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-[#9cdcfe]">backend</span>: [
              <span className="text-[#ce9178]">"Java 21"</span>,{" "}
              <span className="text-[#ce9178]">"C / POSIX"</span>,{" "}
              <span className="text-[#ce9178]">"Python"</span>,{" "}
              <span className="text-[#ce9178]">"SQL / PL/SQL"</span>,{" "}
              <span className="text-[#ce9178]">"Assembly"</span>],
              <br />
              &nbsp;&nbsp;<span className="text-[#9cdcfe]">architecture</span>:
              [
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#ce9178]">
                "Domain-Driven Design (DDD)"
              </span>
              ,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#ce9178]">
                "Test-Driven Development (TDD)"
              </span>
              ,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#ce9178]">"Scrum / Agile"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#ce9178]">"Mermaid"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#ce9178]">"PlantUML"</span>
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;<span className="text-[#9cdcfe]">infrastructure</span>
              : [
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#ce9178]">"Linux"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#ce9178]">"Cisco Packet Tracer"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#ce9178]">"OSPF / VLAN / ACLs"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#ce9178]">"Maven"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#ce9178]">"Git / GitHub"</span>
              <br />
              &nbsp;&nbsp;]
              <br />
              {"}"};
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
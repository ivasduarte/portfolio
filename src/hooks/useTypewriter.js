import { useState, useEffect } from "react";

export default function useTypewriter(lines, speed = 40, delay = 500) {
  const [displayedLines, setDisplayedLines] = useState(
    Array(lines.length).fill(""),
  );
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  // Reset do motor quando o idioma (lines) muda
  useEffect(() => {
    setDisplayedLines(Array(lines.length).fill(""));
    setCurrentLine(0);
    setCurrentChar(0);
  }, [lines]);

  // Algoritmo de escrita
  useEffect(() => {
    if (currentLine >= lines.length) return;

    const text = lines[currentLine];

    if (currentChar < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLine] = text.substring(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentChar, currentLine, lines, speed, delay]);

  return { displayedLines, currentLine };
}
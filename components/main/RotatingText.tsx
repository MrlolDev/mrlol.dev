import { useEffect, useState } from "react";

interface RotatingTextProps {
  words: string[];
  wordIndex: number;
}

export default function RotatingText({ words, wordIndex }: RotatingTextProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300); // Match this with CSS transition duration

    return () => clearTimeout(timer);
  }, [wordIndex]);

  return (
    <div className="h-[72px] overflow-hidden">
      <h1
        className={`text-6xl font-normal text-gray-500 transition-transform duration-300 ease-in-out ${
          isTransitioning
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        {words[wordIndex % words.length]}
      </h1>
    </div>
  );
}

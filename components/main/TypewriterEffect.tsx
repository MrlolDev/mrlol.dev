"use client";

import { useState, useEffect, useCallback } from "react";

interface TypewriterEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  onWordChange?: (index: number) => void;
}

export default function TypewriterEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 4000,
  onWordChange,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const updateWordIndex = useCallback(() => {
    const newIndex = (wordIndex + 1) % words.length;
    setWordIndex(newIndex);
    if (onWordChange) {
      onWordChange(newIndex);
    }
  }, [wordIndex, words.length, onWordChange]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentWord = words[wordIndex];

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        updateWordIndex();
      } else {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (displayText === currentWord) {
        setIsPaused(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    wordIndex,
    isDeleting,
    isPaused,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    updateWordIndex,
  ]);

  return (
    <span className="text-gray-500">
      {displayText}
      <span
        className={`inline-block w-[2px] h-12 ml-[2px] bg-gray-500 relative top-[3px] ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}

"use client";

import { useState } from "react";
import RotatingImage from "./RotatingImage";
import TypewriterEffect from "./TypewriterEffect";
import RotatingText from "./RotatingText";
import Link from "next/link";

const names = ["Mrlol", "Leo", "MrlolDev", "Leonardo"];
const roles = ["builder", "entrepreneur", "developer", "student"];

export default function Main() {
  const [wordIndex, setWordIndex] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center md:items-start gap-4 w-full max-w-4xl px-4 md:px-6 mx-auto">
        <div className="mb-2 flex items-center justify-center md:justify-start">
          <RotatingImage
            images={["/pfp/1.png", "/pfp/2.png", "/pfp/3.png", "/pfp/4.png"]}
            wordIndex={wordIndex}
            alt="MrlolDev / Leo / MrlolDev / Leonardo profile picture"
          />
        </div>
        <div className="flex flex-row items-baseline gap-2">
          <h1 className="text-3xl md:text-6xl font-normal">I&apos;m</h1>
          <h1 className="text-3xl md:text-6xl font-normal flex flex-row items-baseline gap-2">
            <div className="w-[150px] md:w-[450px]">
              <TypewriterEffect
                words={names}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={3000}
                onWordChange={setWordIndex}
              />
            </div>
          </h1>
        </div>
        <div className="flex flex-row items-baseline gap-2">
          <h1 className="text-3xl md:text-6xl font-normal">I&apos;m a</h1>
          <div className="w-[150px] md:w-[450px]">
            <RotatingText words={roles} wordIndex={wordIndex} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto md:items-baseline justify-center md:justify-start">
          <Link href="/story" className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 ease-in-out">
              📖 Read my story
            </button>
          </Link>
          {[
            { href: "/projects", text: "View my projects", emoji: "🚀" },
            { href: "/travels", text: "View my travels", emoji: "✈️" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-transparent border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-medium hover:border-gray-900 transition-all duration-300 ease-in-out">
                {link.emoji} {link.text}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

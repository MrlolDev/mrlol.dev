import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/MrlolDev",
    label: "GitHub",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/leo.rlhf",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/leonardo-ollero",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/mrloldev",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:contact@mrlol.dev",
    label: "Email",
  },
];

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "fixed bottom-0 left-0 right-0 w-[100vw] py-4 sm:py-6 px-4 sm:px-6 backdrop-blur-4xl bg-white/10 z-10",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-3 sm:gap-4">
        <div className="text-xs sm:text-sm text-black text-center sm:text-left">
          <span className="sm:hidden">
            © {new Date().getFullYear()} Leonardo Ollero.
          </span>
          <span className="hidden sm:inline">
            © {new Date().getFullYear()} Leonardo Ollero. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6 sm:gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors p-2 -m-2 rounded-lg hover:bg-white/20 active:bg-white/30"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6 sm:w-5 sm:h-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

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
        "absolute bottom-0 w-[100vw] py-6 px-4 backdrop-blur-4xl bg-white/10",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-black">
          © {new Date().getFullYear()} Leonardo Ollero. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

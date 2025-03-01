import Link from "next/link";
import { cn } from "@/lib/utils";
export default function BackButton({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 bg-white rounded-lg hover:bg-gray-50 shadow-sm border border-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transform transition-transform duration-300 group-hover:-translate-x-1"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Back
    </Link>
  );
}

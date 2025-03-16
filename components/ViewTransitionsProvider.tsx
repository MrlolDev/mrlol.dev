"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ViewTransitionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (!document.startViewTransition) {
      return;
    }

    document.documentElement.style.setProperty(
      "view-transition-name",
      "page-transition"
    );

    // Add smooth scroll behavior during transitions
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, [pathname]);

  return <>{children}</>;
}

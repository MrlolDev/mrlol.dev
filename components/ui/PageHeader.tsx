import BackButton from "./BackButton";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  showBackButton = true,
  className,
  children,
}: PageHeaderProps) {
  return (
    <div className={cn("w-full flex flex-col gap-4 sm:gap-6", className)}>
      {/* Top section with back button and optional content */}
      <div className="w-full flex flex-row items-center gap-4 sm:gap-0 justify-between">
        {showBackButton && (
          <div className="py-2 sm:py-2.5">
            <BackButton />
          </div>
        )}
        {children && (
          <div className="flex-1 flex justify-center sm:justify-end">
            {children}
          </div>
        )}
      </div>

      {/* Header section with title and subtitle */}
      <header className="w-full text-center mb-2">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2 pb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </header>
    </div>
  );
}

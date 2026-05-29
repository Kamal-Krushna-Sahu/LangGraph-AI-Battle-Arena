import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg sm:text-xl font-bold font-[var(--font-headline)] tracking-tight text-[var(--color-text-primary)]">
              AI Battle Arena
            </h1>
          </div>

          {/* Nav Links - Desktop */}
          {/* <div className="hidden md:flex items-center gap-6">
            <span className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors cursor-pointer">
              History
            </span>
            <span className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors cursor-pointer">
              Models
            </span>
            <span className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors cursor-pointer">
              About
            </span>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

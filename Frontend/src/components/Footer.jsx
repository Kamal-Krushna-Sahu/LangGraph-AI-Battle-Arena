import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[var(--color-primary)]" />
            <span className="text-sm font-medium text-[var(--color-text-muted)]">
              AI Battle Arena
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} AI Battle Arena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

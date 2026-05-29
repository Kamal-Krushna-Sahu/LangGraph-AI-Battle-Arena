import { Loader2, Swords } from "lucide-react";

export default function LoadingBattle() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 px-4">
      {/* Animated Battle Icon */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center animate-battle-pulse">
          <Swords className="w-12 h-12 text-white" />
        </div>
        {/* Spinning ring */}
        <div className="absolute inset-[-8px] rounded-full border-2 border-transparent border-t-[var(--color-primary)] border-r-[var(--color-secondary)] animate-spin-slow" />
      </div>

      {/* Text */}
      <div className="text-center space-y-3">
        <h2 className="text-xl sm:text-2xl font-[var(--font-headline)] font-bold text-[var(--color-text-primary)]">
          Battle in Progress
        </h2>
        <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-md">
          Two AI models are generating their solutions. The judge is preparing
          to evaluate...
        </p>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"
            style={{
              animation: `battle-pulse 1.4s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Skeleton Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl mt-4">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="glass rounded-2xl p-6 space-y-4"
          >
            <div className="h-5 w-32 rounded-lg animate-shimmer" />
            <div className="h-4 w-full rounded-lg animate-shimmer" />
            <div className="h-4 w-3/4 rounded-lg animate-shimmer" />
            <div className="h-20 w-full rounded-xl animate-shimmer" />
            <div className="h-4 w-1/2 rounded-lg animate-shimmer" />
          </div>
        ))}
      </div>
    </div>
  );
}

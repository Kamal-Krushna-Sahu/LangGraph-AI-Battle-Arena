import { useState } from "react";
import { Zap, Swords, SendHorizontal } from "lucide-react";
import FeatureCards from "../components/FeatureCards";

export default function HomePage({ onStartBattle }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onStartBattle(query.trim());
    }
  };

  return (
    <div className="flex-1 bg-grid-pattern">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] px-4 py-12 sm:py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-14 opacity-0 animate-fade-in-up">
          {/* Hero Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-headline)] mb-4 tracking-tight">
            <span className="gradient-text">AI Battle Arena</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base lg:text-lg text-[var(--color-text-muted)] max-w-lg mx-auto leading-relaxed">
            Pit two AI models against each other. Submit a prompt. Watch them
            compete. Let the judge decide.
          </p>
        </div>

        {/* Input Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mx-auto opacity-0 animate-fade-in-up stagger-2"
        >
          <div className="glass rounded-2xl p-4 sm:p-5">
            <textarea
              id="battle-prompt-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your battle prompt..."
              rows={4}
              className="w-full bg-transparent text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] text-sm sm:text-base resize-none border border-[var(--color-border)] rounded-xl p-3 sm:p-4 focus:border-[var(--color-primary)] transition-all duration-300 font-[var(--font-body)]"
            />
            <div className="flex justify-end mt-3">
              <button
                id="start-battle-btn"
                type="submit"
                disabled={!query.trim()}
                className="gradient-primary text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl flex items-center gap-2 hover:opacity-90 hover:shadow-lg hover:shadow-[var(--color-primary)]/20 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <Swords className="w-4 h-4 sm:w-5 sm:h-5" />
                Start Battle
              </button>
            </div>
          </div>
        </form>

        {/* Feature Cards */}
        <div className="mt-12 sm:mt-16 w-full max-w-3xl mx-auto px-2">
          <FeatureCards />
        </div>
      </div>
    </div>
  );
}

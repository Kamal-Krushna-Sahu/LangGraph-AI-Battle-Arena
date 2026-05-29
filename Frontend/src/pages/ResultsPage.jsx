import { RotateCcw, MessageCircle } from "lucide-react";
import SolutionCard from "../components/SolutionCard";

export default function ResultsPage({ data, onNewBattle }) {
  const { problem, solution_1, solution_2, judge } = data;

  const model1Wins = judge.solution_1_score >= judge.solution_2_score;
  const model2Wins = judge.solution_2_score > judge.solution_1_score;
  const isTie = judge.solution_1_score === judge.solution_2_score;

  return (
    <div className="flex-1 bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Problem/Query Card */}
        <div className="glass rounded-2xl p-4 sm:p-6 mb-8 opacity-0 animate-fade-in-up">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MessageCircle className="w-4 h-4 text-[var(--color-primary-light)]" />
            </div>
            <div>
              <span className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                User's Query
              </span>
              <p className="text-sm sm:text-base text-[var(--color-text-primary)] mt-1 leading-relaxed">
                {problem}
              </p>
            </div>
          </div>
        </div>

        {/* Battle Results Header */}
        <div className="text-center mb-8 opacity-0 animate-fade-in-up stagger-1">
          <h2 className="text-2xl sm:text-3xl font-bold font-[var(--font-headline)] text-[var(--color-text-primary)]">
            Battle Results
          </h2>
          {isTie ? (
            <p className="text-sm text-[var(--color-tertiary)] mt-2 font-medium">
              It&apos;s a tie! Both models scored equally.
            </p>
          ) : (
            <p className="text-sm text-[var(--color-text-muted)] mt-2">
              {model1Wins ? "AI Model 1" : "AI Model 2"} wins this round!
            </p>
          )}
        </div>

        {/* Score Summary Bar */}
        <div className="glass rounded-2xl p-4 sm:p-5 mb-8 opacity-0 animate-fade-in-up stagger-2">
          <div className="flex items-center justify-between gap-4">
            {/* Model 1 Score */}
            <div className="flex-1 text-center">
              <p className="text-xs text-[var(--color-text-muted)] mb-1 font-medium">
                AI Model 1
              </p>
              <p
                className={`text-3xl sm:text-4xl font-bold font-[var(--font-headline)] ${
                  model1Wins && !isTie
                    ? "text-[var(--color-success)]"
                    : "text-[var(--color-text-secondary)]"
                }`}
              >
                {judge.solution_1_score}
              </p>
            </div>

            {/* VS Divider */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-xs font-bold text-white font-[var(--font-headline)]">
                  VS
                </span>
              </div>
              <span className="text-[10px] text-[var(--color-text-muted)]">
                / 10
              </span>
            </div>

            {/* Model 2 Score */}
            <div className="flex-1 text-center">
              <p className="text-xs text-[var(--color-text-muted)] mb-1 font-medium">
                AI Model 2
              </p>
              <p
                className={`text-3xl sm:text-4xl font-bold font-[var(--font-headline)] ${
                  model2Wins
                    ? "text-[var(--color-success)]"
                    : "text-[var(--color-text-secondary)]"
                }`}
              >
                {judge.solution_2_score}
              </p>
            </div>
          </div>

          {/* Score Bar */}
          <div className="mt-4 flex items-center gap-2">
            <div
              className="h-2 rounded-full bg-[var(--color-primary)] transition-all duration-1000"
              style={{
                width: `${(judge.solution_1_score / (judge.solution_1_score + judge.solution_2_score)) * 100}%`,
              }}
            />
            <div
              className="h-2 rounded-full bg-[var(--color-secondary)] transition-all duration-1000"
              style={{
                width: `${(judge.solution_2_score / (judge.solution_1_score + judge.solution_2_score)) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <SolutionCard
            title="AI Model 1"
            solution={solution_1}
            score={judge.solution_1_score}
            reasoning={judge.solution_1_reasoning}
            isWinner={model1Wins && !isTie}
            animationDelay="0.3s"
          />
          <SolutionCard
            title="AI Model 2"
            solution={solution_2}
            score={judge.solution_2_score}
            reasoning={judge.solution_2_reasoning}
            isWinner={model2Wins}
            animationDelay="0.5s"
          />
        </div>

        {/* New Battle Button */}
        <div className="text-center opacity-0 animate-fade-in-up stagger-5">
          <button
            id="new-battle-btn"
            onClick={onNewBattle}
            className="gradient-primary text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-xl inline-flex items-center gap-2 hover:opacity-90 hover:shadow-lg hover:shadow-[var(--color-primary)]/20 transition-all duration-300 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            New Battle
          </button>
        </div>
      </div>
    </div>
  );
}

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Crown, Trophy, MessageSquareText } from "lucide-react";

export default function SolutionCard({
  title,
  solution,
  score,
  reasoning,
  isWinner,
  animationDelay = "0s",
}) {
  const scoreColor =
    score >= 9
      ? "text-[var(--color-success)]"
      : score >= 7
        ? "text-[var(--color-tertiary)]"
        : "text-[var(--color-error)]";

  const scoreBgColor =
    score >= 9
      ? "bg-[var(--color-success)]/10 border-[var(--color-success)]/20"
      : score >= 7
        ? "bg-[var(--color-tertiary)]/10 border-[var(--color-tertiary)]/20"
        : "bg-[var(--color-error)]/10 border-[var(--color-error)]/20";

  return (
    <div
      className={`glass rounded-2xl overflow-hidden transition-all duration-500 opacity-0 animate-fade-in-up ${
        isWinner ? "glow-winner" : "glow-secondary"
      }`}
      style={{ animationDelay }}
    >
      {/* Card Header */}
      <div className="px-5 sm:px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          {isWinner && (
            <div className="w-8 h-8 rounded-lg bg-[var(--color-tertiary)]/15 flex items-center justify-center">
              <Crown className="w-4 h-4 text-[var(--color-tertiary)]" />
            </div>
          )}
          <div>
            <h3 className="font-[var(--font-headline)] font-semibold text-base sm:text-lg text-[var(--color-text-primary)]">
              {title}
            </h3>
            {isWinner && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-tertiary)] mt-0.5">
                <Trophy className="w-3 h-3" />
                Winner
              </span>
            )}
          </div>
        </div>

        {/* Score Badge */}
        <div
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${scoreBgColor}`}
        >
          <span
            className={`text-xl sm:text-2xl font-[var(--font-headline)] font-bold ${scoreColor}`}
          >
            {score}
          </span>
          <span className="text-xs text-[var(--color-text-muted)] font-medium">
            / 10
          </span>
        </div>
      </div>

      {/* Solution Content */}
      <div className="px-5 sm:px-6 py-4">
        <div className="markdown-body max-h-[400px] overflow-y-auto pr-2">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {solution}
          </ReactMarkdown>
        </div>
      </div>

      {/* Judge Reasoning */}
      <div className="px-5 sm:px-6 py-4 border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]/30">
        <div className="flex items-center gap-2 mb-2.5">
          <MessageSquareText className="w-4 h-4 text-[var(--color-primary-light)]" />
          <h4 className="text-sm font-semibold font-[var(--font-headline)] text-[var(--color-primary-light)]">
            Judge&apos;s Reasoning
          </h4>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {reasoning}
        </p>
      </div>
    </div>
  );
}

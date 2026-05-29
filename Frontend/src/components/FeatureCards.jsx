import { Swords, Gavel, FileText } from "lucide-react";

const features = [
  {
    icon: Swords,
    title: "Dual AI Response",
    description:
      "Two AI models compete head-to-head to solve your problem with different approaches.",
  },
  {
    icon: Gavel,
    title: "AI Judge Scoring",
    description:
      "An impartial AI judge evaluates both solutions and scores them from 1 to 10.",
  },
  {
    icon: FileText,
    title: "Detailed Reasoning",
    description:
      "Get comprehensive reasoning behind each score to understand the judge's verdict.",
  },
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl mx-auto">
      {features.map((feature, index) => (
        <div
          key={feature.title}
          className={`glass glass-hover rounded-2xl p-5 sm:p-6 text-center transition-all duration-300 opacity-0 animate-fade-in-up stagger-${index + 3}`}
        >
          <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-3">
            <feature.icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-[var(--font-headline)] font-semibold text-sm sm:text-base text-[var(--color-text-primary)] mb-1.5">
            {feature.title}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}

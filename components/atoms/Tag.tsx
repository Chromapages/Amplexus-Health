import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  variant?: "accent" | "neutral" | "outline";
  className?: string;
}

const variantClasses = {
  accent: "bg-teal/20 text-ink border border-teal",
  neutral: "bg-slate-200 text-slate-900 border border-slate-300",
  outline: "bg-transparent text-ink border border-ink",
};

export const Tag = ({ children, variant = "accent", className = "" }: TagProps) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

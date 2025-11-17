import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = "", ...props }, ref) => {
    const baseClasses =
      "w-full px-4 py-3 rounded-lg border bg-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal";
    const errorClasses = error
      ? "border-error focus:ring-error focus:border-error"
      : "border-slate-300 hover:border-slate-400";

    return <input ref={ref} className={`${baseClasses} ${errorClasses} ${className}`} {...props} />;
  }
);

Input.displayName = "Input";

import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, className = "", ...props }, ref) => {
    const baseClasses =
      "w-full px-4 py-3 rounded-lg border bg-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal resize-vertical min-h-[120px]";
    const errorClasses = error
      ? "border-error focus:ring-error focus:border-error"
      : "border-slate-300 hover:border-slate-400";

    return <textarea ref={ref} className={`${baseClasses} ${errorClasses} ${className}`} {...props} />;
  }
);

Textarea.displayName = "Textarea";

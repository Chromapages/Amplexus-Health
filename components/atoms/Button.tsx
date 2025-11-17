import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

const variantClasses = {
  primary:
    "bg-ink text-white hover:bg-ink/90 active:scale-[0.97] focus:ring-2 focus:ring-ink focus:ring-offset-2",
  secondary:
    "bg-transparent border-2 border-ink text-ink hover:bg-ink hover:text-white active:scale-[0.97] focus:ring-2 focus:ring-ink focus:ring-offset-2",
  ghost:
    "bg-transparent text-ink hover:bg-shell active:scale-[0.97] focus:ring-2 focus:ring-ink focus:ring-offset-2",
  link: "bg-transparent text-ink underline-offset-4 hover:underline focus:ring-2 focus:ring-ink focus:rounded",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-150 rounded-full disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100";
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

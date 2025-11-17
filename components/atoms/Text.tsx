import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  size?: "sm" | "base" | "lg";
  className?: string;
  as?: "p" | "span" | "div";
}

const sizeClasses = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
};

export const Text = ({ children, size = "base", className = "", as: Component = "p" }: TextProps) => {
  return <Component className={`${sizeClasses[size]} leading-relaxed ${className}`}>{children}</Component>;
};

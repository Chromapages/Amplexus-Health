import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

const levelClasses = {
  1: "text-4xl md:text-5xl font-serif leading-tight",
  2: "text-3xl md:text-4xl font-serif leading-tight",
  3: "text-2xl md:text-3xl font-semibold leading-snug",
  4: "text-xl md:text-2xl font-medium leading-snug",
  5: "text-lg md:text-xl font-medium",
  6: "text-base md:text-lg font-medium",
};

export const Heading = ({ children, level, as, className = "" }: HeadingProps) => {
  const Component = as || (`h${level}` as const);
  const classes = `${levelClasses[level]} ${className}`;

  return <Component className={classes}>{children}</Component>;
};

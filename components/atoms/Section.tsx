import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "shell" | "night";
  padding?: "sm" | "md" | "lg";
}

const backgroundClasses = {
  default: "bg-white",
  shell: "bg-shell",
  night: "bg-night text-white",
};

const paddingClasses = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
};

export const Section = ({
  children,
  className = "",
  background = "default",
  padding = "md",
}: SectionProps) => {
  return (
    <section className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </section>
  );
};

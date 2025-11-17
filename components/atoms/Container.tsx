import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
}

export const Container = ({ children, className = "", as: Component = "div" }: ContainerProps) => {
  return (
    <Component className={`mx-auto max-w-content px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  );
};

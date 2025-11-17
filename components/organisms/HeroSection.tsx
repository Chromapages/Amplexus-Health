import { ReactNode } from "react";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  children?: ReactNode;
  background?: "default" | "shell";
}

export const HeroSection = ({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
  background = "shell",
}: HeroSectionProps) => {
  const bgClass = background === "shell" ? "bg-shell" : "bg-white";

  return (
    <section className={`${bgClass} py-16 md:py-24`}>
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {eyebrow && (
            <p className="text-teal font-medium mb-4 uppercase tracking-wide text-sm">
              {eyebrow}
            </p>
          )}
          
          <Heading level={1} className="mb-6">
            {title}
          </Heading>

          {subtitle && (
            <Text size="lg" className="text-slate-600 mb-8">
              {subtitle}
            </Text>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCta && (
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
};

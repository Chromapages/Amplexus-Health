import { HeroSection } from "@/components/organisms/HeroSection";
import { Section } from "@/components/atoms/Section";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { FAQAccordion } from "@/components/organisms/FAQAccordion";
import { faqGroups } from "@/config/faqs.config";

export const ResourcesTemplate = () => {
  return (
    <>
      <HeroSection
        title="Resources & FAQs"
        subtitle="Find answers to common questions and access important mental health resources."
      />

      <Section padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion groups={faqGroups} />
          </div>
        </Container>
      </Section>

      <Section background="shell" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading level={2} className="mb-6">
              Crisis Resources
            </Heading>
            
            <div className="space-y-6">
              <div className="p-6 bg-white border border-warning rounded-lg">
                <h3 className="text-xl font-semibold mb-2">988 Suicide & Crisis Lifeline</h3>
                <p className="text-slate-600 mb-3">
                  Call or text 988 for free, confidential support 24/7.
                </p>
                <a
                  href="tel:988"
                  className="inline-block px-6 py-3 bg-warning text-white font-medium rounded-full hover:bg-warning/90 transition-colors"
                >
                  Call 988
                </a>
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Crisis Text Line</h3>
                <p className="text-slate-600 mb-3">
                  Text HOME to 741741 to connect with a crisis counselor.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">National Alliance on Mental Illness (NAMI)</h3>
                <p className="text-slate-600 mb-3">
                  Call 1-800-950-NAMI (6264) or text "HelpLine" to 62640 for information and support.
                </p>
              </div>

              <div className="p-4 bg-error/10 border border-error/20 rounded-lg">
                <Text size="sm">
                  <strong>If you are in immediate danger, call 911 or go to your nearest emergency room.</strong>
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

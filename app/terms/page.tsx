import { Section } from "@/components/atoms/Section";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Terms of Use",
  description: "Terms and conditions for using Amplexus Health's website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section padding="lg">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <Heading level={1} className="mb-8">
            Terms of Use
          </Heading>
          
          <Text className="mb-6 text-slate-600">
            Last Updated: November 2025
          </Text>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Acceptance of Terms</h2>
              <Text>
                By accessing and using this website, you accept and agree to be bound by the terms
                and provision of this agreement.
              </Text>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Use of Website</h2>
              <Text>
                This website is for informational purposes only and does not constitute medical advice.
                Always seek the advice of qualified health providers with questions regarding your health.
              </Text>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Disclaimer</h2>
              <Text>
                The information provided on this site is not intended to replace professional medical advice,
                diagnosis, or treatment. This site is not for emergency use. If you are experiencing a crisis,
                call 988 or go to your nearest emergency room.
              </Text>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>
              <Text>
                For questions about these Terms, contact us at legal@amplexushealth.com.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

import { Section } from "@/components/atoms/Section";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Privacy Policy",
  description: "Learn how Amplexus Health collects, uses, and protects your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section padding="lg">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <Heading level={1} className="mb-8">
            Privacy Policy
          </Heading>
          
          <Text className="mb-6 text-slate-600">
            Last Updated: November 2025
          </Text>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
              <Text>
                Amplexus Health ("we," "us," or "our") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or use our services.
              </Text>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
              <Text>
                We collect information that you provide directly to us, including name, email address,
                phone number, and any information you choose to share in appointment request forms.
              </Text>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
              <Text>
                We use the information we collect to provide, maintain, and improve our services,
                communicate with you about appointments and services, and comply with legal obligations.
              </Text>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
              <Text>
                If you have questions about this Privacy Policy, please contact us at privacy@amplexushealth.com.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

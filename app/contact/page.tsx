import { ContactTemplate } from "@/components/templates/ContactTemplate";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Contact Us",
  description: "Request an appointment or get in touch with Amplexus Health. We're here to support your mental wellness journey.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactTemplate />;
}

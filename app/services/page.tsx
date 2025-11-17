import { ServicesTemplate } from "@/components/templates/ServicesTemplate";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Services",
  description: "Compassionate therapy services including individual therapy, couples counseling, telehealth sessions, and specialized trauma treatment.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesTemplate />;
}

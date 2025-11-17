import { ResourcesTemplate } from "@/components/templates/ResourcesTemplate";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Resources & FAQs",
  description: "Find answers to common questions about therapy, insurance, and telehealth. Access crisis resources and mental health support information.",
  path: "/resources",
});

export default function ResourcesPage() {
  return <ResourcesTemplate />;
}

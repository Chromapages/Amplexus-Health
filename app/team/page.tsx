import { TeamTemplate } from "@/components/templates/TeamTemplate";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Our Team",
  description: "Meet our experienced, compassionate clinicians dedicated to providing trauma-informed mental health care.",
  path: "/team",
});

export default function TeamPage() {
  return <TeamTemplate />;
}

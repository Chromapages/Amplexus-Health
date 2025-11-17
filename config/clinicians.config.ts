import type { Clinician } from "@/types/clinician";

export const clinicians: Clinician[] = [
  {
    slug: "founder",
    name: "Dr. [Founder Name]",
    credentials: "PhD, LMFT",
    pronouns: "she/her",
    specialties: ["Trauma-informed care", "Family therapy", "EMDR"],
    photo: "/team/founder-placeholder.jpg",
    bioSnippet: "Founder of Amplexus Health, dedicated to creating safe, compassionate spaces for healing and growth.",
    bioFull: "Dr. [Name] founded Amplexus Health with a vision of providing accessible, trauma-informed mental health care. With over 15 years of experience, she specializes in helping individuals and families navigate complex emotional challenges.",
  },
  {
    slug: "clinician-1",
    name: "[Clinician Name]",
    credentials: "LCSW",
    pronouns: "they/them",
    specialties: ["Anxiety", "Depression", "LGBTQ+ affirming care"],
    photo: "/team/clinician-1-placeholder.jpg",
    bioSnippet: "Compassionate therapist focused on creating affirming spaces for all clients.",
    bioFull: "[Clinician Name] brings warmth and expertise to their practice, specializing in anxiety, depression, and LGBTQ+ affirming care.",
  },
];

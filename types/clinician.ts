export interface Clinician {
  slug: string;
  name: string;
  credentials: string;
  pronouns?: string;
  specialties: string[];
  photo: string;
  bioSnippet: string;
  bioFull?: string;
}

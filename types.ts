export interface Lesson {
  keyPrinciples: string[];
  quotes?: string[]; // ✅ optional property
  // add other properties like:
  slug: string;
  title: string;
  description: string;
  background: string;
  famousQuote: string;
  philosopher: string;
  keyLesson: string;
  historicalContext: string;
  practicalApplication: string;
  modernRelevance: string;
  reflection: string;
}

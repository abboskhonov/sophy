export interface Lesson {
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
  keyPrinciples: string[];
  quotes?: string[]; // optional
}


export type LessonParams = {
  slug: string;
};

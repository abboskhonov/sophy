// app/lesson/[slug]/layout.tsx
import type { Metadata } from 'next';
import { ReactNode } from 'react';

// ✅ Correct type for generateMetadata
type GenerateMetadataProps = {
  params: { slug: string };
};

// ✅ Correct type for layout component
type LessonLayoutProps = {
  children: ReactNode;
};

// ✅ dynamic metadata with params
export async function generateMetadata(
  { params }: GenerateMetadataProps
): Promise<Metadata> {
  return {
    title: params.slug.charAt(0).toUpperCase() + params.slug.slice(1),
    description: `This is the page for ${params.slug}`,
  };
}

// ✅ layout component receives only children
export default function LessonLayout({ children }: LessonLayoutProps) {
  return <div className="p-4">{children}</div>;
}

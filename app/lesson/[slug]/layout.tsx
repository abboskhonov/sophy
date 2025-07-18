// app/lesson/[slug]/layout.tsx
import type { Metadata } from 'next';
import { ReactNode } from 'react';

// ✅ This works — generateMetadata receives params
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: params.slug.charAt(0).toUpperCase() + params.slug.slice(1),
    description: `This is the page for ${params.slug}`,
  };
}

// ✅ Layout component receives only children
export default function LessonLayout({ children }: { children: ReactNode }) {
  return <div className="p-4">{children}</div>;
}

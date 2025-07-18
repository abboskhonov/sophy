// app/lesson/[slug]/layout.tsx
import type { Metadata } from 'next';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: { slug: string };
};

// Dynamically generate metadata based on the slug
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: params.slug.charAt(0).toUpperCase() + params.slug.slice(1), // or fetch actual title from DB
    description: `This is the page for ${params.slug}`,
  };
}

export default function LessonLayout({ children }: Props) {
  return <div className="p-4">{children}</div>;
}

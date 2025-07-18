import type { Metadata } from 'next';
import { ReactNode } from 'react';

// Define the props type explicitly
type LayoutProps = {
  children: ReactNode;
  params: { slug: string };
};

// ✅ generateMetadata receives params
export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  return {
    title: params.slug.charAt(0).toUpperCase() + params.slug.slice(1),
    description: `This is the page for ${params.slug}`,
  };
}

// ✅ Layout component receives children and params
export default function LessonLayout({ children }: LayoutProps) {
  return <div className="p-4">{children}</div>;
}
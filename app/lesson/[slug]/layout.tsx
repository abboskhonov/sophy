// app/lesson/[slug]/layout.tsx
import { ReactNode } from 'react';

type LessonLayoutProps = {
  children: ReactNode;
};

export default function LessonLayout({ children }: LessonLayoutProps) {
  return <div className="p-4">{children}</div>;
}

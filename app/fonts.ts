// app/fonts.ts (or inside your layout.tsx/page.tsx)

import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'], // or ['latin-ext'] etc.
  weight: ['400', '700'], // optional
  display: 'swap', // recommended
});

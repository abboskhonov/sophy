'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface CardProps {
  title: string
  description: string
  slug: string
  background: string
}

export default function Card({ title, description, slug, background }: CardProps) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/lesson/${slug}`)}
      className="rounded-xl overflow-hidden cursor-pointer border border-transparent transition-all hover:border-gray-300 bg-white"
    >
      <div className="relative w-full h-48">
        <Image
          src={background}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-all duration-300 grayscale"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-black">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}

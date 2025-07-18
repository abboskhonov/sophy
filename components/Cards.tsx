// components/Cards.tsx
import Card from './Card'

const cards = [
  {
    title: 'Existence',
    description: 'Quotes that explore the meaning of life, reality, and being.',
    slug: 'existence',
    background: '/philosophers.jpg'
  },
  {
    title: 'Freedom',
    description: 'Quotes about liberty, breaking limits, and living on your own terms.',
    slug: 'freedom',
    background: '/philosophers.jpg'
  },
  {
    title: 'Discipline',
    description: 'Quotes that reflect consistency, control, and self-mastery.',
    slug: 'discipline',
    background: '/philosophers.jpg'
  },
  {
    title: 'Rebellion',
    description: 'Quotes that challenge norms, provoke thought, and ignite change.',
    slug: 'rebellion',
    background: '/philosophers.jpg'
  },
  {
    title: 'Stoicism',
    description: 'Timeless wisdom on handling pain, loss, and emotion with strength.',
    slug: 'stoicism',
    background: '/philosophers.jpg'
  },
  {
    title: 'Power',
    description: 'Quotes about influence, leadership, ambition, and control.',
    slug: 'power',
    background: '/philosophers.jpg'
  }
]

export default function Cards() {
  return (
    <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card key={card.slug} {...card} />
        ))}
      </div>
    </div>
  )
}

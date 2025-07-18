'use client'

import { notFound } from 'next/navigation'
import { use } from 'react'
import { lessons } from '@/data/lessons'
import { LessonParams } from '@/types'

import { motion } from 'framer-motion'
import Link from 'next/link'

function escapeQuotes(text: string): string {
  return text.replace(/"/g, '\u201C') // replaces " with “
}

export default function LessonPage({ params }: { params: Promise<LessonParams> }) {
  const { slug } = use(params)
  const lesson = lessons.find((l) => l.slug === slug)
  if (!lesson) return notFound()

  return (
    <motion.div
      className="p-6 max-w-3xl mx-auto min-h-screen bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
          &lt; Back
        </Link>
      </div>

      <motion.h1
        className="text-4xl text-black font-bold mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {lesson.title}
      </motion.h1>

      <motion.p
        className="text-gray-600 text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {escapeQuotes(lesson.description)}
      </motion.p>

      {[
        { title: 'Key Lesson', content: lesson.keyLesson },
        { title: 'Historical Context', content: lesson.historicalContext },
        { title: 'Practical Application', content: lesson.practicalApplication },
        { title: 'Modern Relevance', content: lesson.modernRelevance },
        { title: 'Reflection', content: lesson.reflection }
      ]
        .filter(section => section.content)
        .map((section, i) => (
          <motion.section
            key={section.title}
            className="mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
          >
            <h2 className="text-xl font-semibold text-black mb-3">{section.title}</h2>
            <p className="text-gray-800 text-base leading-relaxed">
              {escapeQuotes(section.content)}
            </p>
          </motion.section>
        ))}

      {lesson.keyPrinciples?.length > 0 && (
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-xl font-semibold text-black mb-3">Key Principles</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            {lesson.keyPrinciples.map((point, i) => (
              <li key={i}>{escapeQuotes(point)}</li>
            ))}
          </ul>
        </motion.section>
      )}

      {lesson.quotes?.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-xl font-semibold text-black mb-3">Wisdom & Quotes</h2>
          <ul className="space-y-4">
            {lesson.quotes.map((quote, i) => (
              <motion.li
                key={i}
                className="bg-gray-50 p-4 rounded-md border border-gray-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.1 }}
              >
                <blockquote className="italic text-gray-700">
                  &ldquo;{escapeQuotes(quote)}&rdquo;
                </blockquote>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      )}
    </motion.div>
  )
}

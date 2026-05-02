'use client'

import { useEffect, useRef, useState } from 'react'

export interface NavSection {
  id: string
  label: string
}

interface CaseStudyNavProps {
  sections: NavSection[]
}

export default function CaseStudyNav({ sections }: CaseStudyNavProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Track which sections are visible and pick the topmost one
    const visible = new Set<string>()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target.id)
          } else {
            visible.delete(entry.target.id)
          }
        })
        // Pick the first section in document order that is visible
        const first = sections.find((s) => visible.has(s.id))
        if (first) setActiveId(first.id)
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current!.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [sections])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      className="desktop-only fixed z-50 flex flex-col gap-1"
      style={{
        top: 'var(--nav-top)',
        left: 'var(--grid-margin)',
        paddingTop: 'var(--nav-links-top)',
        maxWidth: 140,
      }}
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => handleClick(id)}
          className={`w-fit text-left text-base ${activeId === id ? 'nav-link-active' : 'nav-link'}`}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}

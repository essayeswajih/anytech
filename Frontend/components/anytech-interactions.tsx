'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getContent } from '@/lib/site-content'

gsap.registerPlugin(ScrollTrigger)

export function ScrollAnimations({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !root.current) return

    const context = gsap.context(() => {
      gsap.fromTo('.reveal', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' })
      gsap.utils.toArray<HTMLElement>('.animate-on-scroll').forEach((element) => {
        const animation = element.dataset.animation || 'rise'
        const presets = {
          rise: { from: { y: 48, opacity: 0 }, to: { y: 0, opacity: 1 }, ease: 'power3.out' },
          slide: { from: { x: -54, opacity: 0 }, to: { x: 0, opacity: 1 }, ease: 'power2.out' },
          drift: { from: { y: 28, scale: 0.96, opacity: 0 }, to: { y: 0, scale: 1, opacity: 1 }, ease: 'power2.out' },
          sweep: { from: { x: 54, opacity: 0, rotate: 1 }, to: { x: 0, opacity: 1, rotate: 0 }, ease: 'power3.out' },
          lift: { from: { y: 65, opacity: 0 }, to: { y: 0, opacity: 1 }, ease: 'back.out(1.2)' },
        } as const
        const preset = presets[animation as keyof typeof presets] || presets.rise
        gsap.fromTo(element, preset.from, {
          ...preset.to,
          duration: 0.9,
          ease: preset.ease,
          scrollTrigger: { trigger: element, start: 'top 84%', once: true },
        })
      })
    }, root)

    return () => context.revert()
  }, [])

  return <div ref={root}>{children}</div>
}

export function MobileNav({ locale = 'en' }: { locale?: 'en' | 'fr' | 'ar' }) {
  const [open, setOpen] = useState(false)
  const t = getContent(locale)
  const links = ['#services', '#solutions', '#expertise', '#projects', '#contact']
  return (
    <>
      <button className="nav-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
        {t.nav.map((link, index) => <a key={link} href={links[index]} onClick={() => setOpen(false)}>{link}</a>)}
        <a className="button button-small" href="#contact" onClick={() => setOpen(false)}>{t.primaryCta}</a>
      </div>
    </>
  )
}

export function FAQ({ locale = 'en' }: { locale?: 'en' | 'fr' | 'ar' }) {
  const [active, setActive] = useState<number | null>(0)
  const answerRefs = useRef<(HTMLDivElement | null)[]>([])
  const items = getContent(locale).faq

  useLayoutEffect(() => {
    answerRefs.current.forEach((answer, index) => {
      if (!answer) return
      gsap.to(answer, {
        height: active === index ? 'auto' : 0,
        opacity: active === index ? 1 : 0,
        duration: 0.35,
        ease: 'power2.out',
        overwrite: true,
      })
    })
  }, [active])

  return <div className="faq-list">{items.map(([question, answer], i) => <div className={`faq-item ${active === i ? 'is-active' : ''}`} key={question}><button type="button" onClick={() => setActive(active === i ? null : i)} aria-expanded={active === i} aria-controls={`faq-answer-${i}`}><span>{question}</span><ChevronDown size={19} aria-hidden="true" /></button><div id={`faq-answer-${i}`} ref={(element) => { answerRefs.current[i] = element }} className="faq-answer" role="region" aria-hidden={active !== i}><p>{answer}</p></div></div>)}</div>
}

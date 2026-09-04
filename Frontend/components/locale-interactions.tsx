'use client'

import { useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import type { Locale } from '@/lib/site-content'
import { localeConfig } from '@/lib/site-content'

export function LanguageSelect({ locale, from }: { locale: Locale; from?: string }) {
  const [open, setOpen] = useState(false)
  return <div className={`language-select ${from === 'footer' ? 'language-select-footer' : ''}`}><button type="button" className="language-trigger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Choose language"><span>{localeConfig[locale].flag}</span><span>{localeConfig[locale].label}</span><ChevronDown size={14} aria-hidden="true" /></button>{open && <div className="language-menu" role="menu">{(Object.keys(localeConfig) as Locale[]).map((key) => <a role="menuitem" href={localeConfig[key].path} className={key === locale ? 'current' : ''} key={key}><span>{localeConfig[key].flag}</span>{localeConfig[key].label}</a>)}</div>}</div>
}

export function ContactModal({ label, locale = 'en' }: { label: string; locale?: Locale }) {
  const [open, setOpen] = useState(false)
  const copy = { en: { eyebrow: 'AnyTech / Contact', title: "Let's make something meaningful.", email: 'Email', subject: 'Subject', message: 'Message', subjectPlaceholder: 'How can we help?', messagePlaceholder: 'Tell us a little about your idea...', send: 'Send message', close: 'Close contact form' }, fr: { eyebrow: 'AnyTech / Contact', title: 'Créons quelque chose qui compte.', email: 'E-mail', subject: 'Objet', message: 'Message', subjectPlaceholder: 'Comment pouvons-nous vous aider ?', messagePlaceholder: 'Parlez-nous un peu de votre idée...', send: 'Envoyer le message', close: 'Fermer le formulaire' }, ar: { eyebrow: 'AnyTech / تواصل', title: 'لنصنع شيئاً ذا معنى.', email: 'البريد الإلكتروني', subject: 'الموضوع', message: 'الرسالة', subjectPlaceholder: 'كيف يمكننا مساعدتكم؟', messagePlaceholder: 'أخبرونا قليلاً عن فكرتكم...', send: 'إرسال الرسالة', close: 'إغلاق النموذج' } }[locale]
  return <><button type="button" className="button button-primary" onClick={() => setOpen(true)}>{label}<span aria-hidden="true">↗</span></button>{open && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false) }}><div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title"><button type="button" className="modal-close" onClick={() => setOpen(false)} aria-label={copy.close}><X size={20} /></button><p className="eyebrow">{copy.eyebrow}</p><h2 id="contact-title">{copy.title}</h2><form onSubmit={(event) => { event.preventDefault(); setOpen(false) }}><label>{copy.email}<input required type="email" name="email" placeholder="you@company.com" /></label><label>{copy.subject}<input required name="subject" placeholder={copy.subjectPlaceholder} /></label><label>{copy.message}<textarea required name="message" rows={5} placeholder={copy.messagePlaceholder} /></label><button className="button button-primary" type="submit">{copy.send} <span aria-hidden="true">↗</span></button></form></div></div>}</>
}

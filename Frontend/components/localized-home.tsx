import Image from 'next/image'
import {
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  Cpu,
  Globe2,
  Layers3,
  Megaphone,
  Network,
  ShieldCheck,
  Smartphone,
  Wrench,
} from 'lucide-react'
import { FAQ, MobileNav, ScrollAnimations } from '@/components/anytech-interactions'
import { ContactModal, LanguageSelect } from '@/components/locale-interactions'
import { getContent, getLocaleConfig, type Locale } from '@/lib/site-content'

const serviceIcons = [Code2, Globe2, Smartphone, ShieldCheck, Cloud, Megaphone, Network, Cpu]

export function LocalizedHome({ locale }: { locale: Locale }) {
  const t = getContent(locale)
  const config = getLocaleConfig(locale)

  return (
    <div lang={config.lang} dir={config.dir} className={locale === 'ar' ? 'locale-ar' : ''}>
      <ScrollAnimations>
        <header className="site-header">
          <div className="container header-inner">
            <a href={config.path} className="brand" aria-label="AnyTech">
              <Image src="/anytech-logo.png" alt="AnyTech" width={168} height={118} priority />
            </a>
            <nav className="desktop-nav" aria-label={t.navLabel}>
              {t.nav.map((item, i) => (
                <a href={['#services', '#solutions', '#expertise', '#projects', '#contact'][i]} key={item}>
                  {item}
                </a>
              ))}
              <LanguageSelect locale={locale} />
              <ContactModal label="Let's Talk" locale={locale} />
            </nav>
            <MobileNav locale={locale} />
          </div>
        </header>

        <main>
          <section className="hero section-pad">
            <div className="container hero-grid">
              <div className="hero-copy reveal">
                <p className="eyebrow">{t.heroEyebrow}</p>
                <h1>{t.heroTitle}</h1>
                <p className="hero-lede">{t.heroBody}</p>
                <p className="hero-support">{t.heroSupport}</p>
                <div className="hero-actions">
                  <ContactModal label={t.primaryCta} locale={locale} />
                  <a className="text-link" href="#contact">
                    {t.secondaryCta}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
                <p className="trust-line">{t.trustText}</p>
              </div>
              <div className="hero-visual tech-radar" aria-hidden="true">
                <div className="visual-core">
                  <Image src="/anytech-logo.png" alt="" width={178} height={125} />
                </div>
                <span className="radar-chip chip-a">Software</span>
                <span className="radar-chip chip-b">Cloud</span>
                <span className="radar-chip chip-c">Cyber</span>
                <span className="radar-chip chip-d">SEO</span>
              </div>
            </div>
          </section>

          <section id="about" className="statement section-pad animate-on-scroll" data-animation="slide">
            <div className="container statement-grid">
              <p className="eyebrow">{t.partnerEyebrow}</p>
              <div>
                <h2>{t.partnerTitle}</h2>
                <p className="statement-copy">{t.partnerBody}</p>
                <div className="pillar-grid">
                  {t.pillars.map(([title, body]) => (
                    <article key={title}>
                      <Check size={18} aria-hidden="true" />
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="section-pad animate-on-scroll" data-animation="drift">
            <div className="container">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">{t.servicesEyebrow}</p>
                  <h2>{t.servicesTitle}</h2>
                </div>
                <p>{t.servicesIntro}</p>
              </div>
              <div className="service-grid rich-services">
                {t.services.map((service, index) => {
                  const Icon = serviceIcons[index] || Wrench
                  return (
                    <article className="service-card" key={service.title}>
                      <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
                      <Icon className="service-icon" size={28} />
                      <h3>{service.title}</h3>
                      <p>{service.body}</p>
                      <ul>
                        {service.solutions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      {service.cta && (
                        <a href="#contact" aria-label={service.cta}>
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                    </article>
                  )
                })}
              </div>
            </div>
          </section>

          <section id="expertise" className="dark-section section-pad animate-on-scroll" data-animation="sweep">
            <div className="container why-grid">
              <div>
                <p className="eyebrow eyebrow-light">{t.whyTitle}</p>
                <h2>
                  Une vision <span>360°</span> pour vos besoins IT.
                </h2>
                <p className="large-copy">{t.whyBody}</p>
              </div>
              <div className="why-list">
                {t.whyItems.map(([number, title, body]) => (
                  <article key={title}>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="solutions" className="section-pad tinted-section animate-on-scroll">
            <div className="container">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">Problem → AnyTech → Impact</p>
                  <h2>{t.solutionsTitle}</h2>
                </div>
              </div>
              <div className="solution-grid">
                {t.solutions.map(([title, body, tags]) => (
                  <article key={title}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <span>{tags}</span>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section-pad process-section animate-on-scroll">
            <div className="container">
              <p className="eyebrow">{t.methodTitle}</p>
              <div className="process-list">
                {t.method.map(([title, body], index) => (
                  <article className="process-step" key={title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section-pad tech-section animate-on-scroll">
            <div className="container tech-grid">
              <div>
                <p className="eyebrow">{t.techTitle}</p>
                <h2>{t.techBody}</h2>
              </div>
              <div className="marquee" aria-label={t.technologies.join(', ')}>
                <div>
                  {[...t.technologies, ...t.technologies].map((tech, index) => (
                    <span key={`${tech}-${index}`}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section-pad seo-section animate-on-scroll">
            <div className="container seo-grid">
              <div>
                <p className="eyebrow">SEO & acquisition</p>
                <h2>{t.seoTitle}</h2>
                <p>{t.seoBody}</p>
                <a className="button button-primary" href="#contact">
                  {t.seoCta}
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <ul>
                {t.seoItems.map((item) => (
                  <li key={item}>
                    <Check size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="security-section section-pad animate-on-scroll">
            <div className="container security-inner">
              <ShieldCheck size={44} aria-hidden="true" />
              <p className="eyebrow eyebrow-light">Security first</p>
              <h2>{t.securityTitle}</h2>
              <p>{t.securityBody}</p>
              <a className="button button-light" href="#contact">
                {t.securityCta}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </section>

          <section id="projects" className="section-pad projects-section animate-on-scroll">
            <div className="container">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">{t.projectsTitle}</p>
                  <h2>{t.projectsBody}</h2>
                </div>
              </div>
              <div className="project-grid">
                {t.projects.map(([title, body]) => (
                  <article key={title}>
                    <Layers3 size={24} />
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="contact-section section-pad animate-on-scroll">
            <div className="container contact-inner">
              <p className="eyebrow eyebrow-light">ANYTECH - YOUR IT PARTNER</p>
              <h2>{t.finalTitle}</h2>
              <p>{t.finalBody}</p>
              <div className="hero-actions centered-actions">
                <ContactModal label={t.primaryCta} locale={locale} />
                <a className="button button-light" href={`mailto:${t.contact.email}`}>
                  Demander une étude gratuite
                </a>
              </div>
              <p className="contact-note">{t.finalNote}</p>
            </div>
          </section>

          <section className="section-pad faq-section">
            <div className="container faq-grid">
              <div>
                <p className="eyebrow">FAQ</p>
                <h2>{t.faqTitle}</h2>
              </div>
              <FAQ locale={locale} />
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container footer-top">
            <div>
              <Image src="/anytech-logo.png" alt="AnyTech" width={136} height={96} />
              <p>{t.footerTagline}</p>
            </div>
            <div className="footer-links">
              {t.nav.map((item, i) => (
                <a href={['#services', '#solutions', '#expertise', '#projects', '#contact'][i]} key={item}>
                  {item}
                </a>
              ))}
            </div>
            <div className="footer-address">
              <span>{t.contact.city}</span>
              <a href={`tel:${t.contact.phone.replaceAll(' ', '')}`}>{t.contact.phone}</a>
              <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
              <span>{t.contact.website}</span>
              <LanguageSelect locale={locale} from="footer" />
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} AnyTech. All rights reserved.</span>
            <span>Your IT Partner</span>
          </div>
        </footer>
      </ScrollAnimations>
    </div>
  )
}

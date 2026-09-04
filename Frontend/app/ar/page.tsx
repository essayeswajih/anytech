import { LocalizedHome } from '@/components/localized-home'
import { getLocaleConfig } from '@/lib/site-content'

export const metadata = { title: getLocaleConfig('ar').title, description: getLocaleConfig('ar').description, alternates: { canonical: 'https://anytech.tn/ar', languages: { en: 'https://anytech.tn/', fr: 'https://anytech.tn/fr', ar: 'https://anytech.tn/ar' } } }
export default function ArabicPage() { return <div dir="rtl" lang="ar"><LocalizedHome locale="ar" /></div> }

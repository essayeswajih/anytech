import { LocalizedHome } from '@/components/localized-home'
import { getLocaleConfig } from '@/lib/site-content'

export const metadata = { title: getLocaleConfig('fr').title, description: getLocaleConfig('fr').description, alternates: { canonical: 'https://anytech.tn/fr', languages: { en: 'https://anytech.tn/', fr: 'https://anytech.tn/fr', ar: 'https://anytech.tn/ar' } } }
export default function FrenchPage() { return <LocalizedHome locale="fr" /> }

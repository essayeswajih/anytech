import { LocalizedHome } from '@/components/localized-home'
import { getLocaleConfig } from '@/lib/site-content'

export const metadata = { title: getLocaleConfig('en').title, description: getLocaleConfig('en').description, alternates: { canonical: 'https://anytech.tn/', languages: { en: 'https://anytech.tn/', fr: 'https://anytech.tn/fr', ar: 'https://anytech.tn/ar' } } }
export default function Page() { return <LocalizedHome locale="en" /> }

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Noto_Sans_Arabic } from 'next/font/google'

const arabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic' })

export const metadata: Metadata = {
  metadataBase: new URL('https://anytech.tn'),
  title: { default: 'AnyTech - Votre partenaire IT en Tunisie', template: '%s | AnyTech' },
  description: 'AnyTech accompagne les entreprises avec des solutions sur mesure: développement logiciel, web, mobile, cybersécurité, cloud, SEO, marketing digital et infogérance.',
  generator: 'AnyTech',
  keywords: ['AnyTech', 'partenaire IT Tunisie', 'développement logiciel', 'développement web', 'développement mobile', 'cybersécurité', 'cloud DevOps', 'SEO Tunisie', 'infogérance'],
  openGraph: { title: 'AnyTech - Votre partenaire IT', description: 'Développement logiciel, web, mobile, cybersécurité, cloud, SEO et accompagnement IT.', type: 'website', url: 'https://anytech.tn', images: ['/anytech-logo.png'] },
  icons: { icon: '/anytech-logo.png', apple: '/anytech-logo.png' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8fafb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${arabic.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

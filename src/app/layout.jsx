import './globals.css'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata = {
  title: 'Gengig - Safe Freelancing for Young Innovators',
  description: 'A secure platform connecting talented teenagers (13-21) with real-world opportunities in a monitored, safe environment.',
  keywords: 'youth freelancing, teen jobs, safe platform, creative opportunities, digital skills',
  authors: [{ name: 'Gengig Team' }],
  creator: 'Gengig',
  publisher: 'Gengig',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gengig.com',
    title: 'Gengig - Safe Freelancing for Young Innovators',
    description: 'A secure platform connecting talented teenagers (13-21) with real-world opportunities in a monitored, safe environment.',
    siteName: 'Gengig',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gengig - Safe Freelancing for Young Innovators',
    description: 'A secure platform connecting talented teenagers (13-21) with real-world opportunities in a monitored, safe environment.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className={`${inter.className} antialiased text-gray-900`} style={{ backgroundColor: '#C6BED8' }}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}

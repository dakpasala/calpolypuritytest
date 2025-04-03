// src/app/layout.tsx
import './globals.css'
import { Playfair_Display, Lora } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
})

export const metadata = {
  title: 'Cal Poly SLO Purity Test',
  description: 'Track your questionable college adventures.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body className="font-sans bg-yellow-100">{children}</body>
    </html>
  )
}

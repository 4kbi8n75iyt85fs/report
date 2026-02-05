import React from "react"
import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dhaka Tuition Market Report | Business Intelligence for New Entrants',
  description: 'Comprehensive analysis of the BDT 1.5 billion Bangladeshi tuition market in Dhaka with actionable insights for starting a tutor-providing business.',
  generator: 'Superagent',
  keywords: ['Dhaka tuition market', 'Bangladesh education', 'tutor business', 'private tutoring', 'EdTech Bangladesh'],
  openGraph: {
    title: 'Dhaka Tuition Market Report',
    description: 'Comprehensive business intelligence for the BDT 1.5 billion tuition market',
    type: 'article',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Athenian Tech',
  description: 'Athenian Tech',
  generator: 'Athenian Tech',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

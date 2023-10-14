import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asier Marqués',
  description: 'Engineering Management and direction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className={"container main-head"}>
          <h1>Asier Marqués</h1>
      </header>
      {children}
      </body>
    </html>
  )
}

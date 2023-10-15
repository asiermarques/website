import './globals.scss'
import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'
import Image from "next/image";

const inter = Roboto_Flex({ subsets: ['latin'], display: 'swap',})

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
          <h1><Image src={"/icon.jpg"}
                     alt={"Asier Marqués"}
                     width={65} height={65}/> Asier Marqués</h1>
      </header>
      {children}
      </body>
    </html>
  )
}

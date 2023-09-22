import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Poppins  } from 'next/font/google'
import Header from './components/Header'

const poppins = Poppins({
  weight:['400', '700'],
  subsets:['latin']
})
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clevercotton Mouth',
  description: 'about me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main>{children}</main>
        </body>
    </html>
  )
}

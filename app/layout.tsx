import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Enhanced Dynamic Blog',
  description: 'An Aesthetically pleasing Dynamic Blog Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex flex-col`}>
        <div className="flex-grow">
          <Navbar />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}


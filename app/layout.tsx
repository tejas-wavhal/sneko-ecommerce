import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { Providers } from '@/redux/provider'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sneko - Home',
  description: 'Buy best quality and premium Snekers on Sneko at good price',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <>
            {/* @ts-expect-error Server Component */}
            <Header />
            {children}
            <Footer />
          </>
        </Providers>
      </body>
    </html>
  )
}


import AOSInit from '@/utils/aos'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '- SET Coffee | فروشگاه اینترنتی قهوه ست',
  description: 'Mohammad Askari - Coffee Project with NextJs',
  icons:{icon:"/images/coffee-logo-clipart-md.png"}
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={inter.className}>
        <AOSInit/>
        {children}</body>
    </html>
  )
}

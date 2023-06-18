import { ConfigProvider } from '@/components/antd'
import './globals.css'
import 'antd/dist/reset.css'
import { Inter } from 'next/font/google'
import NavBar from '@/app/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lions',
  description: 'Lion\'s Image Gallery',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider>
          <NavBar />
          <main style={{ height: 'calc(100% - 64px)' }}>{children}</main>
        </ConfigProvider>
      </body>
    </html>
  )
}

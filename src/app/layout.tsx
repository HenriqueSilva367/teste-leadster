import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plus_Jakarta = Plus_Jakarta_Sans({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-plus-jakarta'})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={plus_Jakarta.className}>{children}</body>
    </html>
  )
}

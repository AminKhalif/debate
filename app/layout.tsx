// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Chivo } from 'next/font/google'
import { Rubik } from 'next/font/google'
import './styles.css'
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo',
})
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={chivo.variable + ' ' + rubik.variable}>
        {children}
      </body>
    </html>
  )
}
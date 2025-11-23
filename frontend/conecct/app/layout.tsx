import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for link in bio page
export const metadata: Metadata = {
  title: "NECC | Núcleo de estudantes de Ciências da Computação",
  description: "Núcleo de estudantes de Ciências da Computação",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/necc-logo.png",
        type: "image/png",
      },
    ],
    apple: "/necc-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

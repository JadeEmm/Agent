import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { cn } from '@/lib/utils'
import AuthSessionProvider from './auth/auth-session-provider'
import { Toaster } from "@/components/ui/sonner"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: 'Agent',
  description: 'Find an agent to apply for jobs for you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body         
      className={cn(
          "min-h-screen flex flex-col bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <AuthSessionProvider>
            {children}
            <Toaster position='top-right' richColors/>
          </AuthSessionProvider>

        </body>
    </html>
  )
}

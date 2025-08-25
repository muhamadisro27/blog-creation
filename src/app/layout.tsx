import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ReactQueryProvider from "@/providers/react-query"
import { ThemeProvider } from "@/providers/theme"
import MainLayout from "@/components/templates/main-layout"

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Blog Creation",
  description: "Blog creation app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <MainLayout>{children}</MainLayout>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

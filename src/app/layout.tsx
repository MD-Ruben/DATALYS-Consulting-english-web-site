"use client"
import Footer from "@/components/LayoutEN/Footer"
import Header from "@/components/LayoutEN/Header"
import { AnimatePresence } from "framer-motion"
import ScrollToTop from "@/components/LayoutEN/ScrollToTop"
import "../styles/index.css"
import PageTransition from "@/components/LayoutEN/Transitions/PageTransition"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en" className="dark">
      <head />

      <body className="bg-black">
        <Header />
        <AnimatePresence mode="wait">
          <PageTransition>{children}</PageTransition>
        </AnimatePresence>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}

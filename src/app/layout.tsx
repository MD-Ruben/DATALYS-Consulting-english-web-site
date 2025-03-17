"use client"
import Footer from "@/components/LayoutEN/Footer"
import Header from "@/components/LayoutEN/Header"
import { AnimatePresence } from "framer-motion"
import ScrollToTop from "@/components/LayoutEN/ScrollToTop"
import "../styles/index.css"
import PageTransition from "@/components/LayoutEN/Transitions/PageTransition"
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isEspaceEntreprise = pathname.startsWith('/espace-entreprise');

  return (
    <html suppressHydrationWarning lang="en" className="dark">
      <head />

      <body className="bg-black">
        {!isEspaceEntreprise && <Header />}
        <AnimatePresence mode="wait">
          <PageTransition>
            {children}
          </PageTransition>
        </AnimatePresence>
        {!isEspaceEntreprise && <Footer />}
        {!isEspaceEntreprise && <ScrollToTop />}
      </body>
    </html>
  )
}

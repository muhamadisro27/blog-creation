import React, { FC, ReactNode } from "react"
import Navbar from "@/components/organisms/navbar"
import Footer from "@/components/organisms/footer"

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="min-h-svh w-full flex flex-col items-center">
      <Navbar />

      <div className="flex flex-col w-full max-w-7xl justify-between h-[calc(100dvh-90px)]">
        {children}
        <Footer />
      </div>
    </main>
  )
}

export default MainLayout

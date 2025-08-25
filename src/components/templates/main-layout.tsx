import React, { FC, ReactNode } from "react"
import Navbar from "@/components/organisms/navbar"

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10">
      <Navbar />
      {children}
    </div>
  )
}

export default MainLayout

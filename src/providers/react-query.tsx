"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FC, ReactNode } from "react"

type ReactQueryProps = {
  children: ReactNode
}

const queryClient = new QueryClient()

const ReactQueryProvider: FC<ReactQueryProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider

"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/atoms/button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const onModeChange = React.useCallback(() => {
    if (theme === "light") {
      setTheme("dark")
    }
    if (theme === "dark") {
      setTheme("light")
    }
  }, [theme, setTheme])

  return (
    <Button
      onClick={onModeChange}
      className="cursor-pointer"
      variant="outline"
      size="icon"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

"use client"

import { useCallback, useEffect, useState } from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const themes = [
  {
    key: "system",
    icon: Monitor,
    label: "System theme",
  },
  {
    key: "light",
    icon: Sun,
    label: "Light theme",
  },
  {
    key: "dark",
    icon: Moon,
    label: "Dark theme",
  },
]

export type ThemeSwitcherProps = {
  value?: "light" | "dark" | "system"
  onChange?: (theme: "light" | "dark" | "system") => void
  defaultValue?: "light" | "dark" | "system"
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const handleThemeClick = useCallback(
    (themeKey: "light" | "dark" | "system") => {
      setTheme(themeKey)
    },
    [setTheme]
  )

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className={cn(
        "bg-zinc-100 dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800 relative isolate flex h-9 rounded-full p-1 shadow-sm",
        className
      )}
    >
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key

        return (
          <button
            aria-label={label}
            className={cn(
              "relative h-7 w-8 rounded-full transition-all duration-300 flex items-center justify-center group",
              isActive ? "bg-white dark:bg-zinc-800 shadow-sm" : "hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
            )}
            key={key}
            onClick={() => handleThemeClick(key as "light" | "dark" | "system")}
            type="button"
          >
            <Icon
              className={cn(
                "relative z-10 h-4 w-4 transition-colors duration-300",
                isActive ? "text-blue-600 dark:text-blue-400" : "text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"
              )}
            />
          </button>
        )
      })}
    </div>
  )
}

import { ThemeProvider as NextThemeProvider } from "next-themes"
import type { ReactNode } from "react"
import { lightClass as light, darkClass as dark } from "src/styles/tokens.css"

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{ light, dark }}
    >
      {children}
    </NextThemeProvider>
  )
}

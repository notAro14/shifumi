import { useTheme } from "next-themes"

export default function useThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const switchTheme = () => {
    let nextTheme = ""
    switch (theme) {
      case "dark":
        nextTheme = "light"
        break
      case "light":
        nextTheme = "dark"
        break
      case "system":
        nextTheme = "light"
        break
      default:
        nextTheme = "system"
    }
    setTheme(nextTheme)
  }
  return { switchTheme, theme, resolvedTheme }
}

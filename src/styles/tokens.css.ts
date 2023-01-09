import { createTheme } from "@vanilla-extract/css"

const DEBUG_ID = "shifumi-app"

const commonStyles = {
  space: {
    xxxs: "var(--size-000)",
    xxs: "var(--size-00)",
    xs: "var(--size-1)",
    sm: "var(--size-2)",
    md: "var(--size-3)",
    lg: "var(--size-4)",
    xl: "var(--size-5)",
    "2xl": "var(--size-6)",
    "3xl": "var(--size-7)",
    "4xl": "var(--size-8)",
    "5xl": "var(--size-9)",
    "6xl": "var(--size-10)",
    "7xl": "var(--size-11)",
    "8xl": "var(--size-12)",
    "9xl": "var(--size-13)",
    "10xl": "var(--size-14)",
    "11xl": "var(--size-15)",
  },
  fontSizes: {
    xs: "var(--font-size-00)",
    sm: "var(--font-size-0)",
    md: "var(--font-size-1)",
    lg: "var(--font-size-2)",
    xl: "var(--font-size-3)",
    "2xl": "var(--font-size-4)",
    "3xl": "var(--font-size-5)",
    "4xl": "var(--font-size-6)",
    "5xl": "var(--font-size-7)",
    "6xl": "var(--font-size-8)",
  },
  radii: {
    xs: "var(--radius-1)",
    sm: "var(--radius-2)",
    md: "var(--radius-3)",
    lg: "var(--radius-4)",
    xl: "var(--radius-5)",
    round: "var(--radius-round)",
    "xs-blob": "var(--radius-blob-1)",
    "sm-blob": "var(--radius-blob-2)",
    "md-blob": "var(--radius-blob-3)",
    "lg-blob": "var(--radius-blob-4)",
    "xl-blob": "var(--radius-blob-5)",
  },
  fontFamily: {
    sans: "var(--font-sans)",
  },
  shadows: {
    xs: "var(--shadow-1)",
    sm: "var(--shadow-2)",
    md: "var(--shadow-3)",
    lg: "var(--shadow-4)",
    xl: "var(--shadow-5)",
    "2xl": "var(--shadow-6)",
  },
}

export const [lightClass, vars] = createTheme(
  {
    ...commonStyles,
    colors: {
      overlay: "hsl(var(--gray-12-hsl) / 50%)",
      "surface-1": "var(--gray-0)",
      "surface-2": "var(--gray-1)",
      "surface-3": "var(--gray-2)",
      "surface-4": "var(--gray-3)",
      "text-1": "var(--gray-8)",
      "text-2": "var(--gray-7)",
      "text-fg-white": "var(--gray-0)",
      brand: "var(--blue-6)",
      "brand-hovered": "var(--blue-7)",
    },
  },
  DEBUG_ID
)
export const darkClass = createTheme(
  vars,
  {
    ...commonStyles,
    colors: {
      overlay: "hsl(var(--gray-12-hsl) / 50%)",
      "surface-1": "var(--gray-8)",
      "surface-2": "var(--gray-7)",
      "surface-3": "var(--gray-6)",
      "surface-4": "var(--gray-5)",
      "text-1": "var(--gray-3)",
      "text-2": "var(--gray-4)",
      "text-fg-white": "var(--gray-12)",
      brand: "var(--blue-4)",
      "brand-hovered": "var(--blue-5)",
    },
  },
  DEBUG_ID
)

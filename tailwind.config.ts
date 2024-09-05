import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

const createColors = <T extends string>(color: T) => {
  const colors = {
    DEFAULT: `oklch(var(--color-${color}))`,
    50: `oklch(var(--color-${color}-50))`,
    100: `oklch(var(--color-${color}-100))`,
    200: `oklch(var(--color-${color}-200))`,
    300: `oklch(var(--color-${color}-300))`,
    400: `oklch(var(--color-${color}-400))`,
    500: `oklch(var(--color-${color}-500))`,
    600: `oklch(var(--color-${color}-600))`,
    700: `oklch(var(--color-${color}-700))`,
    800: `oklch(var(--color-${color}-800))`,
    900: `oklch(var(--color-${color}-900))`,
    950: `oklch(var(--color-${color}-950))`,
  } as const

  return { [color]: colors } as { [Key in T]: typeof colors }
}

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      ...createColors("primary"),
      ...createColors("gray"),
      ...createColors("accent"),
      ...createColors("note"),
      ...createColors("good"),
      ...createColors("warning"),
      ...createColors("caution"),

      background: {
        DEFAULT: `oklch(var(--color-background) / <alpha-value>)`,
        muted: `oklch(var(--color-background-muted) / <alpha-value>)`,
        subtle: `oklch(var(--color-background-subtle) / <alpha-value>)`,
        elevated: {
          "01": `oklch(var(--color-background-elevated-01) / <alpha-value>)`,
        },
        neutral: `oklch(var(--color-background-neutral) / <alpha-value>)`,

        inverse: {
          DEFAULT: `oklch(var(--color-background-inverse) / <alpha-value>)`,
          primary: `oklch(var(--color-background-inverse-primary) / <alpha-value>)`,
          accent: `oklch(var(--color-background-inverse-accent) / <alpha-value>)`,
          gray: `oklch(var(--color-background-inverse-gray) / <alpha-value>)`,
          caution: `oklch(var(--color-background-inverse-caution) / <alpha-value>)`,
          good: `oklch(var(--color-background-inverse-good) / <alpha-value>)`,
          warning: `oklch(var(--color-background-inverse-warning) / <alpha-value>)`,
          note: `oklch(var(--color-background-inverse-note) / <alpha-value>)`,
        },

        contrast: {
          DEFAULT: `oklch(var(--color-background-contrast) / <alpha-value>)`,
          primary: `oklch(var(--color-background-contrast-primary) / <alpha-value>)`,
          accent: `oklch(var(--color-background-contrast-accent) / <alpha-value>)`,
          caution: `oklch(var(--color-background-contrast-caution) / <alpha-value>)`,
          good: `oklch(var(--color-background-contrast-good) / <alpha-value>)`,
          warning: `oklch(var(--color-background-contrast-warning) / <alpha-value>)`,
          note: `oklch(var(--color-background-contrast-note) / <alpha-value>)`,
        },
      },

      text: {
        DEFAULT: `oklch(var(--color-text) / <alpha-value>)`,
        subtle: `oklch(var(--color-text-subtle) / <alpha-value>)`,
        muted: `oklch(var(--color-text-muted) / <alpha-value>)`,
        primary: `oklch(var(--color-text-primary) / <alpha-value>)`,
        accent: `oklch(var(--color-text-accent) / <alpha-value>)`,

        inverse: {
          DEFAULT: `oklch(var(--color-text-inverse) / <alpha-value>)`,
          primary: `oklch(var(--color-text-inverse-primary) / <alpha-value>)`,
          accent: `oklch(var(--color-text-inverse-accent) / <alpha-value>)`,
          gray: `oklch(var(--color-text-inverse-gray) / <alpha-value>)`,
          caution: `oklch(var(--color-text-inverse-caution) / <alpha-value>)`,
          good: `oklch(var(--color-text-inverse-good) / <alpha-value>)`,
          warning: `oklch(var(--color-text-inverse-warning) / <alpha-value>)`,
          note: `oklch(var(--color-text-inverse-note) / <alpha-value>)`,
        },

        light: {
          DEFAULT: `oklch(var(--color-text-light) / <alpha-value>)`,
          primary: `oklch(var(--color-text-light-primary) / <alpha-value>)`,
          accent: `oklch(var(--color-text-light-accent) / <alpha-value>)`,
          gray: `oklch(var(--color-text-light-gray) / <alpha-value>)`,
          caution: `oklch(var(--color-text-light-caution) / <alpha-value>)`,
          good: `oklch(var(--color-text-light-good) / <alpha-value>)`,
          warning: `oklch(var(--color-text-light-warning) / <alpha-value>)`,
          note: `oklch(var(--color-text-light-note) / <alpha-value>)`,
        },
      },

      border: {
        DEFAULT: `oklch(var(--color-border))`,
        strong: `oklch(var(--color-border-strong))`,
        input: `oklch(var(--color-border-input))`,
      },
      ring: `oklch(var(--color-ring))`,

      white: "white",
      black: "black",
      transparent: "transparent",
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
} satisfies Config

import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"
import typography from '@tailwindcss/typography'

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

      bgc: {
        /* -------------------------------------------------------------------------- */
        /*                                 Background                                 */
        /* -------------------------------------------------------------------------- */

        // gray palette
        DEFAULT: `oklch(var(--color-bg) / <alpha-value>)`,
        muted: `oklch(var(--color-bg-muted) / <alpha-value>)`,
        subtle: `oklch(var(--color-bg-subtle) / <alpha-value>)`,
        elevated: `oklch(var(--color-bg-elevated) / <alpha-value>)`,
        inverse: `oklch(var(--color-bg-inverse) / <alpha-value>)`,

        // themed
        primary: `oklch(var(--color-bg-primary) / <alpha-value>)`,
        accent: `oklch(var(--color-bg-accent) / <alpha-value>)`,
        gray: `oklch(var(--color-bg-gray) / <alpha-value>)`,
        caution: `oklch(var(--color-bg-caution) / <alpha-value>)`,
        good: `oklch(var(--color-bg-good) / <alpha-value>)`,
        warning: `oklch(var(--color-bg-warning) / <alpha-value>)`,
        note: `oklch(var(--color-bg-note) / <alpha-value>)`,

        // components
        field: {
          DEFAULT: `oklch(var(--color-bg-field) / <alpha-value>)`,
          muted: `oklch(var(--color-bg-field-muted) / <alpha-value>)`,
          subtle: `oklch(var(--color-bg-field-subtle) / <alpha-value>)`,
        },
        pressable: {
          DEFAULT: `oklch(var(--color-bg-pressable) / <alpha-value>)`,
          muted: `oklch(var(--color-bg-pressable-muted) / <alpha-value>)`,
          subtle: `oklch(var(--color-bg-pressable-subtle) / <alpha-value>)`,
        },
      },

      fgc: {
        /* -------------------------------------------------------------------------- */
        /*                                 Foreground                                 */
        /* -------------------------------------------------------------------------- */

        // gray palette
        DEFAULT: `oklch(var(--color-fg) / <alpha-value>)`,
        muted: `oklch(var(--color-fg-muted) / <alpha-value>)`,
        subtle: `oklch(var(--color-fg-subtle) / <alpha-value>)`,
        inverse: `oklch(var(--color-fg-inverse) / <alpha-value>)`,

        // themed
        primary: `oklch(var(--color-fg-primary) / <alpha-value>)`,
        accent: `oklch(var(--color-fg-accent) / <alpha-value>)`,
        caution: `oklch(var(--color-fg-caution) / <alpha-value>)`,
        good: `oklch(var(--color-fg-good) / <alpha-value>)`,
        warning: `oklch(var(--color-fg-warning) / <alpha-value>)`,
        note: `oklch(var(--color-fg-note) / <alpha-value>)`,

        // fixed light
        light: {
          DEFAULT: `oklch(var(--color-fg-light) / <alpha-value>)`,
          primary: `oklch(var(--color-fg-light-primary) / <alpha-value>)`,
          accent: `oklch(var(--color-fg-light-accent) / <alpha-value>)`,
          caution: `oklch(var(--color-fg-light-caution) / <alpha-value>)`,
          good: `oklch(var(--color-fg-light-good) / <alpha-value>)`,
          warning: `oklch(var(--color-fg-light-warning) / <alpha-value>)`,
          note: `oklch(var(--color-fg-light-note) / <alpha-value>)`,
        },
      },

      /* -------------------------------------------------------------------------- */
      /*                                   Others                                   */
      /* -------------------------------------------------------------------------- */

      bdc: {
        DEFAULT: `oklch(var(--color-border))`,
        subtle: `oklch(var(--color-border-subtle))`,
        field: `oklch(var(--color-border-field))`,
        pressable: `oklch(var(--color-border-pressable))`,
      },

      etc: {
        ring: `oklch(var(--color-ring))`,
      },

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
  plugins: [animate, typography],
} satisfies Config

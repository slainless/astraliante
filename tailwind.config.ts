import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"
import * as radixColors from "@radix-ui/colors"
import { createPlugin } from "windy-radix-palette"

type BaseColor = Exclude<
  keyof typeof radixColors,
  | `${string}Dark`
  | `${string}DarkA`
  | `${string}A`
  | `${string}P3`
  | `${string}P3A`
>
const grabColors = <T extends BaseColor>(color: T) =>
  ({
    [`${color}`]: radixColors[`${color}P3`],
    [`${color}A`]: radixColors[`${color}P3A`],
    [`${color}Dark`]: radixColors[`${color}DarkP3`],
    [`${color}DarkA`]: radixColors[`${color}DarkP3A`],
  } as const)

const colors = createPlugin({
  colors: {
    ...grabColors("indigo"), // primary
    ...grabColors("slate"), // gray
    ...grabColors("jade"), // secondary

    ...grabColors("ruby"), // danger
    ...grabColors("green"), // success
    ...grabColors("amber"), // warning
    ...grabColors("cyan"), // info
  },
})

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
    extend: {
      colors: {
        border: colors.alias({
          name: "border",
          value: "slate.6",
        }),
        input: colors.alias({ name: "input", value: "slate.6" }),
        ring: colors.alias({ name: "ring", value: "slate.5" }),
        background: colors.alias({
          name: "background",
          light: "white",
          dark: "slate.1",
        }),
        foreground: colors.alias({ name: "foreground", value: "slate.12" }),
        primary: {
          DEFAULT: colors.alias({ name: "primary", value: "indigo.3" }),
          foreground: colors.alias({
            name: "primary-foreground",
            value: "indigo.12",
          }),
        },
        secondary: {
          DEFAULT: colors.alias({ name: "secondary", value: "slate.3" }),
          foreground: colors.alias({
            name: "secondary-foreground",
            value: "slate.12",
          }),
        },
        destructive: {
          DEFAULT: colors.alias({ name: "destructive", value: "ruby.3" }),
          foreground: colors.alias({
            name: "destructive-foreground",
            value: "ruby.12",
          }),
        },
        muted: {
          DEFAULT: colors.alias({ name: "muted", value: "slate.3" }),
          foreground: colors.alias({
            name: "muted-foreground",
            value: "slate.12",
          }),
        },
        accent: {
          DEFAULT: colors.alias({ name: "accent", value: "jade.3" }),
          foreground: colors.alias({
            name: "accent-foreground",
            value: "jade.12",
          }),
        },
        popover: {
          DEFAULT: colors.alias({ name: "card", value: "slate.3" }),
          foreground: colors.alias({
            name: "card-foreground",
            value: "slate.12",
          }),
        },
        card: {
          DEFAULT: colors.alias({ name: "card", value: "slate.3" }),
          foreground: colors.alias({
            name: "card-foreground",
            value: "slate.12",
          }),
        },
      },
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
  plugins: [animate, colors.plugin],
} satisfies Config

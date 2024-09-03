import type { Theme } from "#lib/theme"
import { isDarkMode, useSubscribeTheme } from "#lib/theme"
import type { Atom } from "jotai"
import type { PropsWithChildren } from "react"

export interface BodyProps extends PropsWithChildren {
  ssrTheme: Theme
  themeAtom: Atom<Theme>
}

export default function Body(props: BodyProps) {
  useSubscribeTheme(props.themeAtom)

  return (
    <body
      className={`${isDarkMode(props.ssrTheme) ? "dark" : ""}`}
      suppressHydrationWarning
    >
      {props.children}
    </body>
  )
}

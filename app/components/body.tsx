import type { Theme } from "#lib/theme"
import { isDarkMode, useSubscribeTheme } from "#lib/theme"
import type { Atom } from "jotai"
import type { PropsWithChildren } from "react"

export interface BodyProps extends PropsWithChildren {
  themeAtom: Atom<Theme>
}

export function Body(props: BodyProps) {
  useSubscribeTheme(props.themeAtom)

  return <body>{props.children}</body>
}

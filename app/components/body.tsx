import type { Theme } from "#lib/theme"
import { useSubscribeTheme } from "#lib/theme.client"
import type { PropsWithChildren } from "react"

export interface BodyProps extends PropsWithChildren {
  theme: Theme
}

export default function Body(props: BodyProps) {
  useSubscribeTheme()

  return <body className={`${props.theme}`}>{props.children}</body>
}

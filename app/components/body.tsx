import type { Theme } from "#lib/theme"
import { useSubscribeTheme, useSyncTheme } from "#lib/theme.client"
import type { PropsWithChildren } from "react"

export interface BodyProps extends PropsWithChildren {
  theme: Theme
}

export default function Body(props: BodyProps) {
  useSyncTheme(props.theme)
  useSubscribeTheme()

  return <body className={`${props.theme}`}>{props.children}</body>
}

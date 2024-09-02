import type { PropsWithChildren } from "react"

export default function Body(props: PropsWithChildren) {
  return <body className="bg-background text-foreground">{props.children}</body>
}

import type { PropsWithChildren } from "react"
import { FolderListSidebar, Sidebar } from "./sidebar"
import { Header } from "./header"
import { useAtomValue } from "jotai"
import { foldersAtom } from "#core/fs"

export interface LayoutProps extends PropsWithChildren {
  className?: string
}
export function Layout(props: LayoutProps) {
  const folders = useAtomValue(foldersAtom)
  return (
    <div className="grid min-h-screen w-full grid-cols-[max-content_auto]">
      <FolderListSidebar elements={folders} />
      <div>
        <Header />
        <div>{props.children}</div>
      </div>
    </div>
  )
}

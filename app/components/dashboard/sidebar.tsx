import {
  File,
  Tree,
  Folder,
  type TreeViewElement,
} from "#components/ui/file-tree"
import type { ComponentProps, PropsWithChildren } from "react"
import { FolderTreeRenderer } from "./folder-tree"
import { FolderClosedIcon } from "lucide-react"

export interface SidebarProps extends PropsWithChildren {}
export function Sidebar(props: SidebarProps) {
  return (
    <div
      id="sidebar"
      className="w-72 bg-bgc-elevated sticky top-0 left-0 h-[100vh] block border-e overflow-auto"
    >
      <div
        id="header"
        className="z-10 sticky h-[var(--header-height,_theme(spacing.16))] top-0 block p-3 bg-bgc-elevated border-b dark:border-b-0 dark:shadow-md"
      ></div>
      <div id="sidebar-content" className="py-3 px-3">
        {props.children}
      </div>
      <div id="sidebar-footer"></div>
    </div>
  )
}

export interface FileListSidebarProps
  extends Omit<ComponentProps<typeof Tree>, "children"> {
  elements?: TreeViewElement[]
  children?: TreeViewElement[]
}
export function FolderListSidebar(props: FileListSidebarProps) {
  const els = props.elements ?? props.children
  return (
    <Sidebar>
      <Tree
        className="bg-background rounded-md"
        initialSelectedId="7"
        elements={els}
        closeIcon={<FolderClosedIcon className="size-4" />}
      >
        <FolderTreeRenderer elements={els} />
      </Tree>
    </Sidebar>
  )
}

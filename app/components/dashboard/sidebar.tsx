import {
  File,
  Tree,
  Folder,
  type TreeViewElement,
} from "#components/ui/file-tree"
import type { ComponentProps, PropsWithChildren } from "react"
import { FolderTreeRenderer } from "./folder-tree"
import { FolderClosedIcon } from "lucide-react"
import { Object, ny } from "#lib/utils"

export interface SidebarProps extends ComponentProps<"div"> {}
export function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <div
      id="sidebar"
      className={ny(
        "w-72 bg-bgc-elevated sticky top-0 left-0 h-[100vh] block border-e overflow-auto",
        className
      )}
      {...props}
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

export interface FolderListSidebarProps
  extends Omit<ComponentProps<typeof Tree>, "children" | "className">,
    Omit<SidebarProps, "children"> {
  elements?: TreeViewElement[]
  children?: TreeViewElement[]
}
export function FolderListSidebar(props: FolderListSidebarProps) {
  const [_tree, sidebar] = Object.partition(props, [
    "elements",
    "children",
    "closeIcon",
    "openIcon",
    "indicator",
    "initialExpandedItems",
    "dir",
  ])
  const { elements, children, ...tree } = _tree
  const els = elements ?? children
  return (
    <Sidebar {...sidebar}>
      <Tree
        className="bg-background rounded-md"
        elements={els}
        closeIcon={<FolderClosedIcon className="size-4" />}
        {...tree}
      >
        <FolderTreeRenderer elements={els} />
      </Tree>
    </Sidebar>
  )
}

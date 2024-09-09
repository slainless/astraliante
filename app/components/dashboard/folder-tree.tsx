import { FolderIcon } from "lucide-react"
import {
  DefaultCloseIcon,
  File,
  Folder,
  Tree,
  useTree,
  type TreeViewElement,
} from "../ui/file-tree"

export interface FolderTreeRendererProps {
  elements?: TreeViewElement[]
  children?: TreeViewElement[]
}
export function FolderTreeRenderer({
  elements,
  children,
}: FolderTreeRendererProps) {
  const els = elements ?? children
  // const { closeIcon: __closeIcon } = useTree()
  // const closeIcon = __closeIcon ?? <DefaultCloseIcon className="size-4" />
  const closeIcon = <FolderIcon className="size-4" />

  return els?.map((el) => {
    if (el.children == null || el.children.length === 0)
      return (
        <File key={el.id} value={el.id} fileIcon={closeIcon}>
          <p>{el.name}</p>
        </File>
      )

    return (
      <Folder key={el.id} element={el.name} value={el.id}>
        <FolderTreeRenderer elements={el.children} />
      </Folder>
    )
  })
}

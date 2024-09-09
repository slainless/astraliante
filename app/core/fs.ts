import type { TreeViewElement } from "#components/ui/file-tree"
import { atom } from "jotai"

export const foldersAtom = atom([] as TreeViewElement[])

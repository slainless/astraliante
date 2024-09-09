import type { Path } from "./fs"

export interface TreeViewElement {
  id: string
  name: string
  isSelectable?: boolean
  children?: TreeViewElement[]
}

export namespace TreeViewElement {
  function createItem(dir: Path, name: string) {
    const id = dir + "/" + name
    return {
      id,
      name,
      isSelectable: true,
      children: [] as TreeViewElement[],
    } satisfies TreeViewElement
  }

  export function from(directories: Path[]): TreeViewElement[] {
    const lookupMap: Record<string, TreeViewElement[]> = {}
    const tree: TreeViewElement[] = []

    for (const dir of directories) {
      let current = ""
      const parts = dir.split("/")
      for (const [index, part] of parts.entries()) {
        if (index === 0 && part === "") continue
        if (lookupMap[current + "/" + part] != null) {
          current += "/" + part
          continue
        }

        const item = createItem(current, part)
        const parent = (() => {
          if (current === "") return tree
          if (lookupMap[current] != null) return lookupMap[current]
          throw new Error("Logically, parent should exist")
        })()

        parent.push(item)
        lookupMap[item.id] = item.children
        current = item.id
      }
    }

    return tree
  }
}

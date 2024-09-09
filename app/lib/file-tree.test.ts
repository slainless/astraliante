import { expect, test } from "vitest"
import { TreeViewElement } from "./file-tree"
import { basename } from "node:path"

const folder = (id: string, children: TreeViewElement[]) =>
  ({
    id,
    name: basename(id),
    isSelectable: true,
    children,
  } satisfies TreeViewElement)

test("build TreeViewElement[] from array of full path string", () => {
  expect(
    TreeViewElement.from([
      "/a/b/c/d/e",
      "/a/b/d/e",
      "/a/b",
      "/a/b",
      "/b/c/d/e",
      "/b/c/e",
    ])
  ).to.be.deep.eq([
    folder("/a", [
      folder("/a/b", [
        folder("/a/b/c", [folder("/a/b/c/d", [folder("/a/b/c/d/e", [])])]),
        folder("/a/b/d", [folder("/a/b/d/e", [])]),
      ]),
    ]),
    folder("/b", [
      folder("/b/c", [
        folder("/b/c/d", [folder("/b/c/d/e", [])]),
        folder("/b/c/e", []),
      ]),
    ]),
  ] satisfies TreeViewElement[])
})

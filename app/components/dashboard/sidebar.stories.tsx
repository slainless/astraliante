import type { Meta, StoryObj } from "@storybook/react"
import { FolderListSidebar, Sidebar } from "./sidebar"
import type { TreeViewElement } from "#components/ui/file-tree"

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  parameters: {
    layout: {
      fullscreen: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithList: Story = {
  args: {
    children: Array(100)
      .fill(0)
      .map((_, index) => <li key={index}>{index}</li>),
  },
}

export const WithFileList = {
  render: () => (
    <FolderListSidebar>
      {Array(10).fill(
        folder("1", "src", [
          folder("2", "app", [folder("3", "layout"), folder("4", "page")]),
          folder("5", "components", [
            folder("6", "header"),
            folder("7", "footer"),
          ]),
          folder("8", "lib"),
          folder("9", "types"),
        ])
      )}
    </FolderListSidebar>
  ),
}

const folder = (id: string, name: string, children?: TreeViewElement[]) =>
  ({
    id,
    name,
    children,
    isSelectable: true,
  } satisfies TreeViewElement)

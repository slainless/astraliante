import type { Meta, StoryObj } from "@storybook/react"
import { FolderListSidebar, Sidebar } from "./sidebar"
import { TreeViewElement } from "#lib/file-tree"
import { faker } from "@faker-js/faker"

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

const exampleList = Array(200)
  .fill("")
  .map((_) => faker.system.directoryPath())
export const WithFileList = {
  render: () => (
    <FolderListSidebar
      initialSelectedId={exampleList[faker.number.int(exampleList.length - 1)]}
      initialExpandedItems={Array.from(
        new Set(
          Array(200)
            .fill(0)
            .map((_) =>
              TreeViewElement.deepExpand(
                exampleList[faker.number.int(exampleList.length - 1)]
              )
            )
            .flat()
        )
      )}
    >
      {TreeViewElement.from(exampleList)}
    </FolderListSidebar>
  ),
}

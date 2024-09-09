import type { Meta, StoryObj } from "@storybook/react"
import { FolderListSidebar, Sidebar } from "./sidebar"
import { TreeViewElement } from "#lib/file-tree"

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
    <FolderListSidebar
      initialSelectedId="/src/components/header"
      initialExpandedItems={[
        ...TreeViewElement.deepExpand("/etc/bin"),
        ...TreeViewElement.deepExpand("/mnt/C/projects"),
        ...TreeViewElement.deepExpand(
          "/mnt/C/Users/slainless/AppData/Android/Sdk/build-tools/34.0.0/lib/etc/Android"
        ),
      ]}
    >
      {TreeViewElement.from([
        "/src/app/layout",
        "/src/app/page",
        "/src/components/header",
        "/src/components/footer",
        "/src/lib",
        "/src/types",
        "/etc/bin/bash",
        "/var/lib",
        "/mnt/C/projects/slainless",
        "/var/www/slainless.io/assets/img",
        "/mnt/C/Program Files/Google Chrome",
        "/mnt/C/Users/slainless/AppData/Android/Sdk/build-tools/34.0.0/lib/etc/Android/X",
      ])}
    </FolderListSidebar>
  ),
}

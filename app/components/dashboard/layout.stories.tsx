import type { Meta, StoryObj } from "@storybook/react"
import { Layout } from "./layout"

const meta: Meta<typeof Layout> = {
  component: Layout,
  parameters: {
    layout: {
      fullscreen: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

import type { Meta, StoryObj } from "@storybook/react"
import { Dashboard04 } from "./04"

const meta: Meta = {
  component: Dashboard04,
  parameters: {
    layout: {
      fullscreen: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

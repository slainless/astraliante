import type { Meta, StoryObj } from "@storybook/react"
import { Dashboard01 } from "./01"

const meta: Meta = {
  component: Dashboard01,
  parameters: {
    layout: {
      fullscreen: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

import type { Meta, StoryObj } from "@storybook/react"
import { Dashboard05 } from "./05"

const meta: Meta = {
  component: Dashboard05,
  parameters: {
    layout: {
      fullscreen: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

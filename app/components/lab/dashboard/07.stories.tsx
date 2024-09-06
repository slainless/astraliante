import type { Meta, StoryObj } from "@storybook/react"
import { Dashboard07 } from "./07"

const meta: Meta = {
  component: Dashboard07,
  parameters: {
    layout: {
      fullscreen: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

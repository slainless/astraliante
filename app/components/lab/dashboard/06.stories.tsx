import type { Meta, StoryObj } from "@storybook/react"
import { Dashboard06 } from "./06"

const meta: Meta = {
  component: Dashboard06,
  parameters: {
    layout: {
      fullscreen: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

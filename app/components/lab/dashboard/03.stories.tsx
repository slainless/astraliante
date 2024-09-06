import type { Meta, StoryObj } from "@storybook/react"
import { Dashboard03 } from "./03"

const meta: Meta = {
  component: Dashboard03,
  parameters: {
    layout: {
      fullscreen: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

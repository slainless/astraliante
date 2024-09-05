import type { Meta, StoryObj } from "@storybook/react"
import { Dashboard06 } from "./dashboard-06"

const meta: Meta = {
  title: "Components Lab/Dashboard 06",
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

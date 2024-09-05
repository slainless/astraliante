import type { Meta, StoryObj } from "@storybook/react"
import { Dashboard07 } from "./dashboard-07"

const meta: Meta = {
  title: "Components Lab/Dashboard 07",
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

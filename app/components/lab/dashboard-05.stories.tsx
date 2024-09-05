import type { Meta, StoryObj } from "@storybook/react"
import { Dashboard05 } from "./dashboard-05"

const meta: Meta = {
  title: "Components Lab/Dashboard 05",
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

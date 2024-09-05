import type { Meta, StoryObj } from "@storybook/react"
import { Dashboard01 } from "./dashboard-01"

const meta: Meta = {
  title: "Components Lab/Dashboard 01",
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

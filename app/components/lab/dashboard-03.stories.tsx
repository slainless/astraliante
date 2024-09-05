import type { Meta, StoryObj } from "@storybook/react"
import { Dashboard03 } from "./dashboard-03"

const meta: Meta = {
  title: "Components Lab/Dashboard 03",
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

import type { Meta, StoryObj } from "@storybook/react"
import { Dashboard02 } from "./dashboard-02"

const meta: Meta = {
  title: "Components Lab/Dashboard 02",
  component: Dashboard02,
  parameters: {
    layout: {
      fullscreen: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "./header"

const meta: Meta<typeof Header> = {
  component: Header,
  parameters: {
    layout: {
      fullscreen: true,
    },
  },
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

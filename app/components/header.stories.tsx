import type { Meta, StoryObj } from "@storybook/react"
import Header from "./header"

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Components/Header",
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

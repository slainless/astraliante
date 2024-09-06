import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "./header"
import Typography from "../lab/typography.mdx"

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

export const ScrollableWithTypography: Story = {
  decorators: [
    (Story) => (
      <div className="grid w-full">
        <Story />
        <div className="w-full flex justify-center">
          <div className="prose prose-slate lg:prose-lg dark:prose-invert max-w-2xl">
            <Typography />
          </div>
        </div>
      </div>
    ),
  ],
}

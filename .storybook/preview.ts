import type { Preview } from "@storybook/react"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import "~/tailwind.css"
import { createElement } from "react"
import { GlobalStore } from "#lib/jotai"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      stylePreview: true,
    },
  },
  decorators: [
    (Story) =>
      createElement(TooltipProvider, null, [
        createElement(GlobalStore, null, [Story()]),
      ]),
  ],
}

export default preview

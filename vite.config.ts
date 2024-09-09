import { vitePlugin as remix } from "@remix-run/dev"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import { netlifyPlugin } from "@netlify/remix-edge-adapter/plugin"

const plugins =
  // @ts-expect-error
  globalThis["IS_STORYBOOK"] || process.env.VITEST
    ? [tsconfigPaths()]
    : [remix(), netlifyPlugin(), tsconfigPaths()]

export default defineConfig({
  plugins,
})

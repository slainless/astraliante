import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react"
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node"

import styles from "./tailwind.css?url"
import { Body } from "./components/body"
import { GlobalStore } from "#lib/jotai"
import { SystemThemeSupport, themeAtom } from "#lib/theme"

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

export function loader({ request }: LoaderFunctionArgs) {
  return null
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <SystemThemeSupport />
      </head>
      <GlobalStore>
        <Body themeAtom={themeAtom}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </Body>
      </GlobalStore>
    </html>
  )
}

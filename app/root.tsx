import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react"
import type {
  LinksFunction,
  LoaderFunction,
  LoaderFunctionArgs,
} from "@remix-run/node"

import styles from "./tailwind.css?url"
import Body from "./components/body"
import { parse } from "cookie"
import { GlobalStore } from "#lib/jotai"
import { getSSRPreferredTheme } from "#lib/theme.server"

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

export function loader({ request }: LoaderFunctionArgs) {
  const cookies = parse(request.headers.get("Cookie") ?? "")

  return { theme: getSSRPreferredTheme(cookies) }
}

export default function App() {
  const { theme } = useLoaderData<typeof loader>()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <GlobalStore>
        <Body theme={theme}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </Body>
      </GlobalStore>
    </html>
  )
}

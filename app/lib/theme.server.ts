import { parse } from "cookie"
import { Theme, THEME_COOKIE_KEY, themes } from "./theme"

export function getSSRPreferredTheme(
  cookies: Record<string, string> | string
): Theme {
  const _cookies = typeof cookies === "string" ? parse(cookies) : cookies
  if (themes.includes(_cookies[THEME_COOKIE_KEY] as Theme)) {
    return _cookies[THEME_COOKIE_KEY] as Theme
  } else {
    return Theme.System
  }
}

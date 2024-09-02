import { parse } from "cookie"
import { useAtomValue } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { useEffect } from "react"

export const THEME_COOKIE_KEY = "astraliante_theme"

export enum Theme {
  Light = "light",
  Dark = "dark",
  System = "system",
}

export const themes = Object.values(Theme)

export const themeAtom = atomWithStorage(THEME_COOKIE_KEY, Theme.System)

const clearThemes = (el: HTMLElement) =>
  themes.forEach((theme) => el.classList.remove(theme))

export function useSubscribeTheme() {
  const theme = useAtomValue(themeAtom)

  useEffect(() => {
    clearThemes(document.body)
    document.body.classList.add(theme)
  }, [theme])

  useEffect(() => {
    // always sync theme change to cookie
    document.cookie = `${THEME_COOKIE_KEY}=${theme}; path=/; max-age=31536000`
  }, [theme])
}

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

import { parse } from "cookie"
import { useAtomValue, type Atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { createElement, useEffect } from "react"

export const THEME_COOKIE_KEY = "astraliante_theme"

export enum Theme {
  Light = "light",
  Dark = "dark",
  System = "system",
}

export const themes = Object.values(Theme)

export const themeAtom = atomWithStorage(THEME_COOKIE_KEY, Theme.System)

// const clearThemes = (el: HTMLElement) =>
//   themes.forEach((theme) => el.classList.remove(theme))

export function isDarkMode(theme: Theme) {
  if (theme == Theme.Light) return false
  if (theme == Theme.Dark) return true
  if (globalThis["window"] == null) return false
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

export function useSubscribeTheme(atom: Atom<Theme>) {
  const theme = useAtomValue(atom)

  useEffect(() => {
    // clearThemes(document.body)
    if (isDarkMode(theme)) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
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

export function SystemThemeSupport() {
  const src = /*javascript*/ `
    ${isDarkMode.toString()}

    const theme = localStorage.getItem("${THEME_COOKIE_KEY}")
    if(isDarkMode(theme)) document.documentElement.classList.add("dark") 
    else document.documentElement.classList.remove("dark")
  `
  return createElement("script", { dangerouslySetInnerHTML: { __html: src } })
}

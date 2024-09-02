import { atom, useAtom, useAtomValue, useSetAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { useEffect } from "react"
import { THEME_COOKIE_KEY, Theme } from "./theme"

export const themeAtom = atomWithStorage(THEME_COOKIE_KEY, Theme.System)

export function useSubscribeTheme() {
  const theme = useAtomValue(themeAtom)

  useEffect(() => {
    if (isDarkTheme(theme)) document.body.classList.add("dark")
    else document.body.classList.remove("dark")
  }, [theme])

  useEffect(() => {
    // always sync theme change to cookie
    document.cookie = `${THEME_COOKIE_KEY}=${theme}; path=/; max-age=31536000`
  }, [theme])
}

export function isDarkTheme(theme: Theme) {
  if (theme == Theme.Light) return false
  if (theme == Theme.Dark) return true
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

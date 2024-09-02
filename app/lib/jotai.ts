import { Provider, createStore } from "jotai"
import { createElement, type PropsWithChildren } from "react"

export const globalStore = createStore()

export interface GlobalStoreProps extends PropsWithChildren {}
export function GlobalStore(props: GlobalStoreProps) {
  return createElement(Provider, { store: globalStore, ...props })
}

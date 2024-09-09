import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function ny(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

namespace __Object {
  export function partition<T extends Record<any, any>, K extends keyof T>(
    obj: T,
    keys: readonly K[]
  ): [Pick<T, K>, Omit<T, K>] {
    const picked = {} as any
    const omitted = Object.assign({}, obj)

    for (const key of keys) {
      picked[key] = obj[key]
      delete omitted[key]
    }

    return [picked, omitted]
  }
}

export { __Object as Object }

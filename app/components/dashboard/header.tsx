import { ny } from "#lib/utils"
import type { ComponentProps, PropsWithChildren } from "react"
import { Input } from "../ui/input"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import { LayoutList, LayoutGrid, Search } from "lucide-react"

export interface HeaderProps extends PropsWithChildren {
  className?: string
}

export function Header(props: HeaderProps) {
  return (
    <div
      className={ny(
        "w-full h-[var(--header-height,_theme(spacing.16))] border-b dark:border-b-0 dark:shadow-md flex items-center px-6 sticky top-0 bg-bgc-elevated/60 dark:bg-bgc-elevated/80 backdrop-blur-md",
        props.className
      )}
    >
      <div className="ml-auto flex gap-3">
        <div className="w-64 relative flex items-center">
          <Search className="size-4 absolute ms-3 text-gray-12" />
          <Input
            type="search"
            placeholder="Search file..."
            className="border-bdc-subtle bg-bgc ps-10 placeholder:text-gray-11"
          />
        </div>
        <ToggleGroup
          type="single"
          variant="outline"
          defaultValue="list"
          className="gap-0 *:border-e-0 *:rounded-none first:*:rounded-s-sm last:*:rounded-e-sm last:*:border-e"
        >
          <ToggleGroupItem value="list">
            <LayoutList className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="grid">
            <LayoutGrid className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}

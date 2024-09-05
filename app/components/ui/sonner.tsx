"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

function Toaster({ ...props }: ToasterProps) {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-bgc-elevated group-[.toaster]:text-fgc group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-fgc-muted",
          actionButton:
            "group-[.toast]:bg-bgc-primary-subtle group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-bgc-muted group-[.toast]:text-fgc-muted",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

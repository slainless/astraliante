import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"

import { ny } from "~/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-bgc-inverse text-fgc-inverse hover:bg-bgc-inverse/80",
        secondary: "border-transparent bg-bgc-muted text-fgc hover:bg-muted/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-fgc",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={ny(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

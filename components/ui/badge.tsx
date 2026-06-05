import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "secondary" }>(({ className, variant = "default", ...props }, ref) => (
  <div ref={ref} className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors", variant === "secondary" && "bg-[var(--color-bg-alt)] text-[var(--color-text-secondary)]", className)} {...props} />
))
Badge.displayName = "Badge"

export { Badge }

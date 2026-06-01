"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface MenuCardProps {
  href: string
  icon: React.ReactNode
  title: string
  subtitle?: string
}

export function MenuCard({ href, icon, title, subtitle }: MenuCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-4 rounded-xl bg-primary p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10 text-3xl">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-primary-foreground">{title}</h3>
        {subtitle && (
          <p className="text-sm text-primary-foreground/70">{subtitle}</p>
        )}
      </div>
      <ChevronRight className="h-5 w-5 text-primary-foreground/60 transition-transform group-hover:translate-x-1" />
    </Link>
  )
}

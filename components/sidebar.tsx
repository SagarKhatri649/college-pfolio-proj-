"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import {
  Home,
  User,
  Code2,
  PenLine,
  LineChart,
  ShoppingCart,
  Bookmark,
  Box,
  Users,
  Mail,
  Radio,
  MessageSquare,
  Twitter,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

type Item = { label: string; icon: React.ElementType; count?: string | number; section?: string }

const items: Item[] = [
  { label: "Home", icon: Home, count: 1 },
  { label: "About", icon: User, count: 2 },
  { label: "Projects", icon: Code2, count: 3 },
  { label: "Writing", icon: PenLine, count: 4 },
  { label: "Investments", icon: LineChart, count: 5 },
  { label: "Boutique", icon: ShoppingCart, count: 6 },
  { label: "Resources", icon: Box, section: "Resources" },
  { label: "Reading List", icon: Bookmark, count: 7 },
  { label: "Aesthetic Goods", icon: Box, count: 8 },
  { label: "Talent", icon: Users, count: 9 },
  { label: "Newsletters", icon: Mail, count: 0 },
  { label: "Podcasts", icon: Radio, count: "-" },
  { label: "Stay in touch", icon: Box, section: "Stay in touch" },
  { label: "Contact", icon: MessageSquare, count: "/" },
  { label: "Twitter", icon: Twitter, count: "↗" },
]

function DesktopSidebar({ expanded, setExpanded }: { expanded: boolean; setExpanded: (v: boolean) => void }) {
  return (
    <TooltipProvider>
      <aside
        className={cn(
          "hidden md:flex flex-col border-r border-border/50 bg-black/30 backdrop-blur-sm",
          expanded ? "w-64" : "w-16",
          "transition-all duration-200"
        )}
      >
        <div className="flex items-center justify-between px-3 py-3">
          <div className={cn("text-lg font-semibold text-foreground", expanded ? "opacity-100" : "opacity-0")}>SJ Zhang</div>
          <Button size="icon" variant="ghost" onClick={() => setExpanded(!expanded)} className="shrink-0">
            {expanded ? <ChevronLeft className="size-4" /> : <ChevronRight className="size-4" />}
          </Button>
        </div>
        <Separator />
        <ScrollArea className="flex-1">
          <nav className="px-2 py-2">
            {items.map((item, idx) => {
              const Icon = item.icon
              const isSection = !!item.section
              return isSection ? (
                <div key={`${item.section}-${idx}`} className={cn("px-2 pt-4 pb-2 text-sm text-muted-foreground", expanded ? "block" : "hidden")}>{item.section}</div>
              ) : (
                <div key={`${item.label}-${idx}`} className="mb-1">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start gap-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                        <Icon className="size-4" />
                        <span className={cn(expanded ? "block" : "hidden")}>{item.label}</span>
                        <span className="ms-auto">
                          <Badge variant="secondary" className={cn(expanded ? "inline-flex" : "hidden")}>{item.count}</Badge>
                        </span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" className={cn(expanded ? "hidden" : "block")}>{item.label}</TooltipContent>
                  </Tooltip>
                </div>
              )
            })}
          </nav>
        </ScrollArea>
        <div className="px-2 py-2">
          <Button variant="outline" className={cn("w-full justify-center gap-2", expanded ? "block" : "hidden")} onClick={() => setExpanded(false)}>
            Hide
          </Button>
          <Button variant="outline" size="icon" className={cn("w-full justify-center", expanded ? "hidden" : "block")} onClick={() => setExpanded(true)}>
            <Menu className="size-4" />
          </Button>
        </div>
      </aside>
    </TooltipProvider>
  )
}

function MobileSidebar() {
  return (
    <div className="md:hidden border-b border-border/50 px-2 py-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon"><Menu className="size-4" /></Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <div className="px-3 py-3 text-lg font-semibold">SJ Zhang</div>
          <Separator />
          <ScrollArea className="h-full">
            <nav className="px-2 py-2">
              {items.filter((i) => !i.section).map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={`${item.label}-m-${idx}`} className="mb-1">
                    <Button variant="ghost" className="w-full justify-start gap-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                      <Icon className="size-4" />
                      <span>{item.label}</span>
                      <span className="ms-auto"><Badge variant="secondary">{item.count}</Badge></span>
                    </Button>
                  </div>
                )
              })}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export function Sidebar() {
  const [expanded, setExpanded] = useState(true)
  return (
    <div className="flex flex-col">
      <MobileSidebar />
      <DesktopSidebar expanded={expanded} setExpanded={setExpanded} />
    </div>
  )
}
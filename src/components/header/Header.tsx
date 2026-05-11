"use client"

import * as React from "react"
import type { ReactElement } from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowUp,
  ArrowUpRight,
  AppWindow,
  BookText,
  Bot,
  Box,
  Briefcase,
  Calendar,
  BarChart,
  PlusCircle,
  Code,
  Codepen,
  Component,
  Cpu,
  Globe,
  Layers,
  LayoutGrid,
  LogOut,
  Network,
  PenTool,
  Scan,
  Monitor,
  Shield,
  Smile,
  Sparkle,
  Sparkles,
  Infinity,
  ShoppingBag,
  Menu,
  X
} from "lucide-react"

import { ThemeSwitcher } from "./ThemeSwitcher"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { motion, AnimatePresence } from "motion/react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import LanguageSwitcher from "@/components/LanguageSwitcher"

const cloud = [
  { title: "AI SDK", href: "#", icon: <Box size={16} />, description: "The AI Toolkit for Typescript" },
  { title: "AI Gateway", href: "#", icon: <Sparkle size={16} />, description: "One endpoint, all your models" },
  { title: "Vercel Agent", href: "#", icon: <ArrowUp size={16} />, description: "An agent that knows your stack" },
]

const core = [
  { title: "CI/CD", href: "#", icon: <LayoutGrid size={16} />, description: "Helping teams ship 6× faster" },
  { title: "Content Delivery", href: "#", icon: <Globe size={16} />, description: "Fast, scalable, and reliable" },
  { title: "Fluid Compute", href: "#", icon: <Cpu size={16} />, description: "Servers, in serverless form" },
  { title: "Observability", href: "#", icon: <BarChart size={16} />, description: "Trace every step" },
]

const security = [
  { title: "Bot Management", href: "#", icon: <Bot size={16} />, description: "Scalable bot protection" },
  { title: "BotID", href: "#", icon: <Scan size={16} />, description: "Invisible CAPTCHA" },
  { title: "Platform Security", href: "#", icon: <Shield size={16} />, description: "DDOS Protection, Firewall" },
  { title: "Web Application Firewall", href: "#", icon: <Calendar size={16} />, description: "Granular, custom protection" },
]

const company = [
  { title: "Customers", href: "#", icon: <Smile size={16} />, description: "Trusted by the best teams" },
  { title: "Blog", href: "#", icon: <PenTool size={16} />, description: "The latest posts and changes" },
  { title: "Changelog", href: "#", icon: <BookText size={16} />, description: "See what shipped" },
  { title: "Press", href: "#", icon: <Briefcase size={16} />, description: "Read the latest news" },
]

const cases = [
  { title: "Shopify Development", href: "/services/shopify-development", icon: <ShoppingBag size={16} />, description: "High-performance e-commerce" },
  { title: "DevOps Solutions", href: "/services/devops-services", icon: <Infinity size={16} />, description: "Cloud automation & reliability" },
  { title: "Web Development", href: "/services/web-development", icon: <Code size={16} />, description: "Modern, scalable web apps" },
]

const CollaborateButton = ({ className }: { className?: string }) => (
  <Button className={cn("relative text-sm font-medium rounded-full h-11 p-1 ps-6 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-blue-600 hover:bg-blue-700 text-white border-none shadow-md shadow-blue-500/20", className)}>
    <span className="relative z-10 transition-all duration-500">
      Collaborate
    </span>
    <span className="absolute right-1 w-9 h-9 bg-white text-blue-600 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-40px)] group-hover:rotate-45">
      <ArrowUpRight size={16} />
    </span>
  </Button>
);

export default function Header() {
  const [sticky, setSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        sticky 
          ? "h-16 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" 
          : "h-20 bg-transparent"
      )}
    >
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-all">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Image src="/images/Logo.png" alt="UltraTechHub" fill className="object-contain" />
          </div>
          <span className="font-bold text-lg tracking-tight text-foreground">UltraTechHub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium hover:text-blue-600 transition-colors">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 w-[600px] bg-background border border-border shadow-xl rounded-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 px-2">AI & Cloud</p>
                      {cloud.map((item) => (
                        <ListItem key={item.title} {...item} />
                      ))}
                    </div>
                    <div className="space-y-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 px-2">Core & Security</p>
                      {core.slice(0,2).concat(security.slice(0,2)).map((item) => (
                        <ListItem key={item.title} {...item} />
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium hover:text-blue-600 transition-colors">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 w-[400px] bg-background border border-border shadow-xl rounded-2xl">
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 px-2">Solutions</p>
                    {cases.map((item) => (
                      <ListItem key={item.title} {...item} />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-blue-600 transition-colors">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
          
          <CollaborateButton className="hidden md:flex" />

          {/* Mobile Menu Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden rounded-full hover:bg-muted transition-colors">
                <Menu size={22} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0 flex flex-col">
              <SheetHeader className="p-6 border-b flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src="/images/Logo.png" alt="Logo" width={28} height={28} />
                  <SheetTitle className="font-bold text-lg">UltraTechHub</SheetTitle>
                </div>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Explore</p>
                  <nav className="grid gap-2">
                    <MobileNavLink href="/about" icon={<BookText size={18} />} label="About Us" onClick={() => setIsOpen(false)} />
                    {cases.map((item) => (
                      <MobileNavLink key={item.title} href={item.href} icon={item.icon} label={item.title} onClick={() => setIsOpen(false)} />
                    ))}
                  </nav>
                </div>
                
                <div className="space-y-4 pt-4 border-t">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Settings</p>
                  <div className="flex items-center justify-between px-2">
                    <span className="text-sm font-medium">Appearance</span>
                    <ThemeSwitcher />
                  </div>
                  <div className="flex items-center justify-between px-2">
                    <span className="text-sm font-medium">Language</span>
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
              <div className="p-6 border-t bg-muted/30">
                <CollaborateButton className="w-full" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

function ListItem({ title, icon, description, href }: { title: string; icon: ReactElement; description: string; href: string }) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="group flex items-start gap-4 p-3 rounded-xl hover:bg-muted transition-all duration-200"
      >
        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background group-hover:border-blue-500/50 group-hover:shadow-sm transition-all">
          {icon}
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold leading-none group-hover:text-blue-600 transition-colors">{title}</p>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{description}</p>
        </div>
      </Link>
    </NavigationMenuLink>
  )
}

function MobileNavLink({ href, icon, label, onClick }: { href: string; icon: ReactElement; label: string; onClick: () => void }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors active:scale-95 duration-200"
    >
      <div className="size-9 rounded-lg bg-muted flex items-center justify-center text-foreground">
        {icon}
      </div>
      <span className="font-semibold text-base">{label}</span>
      <ArrowUpRight size={16} className="ml-auto text-muted-foreground" />
    </Link>
  )
}

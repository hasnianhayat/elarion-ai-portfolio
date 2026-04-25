"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import logo from "../public/logo.png"


export function AIHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/30 bg-primary/10 backdrop-blur supports-[backdrop-filter]:bg-primary/10">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/ai-agents" className="flex items-center space-x-2">
          <span className="text-3xl font-black tracking-tight text-[#00a3a3] group-hover:scale-105 transition-transform">
              <div className="flex items-center gap-0 justify-center">
                 <Image src={logo} alt="logo" width={30} height={30}/>     <div> LARION</div>
              </div>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <Link
            href="/ai-agents"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/ai-agents/agent-types"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Agent Types
          </Link>
          <Link
            href="/ai-agents/packages"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Packages
          </Link>
          <Link
            href="/ai-agents/approach"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Our Approach
          </Link>
          <Link
            href="/ai-agents/demo"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Demo
          </Link>
          <ThemeToggle />
          <Button asChild variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10 bg-transparent">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Main Site
            </Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="container md:hidden pb-4 space-y-3">
          <Link
            href="/ai-agents"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/ai-agents/agent-types"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            Agent Types
          </Link>
          <Link
            href="/ai-agents/packages"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            Packages
          </Link>
          <Link
            href="/ai-agents/approach"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Approach
          </Link>
          <Link
            href="/ai-agents/demo"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            Demo
          </Link>
          <div className="flex items-center gap-2 py-2">
            <span className="text-sm font-medium text-muted-foreground">Theme:</span>
            <ThemeToggle />
          </div>
          <Button asChild variant="outline" className="w-full border-primary/30 bg-transparent">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Main Site
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}

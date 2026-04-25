"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, ArrowLeft, CalendarDays } from "lucide-react"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import logo from "../public/logo.png"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/site_UI/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Strategy", href: "/site_UI/strategy" },
    { name: "About", href: "/site_UI/about" },
    { name: "Contact", href: "/site_UI/contact" },
  ]

  // Prevent body scroll when menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#00a3a3]/30 bg-background/70 backdrop-blur-md">
      
      <nav className="container mx-auto flex h-20 items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src={logo} alt="logo" width={32} height={32} />
          <span className="text-2xl font-black tracking-tight text-[#00a3a3] group-hover:scale-105 transition-transform">
            LARION
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-semibold text-foreground/80 transition-all duration-300 hover:text-[#00a3a3] relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00a3a3] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <ThemeToggle />

          {/* Calendar Button */}
          <Button
            variant="outline"
            className="border-[#00a3a3] text-[#00a3a3] hover:bg-[#00a3a3] hover:text-white transition-all duration-300"
            onClick={() => window.open('https://calendly.com/elarionltd1/30min', '_blank')}
          >
            <CalendarDays className="h-4 w-4 mr-2" />
            Calendar
          </Button>

          {/* AI Agents Button */}
          <Button
            asChild
            className="bg-[#00a3a3] text-white hover:bg-[#00a3a3]/90 font-semibold transition-all duration-300 hover:scale-105"
          >
            <Link href="/ai-agents">
              AI Agents
            </Link>
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md transition hover:bg-[#00a3a3]/10"
          >
            <Menu className="h-6 w-6 text-[#00a3a3]" />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? "visible opacity-100 " : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide Panel */}
        <div
          className={`absolute top-0 right-0 h-full  w-[85%] max-w-sm bg-background py-4 flex flex-col shadow-2xl transition-transform duration-500   ${
            mobileMenuOpen ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          {/* Back Button */}
          <div className="bg-white   px-4 py-6 ">
            <button
            onClick={() => setMobileMenuOpen(false)}
            className="mb-8 p-2 rounded-md hover:bg-[#00a3a3]/10 w-fit"
          >
            <ArrowLeft className="h-6 w-6 text-[#00a3a3]" />
          </button>

          {/* Nav Links */}
          <div className="flex flex-col gap-6  ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold text-foreground/80 hover:text-[#00a3a3] transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div className="mt-auto flex flex-col gap-4 pt-8 ">
            
            {/* Calendar Button */}
            <Button
              variant="outline"
              className="w-full border-[#00a3a3] text-[#00a3a3] hover:bg-[#00a3a3] hover:text-white"
              onClick={() => {
                setMobileMenuOpen(false);
                window.open('https://calendly.com/elarionltd1/30min', '_blank');
              }}
            >
              <CalendarDays className="h-4 w-4 mr-2" />
              Calendar
            </Button>

            {/* AI Agents Button */}
            <Button
              asChild
              className="w-full bg-[#00a3a3] text-white font-semibold"
            >
              <Link
                href="/ai-agents"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Agents
              </Link>
            </Button>
          </div>
          </div>
        </div>
      </div>
    </header>
  )
}

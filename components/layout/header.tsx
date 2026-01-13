"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md text-primary shadow-md border-b border-border/10"
          : "bg-transparent text-primary" // Transparent initially
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center ">
          <Link href="/" className="flex items-center">
            <div className="relative h-20 w-20 overflow-hidden rounded-lg">
                <Image src="/icon.png" alt="ASOL Logo" fill className="object-cover" />
            </div>
            <span className={cn("font-heading text-3xl font-bold tracking-tight text-primary")}>
              ASOL
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                "text-primary/90"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            variant="default"
            size="lg"
            className="font-semibold shadow-lg"
            asChild
          >
            <Link href="/contact">Request Consultation</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("md:hidden p-2 transition-colors text-primary")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="w-full mt-4" size="lg" asChild>
            <Link href="/contact">Request Consultation</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

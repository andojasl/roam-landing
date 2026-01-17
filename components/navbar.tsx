"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
];

interface NavbarProps {
  isVisible?: boolean;
  showLogoAndCta?: boolean;
}

export function Navbar({
  isVisible = true,
  showLogoAndCta = true,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent",
        !isVisible && "pointer-events-none"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative flex items-center justify-center h-16 md:h-20">
          {/* Logo - absolute left */}
          <div className="absolute left-0 w-8 h-8 md:w-10 md:h-10">
            <motion.a
              href="#"
              className="flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: showLogoAndCta ? 1 : 0,
                scale: showLogoAndCta ? 1 : 0.8,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Image
                src="/logo-icon.svg"
                alt="RoamAI"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </motion.a>
          </div>

          {/* Links - centered */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA - absolute right */}
          <div className="absolute right-0 hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: showLogoAndCta ? 1 : 0,
                scale: showLogoAndCta ? 1 : 0.8,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Button
                asChild
                className="bg-white text-black hover:bg-white/90 rounded-full px-6"
              >
                <a href="#contact">Book a Demo</a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-0 md:hidden p-2 text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border"
            >
              <div className="flex flex-col py-4 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-muted-foreground hover:text-white transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="bg-white text-black hover:bg-white/90 rounded-full mt-2"
                >
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Book a Demo
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

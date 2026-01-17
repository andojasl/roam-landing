"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-icon.svg"
              alt="RoamAI"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} RoamAI. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client"

import * as React from "react"
import { Linkedin } from "lucide-react"

function Footerdemo({ onOpenCookieSettings }: { onOpenCookieSettings?: () => void }) {

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#welcome" className="block transition-colors hover:text-primary">
                Home
              </a>
              <a href="#product" className="block transition-colors hover:text-primary">
                Solutions
              </a>
              <a href="#journey" className="block transition-colors hover:text-primary">
                Your Journey
              </a>
              <a href="#booking" className="block transition-colors hover:text-primary">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Meydan Road, Nad Al Sheba</p>
              <p>Dubai, U.A.E.</p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/971526830203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  +971 52 683 0203
                </a>
              </p>
              <p>Email: hello@novamir.ai</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <a
                href="https://www.linkedin.com/company/novamir-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Novamir. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="/terms-conditions" className="transition-colors hover:text-primary">
              Terms & Conditions
            </a>
            {onOpenCookieSettings && (
              <button
                type="button"
                onClick={onOpenCookieSettings}
                className="transition-colors hover:text-primary"
              >
                Cookie Settings
              </button>
            )}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }

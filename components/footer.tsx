"use client"

import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-16 py-8 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <span className="text-sm">Created with</span>
          <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
          <span className="text-sm">by</span>
          <span className="text-sm font-semibold text-gray-800"><a href="https://github.com/anoop04singh">Anoop Singh</a></span>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 items-center">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-600 text-sm font-medium transition">
                Home
              </Link>
              <Link href="/our-barangay" className="text-gray-700 hover:text-primary-600 text-sm font-medium transition">
                Our Barangay
              </Link>
              <Link href="/barangay-services" className="text-gray-700 hover:text-primary-600 text-sm font-medium transition">
                Barangay Services
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-primary-600 text-sm font-medium transition">
                Resources
              </Link>
              <Link href="/news-events" className="text-gray-700 hover:text-primary-600 text-sm font-medium transition">
                News and Updates
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/our-barangay"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Our Barangay
              </Link>
              <Link
                href="/barangay-services"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Barangay Services
              </Link>
              <Link
                href="/resources"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/news-events"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                News and Updates
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Dark Green Banner with Logo */}
      <div className="bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/rizal-logo.png"
                  alt="Barangay Rizal Logo"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">Republic of the Philippines</p>
                <p className="text-sm">Municipality of Pinamungajan</p>
                <p className="text-sm font-bold">Barangay Rizal</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/bagong-pilipinas.png"
                    alt="Bagong Pilipinas Logo"
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/transparency-seal.png"
                  alt="Philippine Transparency Seal"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

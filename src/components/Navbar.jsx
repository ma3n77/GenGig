'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar-container')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore a gig' },
    { href: '/post-gig', label: 'Post a gig' },
    { href: '/contact', label: 'Contact us' }
  ]

  return (
    <nav
      className="navbar-container fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ backgroundColor: '#C6BED8' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg p-1"
              style={{'--tw-ring-color': 'var(--color-brand-500)'}}
              aria-label="Gengig home"
            >
              <div className="w-8 h-8 relative transform group-hover:scale-105 transition-transform duration-200 rounded-full overflow-hidden">
                <Image
                  src="/images/gen_logo.png"
                  alt="Gengig Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search gigs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white rounded-full border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200"
                style={{ color: '#333333' }}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium transition-colors duration-200 relative group py-2 hover:opacity-80"
                style={{ color: '#333333' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className="inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-2 text-sm rounded-full"
              style={{
                backgroundColor: '#FFB866',
                color: '#333333',
                border: 'none'
              }}
            >
              Login / Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2"
            style={{ color: '#333333', '--tw-ring-color': 'var(--color-brand-500)' }}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 right-0 shadow-lg transform transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible'
        }`}
        style={{ backgroundColor: '#C6BED8', borderBottom: '1px solid rgba(255,255,255,0.2)' }}
      >
        <div className="px-4 py-6 space-y-4">
          {/* Mobile Search Bar */}
          <div className="mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search gigs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white rounded-full border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200"
                style={{ color: '#333333' }}
              />
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 hover:bg-white/20 rounded-lg font-medium transition-colors duration-200"
              style={{ color: '#333333' }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/20 space-y-3">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-2 text-sm rounded-full w-full"
              style={{
                backgroundColor: '#FFB866',
                color: '#333333',
                border: 'none'
              }}
            >
              Login / Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

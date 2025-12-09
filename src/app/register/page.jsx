'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle registration logic here
    console.log('Registration attempt:', formData)
  }

  const handleGoogleSignup = () => {
    // Handle Google signup
    console.log('Google signup')
  }

  const handleFacebookSignup = () => {
    // Handle Facebook signup
    console.log('Facebook signup')
  }

  return (
    <div className="min-h-screen" style={{ 
      background: 'radial-gradient(ellipse at top center, #E6E7F3 0%, #DADBF0 100%)' 
    }}>
      {/* Navigation Bar */}
      <nav className="w-full py-6 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 relative">
              <Image
                src="/images/gen_logo.png"
                alt="GenGig Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold" style={{ color: '#1A2951' }}>
              GenGig
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium transition-colors duration-200 hover:opacity-80" style={{ color: '#1A2951' }}>
              Home
            </Link>
            <Link href="/explore" className="font-medium transition-colors duration-200 hover:opacity-80" style={{ color: '#1A2951' }}>
              Explore a gig
            </Link>
            <Link href="/post-gig" className="font-medium transition-colors duration-200 hover:opacity-80" style={{ color: '#1A2951' }}>
              Post a gig
            </Link>
            <Link href="/contact" className="font-medium transition-colors duration-200 hover:opacity-80" style={{ color: '#1A2951' }}>
              Contact us
            </Link>
            <Link 
              href="/login" 
              className="px-6 py-3 font-semibold transition-all duration-200 hover:shadow-lg"
              style={{ 
                backgroundColor: '#FFB86C',
                color: '#1A1A1A',
                borderRadius: '10px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#FFA14A'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#FFB86C'}
            >
              Login / Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 py-12">
        {/* Signup Card */}
        <div 
          className="w-full max-w-md p-8"
          style={{
            backgroundColor: '#0D6E7A',
            borderRadius: '18px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
          }}
        >
          {/* Logo and Page Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/gen_logo.png"
                  alt="GenGig Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-3xl font-bold tracking-wide" style={{ color: '#F5F5F5' }}>
                GenGig
              </h1>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#C7DAE6',
                  borderRadius: '10px',
                  color: '#263238'
                }}
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#C7DAE6',
                  borderRadius: '10px',
                  color: '#263238'
                }}
                required
              />
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 font-semibold text-white transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              style={{
                backgroundColor: '#2ECC71',
                borderRadius: '12px',
                border: 'none'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#27AE60'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#2ECC71'}
            >
              Create account
            </button>
          </form>

          {/* Already a member section */}
          <div className="text-center mt-6">
            <p className="text-sm" style={{ color: '#F5F5F5' }}>
              Already a member?{' '}
              <Link 
                href="/login" 
                className="font-semibold hover:underline transition-colors duration-200"
                style={{ color: '#0070F3' }}
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
            <span className="px-4 text-sm" style={{ color: '#F5F5F5' }}>Or</span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            {/* Google Button */}
            <button
              onClick={handleGoogleSignup}
              className="w-full flex items-center justify-center px-4 py-3 border font-medium transition-all duration-200 hover:shadow-md"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#DCE1E5',
                borderRadius: '12px',
                color: '#444'
              }}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            {/* Facebook Button */}
            <button
              onClick={handleFacebookSignup}
              className="w-full flex items-center justify-center px-4 py-3 border font-medium transition-all duration-200 hover:shadow-md"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#1877F2',
                borderRadius: '12px',
                color: '#444'
              }}
            >
              <svg className="w-5 h-5 mr-3" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 px-8 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left - Copyright */}
          <div>
            <p className="text-sm" style={{ color: '#5B6270' }}>
              © 2023 All Rights Reserved
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex space-x-6">
            <Link href="/terms" className="text-sm hover:underline transition-colors duration-200" style={{ color: '#5B6270' }}>
              Terms
            </Link>
            <Link href="/privacy" className="text-sm hover:underline transition-colors duration-200" style={{ color: '#5B6270' }}>
              Privacy
            </Link>
            <Link href="/cookies" className="text-sm hover:underline transition-colors duration-200" style={{ color: '#5B6270' }}>
              Cookies
            </Link>
          </div>

          {/* Right - Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="transition-opacity duration-200 hover:opacity-100" style={{ opacity: 0.85 }}>
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="transition-opacity duration-200 hover:opacity-100" style={{ opacity: 0.85 }}>
              <svg className="w-5 h-5" fill="#1DA1F2" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="transition-opacity duration-200 hover:opacity-100" style={{ opacity: 0.85 }}>
              <svg className="w-5 h-5" fill="#E4405F" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="transition-opacity duration-200 hover:opacity-100" style={{ opacity: 0.85 }}>
              <svg className="w-5 h-5" fill="#FF0000" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

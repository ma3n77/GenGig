'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', formData)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Photo Section */}
      <div className="relative flex-1 hidden lg:block">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/login-photo.jpg')",
            clipPath: 'polygon(0 0, 85% 0, 70% 100%, 0 100%)'
          }}
        >
          {/* Fallback placeholder if image doesn't exist */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <p className="text-lg">Professional Portrait</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form Section */}
      <div className="flex-1 lg:flex-none lg:w-1/2 flex items-center justify-center" style={{ backgroundColor: '#C6BED8' }}>
        <div className="w-full max-w-md px-8 py-12">
          {/* Header Icon */}
          <div className="flex justify-end mb-8">
            <div className="space-y-1">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#00796B' }}></div>
              <div className="w-8 h-0.5" style={{ backgroundColor: '#00796B' }}></div>
              <div className="w-8 h-0.5" style={{ backgroundColor: '#00796B' }}></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-left leading-tight" style={{ color: '#0F0F0F' }}>
            Enter the new world of freelancing
          </h1>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-base font-medium mb-2" style={{ color: '#333333' }}>
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200"
                style={{ backgroundColor: '#FFFFFF', color: '#333333' }}
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-base font-medium mb-2" style={{ color: '#333333' }}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200"
                style={{ backgroundColor: '#FFFFFF', color: '#333333' }}
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="w-4 h-4 rounded border-2 focus:ring-2 focus:ring-gray-300"
                style={{ borderColor: '#C0C0C0', accentColor: '#00796B' }}
              />
              <label htmlFor="rememberMe" className="ml-3 text-sm" style={{ color: '#333333' }}>
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-90"
              style={{ 
                backgroundColor: '#FFB866', 
                color: '#D38A5A',
                border: 'none'
              }}
            >
              Login
            </button>
          </form>

          {/* Sign Up Section */}
          <div className="mt-8 text-center">
            <p className="text-sm mb-4" style={{ color: '#333333' }}>
              Don't have an account?
            </p>
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-90"
              style={{ 
                backgroundColor: '#FFB866', 
                color: '#333333',
                border: 'none'
              }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

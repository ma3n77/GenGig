'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function PostGigPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    projectType: 'fixed',
    budget: '',
    category: 'all'
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
    console.log('Gig posted:', formData)
  }

  const categories = [
    { value: 'all', label: 'All categories' },
    { value: 'graphic-design', label: 'Graphic design' },
    { value: 'web-development', label: 'Web site developing' },
    { value: 'logo-making', label: 'Logo making' },
    { value: 'content-writing', label: 'Content writing' },
    { value: 'video-editing', label: 'Video editing' },
    { value: 'social-media', label: 'Social media management' }
  ]

  return (
    <div className="min-h-screen" style={{ 
      background: 'linear-gradient(to bottom, #F8F9FD 0%, #E8ECFA 100%)' 
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
            <Link 
              href="/post-gig" 
              className="font-bold border-b-2 transition-colors duration-200" 
              style={{ color: '#0D6E7A', borderColor: '#0D6E7A' }}
            >
              Post a gig
            </Link>
            <Link href="/contact" className="font-medium transition-colors duration-200 hover:opacity-80" style={{ color: '#1A2951' }}>
              Contact us
            </Link>
            <Link 
              href="/login" 
              className="px-6 py-3 font-semibold transition-all duration-200 hover:shadow-lg rounded-full"
              style={{ 
                backgroundColor: '#FFB866',
                color: '#333333'
              }}
            >
              Login / Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-start justify-center px-4 py-12">
        <div className="w-full max-w-6xl post-gig-card">
          {/* Page Title */}
          <h1 className="text-4xl font-bold mb-12 text-center md:text-left" style={{ color: '#1A2951' }}>
            Job Details
          </h1>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Form */}
            <div className="lg:col-span-2 space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Job Title */}
                <div className="form-group">
                  <label className="form-label text-lg font-bold" style={{ color: '#2D3748' }}>
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Need a modern logo for tech startup"
                    className="post-gig-input"
                    required
                  />
                </div>

                {/* Job Description */}
                <div className="form-group">
                  <label className="form-label text-lg font-bold" style={{ color: '#2D3748' }}>
                    Job Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your project in detail..."
                    rows={8}
                    className="post-gig-textarea"
                    required
                  />
                  <p className="form-help mt-2" style={{ color: '#718096' }}>
                    Provide clear details about what you need done
                  </p>
                </div>

                {/* Project Type */}
                <div className="form-group">
                  <label className="form-label text-lg font-bold mb-4 block" style={{ color: '#2D3748' }}>
                    Project type <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center cursor-pointer group">
                      <div className="relative">
                        <input
                          type="radio"
                          name="projectType"
                          value="fixed"
                          checked={formData.projectType === 'fixed'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div
                          className={`post-gig-radio ${
                            formData.projectType === 'fixed'
                              ? 'post-gig-radio-checked'
                              : 'post-gig-radio-unchecked'
                          }`}
                        >
                          {formData.projectType === 'fixed' && (
                            <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          )}
                        </div>
                      </div>
                      <span className="ml-3 text-lg font-medium" style={{ color: '#2D3748' }}>
                        Fixed price
                      </span>
                    </label>

                    <label className="flex items-center cursor-pointer group">
                      <div className="relative">
                        <input
                          type="radio"
                          name="projectType"
                          value="hourly"
                          checked={formData.projectType === 'hourly'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div
                          className={`post-gig-radio ${
                            formData.projectType === 'hourly'
                              ? 'post-gig-radio-checked'
                              : 'post-gig-radio-unchecked'
                          }`}
                        >
                          {formData.projectType === 'hourly' && (
                            <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          )}
                        </div>
                      </div>
                      <span className="ml-3 text-lg font-medium" style={{ color: '#2D3748' }}>
                        Hourly
                      </span>
                    </label>
                  </div>
                </div>

                {/* Budget */}
                <div className="form-group">
                  <label className="form-label text-lg font-bold" style={{ color: '#2D3748' }}>
                    Budget <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg font-medium" style={{ color: '#718096' }}>
                      $
                    </span>
                    <input
                      type="number"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      placeholder="Type here"
                      className="w-full pl-8 pr-4 py-4 text-lg rounded-xl transition-all duration-200 focus:outline-none focus:ring-2"
                      style={{
                        border: '1.5px solid #D1D9E1',
                        focusRingColor: '#0D6E7A'
                      }}
                      required
                    />
                  </div>
                  <p className="form-help mt-2" style={{ color: '#718096' }}>
                    Enter your budget in USD
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full lg:w-auto px-12 py-4 text-lg font-bold rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
                    style={{
                      backgroundColor: '#0D6E7A',
                      color: 'white',
                      minHeight: '56px'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#0B5C73'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#0D6E7A'}
                  >
                    Post This Gig
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories Section */}
                <div className="form-group">
                  <label className="form-label text-lg font-bold mb-4 block" style={{ color: '#2D3748' }}>
                    Categories
                  </label>
                  <div className="relative">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 text-lg rounded-xl appearance-none transition-all duration-200 focus:outline-none focus:ring-2 cursor-pointer"
                      style={{
                        border: '1.5px solid #D1D9E1',
                        focusRingColor: '#0D6E7A',
                        backgroundColor: 'white'
                      }}
                    >
                      {categories.map((category) => (
                        <option
                          key={category.value}
                          value={category.value}
                          className={category.value === 'graphic-design' ? 'bg-purple-100 text-purple-800' : ''}
                        >
                          {category.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"
                      style={{ color: '#0D6E7A' }}
                    />
                  </div>
                </div>

                {/* Save as Draft Button */}
                <div className="pt-4">
                  <button
                    type="button"
                    className="w-full px-6 py-3 text-lg font-medium rounded-xl border-2 transition-all duration-200 hover:shadow-md"
                    style={{
                      borderColor: '#0D6E7A',
                      color: '#0D6E7A',
                      backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#0D6E7A'
                      e.target.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent'
                      e.target.style.color = '#0D6E7A'
                    }}
                  >
                    Save as Draft
                  </button>
                </div>

                {/* Helper Info */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#2D3748' }}>
                    Tips for a great gig post
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: '#718096' }}>
                    <li>• Be specific about your requirements</li>
                    <li>• Set a realistic budget and timeline</li>
                    <li>• Include examples or references if possible</li>
                    <li>• Choose the most relevant category</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 relative rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/gen_logo.png"
                    alt="GenGig Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">GenGig</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering the next generation through safe, meaningful work opportunities.
              </p>
            </div>

            <div className="md:col-span-3">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex space-x-6 mb-4 md:mb-0">
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200" style={{ color: '#5B6270' }}>
                    Terms
                  </Link>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200" style={{ color: '#5B6270' }}>
                    Privacy
                  </Link>
                  <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200" style={{ color: '#5B6270' }}>
                    Cookies
                  </Link>
                </div>
                <p className="text-gray-400">
                  © 2025 All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

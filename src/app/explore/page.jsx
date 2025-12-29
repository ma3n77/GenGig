'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import Section from '../../components/Section'
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  ClockIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  TagIcon
} from '@heroicons/react/24/outline'

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [sortBy, setSortBy] = useState('recent')

  // Sample gig data - in a real app, this would come from an API
  const sampleGigs = [
    {
      id: 1,
      title: 'Modern Logo Design for Tech Startup',
      description: 'Looking for a creative designer to create a modern, minimalist logo for our tech startup. Should reflect innovation and technology.',
      category: 'logo-making',
      type: 'fixed',
      budget: 500,
      postedDate: '2 days ago',
      proposals: 12
    },
    {
      id: 2,
      title: 'Website Development - E-commerce Platform',
      description: 'Need an experienced developer to build a full-featured e-commerce website with payment integration and admin dashboard.',
      category: 'web-development',
      type: 'hourly',
      budget: 45,
      postedDate: '1 day ago',
      proposals: 8
    },
    {
      id: 3,
      title: 'Social Media Content Creation',
      description: 'Seeking a creative content creator to manage our Instagram and TikTok accounts. Need engaging posts and stories weekly.',
      category: 'social-media',
      type: 'fixed',
      budget: 800,
      postedDate: '3 days ago',
      proposals: 15
    },
    {
      id: 4,
      title: 'Video Editing for YouTube Channel',
      description: 'Looking for a skilled video editor to edit weekly YouTube videos. Need someone with experience in storytelling and pacing.',
      category: 'video-editing',
      type: 'hourly',
      budget: 35,
      postedDate: '5 days ago',
      proposals: 20
    },
    {
      id: 5,
      title: 'Brand Identity Package Design',
      description: 'Need a complete brand identity package including logo, color scheme, typography, and brand guidelines document.',
      category: 'graphic-design',
      type: 'fixed',
      budget: 1200,
      postedDate: '1 week ago',
      proposals: 10
    },
    {
      id: 6,
      title: 'Blog Content Writing - Tech Articles',
      description: 'Seeking a technical writer to create high-quality blog posts about technology trends. 4 articles per month required.',
      category: 'content-writing',
      type: 'fixed',
      budget: 600,
      postedDate: '4 days ago',
      proposals: 18
    }
  ]

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'graphic-design', label: 'Graphic Design' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'logo-making', label: 'Logo Making' },
    { value: 'content-writing', label: 'Content Writing' },
    { value: 'video-editing', label: 'Video Editing' },
    { value: 'social-media', label: 'Social Media' }
  ]

  const getCategoryLabel = (value) => {
    const category = categories.find(cat => cat.value === value)
    return category ? category.label : value
  }

  // Filter gigs based on search, category, and type
  const filteredGigs = sampleGigs.filter(gig => {
    const matchesSearch = gig.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gig.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || gig.category === selectedCategory
    const matchesType = selectedType === 'all' || gig.type === selectedType
    return matchesSearch && matchesCategory && matchesType
  })

  // Sort gigs
  const sortedGigs = [...filteredGigs].sort((a, b) => {
    if (sortBy === 'budget-high') return b.budget - a.budget
    if (sortBy === 'budget-low') return a.budget - b.budget
    if (sortBy === 'proposals') return b.proposals - a.proposals
    return 0 // recent (default)
  })

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="pt-24 lg:pt-28">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Explore
            <span className="block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Amazing Gigs
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover exciting opportunities from clients looking for talented young creators.
            Find gigs that match your skills and interests.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search gigs by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg bg-white rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 shadow-sm"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <TagIcon className="h-5 w-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 cursor-pointer"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="h-5 w-5 text-gray-600" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 cursor-pointer"
              >
                <option value="all">All Types</option>
                <option value="fixed">Fixed Price</option>
                <option value="hourly">Hourly</option>
              </select>
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-2">
              <FunnelIcon className="h-5 w-5 text-gray-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 cursor-pointer"
              >
                <option value="recent">Most Recent</option>
                <option value="budget-high">Budget: High to Low</option>
                <option value="budget-low">Budget: Low to High</option>
                <option value="proposals">Most Proposals</option>
              </select>
            </div>
          </div>
        </div>
      </Section>

      {/* Gigs Grid */}
      <Section background="default" padding="lg">
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-gray-900">{sortedGigs.length}</span> gig{sortedGigs.length !== 1 ? 's' : ''}
          </p>
        </div>

        {sortedGigs.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No gigs found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
                setSelectedType('all')
              }}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedGigs.map((gig) => (
              <div
                key={gig.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-orange-100 text-orange-800">
                    {getCategoryLabel(gig.category)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {gig.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {gig.description}
                </p>

                {/* Gig Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <CurrencyDollarIcon className="h-5 w-5 mr-2 text-orange-500" />
                    <span className="font-semibold">
                      {gig.type === 'fixed' ? `$${gig.budget}` : `$${gig.budget}/hr`}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    <span>{gig.postedDate}</span>
                    <span className="mx-2">•</span>
                    <span>{gig.proposals} proposal{gig.proposals !== 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  href={`/gig/${gig.id}`}
                  className="block w-full text-center px-4 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Want to Post Your Own Gig?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Have a project that needs talented young creators? Post your gig and connect with amazing talent.
          </p>
          <Link
            href="/post-gig"
            className="inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 text-lg rounded-xl bg-white text-orange-600 hover:bg-gray-100"
          >
            Post a Gig
          </Link>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  )
}


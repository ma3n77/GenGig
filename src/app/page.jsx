import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon, ShieldCheckIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-28 pb-20 px-4" style={{ backgroundColor: '#C6BED8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#00796B' }}>
                Are you looking for Freelancers?
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed max-w-lg" style={{ color: '#333333' }}>
                Connect with talented young professionals who bring fresh perspectives and innovative solutions to your projects. Find the perfect freelancer for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/post-gig"
                  className="inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 text-lg rounded-xl"
                  style={{
                    backgroundColor: '#FFB866',
                    color: '#333333',
                    border: 'none'
                  }}
                >
                  Post a job
                </Link>
                <Link
                  href="/explore"
                  className="inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 text-lg rounded-xl"
                  style={{
                    backgroundColor: '#FFB866',
                    color: '#333333',
                    border: 'none'
                  }}
                >
                  Find a freelancer
                </Link>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className="relative">
              <div className="relative z-10">
                {/* Placeholder for illustration - you can replace this with an actual image */}
                <div className="w-full h-96 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <div className="text-center space-y-4">
                    {/* Simple illustration placeholder using CSS */}
                    <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 184, 102, 0.3)' }}>
                      <div className="w-20 h-20 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 121, 107, 0.2)' }}>
                        <div className="w-12 h-8 rounded" style={{ backgroundColor: '#00796B' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-24 h-3 mx-auto rounded" style={{ backgroundColor: 'rgba(51, 51, 51, 0.3)' }}></div>
                      <div className="w-32 h-3 mx-auto rounded" style={{ backgroundColor: 'rgba(51, 51, 51, 0.2)' }}></div>
                      <div className="w-20 h-3 mx-auto rounded" style={{ backgroundColor: 'rgba(51, 51, 51, 0.2)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full" style={{ backgroundColor: 'rgba(255, 184, 102, 0.2)' }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full" style={{ backgroundColor: 'rgba(0, 121, 107, 0.2)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{ backgroundColor: '#C6BED8' }}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#00796B' }}>
              Professional services we provide
            </h2>
          </div>

          {/* Services Grid - 2 rows x 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Row 1 */}
            {/* Graphic Design */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center border-2"
                   style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#00796B' }}>
                <svg className="w-8 h-8" style={{ color: '#00796B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#333333' }}>
                Graphic Design
              </h3>
              <p className="text-sm" style={{ color: '#333333' }}>
                Websites, books cover & more
              </p>
            </div>

            {/* Web Development */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center border-2"
                   style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#00796B' }}>
                <svg className="w-8 h-8" style={{ color: '#00796B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#333333' }}>
                Web Development
              </h3>
              <p className="text-sm" style={{ color: '#333333' }}>
                WordPress, Web Site builders,
              </p>
            </div>

            {/* Programming */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center border-2"
                   style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#00796B' }}>
                <svg className="w-8 h-8" style={{ color: '#00796B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#333333' }}>
                Programming
              </h3>
              <p className="text-sm" style={{ color: '#333333' }}>
                Coding the new generation in a new way and new design
              </p>
            </div>

            {/* Row 2 */}
            {/* Front end developer */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center border-2"
                   style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#00796B' }}>
                <svg className="w-8 h-8" style={{ color: '#00796B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#333333' }}>
                Front end developer
              </h3>
              <p className="text-sm" style={{ color: '#333333' }}>
                User interfaces and experiences
              </p>
            </div>

            {/* Back end developer */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center border-2"
                   style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#00796B' }}>
                <svg className="w-8 h-8" style={{ color: '#00796B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#333333' }}>
                Back end developer
              </h3>
              <p className="text-sm" style={{ color: '#333333' }}>
                Server-side logic and databases
              </p>
            </div>

            {/* Content creation */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center border-2"
                   style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#00796B' }}>
                <svg className="w-8 h-8" style={{ color: '#00796B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#333333' }}>
                Content creation
              </h3>
              <p className="text-sm" style={{ color: '#333333' }}>
                Writing, video, and digital content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Teaser Section */}
      <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#00796B' }}>
              Real Success Stories
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8" style={{ color: '#333333' }}>
              Discover how talented young creators are building their futures on Gengig.
              From high school students earning thousands to college-bound innovators landing dream jobs.
            </p>
            <Link
              href="/success-stories"
              className="inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 text-lg rounded-xl group"
              style={{
                backgroundColor: '#FFB866',
                color: '#333333',
                border: 'none'
              }}
            >
              View Success Stories
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
                   style={{ backgroundColor: 'rgba(0, 121, 107, 0.1)' }}>
                <UserGroupIcon className="h-8 w-8" style={{ color: '#00796B' }} />
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#00796B' }}>15,000+</div>
              <div className="text-gray-600">Young Creators</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
                   style={{ backgroundColor: 'rgba(255, 184, 102, 0.1)' }}>
                <CurrencyDollarIcon className="h-8 w-8" style={{ color: '#FFB866' }} />
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#00796B' }}>$2.5M+</div>
              <div className="text-gray-600">Earned by Teens</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
                   style={{ backgroundColor: 'rgba(0, 121, 107, 0.1)' }}>
                <ShieldCheckIcon className="h-8 w-8" style={{ color: '#00796B' }} />
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#00796B' }}>100%</div>
              <div className="text-gray-600">Safe & Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#C6BED8' }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          {/* Section Tagline */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#00796B' }}>
            GENGIG FOR A BETTER FUTURE
          </h2>

          {/* Subheading Text */}
          <p className="text-lg mb-8" style={{ color: '#333333' }}>
            Request More Information
          </p>

          {/* Call-to-Action Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 text-base rounded-full"
            style={{
              backgroundColor: '#FFB866',
              color: '#333333',
              border: 'none'
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 relative rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/gen_logo.png"
                    alt="Gengig Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">Gengig</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering the next generation through safe, meaningful work opportunities.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white">For Young Creators</h4>
              <ul className="space-y-3">
                <li><Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors duration-200">How It Works</Link></li>
                <li><Link href="/safety" className="text-gray-400 hover:text-white transition-colors duration-200">Safety Guidelines</Link></li>
                <li><Link href="/skills" className="text-gray-400 hover:text-white transition-colors duration-200">Skill Development</Link></li>
                <li><Link href="/success-stories" className="text-gray-400 hover:text-white transition-colors duration-200">Success Stories</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white">For Clients</h4>
              <ul className="space-y-3">
                <li><Link href="/post-project" className="text-gray-400 hover:text-white transition-colors duration-200">Post a Project</Link></li>
                <li><Link href="/find-talent" className="text-gray-400 hover:text-white transition-colors duration-200">Find Talent</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</Link></li>
                <li><Link href="/enterprise" className="text-gray-400 hover:text-white transition-colors duration-200">Enterprise</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Gengig. All rights reserved. Building the future, one young innovator at a time.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy</Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms</Link>
                <Link href="/cookies" className="hover:text-white transition-colors duration-200">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

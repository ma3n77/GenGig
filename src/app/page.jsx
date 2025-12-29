import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon, ShieldCheckIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
                  Post a Gig
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
                  Explore a Gig
                </Link>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/Hero.png"
                    alt="GenGig Hero - Freelancing Platform for Young Innovators"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
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


      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#00796B' }}>
              What Our Users Say
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#333333' }}>
              Hear from young creators and clients who have found success on GenGig
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: '#00796B' }}>
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-bold" style={{ color: '#333333' }}>Sarah, 17</h4>
                  <p className="text-sm text-gray-500">Graphic Designer</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "GenGig gave me the opportunity to showcase my design skills and earn money while still in high school. The platform is safe and easy to use!"
              </p>
              <div className="flex mt-4" style={{ color: '#FFB866' }}>
                ★★★★★
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: '#00796B' }}>
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-bold" style={{ color: '#333333' }}>Youssef, 19</h4>
                  <p className="text-sm text-gray-500">Web Developer</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "I've built my portfolio and gained real-world experience through GenGig. It's amazing to work with clients who value young talent!"
              </p>
              <div className="flex mt-4" style={{ color: '#FFB866' }}>
                ★★★★★
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: '#00796B' }}>
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-bold" style={{ color: '#333333' }}>Amr, 18</h4>
                  <p className="text-sm text-gray-500">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The young creators on GenGig bring fresh perspectives and innovative ideas. I'm impressed by their professionalism and creativity!"
              </p>
              <div className="flex mt-4" style={{ color: '#FFB866' }}>
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  )
}

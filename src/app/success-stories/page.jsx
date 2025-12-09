import Link from 'next/link'
import { 
  StarIcon, 
  ArrowRightIcon, 
  TrophyIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import Section from '../../components/Section'

export const metadata = {
  title: 'Success Stories - Gengig',
  description: 'Discover inspiring stories from young creators who have built successful careers on Gengig. See how teenagers are turning their talents into real opportunities.',
}

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="pt-24 lg:pt-28">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Success Stories
            <span className="block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Young Innovators Thriving
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Meet the talented young creators who are building their futures on Gengig. 
            Their stories prove that age is just a number when it comes to innovation and success.
          </p>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="default" padding="lg">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" 
                 style={{background: 'linear-gradient(135deg, var(--color-brand-900) 0%, var(--color-accent-500) 100%)'}}>
              <UserGroupIcon className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15,000+</div>
            <div className="text-gray-600">Young Creators</div>
          </div>

          <div className="group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" 
                 style={{background: 'linear-gradient(135deg, var(--color-accent-500) 0%, var(--color-secondary-500) 100%)'}}>
              <TrophyIcon className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>

          <div className="group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" 
                 style={{background: 'linear-gradient(135deg, var(--color-secondary-500) 0%, var(--color-brand-700) 100%)'}}>
              <CurrencyDollarIcon className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">$2.5M+</div>
            <div className="text-gray-600">Earned by Creators</div>
          </div>

          <div className="group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" 
                 style={{background: 'linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-accent-600) 100%)'}}>
              <ChartBarIcon className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </Section>

      {/* Featured Stories */}
      <Section background="gray" padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real young creators who are making their mark
          </p>
        </div>

        <div className="space-y-12">
          {/* Story 1 - Alex */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mr-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center text-lg font-bold text-gray-700">
                      A
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Alex Chen</h3>
                    <p className="text-orange-600 font-medium">Age 17 • Graphic Designer</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0 rating • 127 projects</span>
                </div>

                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "Gengig gave me the opportunity to turn my passion for design into a real business. 
                  I've worked with amazing clients and earned over $15,000 while still in high school!"
                </blockquote>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">$15,247</div>
                    <div className="text-sm text-gray-600">Total Earnings</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">127</div>
                    <div className="text-sm text-gray-600">Projects Done</div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Alex started on Gengig at 15 with basic Photoshop skills. Through the platform's 
                  mentorship program and consistent client work, she's now running her own design 
                  studio and planning to study at art school.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center mx-auto mb-6">
                    <TrophyIcon className="h-16 w-16 text-gray-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Top Performer</h4>
                  <p className="text-gray-600">Consistently rated 5 stars by clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story 2 - Marcus */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 lg:p-12 flex items-center justify-center lg:order-1">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 flex items-center justify-center mx-auto mb-6">
                    <ChartBarIcon className="h-16 w-16 text-gray-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Rising Star</h4>
                  <p className="text-gray-600">From beginner to expert in 8 months</p>
                </div>
              </div>

              <div className="p-8 lg:p-12 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center mr-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 flex items-center justify-center text-lg font-bold text-gray-700">
                      M
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Marcus Rodriguez</h3>
                    <p className="text-orange-600 font-medium">Age 19 • Web Developer</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">4.9 rating • 89 projects</span>
                </div>

                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "I learned to code through YouTube, but Gengig gave me real projects to practice on.
                  Now I'm earning enough to pay for college and have job offers waiting!"
                </blockquote>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">$22,890</div>
                    <div className="text-sm text-gray-600">Total Earnings</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">89</div>
                    <div className="text-sm text-gray-600">Projects Done</div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Marcus joined Gengig with basic HTML knowledge. Through challenging projects and
                  client feedback, he mastered React, Node.js, and database design. He's now
                  studying Computer Science with his Gengig earnings.
                </p>
              </div>
            </div>
          </div>

          {/* Story 3 - Emma */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center mr-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-200 to-blue-200 flex items-center justify-center text-lg font-bold text-gray-700">
                      E
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Emma Thompson</h3>
                    <p className="text-orange-600 font-medium">Age 16 • Content Creator</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0 rating • 203 projects</span>
                </div>

                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "Writing has always been my passion. Gengig connected me with businesses that
                  needed my voice. I've built a portfolio that got me into my dream journalism program!"
                </blockquote>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">$18,650</div>
                    <div className="text-sm text-gray-600">Total Earnings</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">203</div>
                    <div className="text-sm text-gray-600">Projects Done</div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Emma started writing blog posts and social media content on Gengig. Her engaging
                  style and reliability made her a favorite among clients. She's now accepted to
                  Northwestern's journalism program.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-200 to-blue-200 flex items-center justify-center mx-auto mb-6">
                    <StarIcon className="h-16 w-16 text-gray-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Client Favorite</h4>
                  <p className="text-gray-600">Most requested content creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials Grid */}
      <Section background="default" padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from young creators and clients about their Gengig experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIconSolid key={i} className="h-4 w-4 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-gray-700 mb-4 leading-relaxed">
              "My daughter has learned so much about business and responsibility through Gengig.
              The safety features give me peace of mind."
            </blockquote>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mr-3">
                <span className="text-sm font-bold text-gray-700">S</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Sarah M.</div>
                <div className="text-sm text-gray-600">Parent</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIconSolid key={i} className="h-4 w-4 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-gray-700 mb-4 leading-relaxed">
              "The young talent on Gengig brings fresh perspectives to our projects.
              The platform makes it easy to find and work with them safely."
            </blockquote>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center mr-3">
                <span className="text-sm font-bold text-gray-700">D</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">David L.</div>
                <div className="text-sm text-gray-600">Marketing Director</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIconSolid key={i} className="h-4 w-4 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-gray-700 mb-4 leading-relaxed">
              "Gengig helped me discover my passion for UX design. The mentorship and
              real projects prepared me for my career better than any course could."
            </blockquote>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center mr-3">
                <span className="text-sm font-bold text-gray-700">J</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Jordan K.</div>
                <div className="text-sm text-gray-600">Age 20, UX Designer</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg" className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
        </div>

        <div className="text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-indigo-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of young innovators who are building their futures on Gengig.
            Your success story could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/register" className="btn-secondary btn-xl group">
              Start Your Journey
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link href="/about" className="btn-ghost btn-xl text-white border-white hover:bg-white hover:text-indigo-600">
              Learn More
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}

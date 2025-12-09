import Link from 'next/link'
import { ArrowRightIcon, HeartIcon, ShieldCheckIcon, LightBulbIcon, UsersIcon } from '@heroicons/react/24/outline'
import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import Section from '../../components/Section'

export const metadata = {
  title: 'About Us - Gengig',
  description: 'Learn about Gengig\'s mission to empower young innovators and create safe opportunities for teenagers to build their future.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="pt-24 lg:pt-28">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering the Next Generation
            <span className="block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              of Innovators
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            At Gengig, we believe that age shouldn't limit potential. We're building a safe, 
            secure platform where talented teenagers can turn their creativity into real opportunities.
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section background="default" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We're on a mission to bridge the gap between young talent and real-world opportunities. 
              Traditional freelancing platforms weren't designed with teenagers in mind, leaving a 
              generation of digital natives without safe ways to monetize their skills.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Gengig changes that by providing a monitored, secure environment where young creators 
              aged 13-21 can safely connect with clients, build their portfolios, and earn income 
              while developing crucial professional skills.
            </p>
            <Link href="/register" className="btn-primary btn-lg group">
              Join Our Mission
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" 
                       style={{background: 'linear-gradient(135deg, var(--color-brand-900) 0%, var(--color-accent-500) 100%)'}}>
                    <ShieldCheckIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Safe & Secure</h3>
                  <p className="text-sm text-gray-600">Advanced monitoring and protection</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" 
                       style={{background: 'linear-gradient(135deg, var(--color-accent-500) 0%, var(--color-secondary-500) 100%)'}}>
                    <LightBulbIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Innovation First</h3>
                  <p className="text-sm text-gray-600">Encouraging creative solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" 
                       style={{background: 'linear-gradient(135deg, var(--color-secondary-500) 0%, var(--color-brand-700) 100%)'}}>
                    <UsersIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Community</h3>
                  <p className="text-sm text-gray-600">Building connections that matter</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" 
                       style={{background: 'linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-accent-600) 100%)'}}>
                    <HeartIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Youth-Focused</h3>
                  <p className="text-sm text-gray-600">Designed for the next generation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="gray" padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything we do is guided by these fundamental principles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" 
                 style={{background: 'linear-gradient(135deg, var(--color-brand-900) 0%, var(--color-accent-500) 100%)'}}>
              <ShieldCheckIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Safety First</h3>
            <p className="text-gray-600 leading-relaxed">
              We prioritize the safety and well-being of young users above all else, 
              with comprehensive monitoring and protection systems.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" 
                 style={{background: 'linear-gradient(135deg, var(--color-accent-500) 0%, var(--color-secondary-500) 100%)'}}>
              <LightBulbIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Innovation</h3>
            <p className="text-gray-600 leading-relaxed">
              We encourage creative thinking and innovative solutions, helping young minds 
              explore their potential without limits.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" 
                 style={{background: 'linear-gradient(135deg, var(--color-secondary-500) 0%, var(--color-brand-700) 100%)'}}>
              <UsersIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Empowerment</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe in empowering young people with the tools, opportunities, 
              and confidence they need to succeed.
            </p>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section background="default" padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate group of innovators, educators, and safety experts dedicated to empowering young talent
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-orange-100 mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-200 to-orange-200 flex items-center justify-center">
                <UsersIcon className="h-12 w-12 text-gray-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Sarah Chen</h3>
            <p className="text-orange-600 font-medium mb-3">CEO & Founder</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Former tech executive passionate about youth empowerment and digital safety
            </p>
          </div>

          <div className="text-center group">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center">
                <ShieldCheckIcon className="h-12 w-12 text-gray-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Marcus Rodriguez</h3>
            <p className="text-orange-600 font-medium mb-3">Head of Safety</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cybersecurity expert ensuring the platform remains safe for young users
            </p>
          </div>

          <div className="text-center group">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-100 to-yellow-100 mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 flex items-center justify-center">
                <LightBulbIcon className="h-12 w-12 text-gray-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Emma Thompson</h3>
            <p className="text-orange-600 font-medium mb-3">Head of Product</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              UX designer focused on creating intuitive experiences for young creators
            </p>
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
            Ready to Join Our Mission?
          </h2>
          <p className="text-indigo-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're a young creator ready to showcase your talents or a client looking
            for fresh perspectives, we'd love to have you as part of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/register" className="btn-secondary btn-xl">
              Get Started Today
            </Link>
            <Link href="/success-stories" className="btn-ghost btn-xl text-white border-white hover:bg-white hover:text-indigo-600">
              View Success Stories
            </Link>
            <Link href="/contact" className="btn-ghost btn-xl text-white border-white hover:bg-white hover:text-indigo-600">
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}

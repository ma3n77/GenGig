import Link from 'next/link'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ChatBubbleLeftRightIcon,
  ClockIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'
import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import Section from '../../components/Section'

export const metadata = {
  title: 'Contact Us - Gengig',
  description: 'Get in touch with the Gengig team. We\'re here to help young creators and clients connect safely and successfully.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="pt-24 lg:pt-28">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get in Touch
            <span className="block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              We're Here to Help
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Have questions about Gengig? Need support? Want to learn more about our platform? 
            We'd love to hear from you and help you get started.
          </p>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section background="default" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="input-field"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="input-field"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input-field"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-2">
                  I am a... *
                </label>
                <select id="userType" name="userType" required className="input-field">
                  <option value="">Please select</option>
                  <option value="teen">Young Creator (13-21)</option>
                  <option value="parent">Parent/Guardian</option>
                  <option value="client">Client/Business</option>
                  <option value="educator">Educator</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="input-field"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="input-field resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary btn-lg w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" 
                       style={{background: 'linear-gradient(135deg, var(--color-brand-900) 0%, var(--color-accent-500) 100%)'}}>
                    <EnvelopeIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
                    <p className="text-gray-600 mb-2">Get help with your account or general questions</p>
                    <a href="mailto:support@gengig.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      support@gengig.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" 
                       style={{background: 'linear-gradient(135deg, var(--color-accent-500) 0%, var(--color-secondary-500) 100%)'}}>
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
                    <p className="text-gray-600 mb-2">Chat with our support team in real-time</p>
                    <p className="text-sm text-gray-500">Available Mon-Fri, 9 AM - 6 PM PST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" 
                       style={{background: 'linear-gradient(135deg, var(--color-secondary-500) 0%, var(--color-brand-700) 100%)'}}>
                    <PhoneIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
                    <p className="text-gray-600 mb-2">Speak directly with our team</p>
                    <p className="text-blue-600 font-medium">1-800-GENGIG-1</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Information */}
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{background: 'linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-accent-600) 100%)'}}>
                  <MapPinIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Office</h3>
                  <p className="text-gray-600 mb-1">123 Innovation Drive</p>
                  <p className="text-gray-600 mb-1">San Francisco, CA 94105</p>
                  <p className="text-gray-600">United States</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{background: 'linear-gradient(135deg, var(--color-accent-600) 0%, var(--color-brand-900) 100%)'}}>
                  <ClockIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="text-gray-900 font-medium">10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="text-gray-900 font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick answers to common questions about Gengig
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                   style={{background: 'linear-gradient(135deg, var(--color-brand-900) 0%, var(--color-accent-500) 100%)'}}>
                <QuestionMarkCircleIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How does Gengig ensure safety for young users?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We use advanced monitoring systems, require parental consent for users under 18,
                  implement secure payment processing, and have dedicated safety moderators reviewing all interactions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                   style={{background: 'linear-gradient(135deg, var(--color-accent-500) 0%, var(--color-secondary-500) 100%)'}}>
                <QuestionMarkCircleIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What age range can use Gengig?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gengig is designed for young creators aged 13-21. Users under 18 require parental consent
                  and additional safety measures are in place for their protection.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                   style={{background: 'linear-gradient(135deg, var(--color-secondary-500) 0%, var(--color-brand-700) 100%)'}}>
                <QuestionMarkCircleIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How do payments work on Gengig?</h3>
                <p className="text-gray-600 leading-relaxed">
                  All payments are processed securely through our platform. For users under 18,
                  payments are held in trust and released with parental approval.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                   style={{background: 'linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-accent-600) 100%)'}}>
                <QuestionMarkCircleIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can parents monitor their child's activity?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! Parents have access to a dedicated dashboard where they can monitor their child's
                  projects, communications, and earnings in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <Link href="/help" className="btn-primary btn-lg">
            Visit Help Center
          </Link>
        </div>
      </Section>
    </div>
  )
}

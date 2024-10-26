'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Book, Brain, Clock, MessageCircle, Award, Shield } from 'lucide-react'
import Image from 'next/image'

export default function SchoolToolLanding() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const services = [
    { name: 'Bien', icon: Brain, description: 'Student wellbeing management' },
    { name: 'Cultivate', icon: Book, description: 'Effective study habits development' },
    { name: 'Zeit', icon: Clock, description: 'Efficient scheduling and timetabling' },
    { name: 'Parler', icon: MessageCircle, description: 'Seamless communication platform' },
    { name: 'Merit', icon: Award, description: 'Student achievement recognition' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Image src="/logo.png" alt="School Tool Logo" width={50} height={50} />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-blue-400 hover:text-blue-300">Home</a></li>
            <li><a href="#" className="text-blue-400 hover:text-blue-300">Services</a></li>
            <li><a href="#" className="text-blue-400 hover:text-blue-300">About</a></li>
            <li><a href="#" className="text-blue-400 hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Landing Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6 animate__animated animate__fadeInDown">
            Welcome to School Tool
          </h1>
          <p className="text-xl mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            The all-in-one platform for students and educators
          </p>
          <div className="animate__animated animate__fadeInUp animate__delay-2s">
            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition-colors">
              Explore Our Services <ArrowRight className="ml-2" />
            </a>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate__animated ${isLoaded ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">About School Tool</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className={`animate__animated ${isLoaded ? 'animate__fadeInLeft' : ''}`}>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-4">
                School Tool aims to revolutionize the educational experience by providing a comprehensive suite of digital tools designed to enhance learning, improve communication, and streamline administrative tasks.
              </p>
              <p className="text-gray-300">
                We believe in empowering students, teachers, and administrators with cutting-edge technology to create a more efficient and effective educational environment.
              </p>
            </div>
            <div className={`animate__animated ${isLoaded ? 'animate__fadeInRight' : ''}`} style={{ animationDelay: '0.2s' }}>
              <Image src="/logo.png?height=300&width=400" width={400} height={300} alt="About School Tool" className="rounded-lg" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: 'Secure', description: 'Top-notch security measures to protect sensitive data' },
                { icon: Brain, title: 'Intelligent', description: 'AI-powered insights and recommendations' },
                { icon: Clock, title: 'Time-Saving', description: 'Automate routine tasks and streamline workflows' },
                { icon: MessageCircle, title: 'Collaborative', description: 'Foster teamwork and communication' },
                { icon: Book, title: 'Comprehensive', description: 'All-in-one solution for educational needs' },
                { icon: Award, title: 'Motivating', description: 'Gamification elements to encourage engagement' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gray-700 p-6 rounded-lg shadow-lg animate__animated ${isLoaded ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'John Doe', role: 'Teacher', quote: 'School Tool has transformed the way I manage my classes and communicate with students.' },
              { name: 'Jane Smith', role: 'Student', quote: 'I love how easy it is to keep track of my assignments and collaborate with classmates.' },
              { name: 'Mike Johnson', role: 'Administrator', quote: 'The analytics provided by School Tool have been invaluable in improving our school\'s performance.' },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gray-700 p-6 rounded-lg shadow-lg animate__animated ${isLoaded ? 'animate__fadeInUp' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Flexible Pricing</h2>
            <p className="text-center text-gray-300 mb-8">Choose the services you need. Pay only for what you use.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Basic', price: '$9.99', features: ['Access to 2 services', 'Basic support', '1GB storage'] },
                { name: 'Pro', price: '$19.99', features: ['Access to all services', 'Priority support', '10GB storage', 'Advanced analytics'] },
                { name: 'Enterprise', price: 'Custom', features: ['Custom solutions', 'Dedicated support', 'Unlimited storage', 'API access'] },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gray-700 p-6 rounded-lg shadow-lg text-center animate__animated ${isLoaded ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-6">{plan.price}</p>
                  <ul className="text-gray-300 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">{feature}</li>
                  ))}
                  </ul>
                  <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-full inline-block hover:bg-blue-700 transition-colors">
                  Choose Plan
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Seamless Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className={`animate__animated ${isLoaded ? 'animate__fadeInLeft' : ''}`}>
              <h3 className="text-2xl font-semibold mb-4">Works with Your Existing Tools</h3>
              <p className="text-gray-300 mb-4">
                School Tool integrates seamlessly with popular educational platforms and management systems, ensuring a smooth transition and enhanced functionality.
              </p>
              <ul className="text-gray-300 list-disc list-inside mb-4">
                <li>Learning Management Systems (LMS)</li>
                <li>Student Information Systems (SIS)</li>
                <li>Productivity suites (Google Workspace, Microsoft 365)</li>
                <li>Video conferencing tools</li>
              </ul>
            </div>
            <div className={`animate__animated ${isLoaded ? 'animate__fadeInRight' : ''}`} style={{ animationDelay: '0.2s' }}>
              <Image src="/logo.png?height=300&width=400" width={400} height={300} alt="Integration Illustration" className="rounded-lg" />
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Improving Student Engagement', school: 'Westfield High School', result: '35% increase in class participation' },
                { title: 'Streamlining Administrative Tasks', school: 'Oakridge School District', result: '50% reduction in paperwork' },
                { title: 'Enhancing Parent-Teacher Communication', school: 'Sunnydale Elementary', result: '90% parent satisfaction rate' },
              ].map((study, index) => (
                <div
                  key={index}
                  className={`bg-gray-700 p-6 rounded-lg shadow-lg animate__animated ${isLoaded ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-400 mb-4">{study.school}</p>
                  <p className="text-gray-300">{study.result}</p>
                  <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">Read full case study</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: 'How secure is School Tool?', a: 'We employ industry-leading security measures to protect all data, including end-to-end encryption and regular security audits.' },
              { q: 'Can School Tool integrate with our existing systems?', a: 'Yes, School Tool is designed to integrate seamlessly with most popular educational and administrative systems.' },
              { q: 'Is training provided for new users?', a: 'We offer comprehensive training sessions and ongoing support to ensure smooth adoption and usage.' },
              { q: 'How customizable is School Tool?', a: 'School Tool offers a high degree of customization to meet the specific needs of each educational institution.' },
            ].map((faq, index) => (
              <div
                key={index}
                className={`bg-gray-700 p-6 rounded-lg shadow-lg animate__animated ${isLoaded ? 'animate__fadeInUp' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your School?</h2>
            <p className="text-xl mb-8">Join thousands of schools already benefiting from School Tool</p>
            <a href="#" className="bg-white text-blue-600 px-8 py-3 rounded-full inline-block hover:bg-gray-100 transition-colors text-lg font-semibold">
              Get Started Today
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About School Tool</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Bien</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Cultivate</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Zeit</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Parler</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Merit</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Sales</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Partnerships</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} School Tool. All rights reserved.</p>
          </div>
        </div>
    </footer>
    </div>
  )
}
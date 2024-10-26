'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Brain, Clock, MessageCircle, Award, Sprout } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import 'animate.css'

export default function SchoolToolLanding() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-[#0E0F12] text-[#E6E6E6] min-h-screen font-sans">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? "bg-[#13151A80] backdrop-blur-md border-b border-[#3A3F4A]" : ""
      }`}>
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="https://schooltool.io/img/logo.png" alt="School Tool Logo" width={40} height={40} />
            <span className="text-xl font-bold text-[#3A86FF]">School Tool</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#services" className="text-[#E6E6E6] hover:text-[#3A86FF] transition-colors">Services</Link>
            <Link href="#features" className="text-[#E6E6E6] hover:text-[#3A86FF] transition-colors">Features</Link>
            <Link href="#testimonials" className="text-[#E6E6E6] hover:text-[#3A86FF] transition-colors">Testimonials</Link>
            <Link href="#contact" className="text-[#E6E6E6] hover:text-[#3A86FF] transition-colors">Contact</Link>
          </nav>
          <Button className="bg-[#3A86FF] hover:bg-[#2A76EF] text-white">Get Started</Button>
        </div>
      </header>

      <main>
        <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#13151A] to-[#0E0F12]">
          <div 
            className="container mx-auto text-center animate__animated animate__fadeInUp"
          >
            <h1 className="text-5xl font-bold mb-6 text-[#FFFFFF]">
              Revolutionize Your School with AI-Powered Tools
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              School Tool brings cutting-edge technology to education, empowering students, teachers, and administrators with a suite of innovative applications.
            </p>
            <Button className="bg-[#3A86FF] hover:bg-[#2A76EF] text-white text-lg px-8 py-3">
              Explore Our Services
            </Button>
          </div>
        </section>

        <section id="services" className="py-20 px-6 bg-[#13151A]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Brain className="w-12 h-12 text-[#FF6B6B]" />}
                title="Bien"
                description="Student wellbeing management platform"
                color="#FF6B6B"
              />
              <ServiceCard
                icon={<Sprout className="w-12 h-12 text-[#4ECB71]" />}
                title="Cultivate"
                description="Personalized study habit development"
                color="#4ECB71"
              />
              <ServiceCard
                icon={<Clock className="w-12 h-12 text-[#FFD93D]" />}
                title="Zeit"
                description="Efficient scheduling and time management"
                color="#FFD93D"
              />
              <ServiceCard
                icon={<MessageCircle className="w-12 h-12 text-[#4CC9F0]" />}
                title="Parler"
                description="Enhanced communication platform"
                color="#4CC9F0"
              />
              <ServiceCard
                icon={<Award className="w-12 h-12 text-[#F72585]" />}
                title="Merit"
                description="Student achievement recognition system"
                color="#F72585"
              />
            </div>
          </div>
        </section>

        <section id="features" className="py-20 px-6 bg-[#0E0F12]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Brain className="w-8 h-8 text-[#3A86FF]" />}
                title="AI-Powered Learning"
                description="Harness the power of artificial intelligence to personalize and enhance the learning experience."
              />
              <FeatureCard
                icon={<BookOpen className="w-8 h-8 text-[#3A86FF]" />}
                title="Comprehensive Suite"
                description="Access a full range of tools designed to address every aspect of modern education."
              />
              <FeatureCard
                icon={<MessageCircle className="w-8 h-8 text-[#3A86FF]" />}
                title="Seamless Communication"
                description="Foster collaboration and engagement among students, teachers, and parents."
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 px-6 bg-[#13151A]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">What Educators Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="School Tool has transformed our educational approach. It's an indispensable asset for modern schools."
                author="Dr. Emily Johnson"
                role="Principal, Westfield High"
              />
              <TestimonialCard
                quote="The suite of apps offered by School Tool has significantly improved student engagement and performance."
                author="Michael Chen"
                role="Head of IT, Oakridge School District"
              />
              <TestimonialCard
                quote="As a teacher, I've seen a remarkable improvement in student wellbeing and academic progress thanks to School Tool."
                author="Sarah Thompson"
                role="English Teacher, Sunnydale Elementary"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-[#0E0F12]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your School?</h2>
            <p className="text-xl mb-8">Get in touch with us to learn how School Tool can benefit your institution</p>
            <Button className="bg-[#3A86FF] hover:bg-[#2A76EF] text-white text-lg px-8 py-3">
              Contact Us
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-[#13151A] py-12 px-6">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-[#3A86FF]">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#3A86FF]">Careers</Link></li>
              <li><Link href="#" className="hover:text-[#3A86FF]">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-[#3A86FF]">Bien</Link></li>
              <li><Link href="#" className="hover:text-[#3A86FF]">Cultivate</Link></li>
              <li><Link href="#" className="hover:text-[#3A86FF]">Zeit</Link></li>
              <li><Link href="#" className="hover:text-[#3A86FF]">Parler</Link></li>
              <li><Link href="#" className="hover:text-[#3A86FF]">Merit</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-[#3A86FF]">Blog</Link></li>
              <li><Link href="#" className="hover:text-[#3A86FF]">Help Center</Link></li>
              <li><Link href="#" className="hover:text-[#3A86FF]">Webinars</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-[#3A86FF]">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#3A86FF]">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-[#3A3F4A] text-center">
          <p>&copy; {new Date().getFullYear()} School Tool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description, color }) {
  return (
    <div className="animate__animated animate__pulse">
      <Card className="bg-[#1A1D24] border-[#3A3F4A] overflow-hidden">
        <div className={`h-2 w-full`} style={{ backgroundColor: color }}></div>
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            {icon}
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>{description}</CardContent>
      </Card>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="animate__animated animate__pulse">
      <Card className="bg-[#1A1D24] border-[#3A3F4A]">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            {icon}
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>{description}</CardContent>
      </Card>
    </div>
  )
}

function TestimonialCard({ quote, author, role }) {
  return (
    <Card className="bg-[#1A1D24] border-[#3A3F4A]">
      <CardContent className="pt-6">
        <p className="mb-4 italic">"{quote}"</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-[#A0A0A0]">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}
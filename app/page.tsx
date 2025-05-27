"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Shield,
  Eye,
  Zap,
  Award,
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Globe,
  Database,
  Download,
  Brain,
  Users,
  Target,
  Lock,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"

// GSAP imports
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

export default function AthenianTechWebsite() {
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0)
  const [scrambledText, setScrambledText] = useState("ATHENIAN")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Refs for GSAP animations
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const productsRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const researchRef = useRef<HTMLElement>(null)
  const riskIntelRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null)
  const heroButtonsRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const leadershipRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  // State for image slider
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  // State for the popup dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Video autoplay setup
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  // Initialize GSAP animations
  // Add scroll-based animations for leadership section
  useEffect(() => {
    if (leadershipRef.current) {
      const leftCards = leadershipRef.current.querySelectorAll('[data-scroll-direction="left"]')
      const rightCards = leadershipRef.current.querySelectorAll('[data-scroll-direction="right"]')
      
      gsap.fromTo(leftCards, 
        { x: -100, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: leadershipRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
      
      gsap.fromTo(rightCards, 
        { x: 100, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: leadershipRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [])
  
  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Simple hover effect for interactive elements
      const magneticElements = document.querySelectorAll(".magnetic")
      magneticElements.forEach((element) => {
        const handleMouseEnter = () => {
          gsap.to(element, { scale: 1.05, duration: 0.3, ease: "power2.out" })
        }

        const handleMouseLeave = () => {
          gsap.to(element, { scale: 1, duration: 0.3, ease: "power2.out" })
        }

        element.addEventListener("mouseenter", handleMouseEnter)
        element.addEventListener("mouseleave", handleMouseLeave)
      })

      // Floating background elements with interactive behavior
      gsap.set(".floating-element", {
        opacity: 0.1,
        scale: 0.5,
        rotation: 0,
      })

      gsap.to(".floating-element", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      })

      gsap.to(".floating-element", {
        y: "random(-50, 50)",
        x: "random(-30, 30)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      })

      // Hero section with enhanced animations
      if (heroTitleRef.current) {
        const tl = gsap.timeline()

        tl.fromTo(
          heroTitleRef.current,
          {
            opacity: 0,
            scale: 0.5,
            rotationX: -90,
            z: -1000,
          },
          {
            opacity: 1,
            scale: 1,
            rotationX: 0,
            z: 0,
            duration: 2,
            ease: "back.out(1.7)",
            delay: 0.5,
          },
        )
      }

      // Interactive text reveal
      if (heroSubtitleRef.current) {
        const text = heroSubtitleRef.current.textContent || ""
        heroSubtitleRef.current.innerHTML = text
          .split("")
          .map((char, i) => `<span style="opacity: 0; transform: translateY(50px);">${char}</span>`)
          .join("")

        gsap.to(heroSubtitleRef.current.children, {
          opacity: 1,
          y: 0,
          duration: 0.05,
          stagger: 0.02,
          delay: 1.5,
          ease: "power2.out",
        })
      }

      // Enhanced button animations
      if (heroButtonsRef.current) {
        gsap.fromTo(
          heroButtonsRef.current.children,
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
            rotationX: -45,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.2,
            delay: 2,
            ease: "back.out(1.7)",
          },
        )
      }

      // Navigation with slide effect
      if (navRef.current) {
        gsap.fromTo(
          navRef.current,
          { y: -100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
        )
      }

      // Scroll-triggered animations with enhanced effects
      const sections = [
        aboutRef,
        productsRef,
        servicesRef,
        researchRef,
        riskIntelRef,
        testimonialsRef,
        faqRef,
        contactRef,
      ]

      sections.forEach((sectionRef, index) => {
        if (sectionRef.current) {
          // Section title with simple fade-in effect
          const title = sectionRef.current.querySelector("h2")
          if (title) {
            gsap.fromTo(
              title,
              {
                opacity: 0,
                y: 30,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: title,
                  start: "top 80%",
                  end: "bottom 20%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          }

          // Simplified card animations
          const cards = sectionRef.current.querySelectorAll(".animate-card")
          if (cards.length > 0) {
            cards.forEach((card, cardIndex) => {
              gsap.fromTo(
                card,
                {
                  opacity: 0,
                  y: 40,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  delay: cardIndex * 0.1,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                  },
                },
              )
            })
          }
        }
      })

      // Interactive service cards
      if (servicesRef.current) {
        const serviceCards = servicesRef.current.querySelectorAll(".service-card")
        serviceCards.forEach((card, index) => {
          const icon = card.querySelector(".service-icon")

          // Hover animations
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.05,
              rotationY: 5,
              z: 50,
              duration: 0.3,
              ease: "power2.out",
            })
            gsap.to(icon, {
              scale: 1.2,
              rotation: 360,
              duration: 0.5,
              ease: "back.out(1.7)",
            })
          })

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              rotationY: 0,
              z: 0,
              duration: 0.3,
              ease: "power2.out",
            })
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            })
          })
        })
      }

      // Animated counters with enhanced effects
      if (riskIntelRef.current) {
        const counters = riskIntelRef.current.querySelectorAll(".counter")
        counters.forEach((counter) => {
          const target = counter.textContent || "0"
          const numericValue = Number.parseInt(target.replace(/[^\d]/g, "")) || 0

          gsap.fromTo(
            counter,
            { textContent: 0 },
            {
              textContent: numericValue,
              duration: 2.5,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: counter,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
              onUpdate: function () {
                const current = Math.round(this.targets()[0].textContent)
                if (target.includes("M")) {
                  counter.textContent = current + "M+"
                } else if (target.includes("%")) {
                  counter.textContent = current + "%"
                } else if (target.includes("min")) {
                  counter.textContent = current + "min"
                } else if (target.includes("s")) {
                  counter.textContent = "<" + current + "s"
                } else {
                  counter.textContent = current + "+"
                }
              },
            },
          )
        })
      }

      // Research reports with staggered reveal
      if (researchRef.current) {
        const reports = researchRef.current.querySelectorAll(".research-card")
        reports.forEach((report, index) => {
          gsap.fromTo(
            report,
            {
              opacity: 0,
              y: 60,
              scale: 0.8,
              rotationX: -15,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: report,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          )
        })
      }

      // Parallax effects
      gsap.to(".parallax-slow", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })

      gsap.to(".parallax-fast", {
        yPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  // Enhanced scramble text animation
  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
    const finalText = "ATHENIAN"
    let iteration = 0

    const interval = setInterval(() => {
      setScrambledText(
        finalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join(""),
      )

      if (iteration >= finalText.length) {
        clearInterval(interval)
      }

      iteration += 1 / 3
    }, 30)

    return () => clearInterval(interval)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const products = [
    {
      title: "Athena",
      description:
        "SaaS-based digital risk management platform that offers a comprehensive view of organizations brand, reputation, and digital risks across social media, web, and mobile.",
      features: ["Brand monitoring", "Reputation management", "Digital risk assessment"],
      price: "Enterprise",
    },
    {
      title: "Thunder Bolt",
      description:
        "AI and ML-powered digital identity protection platform Secures users' digital identities of C-suite executives and global leaders to maintain a strong security posture.",
      features: ["Identity protection", "Executive monitoring", "AI-powered alerts"],
      price: "Premium",
    },
    {
      title: "Prime",
      description:
        "Risk intelligence platform that offers deep insights into cyber threats like APTs, indicators of compromise, and ransomware actors.",
      features: ["Threat intelligence", "APT analysis", "Ransomware tracking"],
      price: "Custom pricing",
    },
  ]

  const services = [
    {
      icon: Shield,
      title: "Digital Risk Management",
      description: "Comprehensive protection against digital and cyber threats across all platforms",
    },
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Machine learning algorithms to identify and prevent emerging threats",
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous surveillance of digital assets and threat landscapes",
    },
    {
      icon: Users,
      title: "Identity Protection",
      description: "Advanced protection for executive and organizational digital identities",
    },
    {
      icon: Target,
      title: "APT Analysis",
      description: "Advanced Persistent Threat detection and analysis capabilities",
    },
    {
      icon: Database,
      title: "Dark Web Intelligence",
      description: "Monitoring and intelligence from Dark, Deep, and Surface Web",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Fortune 500 Financial Institution",
      role: "CISO",
      content:
        "Athenian Tech's AI-powered solutions have transformed our digital risk posture. We've seen a 95% reduction in successful social engineering attacks.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Global Manufacturing Corp",
      role: "IT Director",
      content:
        "The threat intelligence platform gives us unprecedented visibility into emerging threats. Their response time is incredible.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Healthcare Network",
      role: "Security Manager",
      content:
        "Identity protection for our executives became effortless. Highly recommended for healthcare organizations.",
      rating: 5,
    },
  ]

  const researchReports = [
    {
      title: "Remote Unauthenticated Code Execution Vulnerability in OpenSSH Server",
      date: "Aug, 2024",
      category: "Vulnerability Analysis",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Advisory on CrowdStrike Falcon Sensor Incident and Vulnerability",
      date: "July 2024",
      category: "Security Advisory",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Threat Assessment - Sarbloh Ransomware",
      date: "May, 2023",
      category: "Ransomware Analysis",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Analysis on APT 36",
      date: "Mar, 2023",
      category: "APT Analysis",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "APT27 - Decade-Old Active Chinese Threat Group",
      date: "Feb, 2023",
      category: "APT Analysis",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Analysis on APT 41",
      date: "Jan, 2023",
      category: "APT Analysis",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const teamMembers = [
    {
      name: "Kanishk Gaur",
      role: "Founder",
      bio: "Digital Risk Management Entrepreneur specializing in Trust, Safety, Cyber Security, Privacy, and Technology Consulting. Over 15 years of experience advising business leaders and CXOs.",
      image: "/placeholder.svg?height=200&width=200",
      details:
        "Recipient of the prestigious Chevening Cyber Security Fellowship award (2018). Former leadership roles with Deloitte, EY, and Synopsis Inc. MBA graduate from MDI, Gurgaon.",
    },
    {
      name: "Col. Sanjeev Relia",
      role: "Chief Strategy Officer",
      bio: "Seasoned IT and cyber expert with 32+ years of distinguished service in the Indian Army. Commissioned into the Corps of Signals in 1986.",
      image: "/placeholder.svg?height=200&width=200",
      details:
        "Specializes in telecom, network establishment, cybersecurity, and strategic leadership. Extensive experience in Special Forces and counter-insurgency operations.",
    },
  ]

  const advisors = [
    {
      name: "Lt Gen. (Retd) Dr. Rajesh Pant",
      role: "India's Former National Cyber Security Coordinator at PMO",
      bio: "Previously held the position of National Cybersecurity Coordinator in the Prime Minister's Office, Government of India.",
      image: "/placeholder.svg?height=200&width=200",
      details:
        "Over 41 years in Army Signals Corps. Ph.D. in information security metrics. Three awards from the President of India.",
    },
    {
      name: "Prof. Jamie Saunders",
      role: "Former Head of Cyber Crime Unit at U.K National Crime Agency",
      bio: "Oxford Martin Fellow at the University of Oxford, and Fellow of the European School of Management and Technology in Berlin.",
      image: "/placeholder.svg?height=200&width=200",
      details:
        "29 years in UK Government with positions in GCHQ, Foreign Commonwealth Office, Cabinet Office, and National Crime Agency.",
    },
  ]

  const faqs = [
    {
      question: "What makes Athenian Tech's cybersecurity solutions different?",
      answer:
        "Our AI and ML-powered technology solutions provide 360-degree protection against advanced digital and cyber threats. We focus on protecting businesses from identity thefts, frauds, social engineering attacks, APT, ransomware attacks, and cryptojacking from Dark, Deep, and Surface Web.",
    },
    {
      question: "How quickly can you respond to digital threats?",
      answer:
        "Our AI-powered systems provide real-time monitoring and can detect threats within seconds. Our expert team responds to critical incidents within 15 minutes with automated containment systems.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve organizations across all industries with specialized expertise in finance, healthcare, manufacturing, government, and technology sectors, providing tailored digital risk management solutions.",
    },
    {
      question: "How do you protect executive digital identities?",
      answer:
        "Our Thunder Bolt platform uses AI and ML to secure digital identities of C-suite executives and global leaders, monitoring across all digital platforms and providing real-time threat alerts.",
    },
    {
      question: "What is your approach to threat intelligence?",
      answer:
        "Our Prime platform offers deep insights into cyber threats like APTs, indicators of compromise, and ransomware actors, utilizing intelligence from Dark, Deep, and Surface Web sources.",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-slate-900 text-white" : "bg-white text-slate-900"} relative overflow-x-hidden`}
    >
      {/* No custom cursor */}

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-40 left-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-20 right-1/3 w-28 h-28 bg-cyan-500/5 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-1/2 left-1/2 w-36 h-36 bg-purple-500/5 rounded-full blur-xl"></div>
      </div>

      {/* Navigation */}
      <nav
        ref={navRef}
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${isDark ? "bg-slate-900/95 border-slate-800" : "bg-white/95 border-slate-200"} backdrop-blur-md border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 magnetic">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold">Athenian Tech</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors magnetic">
                Home
              </a>
              <a href="#about" className="hover:text-cyan-400 transition-colors magnetic">
                About
              </a>
              <a href="#products" className="hover:text-cyan-400 transition-colors magnetic">
                Products
              </a>
              <a href="#services" className="hover:text-cyan-400 transition-colors magnetic">
                Services
              </a>
              <a href="#research" className="hover:text-cyan-400 transition-colors magnetic">
                Research
              </a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors magnetic">
                Contact
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-cyan-400/10 magnetic">
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden magnetic"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"} border-t`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:text-cyan-400 transition-colors">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 hover:text-cyan-400 transition-colors">
                About
              </a>
              <a href="#products" className="block px-3 py-2 hover:text-cyan-400 transition-colors">
                Products
              </a>
              <a href="#services" className="block px-3 py-2 hover:text-cyan-400 transition-colors">
                Services
              </a>
              <a href="#research" className="block px-3 py-2 hover:text-cyan-400 transition-colors">
                Research
              </a>
              <a href="#contact" className="block px-3 py-2 hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 parallax-slow"></div>
        
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video 
            ref={videoRef}
            className="absolute min-w-full min-h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="https://kanishkgaur.com/wp-content/uploads/2025/02/atheniantech.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <h1
                ref={heroTitleRef}
                className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              >
                {scrambledText}
              </h1>
              <p ref={heroSubtitleRef} className="text-xl md:text-2xl text-slate-400 mb-8 max-w-4xl mx-auto">
                Digital Risk Management Company providing AI & ML powered technology solutions to protect Digital
                Identity for businesses
              </p>
            </div>
             <div ref={heroButtonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 magnetic">
                Get Protected Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 magnetic"
              >
                Schedule Demo
              </Button>
            </div> 
          </div>
        </div> */}
      </section>

      {/* About Section */}
      {/* Image Swipe Gallery */}
      <section className={`py-20 ${isDark ? "bg-slate-800/50" : "bg-slate-50"} relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Cybersecurity Approach</h2>
          
          <div className="relative" ref={sliderRef}>
            <div className="flex overflow-x-hidden relative">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="min-w-full px-4">
                  <img 
                    src="https://source.unsplash.com/random/1200x600/?cybersecurity,technology" 
                    alt="Cybersecurity" 
                    className="rounded-lg w-full h-[400px] object-cover" 
                  />
                  <h3 className="text-xl font-semibold mt-4 mb-2">Advanced Threat Protection</h3>
                  <p className="text-slate-400">Proactive defense against the most sophisticated cyber threats</p>
                </div>
                <div className="min-w-full px-4">
                  <img 
                    src="https://source.unsplash.com/random/1200x600/?data,security" 
                    alt="Data Security" 
                    className="rounded-lg w-full h-[400px] object-cover" 
                  />
                  <h3 className="text-xl font-semibold mt-4 mb-2">Data Protection</h3>
                  <p className="text-slate-400">Comprehensive security for sensitive data across all systems</p>
                </div>
                <div className="min-w-full px-4">
                  <img 
                    src="https://source.unsplash.com/random/1200x600/?network,protection" 
                    alt="Network Protection" 
                    className="rounded-lg w-full h-[400px] object-cover" 
                  />
                  <h3 className="text-xl font-semibold mt-4 mb-2">Network Security</h3>
                  <p className="text-slate-400">Securing communication channels against unauthorized access</p>
                </div>
                <div className="min-w-full px-4">
                  <img 
                    src="https://source.unsplash.com/random/1200x600/?ai,machine-learning" 
                    alt="AI Security" 
                    className="rounded-lg w-full h-[400px] object-cover" 
                  />
                  <h3 className="text-xl font-semibold mt-4 mb-2">AI-Powered Analytics</h3>
                  <p className="text-slate-400">Intelligent threat detection using advanced machine learning</p>
                </div>
                <div className="min-w-full px-4">
                  <img 
                    src="https://source.unsplash.com/random/1200x600/?cloud,computing" 
                    alt="Cloud Security" 
                    className="rounded-lg w-full h-[400px] object-cover" 
                  />
                  <h3 className="text-xl font-semibold mt-4 mb-2">Cloud Security</h3>
                  <p className="text-slate-400">Protecting cloud environments and applications from threats</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 left-0 right-0 px-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-white/80 hover:bg-white" 
                onClick={() => setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1))}
              >
                <ChevronDown className="h-6 w-6 rotate-90" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-white/80 hover:bg-white" 
                onClick={() => setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1))}
              >
                <ChevronDown className="h-6 w-6 -rotate-90" />
              </Button>
            </div>
            
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-cyan-500' : 'bg-slate-400'}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section ref={riskIntelRef} id="risk-intel" className={`py-20 ${isDark ? "bg-slate-900" : "bg-white"} relative`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Athenian Tech</h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto">
              Athenian Tech offers 360 degree protection against advanced digital and cyber threats. Our platforms focus
              on protecting businesses from identity thefts, frauds, social engineering attacks, APT, ransomware
              attacks, cryptojacking emerging threat vectors from Dark, Deep, Surface Web.
            </p>
          </div>

          {/* Leadership Team with Scroll Animation */}
          <div className="mb-16" ref={leadershipRef}>
            <h3 className="text-3xl font-bold text-center mb-12">Our Leadership</h3>
            <div className="grid md:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className={`${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} animate-card magnetic`}
                  data-scroll-direction={index % 2 === 0 ? "left" : "right"}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <img
                        src={`https://source.unsplash.com/random/200x200/?executive,professional,${index}`}
                        alt={member.name}
                        className="w-32 h-32 rounded-lg object-cover mx-auto md:mx-0"
                      />
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                        <p className="text-cyan-400 mb-4 text-lg">{member.role}</p>
                        <p className="text-slate-400 mb-4">{member.bio}</p>
                        <p className="text-sm text-slate-500">{member.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advisors */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12">Our Advisors</h3>
            <div className="grid md:grid-cols-2 gap-12">
              {advisors.map((advisor, index) => (
                <Card
                  key={index}
                  className={`${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} animate-card magnetic`}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <img
                        src={advisor.image || "/placeholder.svg"}
                        alt={advisor.name}
                        className="w-32 h-32 rounded-lg object-cover mx-auto md:mx-0"
                      />
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold mb-2">{advisor.name}</h4>
                        <p className="text-cyan-400 mb-4 text-lg">{advisor.role}</p>
                        <p className="text-slate-400 mb-4">{advisor.bio}</p>
                        <p className="text-sm text-slate-500">{advisor.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} id="products" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive digital risk management solutions powered by AI and Machine Learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className={`${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} animate-card magnetic service-card`}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-slate-400">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-cyan-400 border-cyan-400">
                      {product.price}
                    </Badge>
                    <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 magnetic">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className={`py-20 ${isDark ? "bg-slate-800/50" : "bg-slate-50"} relative`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Expert digital risk management services to protect, monitor, and respond to threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${isDark ? "bg-slate-800 hover:bg-slate-700" : "bg-white hover:bg-slate-50"} transition-all duration-300 group cursor-pointer service-card magnetic`}
              >
                <service.icon className="h-12 w-12 text-cyan-400 mb-4 service-icon" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Analysis Section */}
      <section ref={researchRef} id="research" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cyber Research & Analysis</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our Risk Intelligence Reports - Latest threat analysis and cybersecurity research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchReports.map((report, index) => (
              <Card
                key={index}
                className={`${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} research-card magnetic`}
              >
                <div className="relative">
                  <img
                    src={report.image || "/placeholder.svg"}
                    alt={report.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-cyan-500">{report.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{report.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{report.date}</p>
                  <Button size="sm" className="w-full bg-cyan-500 hover:bg-cyan-600 magnetic">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Intelligence Section */}
      <section
        ref={riskIntelRef}
        id="risk-intelligence"
        className={`py-20 ${isDark ? "bg-slate-800/50" : "bg-slate-50"} relative`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Risk Intelligence</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Advanced threat intelligence and risk assessment powered by AI and machine learning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-card">
              <h3 className="text-2xl font-bold mb-6">Real-Time Threat Landscape</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-lg animate-card magnetic">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                    <div>
                      <div className="font-semibold">Critical Threats</div>
                      <div className="text-sm text-slate-400">Active APT campaigns</div>
                    </div>
                  </div>
                  <Badge variant="destructive">High</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg animate-card magnetic">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-yellow-400" />
                    <div>
                      <div className="font-semibold">Emerging Threats</div>
                      <div className="text-sm text-slate-400">New malware variants</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    Medium
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/20 rounded-lg animate-card magnetic">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-green-400" />
                    <div>
                      <div className="font-semibold">Protected Assets</div>
                      <div className="text-sm text-slate-400">Secured endpoints</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    Secure
                  </Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card
                className={`${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} text-center p-6 animate-card magnetic`}
              >
                <Globe className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-cyan-400 mb-2 counter">150</div>
                <div className="text-sm text-slate-400">Global Threat Indicators</div>
              </Card>

              <Card
                className={`${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} text-center p-6 animate-card magnetic`}
              >
                <Eye className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-sm text-slate-400">Continuous Monitoring</div>
              </Card>

              <Card
                className={`${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} text-center p-6 animate-card magnetic`}
              >
                <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-yellow-400 mb-2 counter">15</div>
                <div className="text-sm text-slate-400">Detection Speed (sec)</div>
              </Card>

              <Card
                className={`${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} text-center p-6 animate-card magnetic`}
              >
                <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-400 mb-2 counter">99</div>
                <div className="text-sm text-slate-400">Accuracy Rate</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Trusted by industry leaders worldwide for our exceptional digital risk management solutions.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card
              className={`${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} p-8 text-center testimonial-content magnetic`}
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl mb-6 italic">"{testimonials[currentTestimonial].content}"</blockquote>
              <div>
                <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                <div className="text-cyan-400">{testimonials[currentTestimonial].role}</div>
                <div className="text-slate-400">{testimonials[currentTestimonial].company}</div>
              </div>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors magnetic ${
                    index === currentTestimonial ? "bg-cyan-400" : "bg-slate-600"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className={`py-20 ${isDark ? "bg-slate-800/50" : "bg-slate-50"} relative`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-400">
              Get answers to common questions about our digital risk management solutions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index} className="faq-item">
                <CollapsibleTrigger
                  className={`flex w-full items-center justify-between p-6 text-left ${isDark ? "bg-slate-800 hover:bg-slate-700" : "bg-white hover:bg-slate-50"} rounded-lg transition-colors magnetic`}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 transition-transform ui-open:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className={`p-6 ${isDark ? "bg-slate-800/50" : "bg-slate-50"} rounded-b-lg`}>
                  <p className="text-slate-400">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Ready to secure your organization? Contact our digital risk management experts today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-card">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 animate-card magnetic">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-400">contact@atheniantech.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 animate-card magnetic">
                  <Phone className="h-6 w-6 text-cyan-400" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-slate-400">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 animate-card magnetic">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-slate-400">123 Digital Security Blvd, Tech City, TC 12345</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-card">
              <Card
                className={`${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} p-6 magnetic`}
              >
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>We'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="magnetic" />
                    <Input placeholder="Last Name" className="magnetic" />
                  </div>
                  <Input placeholder="Email Address" type="email" className="magnetic" />
                  <Input placeholder="Company" className="magnetic" />
                  <Input placeholder="Phone Number" type="tel" className="magnetic" />
                  <Textarea placeholder="How can we help you?" rows={4} className="magnetic" />
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 magnetic">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Info Button with Dialog */}
      <div className="fixed bottom-8 right-8 z-50">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="rounded-full h-14 w-14 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 shadow-lg"
            >
              <Info className="h-6 w-6 text-white" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[900px] bg-black/90 border-cyan-500/50">
            <DialogHeader>
              <DialogTitle className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Athenian Tech
              </DialogTitle>
              <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div>
                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Secure Your Digital Future
                </h2>
                <p className="text-xl text-slate-400 mb-6">
                  Digital Risk Management Company providing AI & ML powered technology solutions to protect Digital
                  Identity for businesses
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3">
                    Get Protected Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Cybersecurity"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Data Security"
                className="rounded-lg h-[150px] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Network Security"
                className="rounded-lg h-[150px] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="AI Security"
                className="rounded-lg h-[150px] object-cover"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Footer */}
      <footer
        className={`py-12 ${isDark ? "bg-slate-900 border-slate-800" : "bg-slate-100 border-slate-200"} border-t relative`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold">Athenian Tech</span>
              </div>
              <p className="text-slate-400 mb-4">
                Protecting your digital future with advanced AI-powered cybersecurity solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Athena Platform
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Thunder Bolt
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Prime Intelligence
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Digital Risk Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Identity Protection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Threat Intelligence
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`mt-8 pt-8 ${isDark ? "border-slate-800" : "border-slate-200"} border-t text-center text-slate-400`}
          >
            <p>&copy; {new Date().getFullYear()} Athenian Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

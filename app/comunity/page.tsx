'use client'
import Image from "next/image";
import { useState, useEffect, useRef   } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {  useScroll, useSpring } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { 
  faJs, 
  faPython, 
  faReact, 
  faNode, 
  faHtml5, 
  faCss3, 
  faGitAlt, 
  faGithub, 
  faAws, 
  faDocker, 
  faJava
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { FaAward, FaTrophy, FaMedal, FaCode, FaLaptopCode, FaLanguage, FaDatabase } from 'react-icons/fa';
import { faUsers, faCodeBranch, faHandshake } from '@fortawesome/free-solid-svg-icons';
import GradientText from "../components/GradientText/GradientText";
import { faLaptopCode, faWrench, faServer, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FaArrowUp, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { ReactElement } from "react";
import React from "react";
import { IconType } from 'react-icons'; // Penting!


export default function ExperiencePage() {

  type SocialMedia = {
    icon: IconType; // Tipe untuk komponen React // Tipe untuk komponen React
    color: string;
    link: string;
  };

  const socialMedias: SocialMedia[] = [
    { 
      icon: FaLinkedin, 
      color: "#0A66C2", 
      link: "https://www.linkedin.com/in/satria-mika-33240733a/" 
    },
    { 
      icon: FaWhatsapp, 
      color: "#1DA1F2", 
      link: "https://wa.me/6281459068817" 
    },
    { 
      icon: FaInstagram, 
      color: "#E1306C", 
      link: "https://www.instagram.com/satriamika_/" 
    },
  ];

  const [showScroll, setShowScroll] = useState(false);
    
      const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
          setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
          setShowScroll(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => window.removeEventListener("scroll", checkScrollTop);
      }, [showScroll]);
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
  
  const experiences = [
    {
      title: "1st Place OSN LSC English",
      company: "National Science Olympiad",
      period: "2025",
      description: "Achieved first place in the prestigious OSN LSC English competition, showcasing excellence in linguistic analysis, critical thinking, and persuasive communication.",
      icon: FaTrophy,  // Menggunakan ikon piala untuk lebih mencerminkan kemenangan
      label: "Champion"
    },
    {
      title: "3rd Place OSN LSC Mathematics",
      company: "National Science Olympiad",
      period: "2025",
      description: "Achieved third place in the OSN LSC Mathematics competition, showcasing strong analytical skills, logical reasoning, and problem-solving expertise.",
      icon: FaAward,  // Menggunakan ikon penghargaan untuk menonjolkan pencapaian
      label: "Bronze"
    },    
    {
      title: "Gold Medalist - OSN LSC Physics",
      company: "National Science Olympiad",
      period: "2025",
      description: "Awarded the gold medal in the OSN LSC Physics competition for outstanding problem-solving, theoretical mastery, and experimental analysis in physics.",
      icon: FaMedal,  // Menggunakan ikon medali untuk menonjolkan pencapaian
      label: "Gold"
    },
    {
      title: "Gold Medalist - SSN Informatics",
      company: "National Science Week",
      period: "2025",
      description: "Achieved the gold medal in SSN Informatics for excellence in algorithmic problem-solving, competitive programming, and software development.",
      icon: FaMedal,  // Menggunakan ikon medali emas
      label: "Gold"
    },
    {
      title: "Participant - FITCOM 2.0 Website Programming ",
      company: "Faculty of Informatics Technology Competition",
      period: "2024",
      description: "Competed in the prestigious FITCOM 2.0 website programming competition, showcasing skills in web development, problem-solving, and UI/UX design.",
      icon: FaCode,  // Menggunakan ikon coding untuk mencerminkan bidang lomba
      label: "Participant"
    },
    {
      title: "Participant - OPSILON Informatics Olympiad",
      company: "OPSILON",
      period: "2024",
      description: "Competed in the OPSILON Informatics Olympiad, solving complex algorithmic challenges and demonstrating strong computational thinking skills.",
      icon: FaLaptopCode,  // Menggunakan ikon yang relevan dengan coding/informatika
      label: "Participant"
    },
    {
      title: "JLPT Participant - Japanese Proficiency Test 2024",
      company: "Japan Foundation & JEES",
      period: "2024",
      description: "Took the Japanese-Language Proficiency Test (JLPT) in 2024 to assess and improve Japanese language skills, focusing on grammar, reading, and listening comprehension.",
      icon: FaLanguage,  // Menggunakan ikon bahasa untuk mencerminkan JLPT
      label: "JLPT"
    },
    {
      title: "Web Maintenance Intern",
      company: "CV Purnama Kreatifa",
      period: "2024",
      description: "Maintained and optimized financial web applications using PostgreSQL, ensuring system stability, performance, and data integrity.",
      icon: FaDatabase,  // Menggunakan ikon database untuk mencerminkan PostgreSQL
      label: "Internship"
    },                    
  ];

  const communityStats = [
    { icon: faUsers, value: "500+", label: "Active Members" },
    { icon: faCodeBranch, value: "120+", label: "Projects Created" },
    { icon: faHandshake, value: "50+", label: "Collaborations" }
  ];
  
  const communityLink = "https://chat.whatsapp.com/JL0KriPoNCC8xsnRUNLEs0";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [workDropdownOpen, setWorkDropdownOpen] = useState(false); // <-- Tambahkan ini
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    
  const skills = [
    { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
    { name: "Python", icon: faPython, color: "#3776AB" },
    { name: "React", icon: faReact, color: "#61DAFB" },
    { name: "Node.js", icon: faNode, color: "#339933" },
    { name: "HTML5", icon: faHtml5, color: "#E34F26" },
    { name: "CSS3", icon: faCss3, color: "#1572B6" },
    { name: "Git", icon: faGitAlt, color: "#F05032" },
    { name: "Github", icon: faGithub, color: "#fff" },
    { name: "Docker", icon: faDocker, color: "#2496ED" },
    { name: "AWS", icon: faAws, color: "#fff" },
    { name: "Database", icon: faDatabase, color: "#00758F" },
    { name: "Java", icon: faJava, color: "#CB3837" }
  ];
  
    const nextSlide = () => {
      setActiveSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setActiveSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };
    
    useEffect(() => {
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollY = window.scrollY;
        
        const progress = (scrollY / (documentHeight - windowHeight)) * 100;
        setScrollProgress(progress);
      };
    
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    type NavigationItem = 
    | { 
        name: string; 
        href: string; 
      }
    | { 
        name: string;
        subItems: {
          name: string;
          href: string;
        }[];
      };

      
  
    const navigationItems: NavigationItem[] = [
      { name: 'Home', href: '/' },
      { 
        name: 'More',
        subItems: [
          { name: 'Experience', href: '/experience' },
          { name: 'Community', href: '/comunity' },
          { name: 'Contact', href: '/contact' }
        ]
      },
    ];
  
  
    const [isInView, setIsInView] = useState(false);
    const projectsRef = useRef<HTMLDivElement>(null);
  
    
  
    const TestimonialCard = ({ testimonial, reverse }: { testimonial: any, reverse?: boolean }) => (
      <div className="inline-flex flex-shrink-0">
        <div className="relative p-4 md:p-5 rounded-xl bg-gradient-to-br from-[#19222D] to-[#1A2736] border border-[#C6F10E]/20 hover:border-[#C6F10E]/40 transition-all duration-300 w-[280px] md:w-[320px] mx-2">
          <div className="flex mb-3 space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < testimonial.rating ? 'text-[#C6F10E]' : 'text-gray-600'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
    
          {/* Tambahkan kelas "break-words" agar teks dapat membungkus */}
          <p className="text-gray-300 mb-3 text-xs md:text-sm leading-relaxed break-words">
            "{testimonial.text}"
          </p>
    
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C6F10E] to-[#40ffaa]" />
            </div>
            <div className="ml-2">
              <p className="text-xs font-semibold text-[#C6F10E]">{testimonial.author}</p>
              <p className="text-[10px] text-gray-400">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    );
    
    
    // Data testimonial
    const testimonials = [
      {
        rating: 5,
        text: `Layanan cepat dan responsif`,
        author: "Andi Saputra",
        role: "CEO PT. Sukses Makmur"
      },
      {
        rating: 5,
        text: `Pelayanan profesional menambah nilai.`,
        author: "Rina Wijaya",
        role: "Manajer Pemasaran CV. Makmur Jaya"
      },
      {
        rating: 4,
        text: `Pengalaman belanja yang seru`,
        author: "Budi Santoso",
        role: "Pengusaha"
      },
      {
        rating: 5,
        text: `saya merasa nyaman pakai layanan ini.`,
        author: "Sari Puspita",
        role: "Ibu Rumah Tangga"
      },
      {
        rating: 4,
        text: `Solusi tepat guna dengan inovasi.`,
        author: "Dewi Lestari",
        role: "Konsultan Bisnis"
      },
      {
        rating: 5,
        text: `Profesional dan efisien`,
        author: "Agus Setiawan",
        role: "Direktur Operasional PT. Prima Jaya"
      },
      {
        rating: 5,
        text: `Layanan ramah dengan respon cepat.`,
        author: "Maya Kartika",
        role: "Ibu Rumah Tangga"
      },
      {
        rating: 5,
        text: `bikin mudah proses bisnis saya.`,
        author: "Rahmat Hidayat",
        role: "Wirausahawan"
      },
      {
        rating: 4,
        text: `pelayanan cepat dan efisien.`,
        author: "Linda Permata",
        role: "Pakar Digital Marketing"
      }
    ];
    
    
    const projects = ['Brainraid Ai', 'My First Portfolio', 'Waves Beta', 'AI Startup Beta', 'Shop Co Beta'];
  const projectImages = [
    '/assets/images/brainraid (1).png', // Project 1
    '/assets/images/porto1.png', // Project 2
    '/assets/images/waves.png', // Project 3
    '/assets/images/ai.png', // Project 4
    '/assets/images/shop.png'  // Project 5
  ];
  const projectLinks = [
    'https://brainraid.netlify.app/',  // Link untuk Project 1
    'https://satria-mika.netlify.app/',     // Link untuk Project 2
    'https://satriamikaanjay.github.io/waves.beta.com/',     // Link untuk Project 3
    'https://satriamikaanjay.github.io/aistartup.co.id.beta/',     // Link untuk Project 4
    'https://https://satriamikaanjay.github.io/shop.co.id.beta/'      // Link untuk Project 5
  ];
    
    
  const faqs = [
    {
      question: "What's your typical response time?",
      answer: "I usually respond within 24 hours during workdays. For urgent requests, feel free to ping me multiple times."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, I provide maintenance packages with different tiers depending on the project needs and complexity."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "My core stack includes React, Node.js, Python, and cloud platforms. Always expanding based on project needs."
    },
    // Add more FAQs as needed
  ];
    
    
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -100px 0px'
        }
      );
  
      if (projectsRef.current) {
        observer.observe(projectsRef.current);
      }
  
      return () => {
        if (projectsRef.current) {
          observer.unobserve(projectsRef.current);
        }
      };
    }, []);
  
    useEffect(() => {
      if (isInView) {
        // Logic tambahan jika diperlukan saat section muncul
      }
    }, [isInView]);
  
    useEffect(() => {
      const handleScroll = (e: Event) => {
        e.preventDefault();
        const target = e.target as HTMLAnchorElement;
        const id = target.getAttribute('href')?.replace('#', '');
        const element = document.getElementById(id || '');
        element?.scrollIntoView({ behavior: 'smooth' });
      };
    
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleScroll);
      });
    
      return () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.removeEventListener('click', handleScroll);
        });
      };
    }, []);
  

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      <div className="fixed left-[50px] top-0 h-screen w-[2px] bg-gray-800 z-40 hidden md:block">
      <div 
    className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#C6F10E] to-[#40ffaa] transition-all duration-300"
    style={{ height: `${scrollProgress}%` }}
  >
    <div 
    className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#C6F10E] to-[#40ffaa] transition-all duration-300 shadow-[0_0_15px_rgba(198,241,14,0.5)]"
    style={{ height: `${scrollProgress}%` }}
  ></div>
  </div>
  
</div>
      <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 120,
              damping: 18,
              delay: 0.2
            }}
            className="fixed top-0 left-0 w-full backdrop-blur-lg border-b border-[#C6F10E]/30 bg-[#0d1218]/95 z-50 shadow-2xl hover:shadow-[0_0_40px_rgba(198,241,14,0.15)] transition-all duration-500"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                {/* Logo */}
                <motion.a 
                  href="#home"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-2xl font-bold bg-gradient-to-r from-[#C6F10E] via-white to-[#C6F10E] bg-clip-text text-transparent bg-[length:200%_auto] hover:bg-right transition-all duration-500"
                >
                  Satria Mika
                </motion.a>
      
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navigationItems.map((item) => (
                      <div key={item.name} className="relative group">
                        {'subItems' in item ? (
                          <>
                            {/* Desktop: Tampilkan semua subItems langsung */}
                            <div className="flex space-x-6">
                              {item.subItems.map((subItem) => (
                                <motion.a
                                  key={subItem.name}
                                  href={subItem.href}
                                  whileHover={{ y: -2 }}
                                  className="px-4 py-2 text-white/90 hover:text-[#C6F10E] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C6F10E] hover:after:w-full after:transition-all after:duration-300"
                                >
                                  {subItem.name}
                                </motion.a>
                              ))}
                            </div>
                          </>
                        ) : (
                          <motion.a
                            href={item.href}
                            whileHover={{ y: -2 }}
                            className="px-4 py-2 text-white/90 hover:text-[#C6F10E] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C6F10E] hover:after:w-full after:transition-all after:duration-300"
                          >
                            {item.name}
                          </motion.a>
                        )}
                      </div>
                  ))}
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#C6F10E] to-[#9cbf0b] rounded-lg text-black font-semibold hover:shadow-[0_0_25px_rgba(198,241,14,0.5)] transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10"><a href="/contact">Get in Touch</a></span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C6F10E]/0 via-[#C6F10E]/30 to-[#C6F10E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 -translate-x-full group-hover:translate-x-full" />
                  </motion.button>
                </div>
      
                {/* Mobile Menu Button */}
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="md:hidden p-3 relative group"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <div className="relative w-8 h-6">
                    <motion.span
                      animate={isMenuOpen ? "open" : "closed"}
                      variants={{
                        closed: { top: 0, rotate: 0 },
                        open: { top: "50%", rotate: 45, y: "-50%" }
                      }}
                      className="absolute h-[3px] w-full bg-white rounded-full"
                    />
                    <motion.span
                      animate={isMenuOpen ? "open" : "closed"}
                      variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                      }}
                      className="absolute top-1/2 h-[3px] w-full bg-white rounded-full -translate-y-1/2"
                    />
                    <motion.span
                      animate={isMenuOpen ? "open" : "closed"}
                      variants={{
                        closed: { bottom: 0, rotate: 0 },
                        open: { bottom: "50%", rotate: -45, y: "50%" }
                      }}
                      className="absolute h-[3px] w-full bg-white rounded-full"
                    />
                  </div>
                </motion.button>
              </div>
      
      
          {/* Mobile Menu */}
          <motion.div 
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 1, maxHeight: "1000px" },
              closed: { opacity: 0, maxHeight: 0 }
            }}
            className="md:hidden absolute top-20 inset-x-0 mx-4 overflow-hidden"
          >
            <div className="bg-[#0d1218] border border-[#C6F10E]/30 rounded-xl shadow-2xl backdrop-blur-xl">
                    <div className="py-4 space-y-1">
                      {navigationItems.map((item) => (
                        <div key={item.name} className="border-b border-white/5 last:border-0">
                          {'subItems' in item ? (
                            <>
                              <motion.button 
                                onClick={() => setWorkDropdownOpen(!workDropdownOpen)}
                                className="w-full px-6 py-4 text-left text-white/90 flex items-center justify-between"
                              >
                                <span>{item.name}</span>
                                <FiChevronDown className={`transform transition-transform ${workDropdownOpen ? 'rotate-180' : ''}`} />
                              </motion.button>
                              
                              <motion.div 
                                initial={false}
                                animate={workDropdownOpen ? "open" : "closed"}
                                variants={{
                                  open: { opacity: 1, height: "auto" },
                                  closed: { opacity: 0, height: 0 }
                                }}
                                className="overflow-hidden"
                              >
                                <div className="pl-8 pr-4 pb-2 space-y-2">
                                  {item.subItems.map((subItem) => (
                                    <motion.a
                                      key={subItem.name}
                                      href={subItem.href}
                                      onClick={() => setIsMenuOpen(false)}
                                      className="block px-4 py-3 text-white/80 hover:bg-[#C6F10E]/10 rounded-lg transition-colors"
                                    >
                                      {subItem.name}
                                    </motion.a>
                                  ))}
                                </div>
                              </motion.div>
                            </>
                          ) : (
                            <motion.a
                              href={item.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-6 py-4 text-white/90 hover:bg-[#C6F10E]/10 transition-colors"
                            >
                              {item.name}
                            </motion.a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.nav>
            <div className="container mx-auto px-4 py-20">
            <motion.section 
  id="community"
  className="container mx-auto px-4 py-20 relative overflow-hidden"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
>
  <div id="comunity" className="max-w-7xl mx-auto">
    <div className="mb-16 text-center relative">
      <GradientText
        colors={["#C6F10E", "#40ffaa", "#C6F10E"]}
        animationSpeed={15}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        Teman Coding
      </GradientText>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
        More than a community - Your digital solution partner
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Founder Section */}
      <div className="space-y-8">
        <motion.div 
          className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#19222D] to-[#1A2736] border border-[#C6F10E]/20 hover:border-[#C6F10E]/40 transition-all"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-start gap-6">
            <div>
              <h3 className="text-2xl font-bold text-[#C6F10E]">Satria Mika Narendra</h3>
              <p className="text-gray-400 mt-1">Founder</p>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Full-stack developer with 3 years experience in web development and 
                AI solutions. Founded Teman Coding to bridge the gap between learning 
                and real-world implementation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-[#C6F10E]">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: faLaptopCode,
                title: "Web Development",
                desc: "Build modern and robust websites and web applications",
              },
              {
                icon: faWrench,
                title: "Maintenance Web",
                desc: "Regular updates, bug fixes, and performance optimization",
              },
              {
                icon: faServer,
                title: "Hosting Web",
                desc: "Reliable and scalable hosting solutions",
              },
              {
                icon: faPalette,
                title: "Web Design",
                desc: "Responsive, user-friendly, and visually appealing design",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#C6F10E]/40 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <FontAwesomeIcon 
                  icon={service.icon} 
                  className="h-8 w-8 mb-4 text-[#40ffaa]" 
                />
                <h4 className="text-xl font-semibold text-white">{service.title}</h4>
                <p className="text-gray-400 mt-2 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Community CTA */}
      <div className="sticky top-24 space-y-8">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#19222D] to-[#1A2736] border border-[#C6F10E]/20">
          <h3 className="text-3xl font-bold text-[#C6F10E] mb-4">Why Choose Us?</h3>
          <ul className="space-y-4 text-gray-300">
          <li className="flex items-center gap-3">
  <div className="w-2 h-2 bg-[#40ffaa] rounded-full" />
  Affordable pricing
</li>
<li className="flex items-center gap-3">
  <div className="w-2 h-2 bg-[#40ffaa] rounded-full" />
  100% trustworthy
</li>
<li className="flex items-center gap-3">
  <div className="w-2 h-2 bg-[#40ffaa] rounded-full" />
  Developed by professional programmers
</li>

          </ul>
          
          <motion.div
            className="mt-8 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href={communityLink}
              target="_blank"
              rel="noopener"
              className="inline-block w-full text-center py-4 px-8 bg-gradient-to-r from-[#C6F10E] to-[#40ffaa] text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(198,241,14,0.4)] transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Join Community
            </motion.a>
            
            <div className="relative text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700" />
              </div>
              <span className="relative px-4 bg-[#19222D] text-gray-400 text-sm">
                or
              </span>
            </div>

            <motion.a
              href="#contact"
              className="inline-block w-full text-center py-4 px-8 border border-[#C6F10E] text-[#C6F10E] font-bold rounded-lg hover:bg-[#C6F10E]/10 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Hire Our Services
            </motion.a>
          </motion.div>
        </div>

        {/* Achievement Badges */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "120+", label: "Projects Done" },
            { value: "98%", label: "Satisfaction" }
          ].map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/5 backdrop-blur-lg">
              <p className="text-2xl font-bold text-[#C6F10E]">{stat.value}</p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C6F10E]/10 blur-3xl rounded-full -z-10" />
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#40ffaa]/10 blur-3xl rounded-full -z-10" />
</motion.section>

</div>
<motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-b from-[#19222D] to-[#1A2736] border-t border-[#C6F10E]/20 mt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#C6F10E]/10 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#40ffaa]/10 blur-3xl rounded-full -z-10" />

      <div className="container mx-auto px-4 py-12">
        <AnimatePresence>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          >
            {/* About Section */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#C6F10E] to-[#40ffaa] bg-clip-text text-transparent">
                Satria Mika
              </h3>
              <p className="text-gray-400">
                Fullstack Developer & AI Enthusiast building the future with code
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-[#C6F10E]">Explore</h4>
              <ul className="space-y-2">
                {['Projects', 'Skills', 'Testimoni', 'FaQ'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-[#40ffaa] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-[#C6F10E]">Connect</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400 hover:text-[#40ffaa] transition-colors">
                  <FiMail className="flex-shrink-0" />
                  <a href="satrialinux@gmail.com">satrialinux@gmail.com</a>
                </div>
                <div className="flex items-center gap-2 text-gray-400 hover:text-[#40ffaa] transition-colors">
                  <FaGithub className="flex-shrink-0" />
                  <a href="https://github.com/satriamikaanjay" target="_blank" rel="noopener">GitHub</a>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-[#C6F10E]">Follow Me</h4>
            
              <div className="flex space-x-4">
                {/* HANYA SATU .map() */}
                {socialMedias.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/5 hover:bg-[#C6F10E]/10 transition-all"
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Render ikon langsung */}
                    <social.icon 
                      className="h-6 w-6" 
                      style={{ color: social.color }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-[#C6F10E]/20 pt-8 text-center"
        >
          <div className="marquee-container overflow-hidden">
            <motion.div
              className="marquee-content text-gray-400 text-sm"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {Array(3).fill("✨ Lets Code With Me • Built with Next.js • Powered by Satria ✨").join(" • ")}
            </motion.div>
          </div>
          
          <p className="mt-4 text-gray-500 text-sm">
            © {new Date().getFullYear()} Satria Mika. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-br from-[#C6F10E] to-[#40ffaa] text-black shadow-lg hover:shadow-[0_0_20px_rgba(198,241,14,0.5)] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.footer>
    </div>
  );
}
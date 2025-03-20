'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiChevronDown } from "react-icons/fi";
import { useScroll, useSpring, motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { 
  faJs, faPython, faReact, faNode, faHtml5, faCss3, faGitAlt, faAws, faDocker, faJava 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faUsers, faCodeBranch, faHandshake, faLaptopCode, faWrench, faServer, faPalette,
  faEnvelope, faPhone, faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import GradientText from "../components/GradientText/GradientText";
import { FaBriefcase, FaGraduationCap, FaAward, FaTrophy, FaMedal, FaCode, FaLaptopCode as FaLaptop, FaLanguage } from 'react-icons/fa';
import { FaArrowUp, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { ReactElement } from "react";
import React from "react";
import { IconType } from 'react-icons'; // Penting!


export default function ExperiencePage() {

    type SocialMedia = {
        icon: IconType; // Tipe untuk komponen React
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Clear form
      setName('');
      setEmail('');
      setMessage('');
      
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully!'
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      {/* Scroll Indicator */}
      <div className="fixed left-[50px] top-0 h-screen w-[2px] bg-gray-800 z-40 hidden md:block">
        <div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#C6F10E] to-[#40ffaa] transition-all duration-300"
          style={{ height: `${scrollProgress}%` }}
        >
          <div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#C6F10E] to-[#40ffaa] transition-all duration-300 shadow-[0_0_15px_rgba(198,241,14,0.5)]"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* Navbar */}
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
                    <span className="relative z-10"><a href="/assets/files/Resume satria.pdf">Download CV</a></span>
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

      {/* Main Content */}
      <div id="contact" className="container mx-auto px-4 py-20">
        <motion.section 
          id="contact"
          className="container mx-auto px-4 py-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center relative">
              <GradientText
                colors={["#C6F10E", "#40ffaa", "#C6F10E"]}
                animationSpeed={15}
                className="text-5xl md:text-7xl font-bold mb-4"
              >
                Get in Touch
              </GradientText>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                Let's discuss your project or just say hello!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.form 
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="space-y-4">
              <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
              >
                <label 
                  htmlFor="name" 
                  className="block mb-2 bg-gradient-to-r from-[#C6F10E] to-[#40ffaa] bg-clip-text text-transparent font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#C6F10E] focus:ring-2 focus:ring-[#C6F10E]/30 transition-all"
                  required
                />
              </motion.div>

              <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
              >
                <label 
                  htmlFor="email" 
                  className="block mb-2 bg-gradient-to-r from-[#C6F10E] to-[#40ffaa] bg-clip-text text-transparent font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#C6F10E] focus:ring-2 focus:ring-[#C6F10E]/30 transition-all"
                  required
                />
              </motion.div>

              <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
              >
                <label 
                  htmlFor="message" 
                  className="block mb-2 bg-gradient-to-r from-[#C6F10E] to-[#40ffaa] bg-clip-text text-transparent font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#C6F10E] focus:ring-2 focus:ring-[#C6F10E]/30 transition-all"
                  required
                />
              </motion.div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-[#C6F10E] to-[#40ffaa] text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(198,241,14,0.4)] transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C6F10E]/0 via-[#C6F10E]/30 to-[#C6F10E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 -translate-x-full group-hover:translate-x-full" />
            </motion.button>

              </motion.form>

              {/* Contact Info */}
              <motion.div 
                className="p-8 rounded-2xl bg-gradient-to-br from-[#19222D] to-[#1A2736] border border-[#C6F10E]/20 h-fit sticky top-24"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#C6F10E]">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <FontAwesomeIcon 
                      icon={faEnvelope} 
                      className="h-6 w-6 text-[#40ffaa]" 
                    />
                    <div>
                      <p className="text-gray-400">Email</p>
                      <a href="mailto:hello@example.com" className="text-white hover:text-[#C6F10E] transition-colors">
                        satriamikanarendra@mail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <FontAwesomeIcon 
                      icon={faPhone} 
                      className="h-6 w-6 text-[#40ffaa]" 
                    />
                    <div>
                      <p className="text-gray-400">Phone</p>
                      <a href="tel:+628123456789" className="text-white hover:text-[#C6F10E] transition-colors">
                        +62 812 3456 7890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-bold text-[#C6F10E] mb-6">Let's Connect</h3>
                <div className="flex gap-6">
                  {[
                    { icon: faGithub, url: 'https://github.com' },
                    { icon: faLinkedin, url: 'https://linkedin.com' },
                    { icon: faWhatsapp, url: 'https://wa.me/628123456789' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/5 hover:bg-[#C6F10E]/10 transition-colors"
                      whileHover={{ y: -3 }}
                    >
                      <FontAwesomeIcon 
                        icon={social.icon} 
                        className="h-6 w-6 text-[#40ffaa]" 
                      />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-bold text-[#C6F10E] mb-4">Based in</h3>
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon 
                    icon={faMapMarkerAlt} 
                    className="h-6 w-6 text-[#40ffaa]" 
                  />
                  <p className="text-white">
                    Jakarta, Indonesia<br />
                    <span className="text-gray-400">UTC+7</span>
                  </p>
                </div>
              </div>
            </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/3 left-0 w-64 h-64 bg-[#C6F10E]/10 blur-3xl rounded-full -z-10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#40ffaa]/10 blur-3xl rounded-full -z-10" />
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
                            {['Contact'].map((item) => (
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
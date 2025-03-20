import Image from "next/image";
'use client'
import { useState, useEffect, useRef   } from "react";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import GradientText from "./components/GradientText/GradientText";
import TiltedCard from "./components/TiltedCard/TiltedCard";
import { motion, AnimatePresence } from "framer-motion";
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
import { FaArrowUp, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Tooltip } from "react-tooltip";



export default function Home() {
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
    { name: 'Home', href: '#home' },
    { 
      name: 'More',
      subItems: [
        { name: 'Experience', href: '/experience' },
        { name: 'Community', href: '/comunity' },
        { name: 'Contact', href: '/contact' }
      ]
    },
  ];

  type SocialMedia = {
    icon: React.ComponentType;
    color: string;
    link: string; // Tambahkan properti link dengan tipe string
  };


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
    question: "Are you the founder of Teman Coding?",
    answer: "Yes, that's me."
  },
  {
    question: "What is your favorite programming language?",
    answer: "Of course, JavaScript and Python."
  },
  {
    question: "Are you currently working?",
    answer: "I'm still in 12th grade."
  },
  {
    question: "How many years have you been learning programming?",
    answer: "About 3 years."
  }
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

      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full z-0">
        
      </div>
      
      <div id="home" className="container mx-auto h-screen px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full items-center">
          {/* Left Column */}
          <div className="md:col-span-6 flex items-center">
            <div className="flex flex-col gap-4">
              <AnimatedContent 
                distance={150}
                direction="horizontal"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <div className="flex items-center gap-2">
                  <h1 className="text-xl md:text-2xl text-white font-bold">
                    Hello I am a
                  </h1>
                  <RotatingText 
                    texts={[
                      "Web Designer", 
                      "Web Developer", 
                      "Editor Video", 
                      "AI Developer"
                    ]}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-xl md:text-2xl font-bold inline-flex transition-all"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div>
              </AnimatedContent>
              <div className="flex flex-col items-start">
                <SplitText 
                  text="I'm Satria Mika"
                  className="text-4xl md:text-6xl font-semibold text-center md:text-left"
                  delay={50}
                  animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  threshold={0.2}
                  rootMargin="-50px"
                />
                <SplitText 
                  text="Lets Code WIth Me"
                  className="text-4xl md:text-6xl font-semibold text-start text-[#C6F10E]"
                  delay={75}
                  animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  threshold={0.2}
                  rootMargin="-50px"
                />
              </div>
              <BlurText 
                text="I’m a Fullstack Developer, Data Scientist, and AI Developer from Indonesia with 3 years of experience. I’ve worked on projects from web development to AI.
                Founder of Teman Coding, a community for programmers to learn and grow. Always eager to explore new tech and tackle challenges!"
                delay={75}
                animateBy="words"
                direction="top"
                className="text-base md:text-xl mb-8"
              />





<motion.div
  initial={{ opacity: 0, y: 20, scale: 0.8 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 20,
    delay: 0.8 // Sesuaikan delay sesuai urutan animasi
  }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="relative overflow-hidden group"
>
<GradientText
  colors={["#40ffaa", "#C6F10E", "#40ffaa", "#C6F10E", "#40ffaa"]}
  animationSpeed={10}
  showBorder={false}
  className="px-4 md:px-8 py-3 md:py-6 rounded-lg border cursor-pointer relative z-10 transition-all duration-300"
>
  <motion.span
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1.2 }}
    className="flex items-center gap-2"
  >
    <motion.svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
      <FontAwesomeIcon icon={faDownload} className="h-6 w-6 text-[#C6F10E]" />
    </motion.svg>
    <a href="/assets/files/Resume satria.pdf">Download Resume</a>
  </motion.span>
</GradientText>


  {/* Animated Background Effect */}
  
</motion.div>
            </div>
          </div>
          {/* Kolom Kanan */}
          <motion.div 
  initial={{ x: 100, opacity: 0, scale: 0.8 }}
  animate={{ x: 0, opacity: 1, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 80,
    damping: 20,
    delay: 0.5
  }}
  className="md:col-span-6 flex items-center justify-center mt-0"
>
  <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] transform hover:scale-105 transition-transform duration-300">
    <TiltedCard
      imageSrc="/assets/images/foto.jpg"
      altText="Satria Mika Narendra"
      captionText="Satria Mika Narendra"
      containerHeight="100%"
      containerWidth="100%"
      imageHeight="100%"
      imageWidth="100%"
      rotateAmplitude={12}
      scaleOnHover={1.15}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <div className="p-4 bg-black/80 backdrop-blur-sm rounded-lg">
          <p className="text-[#C6F10E] font-bold text-lg">
            Fullstack Web Developer
          </p>
        </div>
      }
    />
  </div>
  </motion.div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4">
      
      </div>

      <motion.section 
        id="testimoni"
        className="container mx-auto px-4 py-20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <div className="w-full mx-auto">
  <div className="mb-16 text-center relative">
      <GradientText
        colors={["#C6F10E", "#40ffaa", "#C6F10E"]}
        animationSpeed={15}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        ‎ 
      </GradientText>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
        What people say about working with me
      </p>
    </div>

    {/* Testimonial Marquee */}
    <div className="relative overflow-hidden space-y-8">
      {/* First Row */}
      <div className="flex w-full overflow-hidden group">
        <div className="flex animate-marquee-infinite whitespace-nowrap">
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="flex w-full overflow-hidden group">
        <div className="flex animate-marquee-infinite-reverse whitespace-nowrap">
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} reverse />
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Global CSS for animations */}
  <style jsx global>{`
   @keyframes marquee-infinite {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-70%); }
}

@keyframes marquee-infinite-reverse {
  0% { transform: translateX(-70%); }
  100% { transform: translateX(0%); }
}

.animate-marquee-infinite {
  animation: marquee-infinite 70s linear infinite alternate;
}

.animate-marquee-infinite-reverse {
  animation: marquee-infinite-reverse 70s linear infinite alternate;
}



    @media (max-width: 768px) {
      .animate-marquee-infinite,
      .animate-marquee-infinite-reverse {
        animation-duration: 40s;
      }
    }
  `}</style>
      </motion.section>
      <motion.section 
        id="projects" 
        ref={projectsRef}
        className="container mx-auto px-4 py-20 relative overflow-hidden"
        initial={{ x: '-10vw', scale: 0.8, opacity: 0 }}
        animate={isInView ? { x: 0, scale: 1, opacity: 1 } : {}}
      >
        <div className={`max-w-full mx-auto transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#C6F10E] mb-12 text-center">
            Recent Projects
          </h2>

          <div className="relative h-[600px] md:h-[550px]">
            <AnimatePresence initial={false}>
              {projects.map((project, index) => (
                activeSlide === index && (
                  <motion.div
                    key={project}
                    initial={{ 
                      opacity: isInView ? 0 : 1,
                      x: isInView ? (index > activeSlide ? 100 : -100) : 0 
                    }}
                    animate={{ 
                      opacity: 1,
                      x: 0,
                      transition: { 
                        delay: isInView ? 0.2 : 0,
                        duration: 0.5 
                      }
                    }}
                    className="absolute inset-0 w-full md:w-2/3 lg:w-1/2 mx-auto"
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/10 hover:border-[#C6F10E] transition-all h-full mx-4 shadow-xl">
  <div className="project-image h-60 md:h-72 bg-gray-700 rounded-xl mb-6 overflow-hidden">
    <img
      src={projectImages[index]}
      alt={`Project ${project}`}
      className="w-full h-full object-cover"
    />
  </div>
  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
    {project}
  </h3>
  <p className="text-gray-400 text-lg md:text-xl">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </p>
  <button 
    onClick={() => window.open(projectLinks[index], '_blank')}
    className="project-button text-white px-4 py-2 rounded mt-4"
  >
    Lihat Detail Project
  </button>
</div>

                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
<div className="flex justify-center items-center mt-12 gap-6">
  <button
    onClick={prevSlide}
    className="p-3 rounded-full bg-[#C6F10E]/20 hover:bg-[#C6F10E]/30 transition-colors"
  >
    <FiChevronLeft className="w-8 h-8 text-[#C6F10E]" />
  </button>
  
  <div className="flex gap-3">
    {projects.map((_, index) => (
      <button
        key={index}
        onClick={() => setActiveSlide(index)}
        className={`w-4 h-4 rounded-full transition-colors ${
          index === activeSlide ? 'bg-[#C6F10E]' : 'bg-white/20'
        }`}
      />
    ))}
  </div>

  <button
    onClick={nextSlide}
    className="p-3 rounded-full bg-[#C6F10E]/20 hover:bg-[#C6F10E]/30 transition-colors"
  >
    <FiChevronRight className="w-8 h-8 text-[#C6F10E]" />
  </button>
</div>

        </div>
      </motion.section>

      <motion.section 
  id="skills"
  className="container mx-auto px-4 py-20 relative overflow-hidden"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
>
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="mb-16 text-center relative">
      <GradientText
        colors={["#C6F10E", "#40ffaa", "#C6F10E"]}
        animationSpeed={15}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        ‎ 
      </GradientText>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
        Technologies I've mastered and actively use in projects
      </p>
    </div>

    {/* Skills Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: index * 0.05,
            type: "spring",
            stiffness: 120,
            damping: 20
          }}
          viewport={{ once: true }}
          className="group relative p-4 md:p-6 rounded-2xl bg-gradient-to-b from-[#19222D] to-[#1A2736] hover:to-[#223044] transition-all duration-300 shadow-xl hover:shadow-[0_8px_30px_-6px_rgba(198,241,14,0.15)]"
        >
          {/* Hover Border Animation */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C6F10E] to-[#40ffaa] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          </div>

          {/* Icon Container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Floating Icon Animation */}
            <motion.div 
              className="mb-4"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FontAwesomeIcon 
                icon={skill.icon} 
                className="h-14 w-14 md:h-16 md:w-16 transition-all duration-500"
                style={{ 
                  color: skill.color,
                  filter: `drop-shadow(0 4px 12px ${skill.color}30)`
                }}
              />
            </motion.div>

            {/* Skill Name */}
            <span className="text-center text-sm md:text-base font-semibold bg-gradient-to-r from-[#C6F10E] to-[#40ffaa] bg-clip-text text-transparent">
              {skill.name}
            </span>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
            <div className="pattern-dots pattern-gray-500 pattern-size-2 pattern-opacity-50 w-full h-full" />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Section Footer */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-16 text-center border-t border-[#C6F10E]/20 pt-12"
    >
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
        Continuously evolving with the tech landscape • Currently exploring 
        <span className="text-[#C6F10E] mx-2">AI/ML</span> 
        and mastering 
        <span className="text-[#40ffaa] mx-2">Cloud Architecture</span>
      </p>
    </motion.div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#C6F10E]/10 blur-3xl rounded-full -z-10" />
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#40ffaa]/10 blur-3xl rounded-full -z-10" />
</motion.section>



<motion.section 
  id="faq"
  className="container mx-auto px-4 py-20 relative overflow-hidden"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
>
  <div className="max-w-4xl mx-auto">
    <div className="mb-16 text-center relative">
      <GradientText
        colors={["#C6F10E", "#40ffaa", "#C6F10E"]}
        animationSpeed={15}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        FAQs
      </GradientText>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
        Common questions about my services and workflow
      </p>
    </div>

    <div className="space-y-4">
      <AnimatePresence>
        {faqs.map((faq, index) => {
          const [isOpen, setIsOpen] = useState(false)
          
          return (
            <motion.div
              key={index}
              className="rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden"
              layout
              transition={{ duration: 0.2 }}
            >
              <motion.button
                className="w-full p-6 text-left flex justify-between items-center gap-4"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <h3 className="text-lg font-semibold text-[#C6F10E] flex-1">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  className="text-[#40ffaa]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 text-gray-400"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#40ffaa]/10 blur-3xl rounded-full -z-10" />
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C6F10E]/10 blur-3xl rounded-full -z-10" />
</motion.section>

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
  variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
  className="space-y-4"
>
  <h4 className="text-lg font-semibold text-[#C6F10E]">Follow Me</h4>
  <div className="flex space-x-4">
    {[
      { 
        icon: FaLinkedin, 
        color: "#0A66C2", 
        link: "https://www.linkedin.com/in/satria-mika-33240733a/" // Ganti dengan link LinkedIn Anda
      },
      { 
        icon: FaWhatsapp, 
        color: "#1DA1F2", 
        link: "https://wa.me/6281459068817" // Ganti dengan link Twitter Anda
      },
      { 
        icon: FaInstagram, 
        color: "#E1306C", 
        link: "https://www.instagram.com/satriamika_/" // Ganti dengan link Instagram Anda
      },
    ].map((social: SocialMedia, index) => ( // Gunakan tipe SocialMedia
      <motion.a
        key={index}
        href={social.link} // Sekarang TypeScript tidak akan error
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white/5 hover:bg-[#C6F10E]/10 transition-all"
        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.3 }}
      >
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
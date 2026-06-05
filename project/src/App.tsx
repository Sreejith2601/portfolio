import React, { useRef, useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Phone, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Cpu, 
  Smartphone, 
  MapPin, 
  Calendar, 
  Code2, 
  Globe, 
  Settings, 
  ExternalLink,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  Heart,
  Menu,
  X
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_5mas806', 'template_od1pgmm', form.current, 'MlS9wUg7_QFv51_1u')
        .then(() => {
          toast.success('Message sent successfully!');
          form.current?.reset();
        }, () => {
          toast.error('Failed to send message. Please try again.');
        });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-purple-500 selection:text-white">
      <Toaster position="top-right" />
      
      {/* Sticky Navigation Bar */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-purple-100/50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
            Sreejith B
          </h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-base font-medium">
              <li><a href="#about" className="text-slate-600 hover:text-purple-600 transition-colors">About</a></li>
              <li><a href="#experience" className="text-slate-600 hover:text-purple-600 transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-slate-600 hover:text-purple-600 transition-colors">Projects</a></li>
              <li><a href="#education" className="text-slate-600 hover:text-purple-600 transition-colors">Education</a></li>
              <li><a href="#skills" className="text-slate-600 hover:text-purple-600 transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-600"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-purple-100 bg-white px-4 py-4 space-y-2 shadow-inner">
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-purple-50 hover:text-purple-600 font-medium transition-colors"
            >
              About
            </a>
            <a 
              href="#experience" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-purple-50 hover:text-purple-600 font-medium transition-colors"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-purple-50 hover:text-purple-600 font-medium transition-colors"
            >
              Projects
            </a>
            <a 
              href="#education" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-purple-50 hover:text-purple-600 font-medium transition-colors"
            >
              Education
            </a>
            <a 
              href="#skills" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-purple-50 hover:text-purple-600 font-medium transition-colors"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-purple-50 hover:text-purple-600 font-medium transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero / About Section */}
      <section id="about" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between gap-12">
            <div className="lg:w-1/2">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full mb-4">
                Welcome to my Portfolio
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Sreejith B</span>
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-700 mb-6">
                Full Stack & Mobile App Developer
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                I am a passionate Master of Computer Applications (MCA) student at Kumaraguru College of Technology. 
                I specialize in building full-stack web platforms and cross-platform mobile applications, with an interest 
                in integrating Machine Learning. I love designing robust backend services, writing clean and scalable code, 
                and crafting highly responsive, user-friendly frontend experiences.
              </p>
              
              {/* Contact Icons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <a href="mailto:jith2601355@gmail.com" 
                   className="flex items-center text-slate-600 hover:text-purple-600 transition-colors p-3 bg-slate-50 hover:bg-purple-50/50 rounded-xl border border-slate-100 hover:border-purple-200 transition-all duration-300">
                  <Mail className="w-5 h-5 mr-3 text-purple-600" />
                  <span className="text-sm font-medium">jith2601355@gmail.com</span>
                </a>
                <a href="tel:+916369913696" 
                   className="flex items-center text-slate-600 hover:text-purple-600 transition-colors p-3 bg-slate-50 hover:bg-purple-50/50 rounded-xl border border-slate-100 hover:border-purple-200 transition-all duration-300">
                  <Phone className="w-5 h-5 mr-3 text-purple-600" />
                  <span className="text-sm font-medium">+91 6369913696</span>
                </a>
                <a href="https://github.com/Sreejith2601/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center text-slate-600 hover:text-purple-600 transition-colors p-3 bg-slate-50 hover:bg-purple-50/50 rounded-xl border border-slate-100 hover:border-purple-200 transition-all duration-300">
                  <Github className="w-5 h-5 mr-3 text-purple-600" />
                  <span className="text-sm font-medium">SreejithGitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/sreejith-b-dev/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center text-slate-600 hover:text-purple-600 transition-colors p-3 bg-slate-50 hover:bg-purple-50/50 rounded-xl border border-slate-100 hover:border-purple-200 transition-all duration-300">
                  <Linkedin className="w-5 h-5 mr-3 text-purple-600" />
                  <span className="text-sm font-medium">Sreejith_B</span>
                </a>
              </div>
            </div>
            
            {/* Profile Image with Dynamic Effects */}
            <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
              <div className="relative group">
                {/* Glow Background effect */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-2 rounded-2xl">
                  <img 
                    src="/sreee....jpeg" 
                    alt="Sreejith B"
                    className="rounded-xl shadow-md transform group-hover:scale-[1.02] transition-transform duration-300 w-[300px] max-w-full h-auto aspect-[300/320] object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-purple-50/40 to-pink-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <Briefcase className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-purple-100">
            
            {/* Experience Item 1 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow"></div>
              
              <div className="w-full md:w-[46%] pl-8 md:pl-0 md:text-right">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-2">
                  Jan 2026 – April 2026
                </span>
                <h3 className="text-xl font-bold text-slate-900">Full Stack Developer Intern</h3>
                <h4 className="text-purple-600 font-semibold mb-3">Aveon Infotech Private Limited, Coimbatore</h4>
              </div>

              <div className="hidden md:block w-[8%]"></div>

              <div className="w-full md:w-[46%] pl-8 md:pl-0 bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300">
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 text-purple-500 shrink-0 mt-0.5" />
                    <span>Worked on full-stack web application development using React.js, Node.js, Express.js, and MongoDB in a collaborative development environment.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 text-purple-500 shrink-0 mt-0.5" />
                    <span>Built and integrated responsive UI components, REST APIs, and database operations while following real-world development and debugging practices.</span>
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-medium text-purple-600 bg-purple-50 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="relative flex flex-col md:flex-row-reverse md:justify-between items-start md:items-center">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow"></div>
              
              <div className="w-full md:w-[46%] pl-8 md:pl-0 md:text-left">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-2">
                  June 2025
                </span>
                <h3 className="text-xl font-bold text-slate-900">Web Developer Intern</h3>
                <h4 className="text-purple-600 font-semibold mb-2">Inside (Interior Design Consulting), Coimbatore</h4>
                <a href="#" className="inline-flex items-center text-xs font-semibold text-purple-600 hover:text-pink-600 transition-colors mb-3">
                  <ExternalLink className="w-3.5 h-3.5 mr-1" /> Interior Design Consultancy Website
                </a>
              </div>

              <div className="hidden md:block w-[8%]"></div>

              <div className="w-full md:w-[46%] pl-8 md:pl-0 bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300">
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 text-purple-500 shrink-0 mt-0.5" />
                    <span>Developed a fully functional MERN stack web platform for an interior design consultancy featuring an interactive portfolio carousel, booking system, CMS, admin dashboard, and secure JWT authentication.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 text-purple-500 shrink-0 mt-0.5" />
                    <span>Built and optimized scalable REST APIs and dynamic front-end modules, improving performance and user engagement, resulting in a noticeable increase in online lead enquiries.</span>
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'CMS'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-medium text-purple-600 bg-purple-50 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <Code2 className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Project 1 */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-50 rounded-xl">
                    <Smartphone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Smart Athlete Performance Monitoring & Training System</h3>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className="text-xs text-purple-500 font-semibold uppercase tracking-wider">Mobile App & Machine Learning</span>
                      <span className="text-slate-300">|</span>
                      <a href="https://github.com/Sreejith2601/Smart-Athlete" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-semibold text-purple-600 hover:text-pink-600 transition-colors">
                        <Github className="w-3.5 h-3.5 mr-1" /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-600 mb-6 text-sm leading-relaxed">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2 shrink-0"></span>
                    <span>Built a React Native athlete performance tracking app that streamlined training, nutrition, and biometric monitoring through centralized real-time analytics.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2 shrink-0"></span>
                    <span>Developed ML-based fatigue and readiness prediction using Random Forest models with ~82% training accuracy, integrating secure REST APIs and real-time performance analytics.</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="border-t border-slate-200/60 pt-4">
                  <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Random Forest (ML)', 'JWT'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-xs font-semibold text-slate-700 bg-slate-200/60 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-50 rounded-xl">
                    <Cpu className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Wildlife Intrusion Detection System</h3>
                    <span className="text-xs text-purple-500 font-semibold uppercase tracking-wider">IoT & Hardware System</span>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-600 mb-6 text-sm leading-relaxed">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2 shrink-0"></span>
                    <span>Developed a wildlife intrusion detection system using IR and heat-sensing sensors to identify potentially dangerous animals entering human-populated zones, achieving 75% detection accuracy.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2 shrink-0"></span>
                    <span>Designed the system to send real-time alerts to people in the surrounding area based on sensor output, enhancing community safety and reducing human-wildlife conflict.</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="border-t border-slate-200/60 pt-4">
                  <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Arduino Uno', 'Embedded C', 'PIR Sensor', 'Heat Sensor', 'GSM Module', 'Serial/GPIO'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-xs font-semibold text-slate-700 bg-slate-200/60 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-50 rounded-xl">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Blogify – Full Stack Blogging Platform</h3>
                    <span className="text-xs text-purple-500 font-semibold uppercase tracking-wider">Web Application</span>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-600 mb-6 text-sm leading-relaxed">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2 shrink-0"></span>
                    <span>Built a full-stack blogging application with end-to-end CRUD functionality for creating, editing, and managing blog posts.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2 shrink-0"></span>
                    <span>Designed responsive user interfaces and integrated REST APIs for seamless content management and data persistence.</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="border-t border-slate-200/60 pt-4">
                  <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'REST APIs'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-xs font-semibold text-slate-700 bg-slate-200/60 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-purple-50/40 to-pink-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <GraduationCap className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full">
                  <Calendar className="w-3.5 h-3.5 mr-1" /> Sept 2024 - April 2026
                </span>
                <span className="px-2.5 py-1 text-xs font-bold text-green-700 bg-green-50 rounded-lg">GPA: 6.12</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Master of Computer Applications</h3>
              <p className="text-purple-600 font-semibold mb-3">Kumaraguru College of Technology</p>
              <p className="text-slate-500 text-sm">Pursuing, with a strong focus on advanced programming, web technologies, and database architecture.</p>
            </div>
            
            {/* Education 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full">
                  <Calendar className="w-3.5 h-3.5 mr-1" /> Dec 2021 - May 2024
                </span>
                <span className="px-2.5 py-1 text-xs font-bold text-green-700 bg-green-50 rounded-lg">CGPA: 7.51</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Bachelor of Science in Physics</h3>
              <p className="text-purple-600 font-semibold mb-3">Government Arts and Science College, Gudalur</p>
              <p className="text-slate-500 text-sm">Completed undergraduate degree with physics core and computer science minor, cultivating strong analytical and problem-solving skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills, Certifications & Areas of Interest */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Skills Column */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Settings className="w-7 h-7 text-purple-600" />
                <h2 className="text-3xl font-bold text-slate-900">Technical Skills</h2>
              </div>
              
              <div className="space-y-6">
                {/* Languages */}
                <div className="p-5 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl border border-purple-100/50">
                  <div className="flex items-center space-x-2.5 mb-3">
                    <Code2 className="w-5 h-5 text-purple-600" />
                    <h3 className="font-bold text-slate-900">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'C', 'Java'].map((item) => (
                      <span key={item} className="px-3 py-1 text-sm bg-white rounded-lg border border-purple-100 shadow-sm text-slate-700 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Web Technologies */}
                <div className="p-5 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl border border-purple-100/50">
                  <div className="flex items-center space-x-2.5 mb-3">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <h3 className="font-bold text-slate-900">Web Technologies</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'HTML', 'CSS', 'Node.js', 'Express.js', 'MongoDB'].map((item) => (
                      <span key={item} className="px-3 py-1 text-sm bg-white rounded-lg border border-purple-100 shadow-sm text-slate-700 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools & Platforms */}
                <div className="p-5 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl border border-purple-100/50">
                  <div className="flex items-center space-x-2.5 mb-3">
                    <Settings className="w-5 h-5 text-purple-600" />
                    <h3 className="font-bold text-slate-900">Tools</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'Postman'].map((item) => (
                      <span key={item} className="px-3 py-1 text-sm bg-white rounded-lg border border-purple-100 shadow-sm text-slate-700 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Areas of Interest Column */}
            <div className="flex flex-col justify-between space-y-8">
              
              {/* Certifications */}
              <div>
                <div className="flex items-center space-x-3 mb-8">
                  <Award className="w-7 h-7 text-purple-600" />
                  <h2 className="text-3xl font-bold text-slate-900">Certifications</h2>
                </div>
                <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white shadow-lg relative overflow-hidden group">
                  <div className="absolute right-0 bottom-0 translate-y-1/4 translate-x-1/4 scale-150 text-white/10 group-hover:scale-[1.6] transition-transform duration-500">
                    <Award className="w-32 h-32" />
                  </div>
                  <div className="relative z-10">
                    <div className="inline-block px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-md text-xs font-semibold uppercase tracking-wider mb-3">
                      IIT-M Pravartak Certified
                    </div>
                    <h3 className="text-xl font-bold mb-1">Full Stack Development with AI Tools</h3>
                    <p className="text-purple-100 text-sm">Issued by GUVI</p>
                    <div className="mt-4 flex items-center text-xs font-medium text-white/90">
                      <CheckCircle2 className="w-4 h-4 mr-1.5 text-green-300" /> Verified Credential
                    </div>
                  </div>
                </div>
              </div>

              {/* Areas of Interest */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <BookOpen className="w-7 h-7 text-purple-600" />
                  <h2 className="text-3xl font-bold text-slate-900">Areas of Interest</h2>
                </div>
                <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-4">
                  {[
                    'Full Stack Development',
                    'Responsive UI/UX Design',
                    'Database Management & Optimization'
                  ].map((interest) => (
                    <div key={interest} className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shrink-0"></div>
                      <span className="font-semibold text-slate-700 text-sm">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-50/40 to-pink-50/40 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12 text-center">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                I'm always looking for new opportunities, internships, or interesting collaborations. 
                Whether you have a project idea, a question, or just want to say hi, feel free to drop a message!
              </p>
              
              <div className="space-y-4">
                <a href="mailto:jith2601355@gmail.com" 
                   className="flex items-center p-4 bg-white hover:bg-purple-50/20 border border-slate-100 rounded-xl transition-all duration-300">
                  <div className="p-2.5 bg-purple-50 rounded-lg mr-4">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase">Email Me</h4>
                    <span className="text-slate-700 font-semibold text-sm sm:text-base">jith2601355@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+916369913696" 
                   className="flex items-center p-4 bg-white hover:bg-purple-50/20 border border-slate-100 rounded-xl transition-all duration-300">
                  <div className="p-2.5 bg-purple-50 rounded-lg mr-4">
                    <Phone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase">Call Me</h4>
                    <span className="text-slate-700 font-semibold text-sm sm:text-base">+91 6369913696</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Send a Message</h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-slate-700 text-sm font-medium mb-1.5">Name</label>
                  <input type="text" name="user_name" id="name" required
                         className="w-full px-4 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-700 text-sm font-medium mb-1.5">Email</label>
                  <input type="email" name="user_email" id="email" required
                         className="w-full px-4 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-slate-700 text-sm font-medium mb-1.5">Message</label>
                  <textarea name="message" id="message" rows={4} required
                            className="w-full px-4 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"></textarea>
                </div>
                <button type="submit" 
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2.5 px-4 rounded-xl hover:opacity-95 active:scale-[0.99] transition-all shadow-md shadow-purple-500/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-slate-400 text-sm">© 2026 Sreejith B. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="https://github.com/Sreejith2601/" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/sreejith-b-990596296" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


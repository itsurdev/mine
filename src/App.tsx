/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun, 
  ExternalLink, 
  Menu, 
  X, 
  Terminal, 
  Database, 
  Layout, 
  Wrench, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  ChevronRight,
  Facebook,
  FileDown,
  Monitor,
  MapPin
} from 'lucide-react';

const projects = [
  {
    title: "Barangay Management System",
    description: "A comprehensive digital solution for local government units to streamline administrative tasks and improve resident services.",
    features: ["Digital Records Management", "Automated Certificate Generation", "Blotter & Case Tracking", "Real-time Reports Dashboard", "Resident Information Hub"],
    tech: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    category: "Full Stack System",
    businessImpact: "Reduced certificate processing time by 85% and eliminated physical record loss for local government offices.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    demo: "#",
    githubHeader: "Private Repository"
  },
  {
    title: "DTR / Payroll System",
    description: "An automated time-tracking and payroll calculation system designed to eliminate manual errors and save administrative time.",
    features: ["Biometric/QR Time in/out", "Automatic Late/Overtime Logic", "Monthly Payroll Generation", "Employee Self-Service Portal", "Shift Management"],
    tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
    category: "Business Logic",
    businessImpact: "Saved HR departments 20+ hours per month by automating complex overtime and late deduction calculations.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    demo: "#",
    githubHeader: "Source Available"
  },
  {
    title: "Inventory / Booking System",
    description: "A versatile platform for managing product stocks or facility bookings with real-time availability and admin controls.",
    features: ["Real-time Stock Tracking", "Automated Reorder Alerts", "Customer Booking Calendar", "Sales Analysis Dashboard", "Multi-user Access Control"],
    tech: ["React", "MySQL", "Node.js", "Express"],
    category: "Resource Management",
    businessImpact: "Empowered small businesses to track inventory with 100% accuracy and centralized their booking operations into one dashboard.",
    image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=1200",
    demo: "#",
    githubHeader: "Repository"
  }
];

const skillCategories = [
  {
    name: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React"]
  },
  {
    name: "Backend",
    icon: <Database className="w-5 h-5" />,
    skills: ["Laravel", "PHP", "MySQL", "REST APIs"]
  },
  {
    name: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["GitHub", "VS Code", "Vite", "Laragon"]
  },
  {
    name: "IT Support",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["Troubleshooting", "Networking Basics", "System Maintenance"]
  }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 selection:bg-brand-primary selection:text-white relative overflow-x-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] frosted-glass rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-900/50 hover:bg-slate-900 rounded-full text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent md:hidden" />
              </div>

              <div className="md:w-1/2 p-8 md:p-10 overflow-y-auto custom-scrollbar">
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-wider mb-4 border border-brand-primary/30">
                  {selectedProject.category}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">{selectedProject.title}</h3>
                
                <div className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                  <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-1">Business Impact</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 italic">{selectedProject.businessImpact}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 gap-2">
                       {selectedProject.features.map((feature, i) => (
                         <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                           <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                           {feature}
                         </li>
                       ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                       {selectedProject.tech.map((t, i) => (
                         <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-brand-secondary border border-white/10 uppercase tracking-wider">
                           {t}
                         </span>
                       ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex gap-4">
                    <button className="flex-1 py-4 bg-brand-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20">
                      Live Performance <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="flex-1 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                      Github Repo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 dark:bg-slate-950/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-brand-primary/20">VT</div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">Via Telin</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors">About</a>
              <a href="#projects" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors">Projects</a>
              <a href="#skills" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors">Skills</a>
              <a href="#hire-me" className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors">Why Me</a>
              <a href="#contact" className="px-5 py-2 bg-brand-primary text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-brand-primary/20">Hire Me</a>
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-white/5 dark:bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-4 h-4 text-brand-primary" /> : <Moon className="w-4 h-4 text-slate-400" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">About</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Projects</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Skills</a>
                <a href="#hire-me" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg">Why Me</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-brand-primary">Contact Me</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-primary/30">
                  Available for freelance
                </div>
                <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white leading-[1.1]">
                  I build systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">automate business.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl">
                  IT Support & Web Developer specializing in Laravel, React, and MySQL. Converting complex workflows into simple, efficient digital tools.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-xl shadow-brand-primary/30">
                    Hire Me Now
                  </a>
                  <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-white/10 transition-all border border-slate-200 dark:border-white/10">
                    View Projects
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 hidden lg:flex flex-col gap-6"
              >
                <div className="frosted-glass p-8 rounded-3xl">
                   <h3 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4">Why Partner With Me?</h3>
                   <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">✓</div>
                      <span>Business-first problem solving.</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">✓</div>
                      <span>Full-stack expert: From UI to Database.</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">✓</div>
                      <span>Automation focused mindset.</span>
                    </li>
                   </ul>
                </div>
                <div className="flex gap-6">
                   <div className="flex-1 frosted-glass p-6 rounded-3xl text-center">
                      <div className="text-2xl font-bold text-white mb-1">99%</div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Reliability</div>
                   </div>
                   <div className="flex-1 frosted-glass p-6 rounded-3xl text-center">
                      <div className="text-2xl font-bold text-white mb-1">Fast</div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Delivery</div>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">Professional Bio</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">Solving business problems through <span className="text-brand-primary italic">systems.</span></h3>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                  I specialize in bridging the gap between complex IT infrastructure and efficient software solutions. With a background as an <span className="font-semibold text-slate-900 dark:text-white">IT Support Engineer</span> turned <span className="font-semibold text-slate-900 dark:text-white">Full-Stack Developer</span>, I build applications that don't just look good—they actually work for your business.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                  <div className="frosted-glass p-6 rounded-2xl border-white/5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white">Reliable</div>
                    </div>
                    <p className="text-sm text-slate-500">I deliver stable, production-ready code on schedule.</p>
                  </div>
                  <div className="frosted-glass p-6 rounded-2xl border-white/5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white">Efficient</div>
                    </div>
                    <p className="text-sm text-slate-500">Systems optimized for speed and administrative ease.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-[3rem] bg-gradient-to-br from-brand-primary/30 via-transparent to-brand-secondary/30 p-[1px] shadow-2xl">
                  <div className="w-full frosted-glass rounded-[3rem] overflow-hidden p-10 md:p-16 flex flex-col items-center justify-center text-center relative">
                     <Monitor className="w-48 h-48 text-brand-primary/5 absolute -bottom-10 -right-10 rotate-12" />
                     <div className="relative">
                        <div className="text-8xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">4 <span className="text-brand-primary">+</span></div>
                        <div className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-[0.2em] font-bold mb-10">Years of Technical Curiosity</div>
                        
                        <div className="flex flex-wrap justify-center gap-3">
                          <div className="px-5 py-2 bg-slate-900/10 dark:bg-white/5 backdrop-blur-md rounded-full text-xs font-mono border border-white/10 text-slate-700 dark:text-slate-300">Laravel</div>
                          <div className="px-5 py-2 bg-slate-900/10 dark:bg-white/5 backdrop-blur-md rounded-full text-xs font-mono border border-white/10 text-slate-700 dark:text-slate-300">React</div>
                          <div className="px-5 py-2 bg-slate-900/10 dark:bg-white/5 backdrop-blur-md rounded-full text-xs font-mono border border-white/10 text-slate-700 dark:text-slate-300">MySQL</div>
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Real-World Systems</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Detailed software solutions designed to automate workflows and enhance business productivity.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group frosted-glass frosted-glass-hover rounded-2xl overflow-hidden"
                >
                  <div className="h-40 bg-slate-900/50 relative flex items-center justify-center overflow-hidden border-b border-white/5">
                    <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary font-bold italic group-hover:scale-110 transition-transform duration-500">
                      {project.title.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest border border-white/10">
                        {project.tech[1]}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                       <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></div> {project.category}
                       </span>
                       <button 
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-bold text-brand-primary flex items-center gap-1 hover:underline cursor-pointer"
                       >
                          View Details &rarr;
                       </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden relative">
           {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3">Toolbox</h2>
                <h3 className="text-4xl font-bold mb-6">Expertise & Skills</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  I combine modern web frameworks with robust backend knowledge and hands-on IT infrastructure experience.
                </p>
                <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm">
                  <FileDown className="w-4 h-4" /> Download Resume
                </a>
              </div>
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                {skillCategories.map((cat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 frosted-glass frosted-glass-hover rounded-3xl"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                        {cat.icon}
                      </div>
                      <h4 className="font-bold text-lg text-slate-900 dark:text-white">{cat.name}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-xs border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Hire Section */}
        <section id="hire-me" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-primary p-8 md:p-16 rounded-[3rem] relative overflow-hidden shadow-2xl shadow-brand-primary/20">
               <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] -mr-32 -mt-32 rounded-full" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/10 blur-[80px] -ml-32 -mb-32 rounded-full" />
               
               <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-white">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Let's talk <span className="text-indigo-200">automation.</span></h3>
                    <p className="text-indigo-100 text-lg mb-8 leading-relaxed max-w-md"> Based in Philippines, ready for global challenges. I build maintainable codebases that scale with your business needs.</p>
                    <div className="space-y-4">
                      {[
                        "Standardized systems & processes",
                        "High reliability & zero-downtime philosophy",
                        "Seamless UI/UX for all business tools"
                      ].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3 text-indigo-100">
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-[10px]">✓</div>
                          <span className="font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="frosted-glass border-white/20 p-8 rounded-3xl text-center">
                    <h4 className="text-xl font-bold mb-2">Ready to start?</h4>
                    <p className="text-indigo-100 text-sm mb-8">Currently taking projects for Q2 2026.</p>
                    <a href="#contact" className="inline-block w-full py-4 bg-white text-brand-primary rounded-2xl font-bold hover:bg-indigo-50 transition-colors shadow-lg">
                      Book Strategy Call
                    </a>
                    <div className="mt-6 flex justify-center gap-4">
                      <div className="text-xs font-bold text-indigo-200 uppercase tracking-widest">hello@viadelin.dev</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3">Get in Touch</h2>
                <h3 className="text-4xl font-bold mb-6">Let's talk about your next project.</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
                  Need a custom system or technical support? Send me a message and let's see how I can help.
                </p>

                <div className="space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-brand-primary">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Email Me</div>
                        <div className="text-lg font-bold">telinvia11@gmail.com</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-brand-primary">
                        <Facebook className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Social Support</div>
                        <a href="https://facebook.com" className="text-lg font-bold hover:text-brand-primary transition-colors">Via Telin</a>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-brand-primary">
                        <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Codebase</div>
                        <a href="https://github.com" className="text-lg font-bold hover:text-brand-primary transition-colors">github.com/viattelin</a>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-brand-primary">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Location</div>
                        <div className="text-lg font-bold">Philippines</div>
                      </div>
                   </div>
                </div>
              </div>

              <div className="frosted-glass p-8 rounded-3xl shadow-xl">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Name</label>
                       <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all text-slate-900 dark:text-white" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email</label>
                       <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all text-slate-900 dark:text-white" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Subject</label>
                     <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all text-slate-900 dark:text-white">
                        <option className="bg-slate-900">New Project Inquiry</option>
                        <option className="bg-slate-900">Hire for Service</option>
                        <option className="bg-slate-900">Technical Consultation</option>
                        <option className="bg-slate-900">Other</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Message</label>
                     <textarea rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all text-slate-900 dark:text-white" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold hover:shadow-lg hover:shadow-brand-primary/25 transition-all">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">
                  &copy; 2024 Via Telin &mdash; Systems Architect & Developer
                </div>
                <div className="flex items-center gap-1.5 justify-center md:justify-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Live Operations Dashboard Ready</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all text-[10px] font-bold italic shadow-lg shadow-black/50">GH</a>
                <a href="#" className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all text-[10px] font-bold italic shadow-lg shadow-black/50">LI</a>
                <a href="#" className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all text-[10px] font-bold italic shadow-lg shadow-black/50">FB</a>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "work", "about", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-semibold"
            >
              Portfolio
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-8"
            >
              {["hero", "services", "work", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm capitalize transition-colors hover:text-zinc-900 ${
                    activeSection === section ? "text-zinc-900 font-medium" : "text-zinc-500"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl font-bold tracking-tight"
            >
              UI/UX Designer
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-600 max-w-2xl"
            >
              Crafting beautiful and intuitive digital experiences that users love.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors"
              >
                Get in Touch
              </button>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 border-2 border-zinc-900 text-zinc-900 rounded-full hover:bg-zinc-900 hover:text-white transition-colors"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.h2
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold"
            >
              Services
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "UI Design",
                  description: "Creating visually stunning interfaces that capture attention and communicate brand identity effectively.",
                },
                {
                  title: "UX Research",
                  description: "Understanding user needs through research, testing, and data analysis to inform design decisions.",
                },
                {
                  title: "Prototyping",
                  description: "Building interactive prototypes to validate ideas and test user flows before development.",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-colors"
                >
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.h2
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold"
            >
              Selected Work
            </motion.h2>
            <div className="space-y-12">
              {[
                {
                  title: "E-Commerce Platform",
                  category: "Web Design",
                  description: "A modern shopping experience with intuitive navigation and seamless checkout flow.",
                },
                {
                  title: "Mobile Banking App",
                  category: "Mobile Design",
                  description: "Secure and user-friendly banking interface designed for everyday transactions.",
                },
                {
                  title: "SaaS Dashboard",
                  category: "Product Design",
                  description: "Complex data visualization made simple with clean layouts and clear hierarchy.",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-video bg-zinc-100 rounded-2xl mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-zinc-500 uppercase tracking-wider">{project.category}</p>
                    <h3 className="text-3xl font-semibold">{project.title}</h3>
                    <p className="text-zinc-600 max-w-2xl">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
              <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-5xl md:text-6xl font-bold">About Me</h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  I'm a passionate UI/UX designer with over 5 years of experience creating digital
                  products that make a difference. My approach combines user research, creative
                  problem-solving, and attention to detail.
                </p>
                <p>
                  I believe great design is invisible—it just works. My goal is to create
                  experiences that are not only beautiful but also intuitive and accessible to
                  everyone.
                </p>
                <p>
                  When I'm not designing, you can find me exploring new design trends, reading about
                  psychology, or enjoying a good cup of coffee.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.h2
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold"
            >
              Let's Work Together
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Email</h3>
                  <a
                    href="mailto:hello@designer.com"
                    className="text-2xl hover:text-zinc-600 transition-colors"
                  >
                    hello@designer.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-2xl hover:text-zinc-600 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <h3 className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Social</h3>
                  <div className="flex gap-6">
                    {["LinkedIn", "Dribbble", "Behance"].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="text-lg hover:text-zinc-600 transition-colors"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-xl text-zinc-600 leading-relaxed">
                  Have a project in mind? I'd love to hear about it. Send me a message and let's
                  create something amazing together.
                </p>
                <button className="px-8 py-4 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors">
                  Send Message
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-zinc-500">
          <p>© 2025 All rights reserved.</p>
          <p>Designed with passion</p>
        </div>
      </footer>
    </div>
  );
}

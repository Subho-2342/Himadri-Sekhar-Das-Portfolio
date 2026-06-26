
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectionIds = ['home', 'about', 'services', 'success-stories', 'testimonials', 'achievements', 'appointment', 'chamber', 'faq', 'gallery'];
  const activeSection = useScrollSpy(sectionIds, 150);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Stories', href: 'success-stories' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Appointment', href: 'appointment' },
    { name: 'Contact', href: 'chamber' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Elegant Logo Area */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-serif font-bold text-lg">H</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-base font-serif font-bold text-foreground leading-none tracking-wide">Dr. Himadri Sekhar Das</h1>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Gynecologist & Obstetrician</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                  activeSection === link.href ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === link.href ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.location.href = 'tel:+919876543210'}
              className="text-foreground/80 hover:text-primary hover:bg-primary/5"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 98765 43210
            </Button>
            <Button
              size="sm"
              className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('appointment')}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/5">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl border-l-border/50">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full pt-8">
                <nav className="flex flex-col gap-2 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(link.href)}
                      className={`px-4 py-3 text-left text-lg font-serif transition-colors duration-200 rounded-lg ${
                        activeSection === link.href ? 'bg-primary/10 text-primary font-bold' : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </nav>
                <div className="space-y-4 pt-6 border-t border-border/50 pb-8">
                  <Button
                    variant="outline"
                    className="w-full rounded-full"
                    onClick={() => window.location.href = 'tel:+919876543210'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Clinic
                  </Button>
                  <Button
                    className="w-full rounded-full"
                    onClick={() => scrollToSection('appointment')}
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
};

export default Header;

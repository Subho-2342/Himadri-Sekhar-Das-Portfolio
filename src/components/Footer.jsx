
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, MessageCircle, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '@/config/whatsappConfig';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Appointment', href: '#appointment' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Gynecological Consultations',
    'Obstetric Care',
    'Cesarean Delivery',
    'Infertility Treatment',
    'Laparoscopic Surgery',
    'Hysterectomy',
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-[#0F4C81] to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold">Dr. Himadri Sekhar Das</span>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed mb-6">
              Committed to providing compassionate, evidence-based women's healthcare through advanced gynecological, obstetric, fertility, and laparoscopic treatment.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-3">
            <span className="text-base font-semibold mb-6 block">Quick Links</span>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3">
            <span className="text-base font-semibold mb-6 block">Services</span>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-secondary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3">
            <span className="text-base font-semibold mb-6 block">Contact Information</span>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />

                <div>
                  <p className="font-semibold">
                    Consultation Available At
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {[
                      "Bardhaman",
                      "Memari",
                      "Jaugram",
                      "Dhaniakhali",
                      "Tarakeswar",
                    ].map((city) => (
                      <span
                        key={city}
                        className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  +91 94747 03110
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@drhimadrisekhardas.com"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  contact@drhimadrisekhardas.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>


        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-secondary-foreground/70">
              © {new Date().getFullYear()} Dr. Himadri Sekhar Das. All Rights Reserved.
              <br className="md:hidden" />
              <span className="hidden md:inline mx-2">|</span>

              <a
                href="https://webzyno.netlify.app/#home"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyan-400 hover:text-cyan-300 transition duration-300"
              >
                
              </a>
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
              >
                Privacy Policy |
              </a>
              <a
                href="#"
                className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* THIS DIV WAS MISSING */}
      </div>

    </footer>
  );
};

export default Footer;


import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import useEmblaCarousel from 'embla-carousel-react';
import {
  Award,
  Users,
  Heart,
  Stethoscope,
  Shield,
  ShieldCheck,
  Baby,
  Activity,
  Microscope,
  Hospital,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar as CalendarIcon
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

import ServiceCard from '@/components/ServiceCard.jsx';
import SuccessStoryCard from '@/components/SuccessStoryCard.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import ScheduleCard from '@/components/ScheduleCard.jsx';
import GalleryImage from '@/components/GalleryImage.jsx';
import AppointmentForm from '@/components/AppointmentForm.jsx';

const HomePage = () => {
  
  
  const { scrollY } = useScroll();
  const yHeroBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yHeroImg = useTransform(scrollY, [0, 1000], [0, 150]);

  // Reveal Hooks
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });
  const [aboutRef, aboutVisible] = useScrollReveal({ threshold: 0.2 });
  const [servicesRef, servicesVisible] = useScrollReveal({ threshold: 0.2 });
  const [successRef, successVisible] = useScrollReveal({ threshold: 0.2 });
  const [testimonialsRef, testimonialsVisible] = useScrollReveal({ threshold: 0.2 });
  const [achievementsRef, achievementsVisible] = useScrollReveal({ threshold: 0.3 });
  const [appointmentRef, appointmentVisible] = useScrollReveal({ threshold: 0.2 });
  const [chamberRef, chamberVisible] = useScrollReveal({ threshold: 0.2 });
  const [faqRef, faqVisible] = useScrollReveal({ threshold: 0.2 });
  const [galleryRef, galleryVisible] = useScrollReveal({ threshold: 0.2 });

  // Animated Counters
  const [patientsRef, patientsCount] = useAnimatedCounter(1000, 2500);
  const [experienceRef, experienceCount] = useAnimatedCounter(15, 2000);
  const [satisfactionRef, satisfactionCount] = useAnimatedCounter(98, 2000);
  const [surgeriesRef, surgeriesCount] = useAnimatedCounter(1500, 2500);

  // Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
const services = [
  {
    icon: Heart,
    title: 'High-Risk Pregnancy Care',
    description: 'Specialized monitoring and management of high-risk pregnancies to ensure the safety of both mother and baby.'
  },

  {
    icon: ShieldCheck,
    title: 'Repeated Abortion Management',
    description: 'Comprehensive evaluation and treatment of recurrent pregnancy loss with a focus on successful pregnancy outcomes.'
  },

  {
    icon: Activity,
    title: 'Pregnancy Complication Management',
    description: 'Expert care for hypertension in pregnancy, pre-eclampsia, eclampsia, diabetes in pregnancy, twin pregnancy, and IUGR.'
  },

  {
    icon: Baby,
    title: 'Infertility & Fertility Care',
    description: 'Personalized fertility evaluation, infertility treatment, reproductive medicine, and assisted conception guidance.'
  },

  {
    icon: Stethoscope,
    title: 'PCOD & Endometriosis Treatment',
    description: 'Advanced diagnosis and treatment of PCOD, endometriosis, hormonal disorders, and chronic pelvic pain.'
  },

  {
    icon: ShieldCheck,
    title: 'Fibroid & Polyp Management',
    description: 'Comprehensive treatment solutions for uterine fibroids, endometrial polyps, and abnormal uterine conditions.'
  },

  {
    icon: Microscope,
    title: 'Advanced Laparoscopic Surgery',
    description: 'Including laparoscopic hysterectomy, myomectomy, sacrocolpopexy, and other minimally invasive gynecological procedures.'
  },

  {
    icon: Hospital,
    title: 'Gynecological Cancer & Prolapse Surgery',
    description: 'Management of cervical, endometrial, ovarian cancers, genital prolapse, and vault prolapse surgery.'
  }
];
 const successStories = [
  {
    title: 'Primary Infertility Success',
    challenge: 'Difficulty conceiving despite several years of marriage.',
    approach: 'Comprehensive fertility evaluation, reproductive medicine consultation, and personalized treatment plan.',
    outcome: 'Successful conception and healthy pregnancy achieved.'
  },

  {
    title: 'Secondary Infertility Management',
    challenge: 'Unable to conceive after a previous successful pregnancy.',
    approach: 'Advanced fertility assessment and targeted reproductive care.',
    outcome: 'Successful pregnancy following specialized treatment.'
  },

  {
    title: 'Recurrent Pregnancy Loss',
    challenge: 'Multiple previous miscarriages affecting maternal confidence.',
    approach: 'Detailed investigation and individualized pregnancy support plan.',
    outcome: 'Successful full-term pregnancy and healthy delivery.'
  },

  {
    title: 'High-Risk Pregnancy Care',
    challenge: 'Pregnancy complicated by hypertension and diabetes.',
    approach: 'Close monitoring, medication management, and specialist obstetric supervision.',
    outcome: 'Safe delivery of a healthy baby.'
  },

  {
    title: 'Twin Pregnancy Management',
    challenge: 'High-risk twin pregnancy requiring continuous monitoring.',
    approach: 'Regular fetal surveillance and customized maternal care.',
    outcome: 'Successful delivery of healthy twins.'
  },

  {
    title: 'Advanced Laparoscopic Surgery',
    challenge: 'Large uterine fibroids causing severe symptoms and fertility concerns.',
    approach: 'Minimally invasive laparoscopic surgical management.',
    outcome: 'Successful recovery with significant improvement in quality of life.'
  },

  {
    title: 'PCOD & Fertility Restoration',
    challenge: 'Irregular menstrual cycles and difficulty conceiving due to PCOD.',
    approach: 'Personalized hormonal management, lifestyle modification, and fertility-focused treatment.',
    outcome: 'Regular ovulation restored and successful conception achieved.'
  },

  {
    title: 'Endometriosis Treatment Success',
    challenge: 'Chronic pelvic pain and fertility concerns caused by endometriosis.',
    approach: 'Advanced laparoscopic management followed by individualized follow-up care.',
    outcome: 'Significant symptom relief and improved reproductive health.'
  }
];

  const testimonials = [
    { rating: 5, text: 'Dr. Das provided exceptional care during my high-risk pregnancy. Her calm demeanor and expertise kept me reassured.', patientIdentifier: 'A.K.', treatmentType: 'Obstetric Care' },
    { rating: 5, text: 'The laparoscopic surgery changed my life. Minimal pain and extremely fast recovery. I cannot thank her enough.', patientIdentifier: 'R.M.', treatmentType: 'Laparoscopic Surgery' },
    { rating: 5, text: 'After 3 years of trying, her targeted fertility plan worked. We are now blessed with a baby girl.', patientIdentifier: 'S.P.', treatmentType: 'Infertility Treatment' },
    { rating: 5, text: 'Professional, thorough, and deeply compassionate. She takes the time to explain every detail of the treatment.', patientIdentifier: 'N.D.', treatmentType: 'Gynecological Care' },
    { rating: 5, text: 'I felt completely safe under her care for my fibroid surgery. The facility is pristine and the staff is excellent.', patientIdentifier: 'M.C.', treatmentType: 'Fibroid Removal' },
    { rating: 5, text: 'Excellent diagnosis and treatment plan for my PCOS. My symptoms are finally under control.', patientIdentifier: 'L.B.', treatmentType: 'PCOS Management' }
  ];

  const schedule = [
    { day: 'Monday', timing: '10:00 AM - 2:00 PM, 5:00 PM - 8:00 PM', isAvailable: true },
    { day: 'Wednesday', timing: '10:00 AM - 2:00 PM, 5:00 PM - 8:00 PM', isAvailable: true },
    { day: 'Friday', timing: '10:00 AM - 2:00 PM, 5:00 PM - 8:00 PM', isAvailable: true },
    { day: 'Saturday', timing: '10:00 AM - 1:00 PM', isAvailable: true },
  ];

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1588776813677-77aaf5595b83', alt: 'Modern medical consultation room' },
    { src: 'https://images.unsplash.com/photo-1565647946321-a146ac24a220', alt: 'Advanced surgical equipment' },
    { src: 'https://images.unsplash.com/photo-1580281657702-257584239a55', alt: 'Professional medical team' }
  ];

  const faqs = [
    { question: 'What should I bring to my first consultation?', answer: 'Please bring any previous medical records, past ultrasound reports, blood test results, and a list of current medications.' },
    { question: 'Do you offer minimally invasive surgeries?', answer: 'Yes, Dr. Das specializes in laparoscopic and hysteroscopic surgeries which offer faster recovery and minimal scarring.' },
    { question: 'How do I book an appointment?', answer: 'You can book an appointment using the booking form on this website, calling the clinic directly, or via WhatsApp.' },
  ];

  const chambers = [
  {
    name: "Sun Hospital Unit-2",
    location: "Khosbagan, Bardhaman",
    days: "Mon, Wed, Fri",
    time: "5:00 PM - 8:00 PM",
    map: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14687.776281359664!2d88.11937525!3d23.0258257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39f8490061d50115%3A0x5d566cd4b94789a4!2sThe%20Sun%20Hospital%20(Unit%20II)%2C%2043%2C%20Ramkrishna%20Road%2C%20Shyamlal%20Colony%2C%20Khosbagan%2C%20Bardhaman%2C%20West%20Bengal%20713103!3m2!1d23.2448677!2d87.86161729999999!5e0!3m2!1sen!2sin!4v1782487089659!5m2!1sen!2sin"
  },

  {
    name: "Jaugram Siddheswari Medical",
    location: "Hamid Market, Jaugram",
    days: "Tuesday",
    time: "10:00 AM - 1:00 PM",
    map: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14687.776281359664!2d88.11937525!3d23.0258257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39f85df949d691d5%3A0x1db6be76be15df1c!2sSIDDHESWARI%20MEDICAL%20HALL%2C%20Railway%20Station%2C%20Station%20Road%2C%20Purba%2C%20Jaugram%2C%20West%20Bengal%20713166!3m2!1d23.0811279!2d88.0804071!5e0!3m2!1sen!2sin!4v1782402917247!5m2!1sen!2sin"
  },

  {
    name: "Memari Jagaddhatri Medical",
    location: "Near Check Post, Memari",
    days: "Thursday",
    time: "10:00 AM - 1:00 PM",
    map: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14687.776281359664!2d88.11937525!3d23.0258257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39f9b1496d8aa9e1%3A0xc6d71f752ab0820a!2sJagadhatri%20Medical%20Hall%2C%20GX4V%2BP8P%2C%20Nigan%20-Jabagram%20Rd%2C%20Negun%2C%20West%20Bengal%20713143!3m2!1d23.5068008!2d87.9933154!5e0!3m2!1sen!2sin!4v1782403046032!5m2!1sen!2sin"
  },

  {
    name: "Dhaniakhali Gouri Pharmacy",
    location: "Cinematala, Dhaniakhali",
    days: "Saturday",
    time: "10:00 AM - 1:00 PM",
    map: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14687.776281359664!2d88.11937525!3d23.0258257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39f860cae6c68d77%3A0xa0ee3ea2f2b03eee!2sGouri%20Pharmacy%20Dhaniakhali%20Cinematala%2C%20X37R%2B9HF%2C%20Cinema%20Tala%20-%20Kalikapur%20Rd%2C%20Somaspur%2C%20Dhaniakhali%2C%20West%20Bengal%20712302!3m2!1d22.963424399999997!2d88.09143929999999!5e0!3m2!1sen!2sin!4v1782403121545!5m2!1sen!2sin"
  },

  {
    name: "Dashghara Adyama Medical",
    location: "Dashghara",
    days: "Sunday",
    time: "10:00 AM - 1:00 PM",
    map: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14687.776281359664!2d88.11937525!3d23.0258257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39f86749947c0095%3A0x8dea5e9f40856f62!2sAddyama%20Medical%20Stores%2C%20Memari-Tarkeswar%20Rd%2C%20Dasghara%2C%20Srikrishnapur%2C%20West%20Bengal%20712402!3m2!1d22.9702415!2d88.0311705!5e0!3m2!1sen!2sin!4v1782403180978!5m2!1sen!2sin"
  },

  {
    name: "Dreamland Nursing Home",
    location: "Bardhaman",
    days: "Tuesday & Friday",
    time: "4:00 PM - 7:00 PM",
    map: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14687.776281359664!2d88.11937525!3d23.0258257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39f849e179f4557b%3A0x458e1f4f7d55af58!2sDreamland%20Nursing%20Home%20-%20Multispeciality%20Healthcare%2C%20Nawabhat%20Rd%20Indraprostho%2C%20Baburbag%2C%20Bardhaman%2C%20West%20Bengal%20713104!3m2!1d23.253947!2d87.8576695!5e0!3m2!1sen!2sin!4v1782403240110!5m2!1sen!2sin"
  },

  {
    name: "Dr. B. Das Memorial NH",
    location: "Tarakeswar",
    days: "Sunday",
    time: "5:00 PM - 8:00 PM",
    map: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14687.776281359664!2d88.11937525!3d23.0258257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39f86f5359688709%3A0xc2c1755e23742efe!2sB.Das%20Memorial%20Medical%20Complex%2C%20V2R4%2BXm3%2C%20Tarakeswar%20Rd%2C%20Chandur%2C%20West%20Bengal%20712410!3m2!1d22.8924375!2d88.0066875!5e0!3m2!1sen!2sin!4v1782403302022!5m2!1sen!2sin"
  }
  
];
 const [selectedMap, setSelectedMap] = useState(chambers[0].map);
 const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Helmet>
        <title>Dr. Himadri Sekhar Das | Premium Gynecologist in Burdwan</title>
      </Helmet>

      <div className="bg-background min-h-screen">
        
        {/* HERO SECTION */}
        <section id="home" ref={heroRef} className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20">
          {/* Animated Background */}
          <motion.div style={{ y: yHeroBg }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-secondary/5" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[80px]" />
          </motion.div>

          {/* Floating Medical Elements */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
            <Stethoscope className="absolute top-1/4 left-1/4 w-16 h-16 text-primary animate-float-medium" />
            <Heart className="absolute bottom-1/3 right-1/4 w-12 h-12 text-accent animate-float-soft" />
            <Shield className="absolute top-1/3 right-1/3 w-10 h-10 text-secondary animate-float-pulse" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            
            {/* Left/Right Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Accepting New Patients
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Empowering <span className="text-gradient">Women's</span> Health
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/80 font-serif mb-6 border-l-4 border-primary pl-4">
                Premium Gynecological & Obstetric Care by Dr. Himadri Sekhar Das
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-[500px]">
                Experience compassionate, evidence-based care tailored to every stage of your life. Specializing in high-risk pregnancies, advanced surgeries, and reproductive wellness.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 h-14 px-8 text-lg" onClick={() => document.getElementById('appointment').scrollIntoView()}>
                  Book Consultation
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg hover:bg-primary/5" onClick={() => window.location.href = 'tel:+919876543210'}>
                  <Phone className="w-5 h-5 mr-2" /> Call Clinic
                </Button>
              </div>
            </motion.div>

            {/* Image & Floating Cards */}
            <motion.div
              style={{ y: yHeroImg }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-3xl opacity-20 animate-glow" />
                <img
                  src="https://images.unsplash.com/photo-1690544253847-6f24926a627c?auto=format&fit=crop&q=80&w=800"
                  alt="Dr. Himadri Sekhar Das"
                  className="relative z-10 w-full h-auto rounded-[2rem] shadow-2xl object-cover border-4 border-background aspect-[3/4]"
                />
                
                {/* Floating Badges */}
                <div className="absolute top-10 -left-12 z-20 glass-card px-4 py-3 rounded-2xl flex items-center gap-3 animate-float-soft">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent"><Award className="w-5 h-5" /></div>
                  <div>
                    <p className="font-bold text-foreground leading-none">10+ Years</p>
                    <p className="text-xs text-muted-foreground">Experience</p>
                  </div>
                </div>
                
                <div className="absolute bottom-20 -right-8 z-20 glass-card px-4 py-3 rounded-2xl flex items-center gap-3 animate-float-medium">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Users className="w-5 h-5" /></div>
                  <div>
                    <p className="font-bold text-foreground leading-none">1000+</p>
                    <p className="text-xs text-muted-foreground">Happy Patients</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" ref={aboutRef} className="py-24 bg-muted/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur-lg group-hover:blur-xl transition-all duration-500 opacity-50" />
                <img 
                  src="https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. Das in clinic" 
                  className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/5] border-2 border-background"
                />
              </div>
              
              <div>
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">About The Doctor</h2>
                <h3 className="text-4xl font-bold text-foreground mb-6 font-serif">Commitment to Excellence in Women's Healthcare</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                 Dr. Himadri Sekhar Das is a distinguished Consultant Gynaecologist, Obstetrician, Paediatrician, Laparoscopic Surgeon, and Fertility Specialist dedicated to delivering exceptional healthcare with compassion, precision, and professionalism. Backed by extensive clinical experience and advanced training in reproductive medicine, fertility treatment, and minimally invasive surgery, he is committed to helping patients achieve better health outcomes through personalized, evidence-based medical care.
                </p>
                
               {/* Timeline / Milestones */}
<div className="space-y-6 mt-10">
  {[
    {
      year: 'M.B.B.S.',
      title: 'Bachelor of Medicine & Bachelor of Surgery',
      desc: 'Completed foundational medical education and comprehensive clinical training.'
    },
    {
      year: 'D.C.H.',
      title: 'Diploma in Child Health',
      desc: 'Advanced training in paediatric healthcare and child wellness.'
    },
    {
      year: 'M.S.',
      title: 'Master of Surgery in Gynaecology & Obstetrics',
      desc: 'Specialized surgical training in women’s healthcare and obstetrics.'
    },
    {
      year: 'DNB',
      title: 'Diplomate of National Board',
      desc: 'National Board Certification in Obstetrics & Gynaecology.'
    },
    {
      year: 'MRCOG',
      title: 'Royal College of Obstetricians & Gynaecologists (UK)',
      desc: 'International qualification demonstrating advanced professional competence.'
    },
    {
      year: 'FMAS',
      title: 'Fellowship in Minimal Access Surgery',
      desc: 'Specialized expertise in laparoscopic and minimally invasive surgical procedures.'
    },
    {
      year: 'ART',
      title: 'Diploma in Reproductive Medicine & Assisted Reproductive Technology',
      desc: 'Advanced training in fertility treatment, reproductive medicine, and ART services.'
    }
  ].map((item, idx, arr) => (
    <div key={idx} className="flex gap-4 group cursor-default">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center text-primary font-bold text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          {item.year}
        </div>

        {idx !== arr.length - 1 && (
          <div className="w-px h-full bg-border mt-2" />
        )}
      </div>

      <div className="pb-6 pt-2">
        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {item.title}
        </h4>
        <p className="text-sm text-muted-foreground">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" ref={servicesRef} className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={servicesVisible ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Areas of Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground font-serif">Comprehensive Services</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SUCCESS STORIES (FLIP CARDS) */}
        <section id="success-stories" ref={successRef} className="py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={successVisible ? { opacity: 1, y: 0 } : {}}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Clinical Excellence</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground font-serif">Success Stories</h3>
              <p className="text-muted-foreground mt-4">Real outcomes that highlight our advanced medical interventions.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={successVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <SuccessStoryCard {...story} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS CAROUSEL */}
        <section id="testimonials" ref={testimonialsRef} className="py-24 overflow-hidden relative">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-bottom-left z-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsVisible ? { opacity: 1, y: 0 } : {}}
              className="flex justify-between items-end mb-12"
            >
              <div>
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Patient Feedback</h2>
                <h3 className="text-4xl font-bold text-foreground font-serif">Words of Trust</h3>
              </div>
              <div className="hidden md:flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300" onClick={scrollPrev}>
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300" onClick={scrollNext}>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            <div className="overflow-visible" ref={emblaRef}>
              <div className="flex -ml-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 py-4">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS (COUNTERS) */}
        <section id="achievements" ref={achievementsRef} className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-primary-foreground/20">
              {[
                { ref: patientsRef, count: patientsCount, label: 'Patients Treated', prefix: '+' },
                { ref: surgeriesRef, count: surgeriesCount, label: 'Successful Surgeries', prefix: '+' },
                { ref: experienceRef, count: experienceCount, label: 'Years Experience', prefix: '+' },
                { ref: satisfactionRef, count: satisfactionCount, label: 'Patient Satisfaction', prefix: '%' }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-4" ref={stat.ref}>
                  <span className="text-4xl md:text-5xl font-bold font-serif mb-2 tracking-tight">
                    {stat.count}{stat.prefix}
                  </span>
                  <span className="text-primary-foreground/80 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPOINTMENT BOOKING */}
        <section id="appointment" ref={appointmentRef} className="py-24 relative">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/30 rounded-bl-[100px] z-0 hidden lg:block" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={appointmentVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Book Your Visit</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-foreground font-serif mb-6">Schedule a Consultation</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Take the first step towards better health. Fill out the form to request an appointment, and our team will confirm your slot via WhatsApp immediately.
                </p>
                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Fast Confirmation</h4>
                      <p className="text-sm text-muted-foreground">Responses within 15 minutes</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={appointmentVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-7"
              >
                <div className="bg-card p-8 md:p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-border/50">
                  <AppointmentForm services={services} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CHAMBER INFORMATION */}
<section id="chamber" ref={chamberRef} className="py-24 bg-muted/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={chamberVisible ? { opacity: 1, y: 0 } : {}}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
        Visit Locations
      </h2>

      <h3 className="text-4xl md:text-5xl font-bold text-foreground font-serif">
        Chamber & Consultation Information
      </h3>

      <p className="mt-4 text-muted-foreground">
        Available for consultation across multiple healthcare centers in Bardhaman and surrounding regions.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

      {/* LEFT SIDE */}
      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">

        {chambers.map((chamber, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={chamberVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.08 }}
            onClick={() => {
              setSelectedMap(chamber.map);
              setSelectedIndex(index);
            }}
            className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
              selectedIndex === index
                ? "border-2 border-primary shadow-lg bg-primary/5"
                : "bg-card border border-border/50 hover:border-primary hover:shadow-md"
            }`}
          >
            <div className="flex gap-4">

              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <h4 className="font-bold text-lg text-foreground">
                  {chamber.name}
                </h4>

                <p className="text-muted-foreground">
                  {chamber.location}
                </p>

                <div className="mt-3 text-sm space-y-1">
                  <p><strong>Days:</strong> {chamber.days}</p>
                  <p><strong>Time:</strong> {chamber.time}</p>
                  <p><strong>Appointment:</strong> +91 93397 30689</p>
                </div>
              </div>

            </div>
          </motion.div>
        ))}

        {/* CONTACT CARD */}
        <div className="bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-4">

            <Phone className="w-8 h-8" />

            <div>
              <h4 className="font-bold text-lg">
                Appointment & WhatsApp
              </h4>

              <p>+91 93397 30689</p>

              <p className="text-sm opacity-80">
                Call / WhatsApp Available
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* GOOGLE MAP */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={chamberVisible ? { opacity: 1, x: 0 } : {}}
        className="rounded-2xl overflow-hidden shadow-lg border border-border/50 h-[600px]"
      >
        <iframe
          src={selectedMap}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location"
        />
      </motion.div>

    </div>

    {/* ✅ SCHEDULE SECTION (ADDED HERE PROPERLY) */}
    <div className="mt-12">
      <h4 className="text-xl font-bold text-foreground font-serif mb-6 flex items-center gap-2">
        <CalendarIcon className="w-6 h-6 text-primary" />
        Consultation Schedule
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {schedule.map((day, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={chamberVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * index }}
          >
            <ScheduleCard {...day} />
          </motion.div>
        ))}
      </div>
    </div>

  </div>
</section>

        {/* FAQ SECTION */}
        <section id="faq" ref={faqRef} className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqVisible ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Clear Your Doubts</h2>
              <h3 className="text-4xl font-bold text-foreground font-serif">Frequently Asked Questions</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl border border-border/50 px-6 overflow-hidden">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors text-lg font-medium py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" ref={galleryRef} className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={galleryVisible ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Our Facility</h2>
              <h3 className="text-4xl font-bold text-foreground font-serif">Clinic Gallery</h3>
            </motion.div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={galleryVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-md group cursor-pointer"
                >
                  <GalleryImage {...image} className="w-full h-auto aspect-[4/3] object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default HomePage;

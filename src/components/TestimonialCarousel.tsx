import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  MessageCircle,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Modal from "@/components/Modal";
import { useI18n } from "@/providers/LanguageProvider";

interface Testimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  whatsappUrl?: string;
  linkedinUrl?: string;
}

const testimonialDataES = {
  name: "Jose Sebastian Reyes Poveda",
  title: "Analista y Desarrollador de Software",
  description:
    "Soy Jose Sebastian Reyes Poveda, un apasionado Analista y Desarrollador de Software colombiano con 20 años de edad y una visión clara: transformar ideas en experiencias digitales funcionales y atractivas. Me especializo en diseño web, combinando lógica, estética y usabilidad para crear soluciones que realmente conectan con los usuarios. Me encanta aprender nuevas tecnologías, colaborar en equipo y enfrentar desafíos que impulsan mi crecimiento profesional. Soy metódico, curioso y comprometido con la calidad en cada etapa del desarrollo.",
  imageUrl:
   "/public/perrr.jpeg",
  githubUrl: "https://github.com/reyessebas",
  whatsappUrl: "https://wa.me/573214109194",
  linkedinUrl: "https://www.linkedin.com/in/jsebastianreye",
};

const testimonialDataEN = {
  name: "Jose Sebastian Reyes Poveda",
  title: "Software Analyst and Developer",
  description:
    "I am Jose Sebastian Reyes Poveda, a passionate Colombian Software Analyst and Developer, 20 years old, with a clear vision: to transform ideas into functional and attractive digital experiences. I specialize in web design, combining logic, aesthetics, and usability to create solutions that truly connect with users. I love learning new technologies, collaborating with teams, and facing challenges that drive my professional growth. I am methodical, curious, and committed to quality at every stage of development.",
  imageUrl:
    "/public/perrr.jpeg",
  githubUrl: "https://github.com/reyessebas",
  whatsappUrl: "https://wa.me/573214109194",
  linkedinUrl: "https://www.linkedin.com/in/jsebastianreye",
};

export interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialCarousel({ className }: TestimonialCarouselProps) {
  const { t, lang } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  const testimonials = useMemo(() => {
    const data = lang === 'es' ? testimonialDataES : testimonialDataEN;
    return [data];
  }, [lang]);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % testimonials.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length
    );

  const currentTestimonial = testimonials[currentIndex];

  const socialIcons = [
    { icon: Github, url: currentTestimonial.githubUrl, label: "GitHub" },
    { icon: MessageCircle, url: currentTestimonial.whatsappUrl, label: "WhatsApp" },
    { icon: Linkedin, url: currentTestimonial.linkedinUrl, label: "LinkedIn" },
  ];

  return (
    <motion.div
      className={cn("w-full mx-auto px-4", className)}
      initial={{ opacity: 0, x: 48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Desktop layout */}
      <div className='hidden md:flex relative items-center'>
        {/* Avatar */}
        <div className='w-[550px] h-[550px] rounded-3xl overflow-hidden bg-gray-200 dark:bg-neutral-800 flex-shrink-0'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <img
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                className='w-full h-full object-cover'
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className='bg-white dark:bg-[#efe5d6] rounded-3xl shadow-2xl dark:shadow-[#fdbc4b]/40 p-8 ml-[-40px] z-40 max-w-5xl flex-1'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className='mb-6'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-black mb-2'>
                  {currentTestimonial.name}
                </h2>

                <p className='text-base font-medium text-gray-700 dark:text-black'>
                  {currentTestimonial.title}
                </p>
              </div>

              <p className='text-black dark:text-black text-lg leading-relaxed mb-8'>
                {currentTestimonial.description}
              </p>

              <div className='flex items-center justify-between mb-6'>
                <div className='flex space-x-4'>
                  {socialIcons.map(({ icon: IconComponent, url, label }) => (
                    <a
                      key={label}
                      href={url || "#"}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-12 h-12 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 cursor-pointer'
                      aria-label={label}
                    >
                      <IconComponent className='w-5 h-5 text-white dark:text-gray-900' />
                    </a>
                  ))}
                </div>

                <div className='flex gap-3'>
                  <button
                    onClick={() => setPreviewOpen(true)}
                    className='inline-flex items-center gap-2 rounded-lg bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-white px-6 py-3 shadow hover:shadow-lg transition-shadow text-base font-medium'
                  >
                    <span>👁️</span>
                    <span>{t('about.preview')}</span>
                  </button>

                  <a
                    href='/cv/CV-demo.pdf'
                    download
                    className='inline-flex items-center gap-2 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 py-3 shadow hover:shadow-lg transition-shadow text-base font-medium'
                  >
                    <span>⬇</span>
                    <span>{t('about.download')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className='md:hidden max-w-sm mx-auto text-center bg-transparent'>
        {/* Avatar */}
        <div className='w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden mb-6'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <img
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                className='w-full h-full object-cover'
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className='px-4'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
                {currentTestimonial.name}
              </h2>
              
              <p className='text-base font-medium text-gray-600 dark:text-gray-300 mb-4'>
                {currentTestimonial.title}
              </p>
              
              <p className='text-black dark:text-white text-lg leading-relaxed mb-6'>
                {currentTestimonial.description}
              </p>
              
              <div className='flex justify-center space-x-4 mb-6'>
                {socialIcons.map(({ icon: IconComponent, url, label }) => (
                  <a
                    key={label}
                    href={url || "#"}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-12 h-12 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-800 dark:hover:bg-gray-200 cursor-pointer'
                    aria-label={label}
                  >
                    <IconComponent className='w-5 h-5 text-white dark:text-gray-900' />
                  </a>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row justify-center gap-3'>
                <button
                  onClick={() => setPreviewOpen(true)}
                  className='inline-flex items-center justify-center gap-2 rounded-md bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-white px-4 py-2 shadow hover:shadow-lg transition-shadow'
                >
                  <span>👁️</span>
                  <span>{t('about.preview')}</span>
                </button>

                <a
                  href='/cv/CV-demo.pdf'
                  download
                  className='inline-flex items-center justify-center gap-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 shadow hover:shadow-lg transition-shadow'
                >
                  <span>⬇</span>
                  <span>{t('about.download')}</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    
        

        
      

      {/* Modal for CV Preview */}
      <Modal open={previewOpen} onClose={() => setPreviewOpen(false)}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
          <h3 className="text-lg font-semibold">{t('about.preview')}</h3>
          <button onClick={() => setPreviewOpen(false)} className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white">✕</button>
        </div>
        <div className="h-[70vh] bg-zinc-50 dark:bg-zinc-900">
          <iframe
            title="CV preview"
            src="/cv/CV-demo.pdf#toolbar=0&navpanes=0&scrollbar=1"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center justify-between px-4 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80">
          <a
            href="/cv/CV-demo.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 shadow hover:shadow-lg transition-shadow"
          >
            <span>⬇</span>
            <span>{t('about.download')}</span>
          </a>
          <button
            onClick={() => setPreviewOpen(false)}
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            {t('about.close')}
          </button>
        </div>
      </Modal>
    </motion.div>
  );
}

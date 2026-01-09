import { motion } from 'framer-motion'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'
import { HeroScrollDemo } from '@/components/HeroScrollDemo'
import CircularGalleryDemo from '@/components/CircularGalleryDemo'
import MarqueeDemo from '@/components/MarqueeDemo'

export const About: React.FC = () => {
  return (
    <section id="about" className="container py-20 md:py-28">
      {/* Testimonials Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <TestimonialCarousel />
      </motion.div>

      {/* Hero Scroll Demo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <HeroScrollDemo />
      </motion.div>

      {/* Circular Gallery Demo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <CircularGalleryDemo />
      </motion.div>

      {/* Marquee Demo */}
      <motion.div
        id="marquee"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <MarqueeDemo />
      </motion.div>
    </section>
  )
}

export default About

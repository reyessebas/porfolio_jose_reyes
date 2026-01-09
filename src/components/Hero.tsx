import { useEffect } from 'react'
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero'
import { useMedia } from '@/providers/MediaProvider'
import { useI18n } from '@/providers/LanguageProvider'
import { title } from 'framer-motion/client'

interface MediaAbout {
  overview: string
  conclusion: string
}

interface MediaContentItem {
  src: string
  poster?: string
  background: string
  title: string
  date: string
  scrollToExpand: string
  about: MediaAbout
}

interface MediaContentCollection {
  [key: string]: MediaContentItem
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: './public/video_hero.mp4',
    poster: '',
    background: './public/a.jpg',
    title: '',
    date: '',
    scrollToExpand: '',
   about: {
      overview:
        '',
      conclusion:
        '',
    },
  },
  image: {
    src: './public/b.jpg',
    background: './public/c.jpg',
    title: '',
    date: '',
    scrollToExpand: '',
    about: {
      overview:
        'F',
      conclusion:
        '',
    },
  },
}

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const currentMedia = sampleMediaContent[mediaType]
  const { t } = useI18n()

  const title = t('hero.about.title') || currentMedia.title
  const overview = t('hero.about.overview') || currentMedia.about.overview
  const conclusion = t('hero.about.conclusion') || currentMedia.about.conclusion

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-amber-500">{title}</h2>
      <p className="text-xl leading-relaxed text-justify mb-8 text-black/80 dark:text-white/90">{overview}</p>
      <p className="text-xl leading-relaxed text-justify mb-8 text-black/80 dark:text-white/90">{conclusion}</p>
    </div>
  )
}

export const Hero: React.FC = () => {
  const { mediaType } = useMedia()
  const { t } = useI18n()
  const currentMedia = sampleMediaContent[mediaType]

  useEffect(() => {
    window.scrollTo(0, 0)
    const resetEvent = new Event('resetSection')
    window.dispatchEvent(resetEvent)
  }, [mediaType])

  return (
    <section id="home" className="relative">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={t('hero.title')}
        scrollToExpand={t('hero.subtitle')}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </section>
  )
}

export default Hero

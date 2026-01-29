"use client"

import { DynamicFrameLayout } from '@/components/ui/dynamic-frame-layout'
import { useI18n } from '@/providers/LanguageProvider'

const defaultFrameChrome = {
  corner: '',
  edgeHorizontal: '',
  edgeVertical: '',
  borderThickness: 0,
  borderSize: 100,
}

const demoFrames = [
  {
    id: 1,
    video: '/carru_one.png',
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 2,
    video: '/carru_two.png',
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 3,
    video: '/carru_three.png',
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 4,
    video: '/carru_four.png',
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 5,
    video: '/carru_five.png',
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 6,
    video: '/carru_six.png',
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 7,
    video: '/carru_seven.png',
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 8,
    video: '/carru_eight.png',
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 9,
    video: '/carru_nine.png',
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
]

export default function DemoPage() {
  const { t } = useI18n();
  
  return (
    <section className="w-full bg-zinc-900 text-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">{t('aiComponents.label')}</p>
          <h2 className="text-3xl font-bold sm:text-4xl">{t('aiComponents.title')}</h2>
          <p className="text-zinc-400">
            {t('aiComponents.description')}
          </p>
        </div>
        <div className="h-[80vh] w-full overflow-hidden rounded-2xl bg-black/60 ring-1 ring-white/5 shadow-2xl">
          <DynamicFrameLayout frames={demoFrames} className="w-full h-full" hoverSize={6} gapSize={4} />
        </div>
      </div>
    </section>
  )
}

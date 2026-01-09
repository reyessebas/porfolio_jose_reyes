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
    video: 'https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4',
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 2,
    video: 'https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4',
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 3,
    video: 'https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4',
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 4,
    video: 'https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4',
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 5,
    video: 'https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4',
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 6,
    video: 'https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4',
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 7,
    video: 'https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4',
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 8,
    video: 'https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4',
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
    ...defaultFrameChrome,
  },
  {
    id: 9,
    video: 'https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4',
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

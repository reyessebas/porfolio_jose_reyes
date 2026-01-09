import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type MediaType = 'video' | 'image'

type MediaContextType = {
  mediaType: MediaType
  setMediaType: (t: MediaType) => void
}

const MediaContext = createContext<MediaContextType | null>(null)

export const MediaProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mediaType, setMediaTypeState] = useState<MediaType>('video')

  useEffect(() => {
    const stored = (localStorage.getItem('mediaType') as MediaType | null) ?? 'video'
    setMediaTypeState(stored)
  }, [])

  const setMediaType = (t: MediaType) => {
    setMediaTypeState(t)
    localStorage.setItem('mediaType', t)
  }

  const value = useMemo(() => ({ mediaType, setMediaType }), [mediaType])
  return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
}

export const useMedia = () => {
  const ctx = useContext(MediaContext)
  if (!ctx) throw new Error('useMedia must be used within MediaProvider')
  return ctx
}

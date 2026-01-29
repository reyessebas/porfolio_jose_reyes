import React, { useState } from 'react'

interface VideoWithFallbackProps {
  src: string
  poster?: string
  fallbackSrc?: string
  fallbackText?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
}

/**
 * Componente que muestra un video con fallback a imagen si el video no carga
 */
export const VideoWithFallback: React.FC<VideoWithFallbackProps> = ({
  src,
  poster,
  fallbackSrc,
  fallbackText = 'Contenido no disponible',
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
}) => {
  const [videoError, setVideoError] = useState(false)

  if (videoError && fallbackSrc) {
    return (
      <img
        src={fallbackSrc}
        alt={fallbackText}
        className={`${className} object-cover`}
      />
    )
  }

  if (videoError) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-zinc-800 text-zinc-400`}
      >
        <div className="text-center">
          <p className="text-sm">{fallbackText}</p>
        </div>
      </div>
    )
  }

  return (
    <video
      src={src}
      poster={poster}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      onError={() => setVideoError(true)}
      className={`${className} object-cover`}
    />
  )
}

export default VideoWithFallback

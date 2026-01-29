import React, { ImgHTMLAttributes } from 'react'

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
}

/**
 * Componente para servir imágenes optimizadas en múltiples formatos
 * Automáticamente genera rutas .webp y .avif basadas en la src proporcionada
 */
export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes,
  className,
  ...props
}) => {
  // Extraer nombre base sin extensión
  const basePath = src.replace(/\.[^/.]+$/, '')
  const originalExt = src.split('.').pop()

  return (
    <picture>
      {/* AVIF - Mejor compresión (primera opción) */}
      <source srcSet={`${basePath}.avif`} type="image/avif" sizes={sizes} />
      
      {/* WebP - Buena compresión (segunda opción) */}
      <source srcSet={`${basePath}.webp`} type="image/webp" sizes={sizes} />
      
      {/* Fallback - Formato original */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        className={className}
        {...props}
      />
    </picture>
  )
}

export default ResponsiveImage

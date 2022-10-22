import React from 'react'
import Image from 'next/image'
import { ImageoptimizedProps } from './interface'

export const Imageoptimized: React.FC<ImageoptimizedProps> = ({
  imageUrl,
  alt,
  className,
  fit,
}) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={imageUrl}
        alt={alt}
        layout="fill"
        objectFit={fit}
        className={''}
        priority
      />
    </div>
  )
}

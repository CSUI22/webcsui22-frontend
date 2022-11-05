import React from 'react'
import { MediaSocialProps } from './interface'
import { Instagram } from '@icons'
import { Line } from '@icons'
import Link from 'next/link'

export const MediaSocial: React.FC<MediaSocialProps> = ({
  instagram,
  line,
}) => (
  <div className="media-social flex flex-col gap-5">
    <div className="instagram flex items-center gap-2">
      <Instagram size="w-[24px] h-[24px]" />
      <Link href={`https://${instagram}`}>
        <a>
          <p className="font-inter font-[16px]">{instagram}</p>
        </a>
      </Link>
    </div>
    <div className="line flex items-center gap-2">
      <Line size="w-[24px] h-[24px]" />
      <Link href={`https://${line}`}>
        <a>
          <p className="font-inter font-[16px]">{line}</p>
        </a>
      </Link>
    </div>
  </div>
)

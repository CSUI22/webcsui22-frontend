import React from 'react'
import { Imageoptimized } from '@elements'

interface MediaSocialProps {
  instagram: string
  line: string
}

export const MediaSocial: React.FC<MediaSocialProps> = (props) => (
  <div className="media-social flex flex-col gap-5 ">
    <div className="instagram flex items-center gap-2">
      <Imageoptimized
        imageUrl="/assets/images/instagram-logo.svg"
        alt="Logo Instagram"
        className="min-w-[32px] min-h-[32px]"
        fit="contain"
      />
      <p className="text-lg md:text-xl xl:text-2xl">{props.instagram}</p>
    </div>
    <div className="line flex items-center gap-2">
      <Imageoptimized
        imageUrl="/assets/images/line-logo.svg"
        alt="Logo Line"
        className="min-w-[32px] min-h-[32px]"
        fit="contain"
      />
      <p className="text-lg md:text-xl xl:text-2xl break-words">{props.line}</p>
    </div>
  </div>
)

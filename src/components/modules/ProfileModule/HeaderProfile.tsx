import React from 'react'
import { HeaderProfileProps } from './interface'
import { Biodata } from './Biodata'
import { MediaSocial } from './MediaSocial'
import { AdvancedImage, lazyload } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity'
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn'
import { thumbnail } from '@cloudinary/url-gen/actions/resize'
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners'

export const HeaderProfile: React.FC<HeaderProfileProps> = (props) => {
  const myCld = new Cloudinary({ cloud: { cloudName: 'djj4bzojc' } })
  return (
    <div className="head-profile w-full flex flex-col items-center sm:flex-row sm:gap-5 sm:items-stretch">
      <div className="lg:w-[30em] md:w-[20em] sm:w-[10em]">
        <AdvancedImage
          cldImg={myCld
            .image(props.photo)
            .resize(
              thumbnail()
                .width(600)
                .height(600)
                .gravity(focusOn(FocusOn.face()))
            )
            .roundCorners(byRadius(40))
            .format('png')}
          plugins={[lazyload()]}
        />
      </div>

      <div className="w-full flex flex-col gap-10 translate-y-12">
        <Biodata nickname={props.nickname} birthday={props.birthday} />
        <MediaSocial instagram={props.instagram} line={props.line} />
      </div>
    </div>
  )
}

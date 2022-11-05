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
      <AdvancedImage
        cldImg={myCld
          .image(props.photo)
          .resize(
            thumbnail().width(288).height(288).gravity(focusOn(FocusOn.face()))
          )
          .roundCorners(byRadius(40))
          .format('png')}
        plugins={[lazyload()]}
      />

      <div className="w-full flex flex-col gap-12 translate-y-12">
        <Biodata nickname={props.nickname} birthday={props.birthday} />
        <MediaSocial instagram={props.instagram} line={props.line} />
      </div>
    </div>
  )
}

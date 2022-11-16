import React from 'react'
import { HeaderProfileProps } from './interface'
import { Biodata } from './Biodata'
import { MediaSocial } from './MediaSocial'
import Image from 'next/image'
import { loadingImg } from '../constant'

export const HeaderProfile: React.FC<HeaderProfileProps> = (props) => {
  // const myCld = new Cloudinary({ cloud: { cloudName: 'djj4bzojc' } })
  return (
    <div className="head-profile w-full flex flex-col items-center sm:flex-row sm:gap-5 sm:items-stretch">
      <div className="lg:w-[30em] md:w-[20em] sm:w-[10em]">
        {/* <AdvancedImage
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
        /> */}
        <Image
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL={loadingImg}
          src={`https://csui22.imgix.net/images/${props.namaFoto}?w=500&h=500&fit=crop&crop=faces&mask=corners&corner-radius=35&fm=png&wm=webp&lossless=0`}
        />
      </div>

      <div className="w-full flex flex-col gap-10 translate-y-12">
        <Biodata nickname={props.nickname} birthday={props.birthday} />
        <MediaSocial instagram={props.instagram} line={props.line} />
      </div>
    </div>
  )
}

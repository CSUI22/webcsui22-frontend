import React from 'react'
import Link from 'next/link'
import { dataWebDev } from './constant'
import { AdvancedImage, lazyload } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity'
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn'
import { thumbnail } from '@cloudinary/url-gen/actions/resize'
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners'

export const WebteamModule: React.FC = () => {
  const myCld = new Cloudinary({ cloud: { cloudName: 'djj4bzojc' } })
  return (
    <div className="grid grid-rows-1 justify-center my-12 py-10 px-4">
      <header className="relative">
        <div className="py-5 pb-[3em]">
          <Link href={'/figures'}>
            <a className="lg:block md:block sm:hidden hidden cursor-pointer transition ease-in-out delay-150 hover:translate-x-[2em] hover:scale-[105%] duration-300">
              <img
                src="/assets/images/Vector.png"
                alt=""
                className="inline px-2 w-6 relative pb-1"
              />
              <p className="text-[gray] inline">{'Back to The Figures'}</p>
            </a>
          </Link>
          <h1 className="text-[50px] font-interbold  text-center">
            WebDev Team
          </h1>
          <p className="text-xl text-center">People behind the website</p>
        </div>
      </header>
      <div className="container flex align-middle content-evenly">
        {/* lg:px-12 md:px-12 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-10 */}
        <div className="lg:px-12 md:px-12 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 lg:gap-7 md:gap-7 sm:gap-7 gap-7">
          {dataWebDev.map((key, index) => (
            <Link key={key['id foto']} href={`/figures/${key['id foto']}`}>
              <div className="my-1 px-1 cursor-pointer">
                <article className="overflow-hidden h-full w-auto rounded-2xl shadow-xl bg-[#0E1F58] transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 pb-7">
                  <div className="p-4">
                    <AdvancedImage
                      cldImg={myCld
                        .image(key['id foto'])
                        .resize(
                          thumbnail()
                            .width(700)
                            .height(700)
                            .gravity(focusOn(FocusOn.face()))
                        )
                        .roundCorners(byRadius(40))
                        .format('png')}
                      plugins={[lazyload()]}
                    />
                  </div>
                  <header className=" pl-4 pt-1 pb-6 md:px-4">
                    <h1 className="lg:text-base md:text-sm sm:text-xs text-xs text-white">
                      <p
                        className="relative font-interbold truncate"
                        data-tooltip-target="tooltip-light"
                      >
                        {key['Nama Lengkap']}
                      </p>
                    </h1>
                    <p className="lg:text-sm md:text-xs sm:text-xs text-xs  text-white font-interlight">
                      {key['role']}
                    </p>
                  </header>
                </article>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

import React from 'react'
// import { Imageoptimized } from '@elements'
import { dataWebDev } from './constant'
import {AdvancedImage, lazyload} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";


export const WebteamModule: React.FC = () => {
  const myCld = new Cloudinary({cloud: {cloudName: 'djj4bzojc'}});
  return (
    <div className="container my-12 align-middle mx-auto py-10 px-4">
      <header>
        <h1 className="text-[40px] font-interbold py-5 pb-8 text-center">
          Meet Our Web Dev Team
        </h1>
      </header>
      <div className="lg:px-12 md:px-12 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {dataWebDev.map((key, index) => (
          <div key={key['id foto']} className="my-1 px-1">
            <article className="overflow-hidden rounded-2xl shadow-xl bg-[#0E1F58] transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300">
              <div className="p-4">
                <AdvancedImage cldImg={myCld.image(key['id foto']).resize(thumbnail().width(700).height(700).gravity(focusOn(FocusOn.face()))).roundCorners(byRadius(40)).format('png')} plugins={[lazyload()]}/>
              </div>
              <header className=" pl-4 pb-7 md:px-4">
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
        ))}
      </div>
    </div>
  )
}

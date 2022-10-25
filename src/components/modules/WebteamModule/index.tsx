import React from 'react'
import { Imageoptimized } from '@elements';
import { dataWebDev } from './constant';

export const WebteamModule: React.FC = () => {
  // TODO: Write module's logic
  return (
    <div className="container my-12 align-middle mx-auto py-10 px-4">
      <header>
        <h1 className='text-[40px] font-interbold py-5 pb-8 text-center'>
          Meet Our Web Dev Team
        </h1>
      </header>
      <div className='lg:px-12 md:px-12 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
        {dataWebDev.map((key, index) => (
          <div className="my-1 px-1">
            <article className="overflow-hidden rounded-2xl shadow-xl bg-[#0E1F58]">
              <div className='p-4'>
                {/* <Imageoptimized
                  imageUrl='https://drive.google.com/uc?export=view&id=1b8XvH3dDS-nHD64Dc_pNHcDmtr7KFDw4'
                  className='rounded-full'
                  alt="foto"
                  fit="cover"
                /> */}
                <img alt="Placeholder" className="block h-auto w-full rounded-lg aspect-square object-cover" src={"https://drive.google.com/uc?export=view&id="+key['id foto']} />
                {/* <img alt="Placeholder" className="block h-auto w-full rounded-lg aspect-square object-cover" src='https://drive.google.com/uc?export=view&id=1b8XvH3dDS-nHD64Dc_pNHcDmtr7KFDw4' /> */}
              </div>
              <header className=" pl-4 pb-7 md:px-4">
                <h1 className="lg:text-base md:text-sm sm:text-xs text-xs text-white">
                  <p className="relative font-interbold truncate" data-tooltip-target="tooltip-light">
                    {key['Nama Lengkap']}
                  </p>
                  
                </h1>
                <p className='lg:text-md md:text-sm text-white font-interlight'>
                  AB12  
                </p>
              </header>
            </article>
        </div>
        ))}
        </div>
      </div>
    );
}

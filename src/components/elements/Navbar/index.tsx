import React from 'react'
import { Imageoptimized } from '../Imageoptimized'
import Link from 'next/link'
import { tabs } from './constant'

export const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FD] flex fixed justify-between items-center py-2 px-24 border-[#161616] border-b-2 z-10">
      <Link href={'/'}>
        <a>
          <Imageoptimized
            imageUrl={'/assets/images/logo-csui22.png'}
            alt={'logo'}
            fit={'contain'}
            className={'w-[47px] h-[57px]'}
          />
        </a>
      </Link>

      <div className="flex gap-28">
        {tabs.map(({ url, label }, index) => (
          <Link href={url} key={index}>
            <a>
              <div className="font-interlight text-[20px] no-underline hover:underline">
                {label}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

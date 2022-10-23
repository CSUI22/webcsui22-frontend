import React from 'react'
import { Imageoptimized } from '../Imageoptimized'
import Link from 'next/link'
import { tabs } from './constant'
import { NavbarBodyProps } from './interface'
import { Menu } from '@icons'

export const NavbarBody: React.FC<NavbarBodyProps> = ({
  isCollapsed,
  handleCollapse,
}) => {
  return (
    <div className="w-full bg-[#F8F9FD] flex justify-between items-center lg:py-2 lg:px-24 py-2 px-7 border-[#161616] border-b-2">
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

      <div className="hidden lg:flex gap-28">
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

      <button className="lg:hidden" onClick={handleCollapse}>
        <Menu size="w-[20px] h-[20px]" />
      </button>
    </div>
  )
}

export default NavbarBody

import React from 'react'
import Link from 'next/link'
import { Imageoptimized } from '../Imageoptimized'
import { Instagram } from '@icons'

export const Footer: React.FC = () => {


  return (
    <div className='flex flex-col px-24 py-8 bg-primary border-[#161616] border-t-2 '>
      <div className='flex justify-between items-center'>
        <div className='flex gap-28'>
          <div className='flex flex-col'>
            <h1 className='font-interbold'>SOCIALS</h1>
            <div className='flex py-4'>
              <div className='flex gap-2'>
                <Instagram size='w-[16px] h-[16px]' className='mt-[1.3px]'/>
                <Link href='https://www.instagram.com/csui.2022/'>
                  <a>
                    <h2 className='font-inter text-[16px] leading-[19.36px]'>csui.2022</h2>
                  </a>
                </Link>
              </div>
            <div>    
          </div>
           
          </div>

          </div>
          <div>
            <h1 className='font-interbold'>CREDITS</h1>
            <Link href={'/'}>
              <a>
                <h2 className='font-inter text-[16px] leading-[19.36px] py-4'>Website Developer</h2>
              </a>
            </Link>
          </div> 
        </div>
        <Imageoptimized
        imageUrl='/assets/images/logo-csui22.png'
        alt='logo'
        fit='contain'
        className='w-[67px] h-[70px]'
        />
      </div>

      <div className='mt-2'>
        <h2 className='font-inter text-[12px] leading-[15px]'>© University of Indonesia, Faculty of Computer Science 2022</h2>
      </div>

  </div>
  )
}

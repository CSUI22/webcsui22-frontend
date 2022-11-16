import React from 'react'
import { HeaderProfile } from './HeaderProfile'
import { Description } from './Description'
import PropTypes from 'prop-types'
import Link from 'next/link'

export const ProfileModule = ({ id }: any) => {
  return (
    <>
      <div>
        <div className="pt-32 px-8">
          <Link href={'/thefigure'}>
            <a className="lg:block md:block sm:hidden hidden cursor-pointer transition ease-in-out delay-150 hover:translate-x-[2em] hover:scale-[105%] duration-300">
              <img
                src="/assets/images/Vector.png"
                alt=""
                className="inline px-2 w-6 relative pb-1"
              />
              <p className="text-[gray] inline">{'Back to The Figures'}</p>
            </a>
          </Link>
        </div>

        <div className="container flex flex-col gap-5 mx-auto px-3 lg:px-24 sm:px-5 py-12">
          <h1 className="font-interbold text-center text-[20px] xl:text-[80px] lg:text-[60px] md:text-[40px] lg:leading-[97px]">
            {id['Nama Lengkap']}
          </h1>
          <div className="mt-4">
            <HeaderProfile
              nickname={id['Nama Panggilan']}
              birthday={id['Tanggal Lahir']}
              photo={id['id foto']}
              instagram={id['Instagram']}
              line={id['Line']}
              namaFoto={id['nama foto']}
            />
          </div>
          <div className="mt-16">
            <Description
              description={id['Deskripsi Singkat']}
              message={
                id[
                  'Pesan untuk CSUI 22\n (Pesan/harapan kamu kedepannya untuk CSUI 22)'
                ]
              }
              interest={id['Interest']}
            />
          </div>
        </div>
      </div>
    </>
  )
}

ProfileModule.propTypes = {
  id: PropTypes.object,
}

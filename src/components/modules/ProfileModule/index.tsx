import React from 'react'
import { HeaderProfile } from './HeaderProfile'
import { Description } from './Description'
import PropTypes from 'prop-types'

export const ProfileModule = ({ id }: any) => {
  return (
    <div className="container flex flex-col gap-5 mx-auto px-3 py-36 lg:px-24 sm:px-5">
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
  )
}

ProfileModule.propTypes = {
  id: PropTypes.object,
}

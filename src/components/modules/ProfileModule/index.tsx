import React from 'react'
import { HeaderProfile } from './HeaderProfile'
import { Description } from './Description'
import PropTypes from 'prop-types'

export const ProfileModule = ({ id }: any) => {
  return (
    <div className="container flex flex-col gap-5 mx-auto px-3 py-24 max-w-[1280px] xl:px-52 lg:px-24 sm:px-5">
      <h1 className="font-bold text-center text-4xl xl:text-8xl xl:my-10 lg:my-5 md:text-6xl">
        {id['Nama Lengkap']}
      </h1>
      <HeaderProfile
        nickname={id['Nama Panggilan']}
        birthday={id['Tanggal Lahir']}
        photo={id['id foto']}
        instagram={id['Instagram']}
        line={id['Line']}
      />
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
  )
}

ProfileModule.propTypes = {
  id: PropTypes.object,
}

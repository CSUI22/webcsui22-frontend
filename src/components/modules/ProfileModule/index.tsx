import React from 'react'
import { HeaderProfile } from './HeaderProfile'
import { Description } from './Description'

const mhs = {
  nama: 'Aaron Kwek',
  nickname: 'Aaron',
  birthday: '1 January 2004',
  major: 'Computer Science',
  instagram: 'aaron.kwek',
  line: 'aaronkwek',
  description: 'Hi',
  message: 'Hello',
  intersest: 'UI/UX Design, Web Development, Valorant',
}

export const ProfileModule: React.FC = () => {
  return (
    <div className="container flex flex-col gap-5 mx-auto px-3 py-24 max-w-[1280px] xl:px-52 lg:px-24 sm:px-5">
      <h1 className="font-bold text-center text-4xl xl:text-8xl xl:my-10 lg:my-5 md:text-6xl">
        {mhs.nama}
      </h1>
      <HeaderProfile
        nickname={mhs.nickname}
        birthday={mhs.birthday}
        major={mhs.major}
        instagram={mhs.instagram}
        line={mhs.line}
      />
      <Description
        description={mhs.description}
        message={mhs.message}
        interest={mhs.intersest}
      />
    </div>
  )
}

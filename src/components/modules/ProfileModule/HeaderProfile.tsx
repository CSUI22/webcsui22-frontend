import React from 'react'
import { Biodata } from './Biodata'
import { Imageoptimized } from '@elements'
import { MediaSocial } from './MediaSocial'

interface HeaderProfileProps {
  nickname: string
  birthday: string
  major: string
  instagram: string
  line: string
}

export const HeaderProfile: React.FC<HeaderProfileProps> = (props) => (
  <div className="head-profile w-full flex flex-col items-center sm:flex-row sm:gap-5 sm:items-stretch">
    <Imageoptimized
      imageUrl=""
      alt="Foto mahasiswa"
      className="md:w-72 w-full aspect-square"
      fit="contain"
    />
    <div className="profile flex flex-col justify-between gap-5 w-full py-3 h-auto xl:max-w-[580px] md:max-h-64">
      <Biodata
        nickname={props.nickname}
        birthday={props.birthday}
        major={props.major}
      />
      <MediaSocial instagram={props.instagram} line={props.line} />
    </div>
  </div>
)

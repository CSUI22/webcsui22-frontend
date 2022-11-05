import React from 'react'
import { BiodataProps } from './interface'

export const Biodata: React.FC<BiodataProps> = (props) => (
  <div className="profile-desc flex flex-col sm:grid sm:grid-cols-2 gap-3">
    <div className="">
      <h2 className="font-interbold lg:text-[24px] text-[16px]">Nickname</h2>
      <p className="font-inter lg:text-[24px] text-[16px]">{props.nickname}</p>
    </div>
    <div className="birthday">
      <h2 className="font-interbold lg:text-[24px] text-[16px]">Birthday</h2>
      <p className="font-inter lg:text-[24px] text-[16px]">{props.birthday}</p>
    </div>
  </div>
)

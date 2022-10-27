import React from 'react'

interface BiodataProps {
  nickname: string
  birthday: string
  major: string
}

export const Biodata: React.FC<BiodataProps> = (props) => (
  <div className="profile-desc flex flex-col sm:grid sm:grid-cols-2 gap-3">
    <div className="nickname">
      <h2 className="font-bold text-lg md:text-xl xl:text-2xl">Nickname</h2>
      <p className="text-lg md:text-xl xl:text-2xl">{props.nickname}</p>
    </div>
    <div className="birthday">
      <h2 className="font-bold text-lg md:text-xl xl:text-2xl">Birthday</h2>
      <p className="text-lg md:text-xl xl:text-2xl">{props.birthday}</p>
    </div>
    <div className="major">
      <h2 className="font-bold text-lg md:text-xl xl:text-2xl">Major</h2>
      <p className="text-lg md:text-xl xl:text-2xl">{props.major}</p>
    </div>
  </div>
)

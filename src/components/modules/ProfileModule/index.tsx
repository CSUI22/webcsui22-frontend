import React from 'react'

export const ProfileModule = ({id}) => {
  // TODO: Write module's logic

  return (
    <div className='pt-[10em]'>
      {id["Nama Lengkap"]}
      <br />
      {id["Tanggal Lahir"]}
      <br />
      {id["Deskripsi Singkat"]}
    </div>
  )
}

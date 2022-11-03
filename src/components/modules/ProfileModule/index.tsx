import React from 'react'
import PropTypes from 'prop-types'

export const ProfileModule = ({ id }: any) => {
  return (
    <div className="pt-[10em]">
      {id['Nama Lengkap']}
      <br />
      {id['Tanggal Lahir']}
      <br />
      {id['Deskripsi Singkat']}
    </div>
  )
}

ProfileModule.propTypes = {
  id: PropTypes.object,
}

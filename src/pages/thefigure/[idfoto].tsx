import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ProfileModule } from '@modules'
import { dataAngkatan } from 'src/components/modules/ThefigureModule/constant'

const Post = () => {
  const router = useRouter()
  const { idfoto } = router.query
  const [data, setData] = useState({})
  useEffect(() => {
    dataAngkatan.some((key) => {
      if (key['id foto'] === idfoto) {
        setData(key)
      }
    })
  })

  return <ProfileModule id={data} />
}

export default Post

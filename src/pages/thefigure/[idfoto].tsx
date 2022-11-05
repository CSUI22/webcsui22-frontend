import { useRouter } from 'next/router'
import { ProfileModule } from '@modules'
import { dataAngkatan } from 'src/components/modules/ThefigureModule/constant'

const Post = () => {
  const router = useRouter()
  const { idfoto } = router.query
  let data
  dataAngkatan.some((key) => {
    if (key['id foto'] === idfoto) {
      data = key
      return true
    }
  })
  return <ProfileModule id={data} />
}

export default Post

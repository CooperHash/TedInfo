import { useRouter } from 'next/router'
const Photo = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <>
        <p>Post: {pid}</p>
        <img src={`../../${pid}.jpg`}/>
    </>
  )
}

export default Photo
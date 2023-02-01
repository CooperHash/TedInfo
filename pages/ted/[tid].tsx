import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
type Ted = {
  id: string,
  tedshow: string,
  tedtitle: string,
  tedinfo: string
}

const API_URL = '/api/detail'
async function getTed(pid: string): Promise<Ted> {
  const res = await fetch(API_URL + `/${pid}`)
  return res.json()
}


const Ted = () => {
  const [ted, setTed] = useState<Ted>({
    id: '',
    tedshow: '',
    tedtitle: '',
    tedinfo: '',
  });

  const router = useRouter()
  useEffect(() => {
    const pid = String(router.query.tid)
    async function fetch(pid: string) {
      const res = await getTed(pid)
      return res
    }
    fetch(pid).then((res) => {
      console.log('res', res);
      setTed(res)
    })
  }, [])
  return (
    <>
      <div className='w-screen h-screen justify-center items-center flex'>
        {ted &&
          <div className=''>
            <img src={ted.tedshow} width={600} />
            <div className='w-120'>
              <div>{ted.tedtitle}</div>
              <div className=''>{ted.tedinfo}</div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Ted
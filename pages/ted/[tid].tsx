import { useRouter } from 'next/router'
import { ReactEventHandler, useEffect, useState } from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
type Ted = {
  id: string,
  tedshow: string,
  tedtitle: string,
  tedinfo: string,
  tedcut: string
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
    tedcut: ''
  });
  const [load, setLoad] = useState(false)

  const router = useRouter()
  const onImageLoad: ReactEventHandler<HTMLImageElement> = (event) => {
    console.log(event);
  }
  useEffect(() => {
    const pid = String(router.query.tid)
    async function fetch(pid: string) {
      const res = await getTed(pid)
      return res
    }
    fetch(pid).then((res) => {
      console.log('res', res);
      setTed(res)
      setLoad(true)
    })
  }, [])
  return (
    <>
      <div className='w-screen h-screen'>
        {load ?
          (<div>
            <div className='mt-2 flex flex-row w-4/5 mx-auto'>
              <div className="w-2/3">
                <AspectRatio.Root ratio={16 / 9}>
                  <img
                    className="Image object-cover w-full h-full rounded-l-lg"
                    src={ted.tedshow}
                    onLoad={onImageLoad}
                  />
                </AspectRatio.Root>
              </div>
              <div className='w-1/3 inline-block break-words px-3 py-2 bg-gray-200 rounded-r-lg'>
                <div className='text-red-500'>TIME</div>
                <div className='text-lg font-black text-black leading-6'>{ted.tedtitle}</div>
                <div className='mt-2 line-clamp-6 text-sm'>{ted.tedinfo}</div>
              </div>
            </div>
            <div className='mt-12 px-2 w-4/5 mx-auto whitespace-pre-line font-sans text-black text-lg leading-8 tracking-normal'>
              {ted.tedcut}
            </div>
          </div>
          )

          :
          (<div className='mt-2 flex flex-row w-4/5 mx-auto'>
            <div className="w-2/3 aspect-16/9 bg-gray-500">

            </div>
            <div className='w-1/3 inline-block break-words px-3 py-2 bg-gray-200 rounded-r-lg relative'>
              <div className='w-1/4 h-[30px] bg-gray-400'></div>
              <div className='mt-3 w-1/2 h-[30px] bg-gray-600'></div>
              <div className='mt-5 w-1/3 h-[30px] bg-gray-700'></div>
              <div className='mt-1 w-2/3 h-[30px] bg-gray-700'></div>
              <div className='mt-1 w-3/4 h-[30px] bg-gray-700'></div>
            </div>
          </div>)
        }
      </div>
    </>
  )
}

export default Ted
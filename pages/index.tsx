import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Skeleton } from '@/ui/Skeleton'
import { Navigation } from '@/ui/Navigation'
import { VideoCameraIcon } from '@heroicons/react/24/solid'
import { Slider } from '@/ui/Slider'
import Link from 'next/link'
import data from '../lib/TED.json'
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { CSSProperties, useEffect, useState } from 'react'
interface Ted {
  id: number,
  tedshow: string,
  tedtitle: string,
  tedinfo: string,
  tedcut: string
}
const API_URL = '/api/allted'
async function getMain(): Promise<Ted[]> {
  const res = await fetch(API_URL)
  return res.json()
}


export default function Home() {
  let [list, setList] = useState<Ted[]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await getMain()
      return res
    }

    fetchData().then((res) => {
      console.log('res',res);
      setList(res)
    })
  }, [])
  return (
    <>
      {/* <Navigation /> */}
      {/* <div className='grid grid-cols-3 grid-rows-2'>
        <Link href='/photo/kyo1122-1'>
          <img src='/kyo1122-1.jpg' />
        </Link>
        <Link href='/photo/kyo1122-2'>
          <img src='/kyo1122-2.jpg' />
        </Link>
        <Link href='/photo/kyo1122-3'>
          <img src='/kyo1122-3.jpg' />
        </Link>
        <Link href='/photo/kyo1122-4'>
          <img src='/kyo1122-4.jpg' />
        </Link>
        <Link href='/photo/kyo1122-5'>
          <img src='/kyo1122-5.jpg' />
        </Link>
        <Link href='/photo/kyo1122-6'>
          <img src='/kyo1122-6.jpg' />
        </Link>
      </div> */}
      <ul>
        {list.map(item =>
          <div className={"flex flex-row"} key={item.id}>
            <div className={"w-[160px] wordwrap text-black text-xl leading-8 mr-2 flex flex-col"}>
              <div className='font-bold'>{item.tedtitle.split(':')[0]}</div>
              <div className=' font-semibold'>{item.tedtitle.split(':')[1]}</div>
            </div>
            <article key={item.id}>
              <Link href={`/ted/${item.id}`}>
                <div className='w-[300px]'>
                  <AspectRatio.Root ratio={9 / 12}>
                    <img
                      className="Image object-cover w-full h-full rounded-xl"
                      src={item.tedshow}
                    />
                  </AspectRatio.Root>
                </div>
              </Link>
            </article>
          </div>
        )}
      </ul>
    </>
  )
}

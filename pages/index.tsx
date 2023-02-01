import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Skeleton } from '@/ui/Skeleton'
import { Navigation } from '@/ui/Navigation'
import { VideoCameraIcon } from '@heroicons/react/24/solid'
import { Slider } from '@/ui/Slider'
import Link from 'next/link'
import data from '../lib/TED.json'
import { useEffect, useState } from 'react'
interface Ted {
  id: number,
  tedshow: string,
  tedtitle: string,
  tedinfo: string
}


export default function Home() {
  let [list, setList] = useState<Ted[]>([])

  useEffect(() => {
    setList(data.ted)
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
      <div className='flex justify-center items-center w-screen h-screen'>
        <Slider data={list} />
      </div>
    </>
  )
}

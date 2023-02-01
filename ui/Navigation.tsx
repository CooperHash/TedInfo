import { VideoCameraIcon } from '@heroicons/react/24/solid'
import Link from "next/link"
import cx from "clsx"
import React from "react"
import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants"
export const Navigation = () => {
    return (
        <>
            <div className='flex row w-screen h-[60px] py-4 px-20 bg-pink-300'>
                <div className='photo'>
                    <Link href="/videos" className={cx("group", FOCUS_VISIBLE_OUTLINE)}>
                        <div className="sm:flex sm:items-center sm:space-x-2">
                            <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                                <div
                                    className={cx(
                                        "rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1"
                                    )}
                                >
                                    <VideoCameraIcon className="w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110" />
                                </div>
                            </div>
                            <div>Videos</div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
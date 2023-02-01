import Link from "next/link"
type Ted = {
    id: number,
    tedshow: string,
    tedtitle: string,
    tedinfo: string
}

interface Props {
    data: Ted[]
}
export const Slider = (props: Props) => {
    const data = props.data
    return (
        <>
            <div className="holster">
                <div className="container x mandatory-scroll-snapping" dir="ltr">
                    {data.map(item => <div key={item.id} style={{ "backgroundImage": `url(${item.tedshow})` }} className={"bg-no-repeat bg-cover"}>
                        <Link href={`/ted/${item.id}`}>
                            <span className=" text-4xl">{item.tedtitle}</span>
                        </Link>
                    </div>)}
                </div>
            </div>
            {/* <ul>
                {data.map(item => <li key={item.id}>
                    <article style={{ "--bg": `url(${item.tedshow})` } as React.CSSProperties}>
                        <a href={`/ted/${item.id}`}>
                            <div className="backdrop"></div>
                            <span><span className="word"><span>EXPLORE</span></span></span>
                        </a>
                    </article>
                </li>)}
            </ul> */}

        </>
    )
}
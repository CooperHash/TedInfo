import Image from "next/image"
export default function Index() {
    return (
        <>
            <div className="index">
                <div className="head w-screen h-screen">
                    <div className="w-2/3 mx-auto text-black text-3xl font-extrabold mt-[140px]">Hundreds of magazines
                        and leading newspapers.
                        One subscription</div>
                </div>
                <section className="grid grid-cols-2">
                    <div className="left sticky top-0 h-screen flex justify-center items-center">
                        <Image alt="website" src="/website.png" width={500} height={500} />
                    </div>
                    <div className="right text-black">
                        <div className="h-screen bg-gray-100 flex justify-center items-center">
                            <div className="w-3/5 mx-auto break-words">
                                <div className="text-3xl font-extrabold">Celebrating Culture and Diversity</div>
                                <div className="mt-3">Experience the richness and diversity of human culture with our platform's coverage of art, music, literature, and more. Our platform showcases the creativity and passion of artists, performers, and cultural icons around the world.</div>
                            </div>
                        </div>
                        <div className="h-screen bg-gray-100 flex justify-center items-center">
                            <div className="w-3/5 mx-auto break-words">
                                <div className="text-3xl font-extrabold">Making Sense of the Markets</div>
                                <div className="mt-3">Understand the latest developments and trends in business and finance, with our coverage of the stock market, global economies, and industry news. Get insights into the forces shaping the world of business and finance.</div>
                            </div>
                        </div>
                        <div className="h-screen bg-gray-100 flex justify-center items-center">
                            <div className="w-3/5 mx-auto break-words">
                                <div className="text-3xl font-extrabold">Empowering Global Voices</div>
                                <div className="mt-3">Discover diverse perspectives and the latest news from around the world with our platform. From politics to arts and entertainment, we bring you the stories and voices that matter.</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
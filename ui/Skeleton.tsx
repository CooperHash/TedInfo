export const Skeleton = () => {
    return (
        <>
            <div className="flex justify-center rounded-lg bg-rose-100/[1%] p-8 ring-1 ring-inset ring-rose-100/[3%]">
                <div className="w-32 space-y-5 rounded-2xl bg-white/5 p-4">
                    <div className="h-24 rounded-lg bg-rose-100/10"></div>
                    <div className="space-y-3">
                        <div className="h-3 w-3/5 rounded-lg bg-rose-100/10"></div>
                        <div className="h-3 w-4/5 rounded-lg bg-rose-100/20"></div>
                        <div className="h-3 w-2/5 rounded-lg bg-rose-100/20"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
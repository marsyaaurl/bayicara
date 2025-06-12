const HeaderDeteksi = () => {
    return (
        <div className="flex bg-primary h-64 items-center justify-center rounded-b-4xl">
            <div className="flex flex-col bg-transparent items-center justify-center text-background z-50 px-4 text-center max-w-2xl">
            <h1 className="text-3xl font-bold mb-1 bg-transparent">Deteksi Speech Delay</h1>
            <p className="text-md font-normal bg-transparent">
                Kenali tanda-tanda keterlambatan bicara lebih awal.
            </p>
            </div>
        </div>
    )
}

export default HeaderDeteksi;
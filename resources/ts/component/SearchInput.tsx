type Props = {
    isStyle: boolean
}

export const SearchInput = ({ isStyle }: Props) => {
    return (
        <>
            <form action="">
                <div className="relative">
                    <input
                        type="text"
                        className={`border border-black ${
                            isStyle
                                ? "w-full p-2 pl-10 rounded-full"
                                : "w-80 py-2 pr-2 pl-10 rounded-lg"
                        }`}
                        placeholder="使いたい食材は？"
                    />
                    <p className="absolute top-1/4 left-2">
                        <img src="/images/image01.png" alt="" />
                    </p>
                </div>
            </form>
        </>
    )
}

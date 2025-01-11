type Props = {
    isStyle: boolean
    id: string
    type: string
}

export const SearchInput = ({ isStyle, id, type }: Props) => {
    return (
        <label htmlFor={id} className="relative">
            <input
                type={type}
                className={`pl-10 z-0 border border-black ${
                    isStyle ? "w-full p-2 rounded-full" : "w-80 py-2 pr-2 rounded-lg"
                }`}
                placeholder="使いたい食材は？"
            />
            <p className="absolute top-1/4 left-2">
                <img src="/images/image01.png" alt="" />
            </p>
        </label>
    )
}

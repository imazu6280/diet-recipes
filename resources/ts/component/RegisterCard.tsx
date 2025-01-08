type Props = {
    step_number: number
}

export const RegisterCard = ({ step_number }: Props) => {
    return (
        <li className="flex flex-col gap-y-2 sm:gap-x-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex justify-between">
                <div className="flex items-center gap-x-4 sm:gap-y-2 sm:flex-col">
                    <p className="w-6 h-6 text-center text-white bg-black rounded-full">
                        {step_number}
                    </p>
                    <p className="p-4 bg-gray"></p>
                </div>
                <div className="p-4 bg-black sm:hidden"></div>
            </div>
            <div className="flex flex-col gap-y-2 w-full sm:flex-col-reverse">
                <label htmlFor="detailImage" className="sm:w-28">
                    <input
                        name="detailImage"
                        id="detailImage"
                        className="w-full py-8 bg-beige"
                    ></input>
                </label>
                <label htmlFor="detailText" className="w-full px-2 py-4 bg-beige">
                    <textarea
                        name="detailText"
                        id="detailText"
                        placeholder="鶏胸肉を一口サイズにカットする"
                        className="w-full px-2 py-4 bg-beige"
                    ></textarea>
                </label>
            </div>
            <div className="p-4 bg-black hidden sm:block"></div>
        </li>
    )
}

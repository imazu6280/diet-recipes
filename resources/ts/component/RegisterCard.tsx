import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMenu } from "../hooks/useMenu"

type Props = {
    step_number: number
}

export const RegisterCard = ({ step_number }: Props) => {
    const { open, toggleDeleteOpen } = useMenu()

    return (
        <li className="flex flex-col gap-y-2 sm:gap-x-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex justify-between">
                <div className="flex items-center gap-x-2 sm:gap-y-2 sm:flex-col">
                    <p className="w-6 h-6 text-center text-white bg-black rounded-full">
                        {step_number}
                    </p>
                    <p>
                        <img src="images/bars.svg" alt="" />
                    </p>
                </div>
                <p className="relative" onClick={toggleDeleteOpen}>
                    <FontAwesomeIcon icon={faEllipsis} className="text-gray" />
                    {open.deleteOpen && (
                        <ul className="absolute top-9 right-2 w-40 bg-white shadow-black rounded-sm">
                            <li className="p-2 text-black hover:bg-beige">材料を削除</li>
                        </ul>
                    )}
                </p>
            </div>
            <div className="flex flex-col gap-y-2 w-full sm:flex-col-reverse">
                <label
                    htmlFor="detailImage"
                    className="flex flex-col justify-center items-center aspect-5/4 bg-beige rounded-lg sm:w-28"
                >
                    <input
                        type="file"
                        name="detailImage"
                        id="detailImage"
                        className="hidden"
                    ></input>
                    <p>
                        <img src="images/image16.svg" alt="カメラ" />
                    </p>
                </label>
                <label htmlFor="detailText" className="w-full px-2 py-4 bg-beige rounded-lg">
                    <textarea
                        name="detailText"
                        id="detailText"
                        placeholder="鶏胸肉を一口サイズにカットする"
                        className="w-full p-2 bg-beige"
                    ></textarea>
                </label>
            </div>
            <p className="relative hidden sm:block" onClick={toggleDeleteOpen}>
                <FontAwesomeIcon icon={faEllipsis} className="text-gray" />
                {open.deleteOpen && (
                    <ul className="absolute top-9 right-2 w-40 bg-white shadow-black rounded-sm">
                        <li className="p-2 text-black hover:bg-beige">材料を削除</li>
                    </ul>
                )}
            </p>
        </li>
    )
}

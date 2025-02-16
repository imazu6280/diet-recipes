import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMenu } from "../hooks/useMenu"
import { DeleteMenuButton } from "./DeleteMenuButton"

type Props = {
    item: {
        id: number
        step_number: number
        description: string
        thumbnail: string | File
    }
    index: number
    stepImage: string[]
    handleStepsChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => void
    stepsHandleFileChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
}

const stepDelete = [
    { id: 0, text: "作り方を追加" },
    { id: 1, text: "作り方を削除" },
]

export const RegisterCard = ({
    item,
    index,
    stepImage,
    handleStepsChange,
    stepsHandleFileChange,
}: Props) => {
    const { open, toggleDeleteOpen } = useMenu()

    return (
        <li className="flex flex-col gap-y-2 md:gap-x-4 md:flex-row md:items-start md:justify-between">
            <div className="flex justify-between">
                <div className="flex items-center gap-x-2 md:gap-y-2 md:flex-col">
                    <span className="block w-6 h-6 text-center text-white bg-black rounded-full">
                        {item.step_number}
                    </span>
                    <div>
                        <img src="images/bars.svg" alt="" />
                    </div>
                </div>
                <div className="relative md:hidden" onClick={toggleDeleteOpen}>
                    <FontAwesomeIcon icon={faEllipsis} className="text-gray" />
                    <ul className="absolute top-9 right-2 w-40 bg-white shadow-modal rounded-lg">
                        {open.deleteOpen &&
                            stepDelete.map((item, index) => (
                                <DeleteMenuButton
                                    key={index}
                                    text={item.text}
                                    image=""
                                    index={index}
                                />
                            ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-y-2 w-full md:flex-col-reverse">
                <label
                    htmlFor={`thumbnail-${index}`}
                    className={`flex flex-col justify-center items-center aspect-5/4 rounded-lg md:w-28
         ${stepImage[index] ? "" : "bg-beige"}`}
                >
                    <input
                        type="file"
                        name="thumbnail"
                        id={`thumbnail-${index}`}
                        onChange={(e) => stepsHandleFileChange(e, index)}
                        className="hidden"
                    ></input>
                    <p>
                        {stepImage[index] ? ( // prevImage[index]を使用
                            <img
                                src={stepImage[index]} // インデックスに対応する画像を表示
                                alt="プレビュー"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        ) : (
                            <img src="images/image16.svg" alt="カメラ" />
                        )}
                    </p>
                </label>
                <label
                    htmlFor={`description-${index}`}
                    className="w-full px-2 py-4 bg-beige rounded-md"
                >
                    <textarea
                        name="description"
                        id={`description-${index}`}
                        value={item.description}
                        onChange={(e) => handleStepsChange(e, index)}
                        placeholder="鶏胸肉を一口サイズにカットする"
                        className="w-full p-2 bg-beige"
                    ></textarea>
                </label>
            </div>
            <div className="relative hidden md:block" onClick={toggleDeleteOpen}>
                <FontAwesomeIcon icon={faEllipsis} className="text-gray" />
                {open.deleteOpen && (
                    <ul className="absolute top-9 right-2 w-40 bg-white shadow-modal rounded-lg">
                        {open.deleteOpen &&
                            stepDelete.map((item) => (
                                <DeleteMenuButton text={item.text} image="" index={0} />
                            ))}
                    </ul>
                )}
            </div>
        </li>
    )
}

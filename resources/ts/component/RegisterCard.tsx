import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMenu } from "../hooks/useMenu"
import { DeleteMenuButton } from "./DeleteMenuButton"
import { useRecipeCreate } from "../hooks/useRecipeCreate"

type Props = {
    step_number: number
}

const stepDelete = [
    { id: 0, text: "作り方を追加" },
    { id: 1, text: "作り方を削除" },
]

export const RegisterCard = ({ step_number }: Props) => {
    const { open, toggleDeleteOpen } = useMenu()
    const { createInputValue, CreateHandleChange } = useRecipeCreate()

    return (
        <li className="flex flex-col gap-y-2 md:gap-x-4 md:flex-row md:items-start md:justify-between">
            <div className="flex justify-between">
                <div className="flex items-center gap-x-2 md:gap-y-2 md:flex-col">
                    <span className="block w-6 h-6 text-center text-white bg-black rounded-full">
                        {step_number}
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
                    htmlFor="thumbnail"
                    className="flex flex-col justify-center items-center aspect-5/4 bg-beige rounded-lg md:w-28"
                >
                    <input
                        type="file"
                        name="thumbnail"
                        id="thumbnail"
                        value={createInputValue.steps[step_number]?.thumbnail}
                        onChange={CreateHandleChange}
                        className="hidden"
                    ></input>
                    <p>
                        <img src="images/image16.svg" alt="カメラ" />
                    </p>
                </label>
                <label htmlFor="description" className="w-full px-2 py-4 bg-beige rounded-md">
                    <textarea
                        name="description"
                        id="description"
                        value={createInputValue.steps[step_number]?.description}
                        onChange={CreateHandleChange}
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

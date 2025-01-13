import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMenu } from "../hooks/useMenu"
import { DeleteMenuButton } from "./DeleteMenuButton"

export const RegisterInput = () => {
    const { open, toggleDeleteOpen } = useMenu()

    return (
        <div className="grid grid-cols-create-ingredient-column gap-x-2 items-center">
            <p>
                <img src="images/bars.svg" alt="" />
            </p>
            <label htmlFor="ingredient">
                <input
                    id="ingredient"
                    type="text"
                    name="ingredient"
                    placeholder="鶏胸肉"
                    className="w-full p-2 break-words bg-beige rounded-md"
                />
            </label>
            <label htmlFor="quantity">
                <input
                    id="quantity"
                    type="text"
                    name="quantity"
                    placeholder="200g"
                    className="w-full p-2 break-words bg-beige rounded-md"
                />
            </label>
            <p onClick={toggleDeleteOpen} className="relative">
                <FontAwesomeIcon icon={faEllipsis} className="text-gray" />
                {open.deleteOpen && (
                    <ul className="absolute top-9 right-2 w-40 bg-white shadow-modal rounded-lg">
                        <DeleteMenuButton text="材料を削除する" image="" index={0} />
                    </ul>
                )}
            </p>
        </div>
    )
}

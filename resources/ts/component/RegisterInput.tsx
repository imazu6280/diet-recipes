import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMenu } from "../hooks/useMenu"
import { DeleteMenuButton } from "./DeleteMenuButton"
import { useRecipeCreate } from "../hooks/useRecipeCreate"

type Props = {
    id: number
}

export const RegisterInput = ({ id }: Props) => {
    const { open, toggleDeleteOpen } = useMenu()
    const { createInputValue, CreateHandleChange } = useRecipeCreate()

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
                    value={createInputValue.ingredients[id].name}
                    onChange={CreateHandleChange}
                    className="w-full p-2 break-words bg-beige rounded-md"
                />
            </label>
            <label htmlFor="quantity">
                <input
                    id="quantity"
                    type="text"
                    name="quantity"
                    placeholder="200g"
                    value={createInputValue.ingredients[id].pivot.quantity}
                    onChange={CreateHandleChange}
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

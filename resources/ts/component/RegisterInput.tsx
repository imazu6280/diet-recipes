import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMenu } from "../hooks/useMenu"
import { DeleteMenuButton } from "./DeleteMenuButton"
import { IngredientSchema } from "../type/recipes"

type Props = {
    item: Omit<IngredientSchema, "created_at" | "updated_at">
    index: number
    handleIngredientChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => void
}

export const RegisterInput = ({ item, index, handleIngredientChange }: Props) => {
    const { open, toggleDeleteOpen } = useMenu()

    return (
        <div className="flex flex-col gap-y-2">
            <div className="grid grid-cols-create-ingredient-column gap-x-2 items-center">
                <p>
                    <img src="images/bars.svg" alt="" />
                </p>
                <label>
                    <input
                        id={`name-${item.id}`}
                        type="text"
                        name="name"
                        placeholder="鶏胸肉"
                        value={item.name}
                        onChange={(e) => handleIngredientChange(e, index)}
                        className="w-full p-2 break-words bg-beige rounded-md"
                    />
                </label>
                <label>
                    <input
                        id={`quantity-${item.id}`}
                        type="text"
                        name="quantity"
                        placeholder="20(g)"
                        value={item.quantity ?? ""}
                        onChange={(e) => handleIngredientChange(e, index)}
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
            <div className="grid grid-cols-3 gap-2">
                <label>
                    <input
                        id={`protein-${item.id}`}
                        type="text"
                        name="protein"
                        placeholder="P(g)"
                        value={item.protein ?? ""}
                        onChange={(e) => handleIngredientChange(e, index)}
                        className="w-full p-2 break-words bg-beige rounded-md"
                    />
                </label>
                <label>
                    <input
                        id={`fat-${item.id}`}
                        type="text"
                        name="fat"
                        placeholder="F(g)"
                        value={item.fat ?? ""}
                        onChange={(e) => handleIngredientChange(e, index)}
                        className="w-full p-2 break-words bg-beige rounded-md"
                    />
                </label>
                <label>
                    <input
                        id={`carbs-${item.id}`}
                        type="text"
                        name="carbs"
                        placeholder="C(g)"
                        value={item.carbs ?? ""}
                        onChange={(e) => handleIngredientChange(e, index)}
                        className="w-full p-2 break-words bg-beige rounded-md"
                    />
                </label>
            </div>
        </div>
    )
}

import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMenu } from "../hooks/useMenu"
import { DeleteMenuButton } from "./DeleteMenuButton"
import { IngredientSchema } from "../type/recipes"
import { useRecipeCreate } from "../hooks/useRecipeCreate"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

type Props = {
    item: Omit<IngredientSchema, "created_at" | "updated_at">
    index: number
    handleIngredientChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => void
    handleDeleteBtn: (id: number, type: string) => void
}

export const RegisterInput = ({ item, index, handleIngredientChange, handleDeleteBtn }: Props) => {
    const { open, toggleDeleteOpen } = useMenu()

    const { attributes, listeners, setNodeRef, transform } = useSortable({
        id: item.id,
    })
    const style = {
        transform: CSS.Transform.toString(transform),
    }

    return (
        <div ref={setNodeRef} style={style} className="flex flex-col gap-y-2">
            <div className="grid grid-cols-create-ingredient-column gap-x-2 items-center">
                <p {...listeners} {...attributes}>
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
                        type="number"
                        name="quantity"
                        placeholder="20(g)"
                        value={item.pivot.quantity ?? ""}
                        onChange={(e) => handleIngredientChange(e, index)}
                        className="w-full p-2 break-words bg-beige rounded-md"
                    />
                </label>
                <div onClick={toggleDeleteOpen} className="relative">
                    <FontAwesomeIcon icon={faEllipsis} className="text-gray" />
                    {open.deleteOpen && (
                        <ul className="absolute top-9 right-2 w-40 bg-white shadow-modal rounded-lg">
                            <DeleteMenuButton
                                text="材料を削除する"
                                image=""
                                index={0}
                                id={item.id}
                                type="ingredients"
                                handleDeleteBtn={handleDeleteBtn}
                            />
                            {/* <li onClick={() => handleDeleteBtn(item.id, "ingredients")}>削除</li> */}
                        </ul>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <label>
                    <input
                        id={`protein-${item.id}`}
                        type="number"
                        name="protein"
                        placeholder="P(g)"
                        value={item.pivot.protein ?? ""}
                        onChange={(e) => handleIngredientChange(e, index)}
                        className="w-full p-2 break-words bg-beige rounded-md"
                    />
                </label>
                <label>
                    <input
                        id={`fat-${item.id}`}
                        type="number"
                        name="fat"
                        placeholder="F(g)"
                        value={item.pivot.fat ?? ""}
                        onChange={(e) => handleIngredientChange(e, index)}
                        className="w-full p-2 break-words bg-beige rounded-md"
                    />
                </label>
                <label>
                    <input
                        id={`carbs-${item.id}`}
                        type="number"
                        name="carbs"
                        placeholder="C(g)"
                        value={item.pivot.carbs ?? ""}
                        onChange={(e) => handleIngredientChange(e, index)}
                        className="w-full p-2 break-words bg-beige rounded-md"
                    />
                </label>
            </div>
        </div>
    )
}

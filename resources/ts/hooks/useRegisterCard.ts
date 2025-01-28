import { useState } from "react"
import { addRegisterType } from "../type/register"

export const useRegisterCard = () => {
    const [addRegister, setAddRegister] = useState<addRegisterType>({
        cards: [1],
        ingredients: [
            {
                id: 0,
                ingredient: "",
                quantity: "",
            },
        ],
    })

    const addCard = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setAddRegister((addRegister) => ({
            ...addRegister,
            cards: [...addRegister.cards, addRegister.cards.length + 1],
        }))
    }

    const addIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setAddRegister((addRegister) => ({
            ...addRegister,
            ingredients: [
                ...addRegister.ingredients,
                { id: addRegister.ingredients.length, ingredient: "", quantity: "" },
            ],
        }))
        console.log("ingredients", addRegister.ingredients)
    }

    return { addRegister, addCard, addIngredient }
}

import { useState } from "react"
import { addRegisterType } from "../type/registar"

export const useRegisterCard = () => {
    const [addRegister, setAddRegister] = useState<addRegisterType>({
        cards: [1],
        ingredients: [
            {
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
            ingredients: [...addRegister.ingredients, { ingredient: "", quantity: "" }],
        }))
    }

    return { addRegister, addCard, addIngredient }
}

import { useEffect, useState } from "react"
import { addRegisterType } from "../type/register"
import { createState } from "../constants/createState"
import { PostIngredientsResponse } from "../type/recipes"
import { useRecipeCreate } from "./useRecipeCreate"

export const useRegisterCard = () => {
    const { createInputValue, setCreateInputValue } = useRecipeCreate()
    const [addRegister, setAddRegister] = useState<{
        ingredients: PostIngredientsResponse
        // steps?: PostStepsResponse // 将来的に steps が入る可能性がある
    }>({
        ingredients: createInputValue.ingredients,
    })

    // const addCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault()
    //     setAddRegister((addRegister) => ({
    //         ...addRegister,
    //         cards: [...addRegister.cards, addRegister.cards.length + 1],
    //     }))
    // }

    const addIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setAddRegister((addRegister) => {
            const newIngredients = [
                ...addRegister.ingredients,
                {
                    id: addRegister.ingredients.length,
                    name: "",
                    calories: 0,
                    protein: 0,
                    carbs: 0,
                    fat: 0,
                    quantity: 0,
                },
            ]

            setCreateInputValue((prevIngredients) => ({
                ...prevIngredients,
                ingredients: newIngredients,
            }))

            return { ...addRegister, ingredients: newIngredients }
        })
    }

    useEffect(() => {
        console.log("Updated createInputValue:", createInputValue)
    }, [addRegister.ingredients])

    return { addRegister, addIngredient }
}

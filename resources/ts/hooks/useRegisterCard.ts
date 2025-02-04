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
        const newIngredient = {
            id: createInputValue.ingredients.length, // createInputValue の長さを基準にIDを作成
            name: "",
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
            quantity: "",
        }

        setAddRegister((prevRegister) => ({
            ...prevRegister,
            ingredients: [...prevRegister.ingredients, newIngredient],
        }))

        // `setCreateInputValue` も独立して更新
        setCreateInputValue((prevIngredients) => ({
            ...prevIngredients,
            ingredients: [...prevIngredients.ingredients, newIngredient],
        }))
    }

    useEffect(() => {
        console.log("Updated createInputValue:", createInputValue)
    }, [addRegister.ingredients])

    useEffect(() => {
        console.log("Updated クリエイト:", createInputValue)
    }, [createInputValue])

    return { addRegister, addIngredient }
}

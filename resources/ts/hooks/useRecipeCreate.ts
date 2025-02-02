import React, { useEffect, useState } from "react"
import { PostIngredientsResponse, PostRecipesResponse } from "../type/recipes"
import { createState } from "../constants/createState"

export const useRecipeCreate = () => {
    const [createInputValue, setCreateInputValue] = useState(createState)
    const [createRecipe, setCreateRecipe] = useState<PostRecipesResponse>([])
    // const [addRegister, setAddRegister] = useState<{
    //     ingredients: PostIngredientsResponse
    //     // steps?: PostStepsResponse // 将来的に steps が入る可能性がある
    // }>({
    //     ingredients: createInputValue.ingredients,
    // })

    const addIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newIngredient = {
            id: createInputValue.ingredients.length,
            name: "",
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
            quantity: 0,
        }

        setCreateInputValue((prevRegister) => ({
            ...prevRegister,
            ingredients: [...prevRegister.ingredients, newIngredient],
        }))
    }

    const CreateHandleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        id?: number
    ) => {
        const { name, value } = e.target
        console.log("id", id, "name", name, "value", value)

        if (name.startsWith("ingredients")) {
            setCreateInputValue((prevState) => ({
                ...prevState,
                ingredients: prevState.ingredients.map((ingredient) =>
                    ingredient.id === id ? { ...ingredient, [name]: value } : ingredient
                ),
            }))
        } else {
            setCreateInputValue((prevState) => ({
                ...prevState,
                [name]: value,
            }))
        }
    }

    const CreateRecipeSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log("ingredientチェック", createInputValue)

        try {
            const res = await fetch(`/api/recipes/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: createInputValue.name,
                    comments: createInputValue.comments,
                    calories: createInputValue.calories,
                    people: createInputValue.people,
                    is_favorite: createInputValue.is_favorite,
                }),
            })

            if (!res.ok) {
                const errorText = await res.text()
                console.error("API Error:", errorText)
                return
            }
            const result = await res.json()
            console.log("成功:", result)
        } catch (error) {
            console.error("post error", error)
        }
    }

    useEffect(() => {
        console.log("createInputValueが更新されました:", createInputValue)
        console.log("ingredientsが更新されました:", createInputValue.ingredients)
    }, [createInputValue.ingredients])

    return {
        // addRegister,
        createInputValue,
        createRecipe,
        addIngredient,
        setCreateInputValue,
        CreateRecipeSubmit,
        CreateHandleChange,
    }
}

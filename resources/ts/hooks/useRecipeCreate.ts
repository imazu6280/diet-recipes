import React, { useState } from "react"
import { PostRecipesResponse } from "../type/recipes"
import { createState } from "../constants/createState"
import { useTopGet } from "./useTopGet"

export const useRecipeCreate = () => {
    const { recipes } = useTopGet()
    const [createInputValue, setCreateInputValue] = useState(createState)
    const [createRecipe, setCreateRecipe] = useState<PostRecipesResponse>([])

    const CreateHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        setCreateInputValue((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const CreateRecipeSubmit = async () => {
        try {
            const res = await fetch(`/api/recipes/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: createInputValue.name,
                    comments: createInputValue.comments,
                    thumbnail: createInputValue.thumbnail,
                    calories: createInputValue.calories,
                    ingredients: createInputValue.ingredients.map((ingredient) => ({
                        id: ingredient.id,
                        name: ingredient.name,
                        quantity: ingredient.pivot.quantity,
                    })),
                    steps: createInputValue.steps.map((step, index) => ({
                        step_number: index + 1,
                        description: step.description,
                        thumbnail: step.thumbnail,
                    })),
                }),
            })
            const json = await res.json()
            console.log(json)

            // setCreateRecipe([...recipes, json])
        } catch (error) {
            console.error("post error", error)
        }
    }

    return { createInputValue, createRecipe, CreateRecipeSubmit, CreateHandleChange }
}

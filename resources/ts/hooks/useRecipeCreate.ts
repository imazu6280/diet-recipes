import React, { useState } from "react"
import { PostRecipesResponse } from "../type/recipes"
import { createState } from "../constants/createState"
import { useTopGet } from "./useTopGet"

export const useRecipeCreate = () => {
    const [createInputValue, setCreateInputValue] = useState(createState)
    const [createRecipe, setCreateRecipe] = useState<PostRecipesResponse>([])

    const CreateHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        console.log("e.target.name", e.target.name)
        console.log("e.target.value", e.target.value)

        setCreateInputValue((prevState) => ({
            ...prevState,
            [name]: value,
        }))

        console.log("createInputValue", createInputValue)
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
                    ingredients: createInputValue.ingredients
                        .filter((ingredient) => ingredient.name && ingredient.quantity)
                        .map((ingredient) => ({
                            id: ingredient.id,
                            name: ingredient.name,
                            quantity: ingredient.quantity,
                        })),
                    steps: createInputValue.steps
                        .filter((step) => step.description)
                        .map((step, index) => ({
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

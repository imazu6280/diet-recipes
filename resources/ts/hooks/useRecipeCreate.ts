import React, { useEffect, useState } from "react"
import { PostRecipesResponse } from "../type/recipes"
import { createState } from "../constants/createState"

export const useRecipeCreate = () => {
    const [createInputValue, setCreateInputValue] = useState(createState)
    const [createRecipe, setCreateRecipe] = useState<PostRecipesResponse>([])

    const CreateHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        console.log("name:", name, "value:", value)

        setCreateInputValue((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const CreateRecipeSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log("createInputValue", createInputValue)
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
    }, [createInputValue])

    return {
        createInputValue,
        createRecipe,
        setCreateInputValue,
        CreateRecipeSubmit,
        CreateHandleChange,
    }
}

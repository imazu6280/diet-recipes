import React, { useEffect, useState } from "react"
import { PostRecipesResponse } from "../type/recipes"
import { createState } from "../constants/createState"

export const useRecipeCreate = () => {
    const [createInputValue, setCreateInputValue] = useState(createState)
    const [formData, setFormData] = useState<FormData | null>(null)
    const [createRecipe, setCreateRecipe] = useState<PostRecipesResponse>([])

    const CreateHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        const files = (e.target as HTMLInputElement).files

        if (files) {
            const file = files[0]
            setCreateInputValue((prevState) => ({
                ...prevState,
                thumbnail: file,
            }))
        } else {
            setCreateInputValue((prevState) => ({
                ...prevState,
                [name]: value,
            }))
        }
    }

    useEffect(() => {
        // createInputValueが変更されたタイミングでformDataを更新
        const newFormData = new FormData()

        newFormData.append("name", createInputValue.name)
        newFormData.append("comments", createInputValue.comments)
        newFormData.append("calories", createInputValue.calories.toString())
        newFormData.append("people", createInputValue.people.toString())
        newFormData.append("is_favorite", createInputValue.is_favorite.toString())

        // thumbnailが存在する場合はformDataに追加
        if (createInputValue.thumbnail instanceof File) {
            newFormData.append("thumbnail", createInputValue.thumbnail)
        }

        // フォームデータをコンソールに出力（デバッグ用）
        for (let [key, value] of newFormData.entries()) {
            console.log(`${key}: ${value}`)
        }

        setFormData(newFormData)
    }, [createInputValue])

    const CreateRecipeSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        console.log("formData", formData)

        try {
            const res = await fetch(`/api/recipes/`, {
                method: "POST",
                body: formData,
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

    return { createInputValue, createRecipe, CreateRecipeSubmit, CreateHandleChange }
}

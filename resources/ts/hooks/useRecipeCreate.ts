import React, { useState } from "react"
import { PostRecipesResponse } from "../type/recipes"
import { createState } from "../constants/createState"
import { useTopGet } from "./useTopGet"

export const useRecipeCreate = () => {
    const { setRecipes, setFavoriteRecipes } = useTopGet()
    const [createInputValue, setCreateInputValue] = useState<PostRecipesResponse>(createState)

    const addIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newIngredient = {
            id: createInputValue.ingredients.length,
            name: "",
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
            quantity: "",
        }

        setCreateInputValue((prevRegister) => ({
            ...prevRegister,
            ingredients: [...prevRegister.ingredients, newIngredient],
        }))
    }

    const addSteps = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newSteps = {
            id: createInputValue.steps.length,
            step_number: createInputValue.steps.length + 1,
            description: "",
            thumbnail: "",
        }

        setCreateInputValue((prevStep) => ({
            ...prevStep,
            steps: [...prevStep.steps, newSteps],
        }))
    }

    const CreateHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        setCreateInputValue((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleIngredientChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => {
        const { name, value } = e.target

        const newIngredients = [...createInputValue.ingredients]
        newIngredients[index] = {
            ...newIngredients[index],
            [name]: value,
        }
        setCreateInputValue((prevState) => ({
            ...prevState,
            ingredients: newIngredients,
        }))
    }

    const handleStepsChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => {
        const { name, value } = e.target
        const newSteps = [...createInputValue.steps]
        // if (e.target instanceof HTMLInputElement && e.target.files && e.target.files.length > 0) {
        //     // サムネイルの処理
        //     newSteps[index] = {
        //         ...newSteps[index],
        //         thumbnail: e.target.files[0], // ファイルをセット
        //     }
        // } else {
        // テキスト入力の処理
        newSteps[index] = {
            ...newSteps[index],
            [name]: value,
        }
        // }
        setCreateInputValue((prevState) => ({
            ...prevState,
            steps: newSteps,
        }))
    }

    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, files } = e.target

    //     if (files && files.length > 0) {
    //         setCreateInputValue((prevState) => ({
    //             ...prevState,
    //             [name]: files[0],
    //         }))
    //     }
    // }

    const CreateRecipeSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

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
                    ingredients: createInputValue.ingredients,
                    steps: createInputValue.steps,
                }),
            })

            if (!res.ok) {
                const errorText = await res.text()
                console.error("API Error:", errorText)
                return
            }

            const result = await res.json()
            setRecipes((prevRecipe) => [...prevRecipe, result])

            if (createInputValue.is_favorite === 1) {
                setFavoriteRecipes((prevRecipe) => [...prevRecipe, result])
            }

            console.log("post success!!", result)
        } catch (error) {
            console.error("post error!!", error)
        }
    }

    return {
        createInputValue,
        addIngredient,
        addSteps,
        handleIngredientChange,
        handleStepsChange,
        CreateRecipeSubmit,
        CreateHandleChange,
    }
}

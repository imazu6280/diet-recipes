import React, { useEffect, useState } from "react"
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

        newSteps[index] = {
            ...newSteps[index],
            [name]: value,
        }
        setCreateInputValue((prevState) => ({
            ...prevState,
            steps: newSteps,
        }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target
        console.log("name", name, "files", files)

        if (files && files.length > 0) {
            setCreateInputValue((prevState) => ({
                ...prevState,
                [name]: files[0],
            }))
        }
    }

    const stepsHandleFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, files } = e.target
        console.log("name", name, "files", files)

        if (files && files.length > 0) {
            const file = files[0]

            // 画像ファイルをステップの特定のインデックスにセット
            setCreateInputValue((prevState) => {
                const updatedSteps = [...prevState.steps]
                updatedSteps[index] = {
                    ...updatedSteps[index],
                    [name]: file, // nameはfile（例えばthumbnail）になる
                }
                return {
                    ...prevState,
                    steps: updatedSteps,
                }
            })
        }
    }

    const CreateRecipeSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("name", createInputValue.name)
        formData.append("comments", createInputValue.comments)
        formData.append("thumbnail", createInputValue.thumbnail)
        formData.append("calories", createInputValue.calories.toString())
        formData.append("people", createInputValue.people.toString())
        formData.append("is_favorite", createInputValue.is_favorite.toString())
        formData.append("ingredients", JSON.stringify(createInputValue.ingredients))

        // Ingredients and Steps
        // createInputValue.ingredients.map((ingredient, index) => {
        //     formData.append(`ingredients[${index}][name]`, ingredient.name)
        //     formData.append(`ingredients[${index}][calories]`, ingredient.calories.toString())
        //     formData.append(`ingredients[${index}][protein]`, ingredient.protein.toString())
        //     formData.append(`ingredients[${index}][carbs]`, ingredient.carbs.toString())
        //     formData.append(`ingredients[${index}][fat]`, ingredient.fat.toString())
        //     formData.append(`ingredients[${index}][quantity]`, ingredient.quantity.toString())
        // })

        createInputValue.steps.map((step, index) => {
            formData.append(`steps[${index}][step_number]`, step.step_number.toString())
            formData.append(`steps[${index}][description]`, step.description)
            if (step.thumbnail) {
                formData.append(`steps[${index}][thumbnail]`, step.thumbnail)
            }
        })

        console.log("post create", formData)

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
            setRecipes((prevRecipe) => [...prevRecipe, result])

            if (createInputValue.is_favorite === 1) {
                setFavoriteRecipes((prevRecipe) => [...prevRecipe, result])
            }

            console.log("post success!!", result)
        } catch (error) {
            console.error("post error!!", error)
        }
    }

    useEffect(() => {
        console.log("createInputValue", createInputValue)
    }, [createInputValue])

    return {
        createInputValue,
        addIngredient,
        addSteps,
        handleIngredientChange,
        handleStepsChange,
        handleFileChange,
        stepsHandleFileChange,
        CreateRecipeSubmit,
        CreateHandleChange,
    }
}

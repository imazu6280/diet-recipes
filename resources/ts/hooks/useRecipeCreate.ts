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

        // ingredients の場合の処理
        if (name.startsWith("ingredients")) {
            // インデックスとフィールド名を抽出
            const indexMatch = name.match(/\[(\d+)\]/) // インデックス部分を取り出す
            const fieldNameMatch = name.match(/\.(\w+)/) // フィールド名部分を取り出す

            if (indexMatch && fieldNameMatch) {
                const index = parseInt(indexMatch[1], 10) // インデックスの値を取得
                const fieldName = fieldNameMatch[1] // フィールド名を取得

                setCreateInputValue((prevState) => {
                    // ingredients 配列のコピーを作成
                    const newIngredients = [...prevState.ingredients]

                    // 対象のインデックスの要素がまだ存在しない場合に空オブジェクトを挿入
                    if (!newIngredients[index]) {
                        newIngredients[index] = {
                            id: index, // 新規インデックスを ID として設定
                            name: "", // 初期値
                            quantity: undefined, // 初期値
                            calories: 0, // 初期値
                            protein: 0, // 初期値
                            carbs: 0, // 初期値
                            fat: 0, // 初期値
                        }
                    }

                    // 特定のフィールドだけを更新
                    newIngredients[index] = {
                        ...newIngredients[index],
                        [fieldName]: value, // フィールド名に基づいて値を更新
                    }

                    return {
                        ...prevState,
                        ingredients: newIngredients, // 更新された ingredients 配列を返す
                    }
                })
            }
        } else {
            // ingredients 以外のフィールドの更新
            setCreateInputValue((prevState) => ({
                ...prevState,
                [name]: value,
            }))
        }

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
                    ingredients: createInputValue.ingredients.map((ingredient) => ({
                        id: ingredient.id,
                        name: ingredient.name,
                        quantity: ingredient.quantity,
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

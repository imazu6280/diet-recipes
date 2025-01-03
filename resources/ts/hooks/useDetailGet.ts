import { useEffect, useState } from "react"
import { recipeSchema } from "../type/recipes"
import { GetStepsResponse } from "../type/card"
import { useParams } from "react-router-dom"

export const useDetailGet = () => {
    const { id, recipeId } = useParams<string>()
    const [recipesDetail, setRecipesDetail] = useState<recipeSchema>()
    const [recipesSteps, setRecipesSteps] = useState<GetStepsResponse>([])

    const GetRecipesDetailApi = async (id: number) => {
        try {
            const res = await fetch(`/api/recipes/${id}`)
            const json: recipeSchema = await res.json()
            console.log("detail_json", json)

            setRecipesDetail(json)
        } catch (error) {
            console.error("recipe detail get error", error)
        }
    }

    const GetStepsDetailApi = async (recipeId: number) => {
        try {
            const res = await fetch(`/api/recipes/${recipeId}/steps`)
            const json = await res.json()
            console.log("json", json)

            setRecipesSteps(json)
        } catch (error) {
            console.error("recipe detail get error", error)
        }
    }

    useEffect(() => {
        if (id) {
            GetRecipesDetailApi(Number(id))
        }

        if (recipeId) {
            GetStepsDetailApi(Number(recipeId))
        }
    }, [id, recipeId])

    return { recipesDetail, recipesSteps, GetRecipesDetailApi, GetStepsDetailApi }
}

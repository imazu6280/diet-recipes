import { useEffect, useState } from "react"
import { GetRecipesResponse } from "../type/recipes"

export const useTopGet = () => {
    const [recipes, setRecipes] = useState<GetRecipesResponse>([])
    const [favoriteRecipes, setFavoriteRecipes] = useState<GetRecipesResponse>([])

    const GetRecipesAllApi = async () => {
        try {
            const res = await fetch("/api/recipes")
            const json = await res.json()
            const favoriteRecipes = json.favorite_recipes
            const allData = json.all_recipes

            setFavoriteRecipes(favoriteRecipes)
            setRecipes(allData)
        } catch (error) {
            console.error("recipe get error", error)
        }
    }

    useEffect(() => {
        GetRecipesAllApi()
    }, [])

    return { favoriteRecipes, recipes }
}

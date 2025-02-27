import { useEffect, useState } from "react";
import { GetRecipesResponse } from "../type/recipes";

export const useTopGet = () => {
    const [recipes, setRecipes] = useState<GetRecipesResponse>([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState<GetRecipesResponse>(
        []
    );

    const GetRecipesAllApi = async () => {
        try {
            const res = await fetch("/api/recipes");
            const json = await res.json();
            setRecipes(json);
        } catch (error) {
            console.error("recipe get error", error);
        }
    };

    const GetRecipesFavoriteApi = async () => {
        try {
            const res = await fetch("/api/recipes/favorites");
            const json = await res.json();
            setFavoriteRecipes(json);
        } catch (error) {
            console.error("recipe get error", error);
        }
    };

    useEffect(() => {
        GetRecipesAllApi();
        GetRecipesFavoriteApi();
    }, []);

    return { favoriteRecipes, recipes, setRecipes, setFavoriteRecipes };
};

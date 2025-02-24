import { useEffect, useState } from "react";
import { GetRecipesResponse } from "../type/recipes";
import { API_URL } from "..";

export const useTopGet = () => {
    const [recipes, setRecipes] = useState<GetRecipesResponse>([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState<GetRecipesResponse>(
        []
    );

    const GetRecipesAllApi = async () => {
        try {
            const res = await fetch(API_URL);
            const json = await res.json();
            setRecipes(json);
        } catch (error) {
            console.error("recipe get error", error);
        }
    };

    const GetRecipesFavoriteApi = async () => {
        try {
            const res = await fetch(`${API_URL}/favorites`);
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
